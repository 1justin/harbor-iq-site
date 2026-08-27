import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import {
  buildSystemPrompt,
  buildContextBlock,
  openingMessages,
  OPENING_QUICK_REPLIES,
} from "@/lib/concierge/prompt";
import { TurnOutputSchema, type TranscriptMessage } from "@/lib/concierge/types";
import { startSession, getSession, saveTurn } from "@/lib/concierge/db";
import { generateBriefing, sendBriefingEmail } from "@/lib/concierge/briefing";

const CHAT_MODEL = "claude-sonnet-5";
const MAX_TURNS = 60;
const MAX_MESSAGE_CHARS = 2000;

export const maxDuration = 60;

type StartBody = {
  action: "start";
  firstName?: string;
  email?: string;
  scheduledAt?: string;
  timezone?: string;
  source?: string;
  tidycalRef?: string;
};
type MessageBody = { action: "message"; sessionId: string; message: string };
type SkipBody = { action: "skip"; sessionId: string };

const clean = (s: unknown, max = 200): string | undefined => {
  if (typeof s !== "string") return undefined;
  const trimmed = s.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, max);
  return trimmed || undefined;
};

export async function POST(req: NextRequest) {
  let body: StartBody | MessageBody | SkipBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  try {
    if (body.action === "start") return await handleStart(body);
    if (body.action === "message") return await handleMessage(body);
    if (body.action === "skip") return await handleSkip(body);
    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  } catch (err) {
    console.error("concierge error:", err);
    // The booking is never at risk from a concierge failure; degrade politely.
    return NextResponse.json(
      {
        error: "concierge_unavailable",
        reply:
          "Something went wrong on my end. No problem at all: your demo is booked either way, and Justin will cover this live.",
      },
      { status: 500 },
    );
  }
}

async function handleStart(body: StartBody) {
  const firstName = clean(body.firstName, 80);
  const opening = openingMessages(firstName);
  const now = new Date().toISOString();
  const transcript: TranscriptMessage[] = opening.map((content) => ({
    role: "assistant",
    content,
    at: now,
  }));

  const { session_id } = await startSession({
    first_name: firstName,
    email: clean(body.email, 200),
    scheduled_at: clean(body.scheduledAt, 60),
    timezone: clean(body.timezone, 60),
    source: clean(body.source, 60) ?? "site",
    tidycal_ref: clean(body.tidycalRef, 120),
    model: CHAT_MODEL,
    transcript,
  });

  return NextResponse.json({
    sessionId: session_id,
    messages: opening,
    quickReplies: OPENING_QUICK_REPLIES,
    questionNumber: 1,
    progress: 0.05,
  });
}

async function handleMessage(body: MessageBody) {
  const message = clean(body.message, MAX_MESSAGE_CHARS);
  if (!body.sessionId || !message) {
    return NextResponse.json({ error: "Missing session or message" }, { status: 400 });
  }

  const record = await getSession(body.sessionId);
  if (!record?.session) {
    return NextResponse.json({ error: "Session not found" }, { status: 404 });
  }
  const session = record.session as {
    id: string;
    status: string;
    created_at: string;
    transcript: TranscriptMessage[];
    source?: string;
  };
  const person = (record.person ?? {}) as { first_name?: string; email?: string };
  const booking = (record.booking ?? {}) as {
    scheduled_at?: string;
    prospect_timezone?: string;
  };

  if (session.status === "completed" || session.status === "skipped") {
    return NextResponse.json({
      reply: "You're all set. Anything else can wait for the demo itself.",
      quickReplies: [],
      phase: "done",
      progress: 1,
    });
  }
  if ((session.transcript?.length ?? 0) >= MAX_TURNS) {
    return NextResponse.json({ error: "Session is full" }, { status: 429 });
  }

  const transcript: TranscriptMessage[] = [
    ...(session.transcript ?? []),
    { role: "user", content: message, at: new Date().toISOString() },
  ];

  const client = new Anthropic();
  const response = await client.messages.parse({
    model: CHAT_MODEL,
    max_tokens: 1500,
    thinking: { type: "disabled" },
    system: [
      {
        type: "text",
        text: buildSystemPrompt(),
        cache_control: { type: "ephemeral" },
      },
      {
        type: "text",
        text: buildContextBlock({
          firstName: person.first_name,
          email: person.email,
          scheduledAt: booking.scheduled_at,
          timezone: booking.prospect_timezone,
          source: session.source,
        }),
      },
    ],
    messages: transcript.map((m) => ({ role: m.role, content: m.content })),
    output_config: { format: zodOutputFormat(TurnOutputSchema) },
  });

  const turn = response.parsed_output;
  if (!turn) {
    return NextResponse.json({
      reply: "Sorry, I lost the thread for a second. Could you say that again?",
      quickReplies: [],
      phase: "intake",
      progress: 0.5,
    });
  }

  transcript.push({
    role: "assistant",
    content: [turn.ack, turn.reply].filter(Boolean).join("\n\n"),
    at: new Date().toISOString(),
  });

  const done = turn.phase === "done";
  const patch: Record<string, unknown> = {};
  if (turn.recap) patch.recap = turn.recap;
  if (done) {
    patch.status = "completed";
    patch.recap_confirmed = true;
    patch.duration_seconds = Math.round(
      (Date.now() - new Date(session.created_at).getTime()) / 1000,
    );
  }

  await saveTurn(body.sessionId, transcript, turn.extracted, patch);

  if (done) {
    try {
      const finalRecord = await getSession(body.sessionId);
      const answers = (finalRecord?.answers ?? []) as Array<{
        field?: string;
        value_normalized?: string;
        status?: string;
      }>;
      const counts = {
        answered: answers.filter(
          (a) => a.status === "answered" || a.status === "needs_confirmation",
        ).length,
        inferred: answers.filter((a) => a.status === "inferred").length,
        deferred: answers.filter(
          (a) => a.status === "declined" || a.status === "unknown",
        ).length,
      };
      const meta = {
        prospectName: person.first_name,
        agencyName: answers.find((a) => a.field === "agency_name")
          ?.value_normalized,
        scheduledAt: booking.scheduled_at,
        source: session.source,
        durationSeconds: patch.duration_seconds as number | undefined,
        counts,
      };
      const briefing = await generateBriefing(transcript, answers, meta);
      const sent = await sendBriefingEmail(briefing, meta);
      await saveTurn(body.sessionId, transcript, [], {
        briefing,
        ...(sent ? { briefing_sent_at: new Date().toISOString() } : {}),
      });
    } catch (err) {
      // Never let briefing failure surface to the prospect.
      console.error("briefing generation failed:", err);
    }
  }

  return NextResponse.json({
    ack: turn.ack,
    reply: turn.reply,
    quickReplies: turn.quick_replies,
    phase: turn.phase,
    questionNumber: turn.question_number,
    progress: done ? 1 : Math.min(turn.progress, 0.98),
  });
}

async function handleSkip(body: SkipBody) {
  if (!body.sessionId) {
    return NextResponse.json({ error: "Missing session" }, { status: 400 });
  }
  const record = await getSession(body.sessionId);
  if (record?.session) {
    const session = record.session as { transcript: TranscriptMessage[] };
    await saveTurn(body.sessionId, session.transcript ?? [], [], {
      status: "skipped",
    });
  }
  return NextResponse.json({ ok: true });
}
