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
  track("cta_click", props);
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
  track("page_exit", props);
}
