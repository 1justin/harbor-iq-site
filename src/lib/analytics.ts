import { track } from "@vercel/analytics";

/**
 * Custom-event layer on top of Vercel Web Analytics.
 *
 * Vercel gives pageviews, referrers/UTMs, geo, and device for free. It does
 * NOT give time on page, scroll depth, or exit points — those are the events
 * below. Keep the set small: every event counts against the monthly quota,
 * and a dashboard with forty event names answers nothing.
 */

/** How far down a page someone got. Only 50 and 90 are reported. */
export type ScrollDepth = 50 | 90;

/** Coarse buckets beat raw seconds: they group in the dashboard. */
/**
 * First-touch campaign attribution.
 *
 * Vercel reports utm_* as its own dimensions, but that breakdown may be plan
 * gated. Custom event properties are not, so the landing UTMs ride along on
 * cta_click and page_exit — that way "which campaign produced demo bookings"
 * is answerable from the Events tab regardless of plan.
 *
 * Captured from the FIRST page of the session and held for its duration: the
 * query string is gone by the second page, and the click that converts is
 * rarely the click that landed.
 */
const ATTRIBUTION_KEY = "hiq_attribution";

export type Attribution = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
};

const DIRECT: Attribution = {
  utm_source: "direct",
  utm_medium: "none",
  utm_campaign: "none",
};

/** sessionStorage throws in some privacy modes; memory is the fallback. */
let memoryAttribution: Attribution | null = null;

function clean(value: string | null): string | null {
  if (!value) return null;
  const trimmed = value.trim().slice(0, 80);
  return trimmed || null;
}

/**
 * Records the landing UTMs once per session. Safe to call on every route
 * change: an already-stored value is never overwritten, so first touch wins.
 */
export function captureAttribution(search: string): Attribution {
  const existing = getAttribution();
  // Only the first tagged landing counts. A later untagged page must not
  // overwrite it, and a stored value is never replaced.
  if (existing) return existing;

  const params = new URLSearchParams(search);
  const source = clean(params.get("utm_source"));
  const medium = clean(params.get("utm_medium"));
  const campaign = clean(params.get("utm_campaign"));

  const attribution: Attribution = source || medium || campaign
    ? {
        utm_source: source ?? "unknown",
        utm_medium: medium ?? "unknown",
        utm_campaign: campaign ?? "unknown",
      }
    : DIRECT;

  memoryAttribution = attribution;
  try {
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
  } catch {
    // Memory copy already set; nothing further to do.
  }
  return attribution;
}

export function getAttribution(): Attribution | null {
  if (memoryAttribution) return memoryAttribution;
  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Attribution>;
    if (!parsed || typeof parsed.utm_source !== "string") return null;
    memoryAttribution = {
      utm_source: parsed.utm_source,
      utm_medium: parsed.utm_medium ?? "unknown",
      utm_campaign: parsed.utm_campaign ?? "unknown",
    };
    return memoryAttribution;
  } catch {
    return null;
  }
}

/** Attribution for event payloads, falling back to direct before capture. */
function attributionProps(): Attribution {
  return getAttribution() ?? DIRECT;
}

export function bucketSeconds(seconds: number): string {
  if (seconds < 10) return "0-10s";
  if (seconds < 30) return "10-30s";
  if (seconds < 60) return "30-60s";
  if (seconds < 180) return "1-3m";
  if (seconds < 600) return "3-10m";
  return "10m+";
}

/**
 * Which CTA someone clicked, and where it sent them. `destination` is a
 * hostname for outbound links and a path for internal ones, so booking
 * clicks (tidycal.com) and checkout clicks read as distinct rows.
 */
export function trackCtaClick(props: {
  label: string;
  destination: string;
  kind: "demo" | "markets" | "outbound" | "internal";
  page: string;
}) {
  track("cta_click", { ...props, ...attributionProps() });
}

export function trackScrollDepth(props: { depth: ScrollDepth; page: string }) {
  track("scroll_depth", props);
}

/**
 * Fired once per pageview when the tab is hidden or the route changes. This
 * is the "where do they leave, and how long did they stay" signal — group by
 * page to find the pages that lose people.
 */
export function trackPageExit(props: {
  page: string;
  duration: string;
  maxDepth: number;
  engaged: boolean;
}) {
  track("page_exit", { ...props, ...attributionProps() });
}
