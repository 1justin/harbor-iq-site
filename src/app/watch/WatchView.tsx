"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  CLIPS,
  FULL_TOUR,
  THEMES,
  findClip,
  formatDuration,
  posterUrl,
  videoUrl,
  type Clip,
} from "@/lib/watch/clips";
import type { WatchEventName } from "@/lib/watch/db";
import { DEMO_PAGE } from "@/lib/constants";

type Props = {
  initialSlug: string;
  token?: string;
  firstName?: string;
  company?: string;
  source: string;
  campaign?: string;
};

const VISITOR_KEY = "hiq_watch_visitor";
const WATCHED_KEY = "hiq_watch_watched";

function visitorId(): string {
  try {
    const existing = localStorage.getItem(VISITOR_KEY);
    if (existing) return existing;
    const id = Math.random().toString(36).slice(2, 12) + Date.now().toString(36);
    localStorage.setItem(VISITOR_KEY, id);
    return id;
  } catch {
    return "anon";
  }
}

function loadWatched(): Set<string> {
  try {
    const raw = localStorage.getItem(WATCHED_KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

function saveWatched(set: Set<string>) {
  try {
    localStorage.setItem(WATCHED_KEY, JSON.stringify([...set]));
  } catch {
    // Progress marks are a convenience; the server log is the record.
  }
}

/**
 * Self-serve demo page. One player, the promised clip first, the rest grouped
 * by what the viewer is trying to do, one quiet ask. Every play, progress
 * quarter, completion, clip switch, and CTA click is sent to /api/watch with
 * the token (a person) or source (a platform) so Justin can see who watched
 * what. Plays are never auto-started.
 */
export function WatchView({ initialSlug, token, firstName, company, source, campaign }: Props) {
  const [current, setCurrent] = useState<Clip>(() => findClip(initialSlug) ?? CLIPS[0]);
  const [watched, setWatched] = useState<Set<string>>(new Set());
  const videoRef = useRef<HTMLVideoElement>(null);
  const marks = useRef<Set<string>>(new Set());
  const visitor = useRef<string>("anon");

  const send = useCallback(
    (event: WatchEventName, clip: string, seconds?: number) => {
      const body = JSON.stringify({
        token,
        source,
        campaign,
        clip,
        event,
        seconds,
        visitor_id: visitor.current,
      });
      try {
        if (navigator.sendBeacon) {
          navigator.sendBeacon("/api/watch", new Blob([body], { type: "application/json" }));
        } else {
          void fetch("/api/watch", { method: "POST", body, headers: { "Content-Type": "application/json" }, keepalive: true });
        }
      } catch {
        // Logging never interrupts watching.
      }
    },
    [token, source, campaign],
  );

  useEffect(() => {
    visitor.current = visitorId();
    setWatched(loadWatched());
    send("view", initialSlug);
    // The initial view is logged once per page load.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const markWatched = useCallback((slug: string) => {
    setWatched((prev) => {
      if (prev.has(slug)) return prev;
      const next = new Set(prev);
      next.add(slug);
      saveWatched(next);
      return next;
    });
  }, []);

  const select = useCallback(
    (clip: Clip) => {
      if (clip.slug === current.slug) return;
      marks.current = new Set();
      setCurrent(clip);
      send("clip_select", clip.slug);
      window.history.replaceState(null, "", `/watch/${clip.slug}${window.location.search}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
      requestAnimationFrame(() => videoRef.current?.play().catch(() => undefined));
    },
    [current.slug, send],
  );

  const onTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const pct = v.currentTime / v.duration;
    const fire = (key: WatchEventName, threshold: number) => {
      if (pct >= threshold && !marks.current.has(key)) {
        marks.current.add(key);
        send(key, current.slug, Math.round(v.currentTime));
      }
    };
    fire("progress_25", 0.25);
    fire("progress_50", 0.5);
    fire("progress_75", 0.75);
    if (pct >= 0.5) markWatched(current.slug);
  };

  const onPlay = () => {
    if (!marks.current.has("play")) {
      marks.current.add("play");
      send("play", current.slug, 0);
    }
  };

  const onEnded = () => {
    if (!marks.current.has("complete")) {
      marks.current.add("complete");
      send("complete", current.slug, Math.round(videoRef.current?.duration ?? current.seconds));
    }
    markWatched(current.slug);
  };

  const watchedCount = useMemo(() => CLIPS.filter((c) => watched.has(c.slug)).length, [watched]);
  const themeLabel = THEMES.find((t) => t.id === current.theme)?.label ?? "";
  const greeting = firstName
    ? `${firstName}, these are the clips I mentioned. Short ones, no sign-up.`
    : "Short walkthroughs, organized by what you are trying to do. No sign-up.";
  const demoHref = `${DEMO_PAGE}?src=watch${token ? `&ref=${token}` : ""}`;

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-ash">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
          <Image
            src="/images/harboriq-logo-primary.svg"
            alt="HarborIQ"
            width={140}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <p className="text-sm text-charcoal text-right hidden sm:block">{greeting}</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-5 py-8 pb-16">
        <p className="text-sm text-charcoal sm:hidden mb-4">{greeting}</p>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-8 lg:gap-10 items-start">
          <section>
            <div className="relative rounded-xl overflow-hidden bg-anchor aspect-video">
              <video
                key={current.slug}
                ref={videoRef}
                className="w-full h-full"
                controls
                playsInline
                preload="metadata"
                poster={posterUrl(current)}
                onPlay={onPlay}
                onTimeUpdate={onTimeUpdate}
                onEnded={onEnded}
              >
                <source src={videoUrl(current)} type="video/mp4" />
              </video>
            </div>
            <p className="mt-4 text-xs font-medium tracking-wider uppercase text-interactive">
              {themeLabel} &middot; {formatDuration(current.seconds)}
            </p>
            <h1 className="mt-1 text-2xl md:text-3xl font-medium tracking-tight">{current.title}</h1>
            <p className="mt-2 text-[16px] text-charcoal leading-relaxed max-w-2xl">{current.blurb}</p>

            <div className="mt-6 rounded-xl border border-ash bg-linen p-5">
              <p className="text-[15px] text-ink mb-3">
                Seen something you want to talk through? Bring your scenarios.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <Link
                  href={demoHref}
                  onClick={() => send("cta_click", current.slug)}
                  className="cta-primary inline-flex items-center gap-2 rounded-lg bg-copper px-5 py-2.5 text-[15px] font-medium text-white hover:bg-bronze transition-colors"
                >
                  Talk to a real person
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <span className="text-sm text-stone">20 minutes with someone on the team</span>
              </div>
            </div>
          </section>

          <aside>
            <div className="flex items-baseline justify-between mb-2">
              <p className="text-sm text-stone">Browse by what you are trying to do</p>
              <p className="text-xs text-interactive tabular-nums">
                {watchedCount} of {CLIPS.length} watched
              </p>
            </div>

            {THEMES.map((theme) => (
              <div key={theme.id} className="mt-4 first:mt-0">
                <p className="text-xs font-medium text-anchor mb-1.5">{theme.label}</p>
                <ul className="space-y-1">
                  {CLIPS.filter((c) => c.theme === theme.id).map((clip) => {
                    const active = clip.slug === current.slug;
                    const done = watched.has(clip.slug);
                    return (
                      <li key={clip.slug}>
                        <button
                          type="button"
                          onClick={() => select(clip)}
                          aria-current={active ? "true" : undefined}
                          className={`w-full flex items-center gap-2.5 rounded-md border px-3 py-2 text-left transition-colors ${
                            active
                              ? "border-mist bg-ice"
                              : "border-ash hover:border-mist hover:bg-linen"
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[10px] ${
                              done ? "border-interactive bg-interactive text-white" : "border-fog"
                            }`}
                          >
                            {done ? "✓" : ""}
                          </span>
                          <span className={`flex-1 text-[14px] ${active ? "font-medium text-anchor" : "text-ink"}`}>
                            {clip.title}
                          </span>
                          <span className="text-xs text-stone tabular-nums">{formatDuration(clip.seconds)}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            <p className="mt-5 text-sm text-stone">
              Want everything?{" "}
              <button
                type="button"
                onClick={() => select(FULL_TOUR)}
                className="text-interactive underline underline-offset-2"
              >
                The full tour, {formatDuration(FULL_TOUR.seconds)}
              </button>
            </p>
          </aside>
        </div>
      </main>

      <footer className="border-t border-ash bg-linen">
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-wrap justify-between gap-2 text-xs text-stone">
          <span>
            HarborIQ &middot;{" "}
            <Link href="/" className="underline underline-offset-2">harboriq.co</Link>
            {" "}&middot;{" "}
            <a href="https://www.linkedin.com/company/harboriq" className="underline underline-offset-2" rel="noopener">
              LinkedIn
            </a>
          </span>
          <span>{company ? `Prepared for ${company}.` : "Unlisted page."}</span>
        </div>
      </footer>
    </div>
  );
}
