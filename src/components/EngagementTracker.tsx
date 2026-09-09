"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  bucketSeconds,
  captureAttribution,
  trackCtaClick,
  trackPageExit,
  trackScrollDepth,
  type ScrollDepth,
} from "@/lib/analytics";

/**
 * Site-wide engagement instrumentation. Mounted once in the root layout, it
 * uses delegated listeners rather than per-component handlers, so a new CTA
 * anywhere on the site is tracked the day it ships with no extra wiring.
 *
 * Answers the questions Vercel's built-in pageviews cannot:
 *   - how long people stay        -> page_exit.duration
 *   - where they leave            -> page_exit grouped by page
 *   - where they engage           -> scroll_depth, cta_click
 */

const DEPTH_MARKS: ScrollDepth[] = [50, 90];

/** Below this, a pageview is a bounce-in-place rather than a read. */
const ENGAGED_SECONDS = 15;

const DEMO_HOST = "tidycal.com";
const CHECKOUT_HOST = "creem.io";

function classify(link: HTMLAnchorElement, currentHost: string) {
  let url: URL;
  try {
    url = new URL(link.href, window.location.href);
  } catch {
    return null;
  }
  // mailto:, tel: and in-page jumps are not conversions.
  if (url.protocol !== "http:" && url.protocol !== "https:") return null;

  const isCta =
    link.classList.contains("cta-primary") ||
    link.classList.contains("cta-secondary");

  if (url.hostname.endsWith(DEMO_HOST)) {
    return { kind: "demo" as const, destination: DEMO_HOST };
  }
  if (url.hostname.endsWith(CHECKOUT_HOST)) {
    return { kind: "markets" as const, destination: CHECKOUT_HOST };
  }
  if (url.hostname !== currentHost) {
    return { kind: "outbound" as const, destination: url.hostname };
  }
  // Book-a-demo buttons now go to the on-site /demo page (2026-09-02);
  // keep them in the "demo" bucket so the trend line does not break.
  if (url.pathname === "/demo" && isCta) {
    return { kind: "demo" as const, destination: "/demo" };
  }
  // Internal links are already covered by pageviews; only styled CTAs are
  // worth an event, to keep the quota on things that signal intent.
  if (isCta) {
    return { kind: "internal" as const, destination: url.pathname };
  }
  return null;
}

function label(link: HTMLAnchorElement) {
  const text = (link.innerText || link.textContent || "").trim().replace(/\s+/g, " ");
  return (text || link.getAttribute("aria-label") || "unlabeled").slice(0, 60);
}

export function EngagementTracker() {
  const pathname = usePathname();

  // Per-pageview state. Refs, not state: none of this renders. startedAt is
  // stamped in the effect, never during render, so it stays render-pure.
  const startedAt = useRef(0);
  const maxDepth = useRef(0);
  const firedDepths = useRef<Set<number>>(new Set());
  const exitSent = useRef(false);
  const page = useRef(pathname);

  // Reset on every route change, and report the page being left.
  useEffect(() => {
    const previous = page.current;
    if (previous !== pathname && !exitSent.current) {
      sendExit(previous);
    }
    page.current = pathname;
    startedAt.current = Date.now();
    maxDepth.current = 0;
    firedDepths.current = new Set();
    exitSent.current = false;

    function sendExit(forPage: string) {
      const seconds = Math.round((Date.now() - startedAt.current) / 1000);
      trackPageExit({
        page: forPage,
        duration: bucketSeconds(seconds),
        maxDepth: maxDepth.current,
        engaged: seconds >= ENGAGED_SECONDS || maxDepth.current >= 50,
      });
    }

    function currentDepth() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      // A page shorter than the viewport is fully seen on arrival.
      if (scrollable <= 0) return 100;
      const pct = ((window.scrollY || doc.scrollTop) / scrollable) * 100;
      return Math.min(100, Math.max(0, Math.round(pct)));
    }

    let queued = false;
    function onScroll() {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        const depth = currentDepth();
        if (depth > maxDepth.current) maxDepth.current = depth;
        for (const mark of DEPTH_MARKS) {
          if (maxDepth.current >= mark && !firedDepths.current.has(mark)) {
            firedDepths.current.add(mark);
            trackScrollDepth({ depth: mark, page: page.current });
          }
        }
      });
    }

    // visibilitychange is the reliable exit hook; unload is not fired on
    // mobile Safari, and beforeunload cancels in-flight requests.
    function onHidden() {
      if (document.visibilityState !== "hidden" || exitSent.current) return;
      exitSent.current = true;
      sendExit(page.current);
    }

    function onClick(e: MouseEvent) {
      const link = (e.target as HTMLElement | null)?.closest?.("a");
      if (!link) return;
      const hit = classify(link as HTMLAnchorElement, window.location.hostname);
      if (!hit) return;
      trackCtaClick({
        label: label(link as HTMLAnchorElement),
        destination: hit.destination,
        kind: hit.kind,
        page: page.current,
      });
    }

    // First touch wins, so this must run before any event can fire. Reading
    // location directly rather than useSearchParams keeps the tree out of a
    // Suspense boundary and the marketing pages fully static.
    captureAttribution(window.location.search);

    maxDepth.current = currentDepth();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onHidden);
    document.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onHidden);
      document.removeEventListener("click", onClick, true);
    };
  }, [pathname]);

  return null;
}
