"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { EXCHANGES, type Exchange } from "@/components/AskDemo";
import { INTELLIGENCE, START_FREE_URL } from "@/lib/constants";

/**
 * Homepage hero (2026-10-28). No demo video: a real Carrier Ask answer plays
 * out on its own beside the copy (carrier names changed, per the AskDemo data
 * policy). Start free, the price, and See pricing sit above the fold because
 * most visitors never scroll.
 *   calm  = solid navy with a faint static wave line (the harbor nod), and a
 *           lighter brand blue for the accent so it passes contrast
 *   water = the moving wave video, desktop only (phones keep the poster)
 */

type Phase = { q: string; a: string; source: boolean };

function usePlayer() {
  const [phase, setPhase] = useState<Phase>({ q: "", a: "", source: false });
  const timers = useRef<number[]>([]);
  const clear = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };
  const at = (ms: number, fn: () => void) => timers.current.push(window.setTimeout(fn, ms));

  const play = useCallback((ex: Exchange, onDone?: () => void) => {
    clear();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPhase({ q: ex.question, a: ex.answer, source: true });
      // Only advances if the visitor pressed play; reduced motion starts paused.
      if (onDone) at(9000, onDone);
      return;
    }
    setPhase({ q: "", a: "", source: false });
    for (let i = 1; i <= ex.question.length; i++) at(i * 22, () => setPhase((p) => ({ ...p, q: ex.question.slice(0, i) })));
    const qDone = ex.question.length * 22 + 350;
    const words = ex.answer.split(" ");
    words.forEach((_, i) => at(qDone + i * 30, () => setPhase((p) => ({ ...p, a: words.slice(0, i + 1).join(" ") }))));
    const aDone = qDone + words.length * 30 + 250;
    at(aDone, () => setPhase((p) => ({ ...p, source: true })));
    // Hold the finished answer long enough to read the source before moving on.
    if (onDone) at(aDone + 7000, onDone);
  }, []);

  useEffect(() => clear, []);
  return { phase, play };
}

function WaveBackground() {
  // Video on desktop only (Oct 15 performance pass); phones and the server render keep the poster.
  const desktop = useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(min-width: 768px)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(min-width: 768px)").matches,
    () => false,
  );
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-cover"
        style={{ backgroundImage: "url(/videos/hero-waves-bg-poster.jpg)", backgroundPosition: "center 65%" }}
        aria-hidden="true"
      />
      {desktop && (
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center 65%" }}
        src="/videos/hero-waves-bg.mp4"
        poster="/videos/hero-waves-bg-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      )}
      <div className="pointer-events-none absolute inset-0 bg-anchor/70" aria-hidden="true" />
    </>
  );
}

function CalmBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 70% at 85% 40%, #2A5580 0%, #1B3A5C 55%, #0F2440 100%)" }}
        aria-hidden="true"
      />
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-white/[0.06] md:h-32"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 70c120-30 240-30 360 0s240 30 360 0 240-30 360 0 240 30 360 0v50H0z" fill="currentColor" />
        <path d="M0 92c120-24 240-24 360 0s240 24 360 0 240-24 360 0 240 24 360 0v28H0z" fill="currentColor" />
      </svg>
    </>
  );
}

function SourceChip({ text, show }: { text: string; show: boolean }) {
  return (
    <p
      className={`mt-3 inline-flex items-center gap-2 rounded-md border border-ash bg-linen px-3 py-1.5 text-[13px] text-charcoal transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
      }`}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2E75B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
      </svg>
      <span>
        <span className="font-medium text-ink">Source:</span> {text}
      </span>
    </p>
  );
}

const PRICE_LINE = `Free workspace, $0. Intelligence, $${INTELLIGENCE.monthly} a month for your whole agency. Never per person.`;

function Ctas({ center = false }: { center?: boolean }) {
  return (
    <>
      <div className={`mt-8 flex flex-col gap-3 sm:flex-row sm:items-center ${center ? "justify-center" : ""}`}>
        <Link
          href={START_FREE_URL}
          className="cta-primary btn-radius bg-copper px-7 py-3.5 text-center text-[16px] font-medium text-midnight hover:bg-copper-light"
        >
          Start free
        </Link>
        <Link
          href="/pricing"
          className="cta-secondary btn-radius border border-mist/40 px-7 py-3.5 text-center text-[16px] font-medium text-paper hover:border-paper"
        >
          See pricing
        </Link>
      </div>
      <p className={`mt-3 text-[14px] text-mist ${center ? "text-center" : "text-center sm:text-left"}`}>{PRICE_LINE}</p>
    </>
  );
}

