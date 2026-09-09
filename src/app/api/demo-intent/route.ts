import { NextRequest, NextResponse } from "next/server";
import { captureIntent } from "@/lib/concierge/db";
import { sendSalesEmail } from "@/lib/concierge/briefing";

export const maxDuration = 15;

const clean = (s: unknown, max = 200): string | undefined => {
  if (typeof s !== "string") return undefined;
  const trimmed = s.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, max);
  return trimmed || undefined;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SOURCE = /^[a-z0-9-]{1,40}$/;

/**
 * Pre-calendar demo intent from /demo. Always answers 200 with {ok}: the
 * client shows the calendar regardless, so nothing here may look like a
 * reason not to book. Records land in the sales database through the
 * concierge_capture_intent RPC and Justin gets a one-line email.
 */
export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 200 });
  }

  // Honeypot filled means a bot; say ok and do nothing.
  if (clean(body.company)) return NextResponse.json({ ok: true });

  const firstName = clean(body.firstName, 80);
  const email = clean(body.email, 200)?.toLowerCase();
  const agency = clean(body.agency, 120);
  const rawSource = clean(body.source, 40)?.toLowerCase();
  const source = rawSource && SOURCE.test(rawSource) ? rawSource : "site";

  if (!email || !EMAIL.test(email)) {
    return NextResponse.json({ ok: false }, { status: 200 });
  }

  try {
    await captureIntent({
      first_name: firstName,
      email,
      agency_name: agency,
      source,
    });
  } catch (err) {
    console.error("demo-intent capture failed:", err);
    return NextResponse.json({ ok: false }, { status: 200 });
  }

  // Best effort; a missing Resend key just skips it.
  const who = firstName ?? "Someone";
  const where = agency ? ` at ${agency}` : "";
  await sendSalesEmail({
    subject: `Demo intent: ${who}${where} (${email})${source.includes("test") ? " [test]" : ""}`,
    text: [
      `${who}${where} started booking a demo from /demo and is now on the calendar step.`,
      ``,
      `Email: ${email}`,
      `Source: ${source}`,
      ``,
      `If no demo brief follows within an hour, they did not pick a time. Worth a personal note.`,
    ].join("\n"),
  }).catch((err: unknown) => console.error("demo-intent email failed:", err));

  return NextResponse.json({ ok: true });
}
