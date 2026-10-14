import { NextRequest, NextResponse } from "next/server";
import { logWatchEvent, type WatchEvent, type WatchEventName } from "@/lib/watch/db";
import { findClip } from "@/lib/watch/clips";

export const maxDuration = 10;

const EVENTS = new Set<WatchEventName>([
  "view",
  "play",
  "progress_25",
  "progress_50",
  "progress_75",
  "complete",
  "cta_click",
  "clip_select",
]);
const SLUG = /^[a-z0-9-]{1,40}$/;
const TOKEN = /^[a-f0-9]{8,32}$/;

const clean = (s: unknown, max: number): string | undefined => {
  if (typeof s !== "string") return undefined;
  const t = s.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, max);
  return t || undefined;
};

/**
 * View events from /watch, sent with sendBeacon. Always answers 200: a
 * logging failure is never the viewer's problem.
 */
export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false });
  }

  const clip = clean(body.clip, 40);
  const event = clean(body.event, 20) as WatchEventName | undefined;
  if (!clip || !findClip(clip) || !event || !EVENTS.has(event)) {
    return NextResponse.json({ ok: false });
  }

  const token = clean(body.token, 32);
  const source = clean(body.source, 40)?.toLowerCase();
  const seconds =
    typeof body.seconds === "number" && Number.isFinite(body.seconds)
      ? Math.max(0, Math.round(body.seconds))
      : undefined;

  const payload: WatchEvent = {
    token: token && TOKEN.test(token) ? token : undefined,
    source: source && SLUG.test(source) ? source : undefined,
    campaign: clean(body.campaign, 80),
    clip,
    event,
    seconds,
    visitor_id: clean(body.visitor_id, 64),
    user_agent: req.headers.get("user-agent")?.slice(0, 300) ?? undefined,
    referrer: req.headers.get("referer")?.slice(0, 300) ?? undefined,
  };

  try {
    await logWatchEvent(payload);
  } catch (err) {
    console.error("watch event failed:", err);
    return NextResponse.json({ ok: false });
  }
  return NextResponse.json({ ok: true });
}
