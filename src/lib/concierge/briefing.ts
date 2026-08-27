import Anthropic from "@anthropic-ai/sdk";

/**
 * Founder briefing: generated from the completed session, stored on the
 * session row, and emailed. Background quality task, so the small model is
 * fine here (the conversation itself runs on Sonnet).
 */
const BRIEFING_MODEL = "claude-haiku-4-5";

const BRIEFING_PROMPT = `You write pre-demo briefs for Justin Mayer, founder of HarborIQ (agency management software for independent insurance agencies; Markets is the carrier-intelligence half that works alongside any AMS, Agency is the full system of record and includes Markets).

From the concierge transcript and extracted fields below, write a brief Justin can read in under 60 seconds. Plain text. Use ONLY sections that have real content, in this order, with the header in caps on its own line and a blank line between sections:

HARBORIQ DEMO BRIEF
{Prospect name, if known}
{Scheduled time, if known}
{Agency name, if known} · Source: {source}

FIT
Independent/captive/other, team size, lines, fit confidence.

WHY THEY BOOKED
Their motivation, quoting their own words where possible, then one sentence of interpretation.

CURRENT PROCESS
AMS, CRM, carriers, email platform, how work flows today. Short lines, one fact each.

FRICTION AND IMPACT
The pain points and what they cost the team. Bullet-style short lines with a leading "- ".

DESIRED OUTCOME
What success looks like in their terms, if stated.

WHAT WOULD MAKE THE DEMO USEFUL
Their stated success question and the specific things to address, numbered.

MARKETS-FIRST
Yes/no with one line of reasoning. Yes if under an AMS contract, resistant to switching, or only needing carrier intelligence.

RECOMMENDED 20-MINUTE DEMO
Timed agenda lines like "0-2 min: Confirm the recap and desired outcome". Two or three focus blocks maximum, chosen from what they said.

RECOMMENDED OPENING
Two or three sentences Justin could say verbatim, referencing what the concierge learned and asking if that's still the right use of the time.

FOLLOW UP LIVE
Missing, declined, deferred, or low-confidence items, as short "- " lines. Include anything they explicitly preferred to discuss live.

CONCIERGE STATUS
Recap confirmed or not, completion time, and the field counts provided below.

Rules: no em dashes anywhere (use commas, parentheses, or periods). No hype. Facts stated as facts, inferences labeled as inferences. Never invent anything not supported by the transcript. Never promise capabilities; frame demo blocks around the prospect's topics and questions.`;

export type BriefingMeta = {
  prospectName?: string;
  agencyName?: string;
  scheduledAt?: string;
  source?: string;
  durationSeconds?: number;
  counts?: { answered: number; inferred: number; deferred: number };
};

export async function generateBriefing(
  transcript: unknown,
  answers: unknown,
  meta: BriefingMeta,
): Promise<string> {
  const client = new Anthropic();
  const mins = meta.durationSeconds
    ? `${Math.floor(meta.durationSeconds / 60)} minutes, ${meta.durationSeconds % 60} seconds`
    : "unknown";
  const counts = meta.counts
    ? `${meta.counts.answered} answered · ${meta.counts.inferred} inferred · ${meta.counts.deferred} declined/deferred`
    : "unknown";
  const response = await client.messages.create({
    model: BRIEFING_MODEL,
    max_tokens: 2000,
    system: BRIEFING_PROMPT,
    messages: [
      {
        role: "user",
        content: `BOOKING META:\nProspect: ${meta.prospectName ?? "unknown"}\nAgency: ${meta.agencyName ?? "unknown"}\nScheduled: ${meta.scheduledAt ?? "unknown"}\nSource: ${meta.source ?? "unknown"}\nCompletion time: ${mins}\nField counts: ${counts}\n\nTRANSCRIPT:\n${JSON.stringify(transcript, null, 1)}\n\nEXTRACTED FIELDS:\n${JSON.stringify(answers, null, 1)}`,
      },
    ],
  });
  const text = response.content.find((b) => b.type === "text");
  return text?.text ?? "";
}

/**
 * Sends the briefing via Resend's HTTP API. No-op (returns false) when the
 * key or recipient is not configured; the briefing is still stored in the
 * session record either way.
 */
export async function sendBriefingEmail(
  briefing: string,
  meta: BriefingMeta,
): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BRIEFING_EMAIL_TO;
  if (!apiKey || !to) return false;

  const from =
    process.env.BRIEFING_EMAIL_FROM ??
    "HarborIQ Concierge <onboarding@resend.dev>";
  const who = meta.prospectName ?? "Prospect";
  const when = meta.scheduledAt ? ` · ${meta.scheduledAt}` : "";
  const src =
    meta.source && meta.source.includes("test") ? " [test]" : "";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Demo brief: ${who}${when}${src}`,
      text: briefing,
    }),
  });
  if (!res.ok) {
    console.error(
      `briefing email failed: ${res.status} ${await res.text().catch(() => "")}`,
    );
  }
  return res.ok;
}
