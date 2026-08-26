import Anthropic from "@anthropic-ai/sdk";

/**
 * Founder briefing: generated from the completed session, stored on the
 * session row, and emailed. Background quality task, so the small model is
 * fine here (the conversation itself runs on Sonnet).
 */
const BRIEFING_MODEL = "claude-haiku-4-5";

const BRIEFING_PROMPT = `You write pre-demo briefings for Justin, the founder of HarborIQ (agency management software for independent insurance agencies; Markets is the carrier-intelligence half that works alongside any AMS, Agency is the full system of record and includes Markets).

From the concierge transcript and extracted fields below, write a briefing Justin can read in under 60 seconds. Plain text, these sections, in this order, each a single short line or two:

FIT: independent/captive/other, with confidence.
AGENCY: size, lines, carrier count if known.
STACK: AMS, CRM, website/quote intake, contract status and timing if known.
WHY NOW: their motivation, in their own words where possible.
FRICTION: top one or two pain points and their impact.
DEMO FOCUS: the two or three workflows to show, in order, and the opening promise to make.
MARKETS-FIRST: yes/no. Yes if they are under an AMS contract, resistant to switching, or only need carrier intelligence; one line of reasoning.
ASK LIVE: fields that are missing, declined, or low confidence.
WATCH-OUTS: objections, fit risks, or anything they asked that was deferred to the live call.

Rules: no em dashes, no hype, facts stated as facts, inferences flagged as inferences. Do not invent anything not supported by the transcript.`;

export async function generateBriefing(
  transcript: unknown,
  answers: unknown,
): Promise<string> {
  const client = new Anthropic();
  const response = await client.messages.create({
    model: BRIEFING_MODEL,
    max_tokens: 1500,
    system: BRIEFING_PROMPT,
    messages: [
      {
        role: "user",
        content: `TRANSCRIPT:\n${JSON.stringify(transcript, null, 1)}\n\nEXTRACTED FIELDS:\n${JSON.stringify(answers, null, 1)}`,
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
  meta: { prospectName?: string; scheduledAt?: string; source?: string },
): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BRIEFING_EMAIL_TO;
  if (!apiKey || !to) return false;

  const from = process.env.BRIEFING_EMAIL_FROM ?? "HarborIQ Concierge <onboarding@resend.dev>";
  const who = meta.prospectName ?? "Prospect";
  const when = meta.scheduledAt ? ` (${meta.scheduledAt})` : "";
  const src = meta.source ? ` via ${meta.source}` : "";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Demo briefing: ${who}${when}${src}`,
      text: briefing,
    }),
  });
  return res.ok;
}
