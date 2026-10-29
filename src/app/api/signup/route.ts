import { NextRequest, NextResponse } from "next/server";
import { captureIntent, findPriorSignups } from "@/lib/concierge/db";
import { sendSalesEmail } from "@/lib/concierge/briefing";

export const maxDuration = 15;

const clean = (s: unknown, max = 200): string | undefined => {
  if (typeof s !== "string") return undefined;
  const trimmed = s.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, max);
  return trimmed || undefined;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GOALS = new Set(["markets", "contacts", "deadlines", "profile"]);

/**
 * Free workspace and Intelligence signups from /start (2026-10-28). Self-serve
 * signup and checkout do not exist yet, so a signup is a request the team sets
 * up by hand. It reuses concierge_capture_intent (person, optional organization,
 * a demo_bookings row with status 'intent'); the source tag is what tells a
 * signup apart from a demo request: free-workspace, free-<goal>, or intelligence.
 *
 * Unlike /api/demo-intent, the answer matters here: there is no calendar to
 * fall back on, so the client shows an error and a way to reach us on failure.
 */
export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot filled means a bot; say ok and do nothing.
  if (clean(body.company)) return NextResponse.json({ ok: true });

  const firstName = clean(body.firstName, 80);
  const email = clean(body.email, 200)?.toLowerCase();
  const agency = clean(body.agency, 120);
  const plan = body.plan === "intelligence" ? "intelligence" : "free";
  const goal = typeof body.goal === "string" && GOALS.has(body.goal) ? body.goal : undefined;
  const source = plan === "intelligence" ? "intelligence" : goal ? `free-${goal}` : "free-workspace";

  if (!email || !EMAIL.test(email)) {
    return NextResponse.json({ ok: false, error: "email" }, { status: 400 });
  }
  // Agency is required: a workspace belongs to an agency, and it is how a
  // second signup from the same agency gets noticed.
  if (!agency) {
    return NextResponse.json({ ok: false, error: "agency" }, { status: 400 });
  }

  // Look before saving, so this signup never matches itself.
  const prior = await findPriorSignups(email, agency);

  try {
    await captureIntent({ first_name: firstName, email, agency_name: agency, source });
  } catch (err) {
    console.error("signup capture failed:", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  const who = firstName ?? "Someone";
  const where = ` at ${agency}`;
  const what = plan === "intelligence" ? "Intelligence" : "Free workspace";
  await sendSalesEmail({
    subject: `${prior.length ? "[possible duplicate] " : ""}${what} signup: ${who}${where} (${email})`,
    text: [
      `${who}${where} signed up for ${what === "Intelligence" ? "Intelligence" : "the free workspace"} on /start.`,
      ``,
      `Email: ${email}`,
      `Agency: ${agency}`,
      `Email domain: ${email.split("@")[1]}`,
      `Source: ${source}`,
      ``,
      ...(prior.length
        ? [
            `Possible duplicate. Earlier signups that look like the same agency:`,
            ...prior.map(
              (p) =>
                `  - ${p.first_name ?? "(no name)"}, ${p.email}${p.agency ? `, ${p.agency}` : ""} (${p.match}, ${p.source ?? "unknown source"}, ${p.created_at.slice(0, 10)})`,
            ),
            ``,
          ]
        : []),
      `They were told we will email them to set it up. Reply to get them started.`,
    ].join("\n"),
  }).catch((err: unknown) => console.error("signup email failed:", err));

  return NextResponse.json({ ok: true });
}