/* ─── Homepage hero: copy left, a real answer playing out on the right ─── */
export function HomeHero({ background = "calm" }: { background?: "calm" | "water" }) {
  const { phase, play } = usePlayer();
  const [idx, setIdx] = useState(0);
  const [run, setRun] = useState(0);
  // Rotation stops when the visitor pauses or picks an example, and never
  // starts for reduced-motion visitors (WCAG 2.2.2 Pause, Stop, Hide).
  const reducedMotion = useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
  const [choice, setChoice] = useState<boolean | null>(null);
  const auto = choice ?? !reducedMotion;
  const autoRef = useRef(auto);
  const doneRef = useRef(false);
  const ex = EXCHANGES[idx];
  const next = () => setIdx((i) => (i + 1) % EXCHANGES.length);

  useEffect(() => {
    autoRef.current = auto;
  }, [auto]);

  useEffect(() => {
    doneRef.current = false;
    const t = window.setTimeout(
      () =>
        play(EXCHANGES[idx], () => {
          doneRef.current = true;
          if (autoRef.current) next();
        }),
      600,
    );
    return () => window.clearTimeout(t);
  }, [idx, run, play]);

  const toggleAuto = () => {
    const on = !auto;
    autoRef.current = on;
    setChoice(on);
    if (on && doneRef.current) next();
  };

  const pick = (i: number) => {
    autoRef.current = false;
    setChoice(false);
    setIdx(i);
    setRun((r) => r + 1);
  };

  return (
    <section className="relative overflow-hidden bg-anchor" aria-labelledby="hero-heading">
      {background === "water" ? <WaveBackground /> : <CalmBackground />}
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-[1fr_1.05fr] md:gap-12 md:py-20">
        <div className="text-center md:text-left">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-paper">
            Built for independent insurance agencies
          </p>
          <h1 id="hero-heading" className="mt-4 text-[38px] font-medium leading-[1.06] tracking-[-0.02em] text-paper md:text-[56px]">
            Who else might
            <br />
            <span className={background === "water" ? "text-interactive" : "text-slate"}>write this&nbsp;risk?</span>
          </h1>
          <p className="mt-5 text-[18px] leading-relaxed text-mist md:text-[20px]">
            Ask a carrier question the way you&rsquo;d ask Google. Get the answer with the carrier&rsquo;s own guideline
            attached.
          </p>
          <Ctas />
        </div>

        <div className="overflow-hidden rounded-xl border border-white/15 bg-paper shadow-2xl">
          <div className="flex items-center gap-2 bg-midnight px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-harbor/60" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-harbor/60" aria-hidden="true" />
            <span className="ml-1 text-[13px] font-medium text-paper">HarborIQ · Carrier Ask</span>
          </div>
          <p className="sr-only">
            Example question: {ex.question} Answer: {ex.answer} Source: {ex.citation}
          </p>
          <div className="min-h-[300px] px-5 py-5 md:px-6" aria-hidden="true">
            <p className="ml-auto min-h-[44px] max-w-[88%] rounded-lg bg-ice px-4 py-2.5 text-[15px] text-ink">{phase.q || " "}</p>
            {phase.a && (
              <div className="mt-4">
                <p className="text-[15px] leading-relaxed text-charcoal">{phase.a}</p>
                <SourceChip text={ex.citation} show={phase.source} />
              </div>
            )}
          </div>
          <div className="flex items-center justify-between border-t border-ash px-5 py-3">
            <span className="text-[12px] text-stone">Real answer. Carrier names changed for this page.</span>
            <span className="flex items-center">
              {EXCHANGES.map((e, i) => (
                <button
                  key={e.id}
                  type="button"
                  onClick={() => pick(i)}
                  aria-label={`Show example ${i + 1} of ${EXCHANGES.length}: ${e.question}`}
                  aria-current={i === idx ? "true" : undefined}
                  className="group rounded-full p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-interactive"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all ${
                      i === idx ? "w-5 bg-interactive" : "w-1.5 bg-fog group-hover:bg-stone"
                    }`}
                  />
                </button>
              ))}
              <button
                type="button"
                onClick={toggleAuto}
                aria-label={auto ? "Pause rotating examples" : "Play rotating examples"}
                className="ml-1.5 flex h-6 w-6 items-center justify-center rounded-full text-stone hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-interactive"
              >
                {auto ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z" />
                  </svg>
                )}
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
