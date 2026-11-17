"use client";

/**
 * Distribution Intelligence renderings for /carriers (2026-11-17).
 * Sample views only: Lakeshore Mutual is a fictional carrier (see the carrier
 * film rule, decisions 2026-11-03) and every agency name and number is invented.
 *
 * Motion: each view animates once when it scrolls into view (bars fill, figures
 * rise, problems resolve into next steps). CSS transitions only, no loops.
 * Reduced motion shows the finished state immediately.
 */

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/components/site/useReducedMotion";

/** True once the element has been on screen. Always true under reduced motion. */
function useReveal<T extends Element>(threshold = 0.25, onLoad = false) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    const el = ref.current;
    if (onLoad) {
      // Above the fold: play shortly after first paint instead of waiting on scroll.
      const t = window.setTimeout(() => setSeen(true), 250);
      return () => window.clearTimeout(t);
    }
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, onLoad]);
  return { ref, on: seen || reduced, reduced };
}

/** Fade-and-rise classes for a revealed element. */
function rise(on: boolean, reduced: boolean) {
  return `${reduced ? "" : "transition-[opacity,transform] duration-500 ease-out"} ${on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5"}`;
}

function grow(reduced: boolean) {
  return reduced ? "" : "transition-[width] duration-[900ms] ease-out";
}

// ─── Shared data: one fictional carrier, one territory, one month ───

export const LINES = [
  { line: "Homeowners", seen: 1420, quoted: 512, bound: 171 },
  { line: "Personal auto", seen: 1180, quoted: 398, bound: 142 },
  { line: "BOP", seen: 640, quoted: 164, bound: 49 },
  { line: "Life", seen: 610, quoted: 25, bound: 9 },
  { line: "Commercial auto", seen: 390, quoted: 92, bound: 25 },
  { line: "Umbrella", seen: 230, quoted: 44, bound: 15 },
];

const GAPS = [
  { q: "Roofs over 20 years", n: 214, note: "Guide declines; 61% placed elsewhere" },
  { q: "Short-term rentals", n: 88, note: "No answer found in your guide" },
  { q: "Restaurants open past midnight", n: 57, note: "Guide unclear on hours" },
];

const AGENCIES = [
  { a: "Two Rivers Insurance", g: "+34%", d: "Life quoting up, 2 of 38 sent to you" },
  { a: "Prairie Gate Agency", g: "+22%", d: "New producer, homeowners heavy" },
  { a: "Northfield Insurance Group", g: "+17%", d: "Opened a second office" },
];

const LOSSES = [
  { why: "Price", pct: 46 },
  { why: "Appetite", pct: 31 },
  { why: "Speed to quote", pct: 23 },
];

export function SampleTag() {
  return (
    <span className="whitespace-nowrap rounded-full bg-linen px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-stone">
      Sample · fictional data
    </span>
  );
}

function WindowBar({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-ash bg-linen/70 px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-fog" aria-hidden="true" />
      <span className="h-2.5 w-2.5 rounded-full bg-fog" aria-hidden="true" />
      <span className="h-2.5 w-2.5 rounded-full bg-fog" aria-hidden="true" />
      <span className="ml-3 truncate text-[12px] text-stone">{title}</span>
      <span className="ml-auto"><SampleTag /></span>
    </div>
  );
}

const FIGURE = "overflow-hidden rounded-xl border border-ash bg-paper text-ink shadow-[0_1px_2px_rgba(15,36,64,0.06),0_24px_60px_-28px_rgba(15,36,64,0.28)]";

/** The carrier portal: one screen a distribution leader opens on Monday. */
export function NetworkPulse({ className = "" }: { className?: string }) {
  const { ref, on, reduced } = useReveal<HTMLElement>(0.15, true);
  const max = Math.max(...LINES.map((l) => l.seen));
  const kpis = [
    { k: "Opportunities your agencies worked", v: "4,470", d: "+12% vs. prior 30 days" },
    { k: "Quoted with Lakeshore", v: "1,235", d: "28% quote share, down 2 pts" },
    { k: "Bound with Lakeshore", v: "411", d: "33% of your quotes" },
    { k: "Questions asked about you", v: "1,947", d: "In Carrier Ask" },
  ];
  return (
    <figure ref={ref} className={`${FIGURE} ${className}`}>
      <WindowBar title="HarborIQ for carriers · Lakeshore Mutual" />

      <div className="p-5 md:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-interactive">Network pulse</p>
            <h3 className="mt-1 text-[20px] font-medium tracking-tight md:text-[22px]">Central territory, last 30 days</h3>
          </div>
          <p className="text-[13px] text-stone">142 agencies sharing with you</p>
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-ash bg-ash md:grid-cols-4">
          {kpis.map((x, i) => (
            <div key={x.k} className="bg-paper p-3.5 md:p-4">
              <dt className="text-[12px] leading-snug text-stone">{x.k}</dt>
              <div className={rise(on, reduced)} style={{ transitionDelay: `${150 + i * 120}ms` }}>
                <dd className="mt-1 text-[24px] font-medium leading-none tracking-tight md:text-[26px]">{x.v}</dd>
                <dd className="mt-1.5 text-[12px] text-charcoal">{x.d}</dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h4 className="text-[14px] font-medium">What your agencies saw, quoted with you, and bound</h4>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-stone">
              <span className="flex items-center gap-1.5"><span className="h-2 w-3 rounded-sm bg-mist" aria-hidden="true" />Seen by agencies</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-3 rounded-sm bg-harbor" aria-hidden="true" />Quoted with you</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-3 rounded-sm bg-copper" aria-hidden="true" />Bound with you</span>
            </div>
            <ul className="mt-3 space-y-3">
              {LINES.map((l, i) => {
                const d = (n: number) => ({ width: on ? `${(n / max) * 100}%` : "0%", transitionDelay: `${300 + i * 90}ms` });
                return (
                  <li key={l.line}>
                    <div className="flex items-baseline justify-between text-[13px]">
                      <span className="text-ink">{l.line}</span>
                      <span className="tabular-nums text-stone">{l.seen.toLocaleString()} · {l.quoted} · {l.bound}</span>
                    </div>
                    <div className="relative mt-1 h-3 overflow-hidden rounded-sm bg-ice" aria-hidden="true">
                      <div className={`absolute inset-y-0 left-0 rounded-sm bg-mist ${grow(reduced)}`} style={d(l.seen)} />
                      <div className={`absolute inset-y-0 left-0 rounded-sm bg-harbor ${grow(reduced)}`} style={d(l.quoted)} />
                      <div className={`absolute inset-y-0 left-0 rounded-sm bg-copper ${grow(reduced)}`} style={d(l.bound)} />
                    </div>
                  </li>
                );
              })}
            </ul>

            <h4 className="mt-6 text-[14px] font-medium">When an agency placed it elsewhere</h4>
            <div className="mt-2 flex h-3 overflow-hidden rounded-sm bg-ice" aria-hidden="true">
              {LOSSES.map((x, i) => (
                <div
                  key={x.why}
                  className={`${i === 0 ? "bg-anchor" : i === 1 ? "bg-harbor" : "bg-slate"} ${grow(reduced)}`}
                  style={{ width: on ? `${x.pct}%` : "0%", transitionDelay: `${900 + i * 150}ms` }}
                />
              ))}
            </div>
            <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-charcoal">
              {LOSSES.map((x) => (
                <li key={x.why}>{x.why} <span className="tabular-nums text-stone">{x.pct}%</span></li>
              ))}
            </ul>
            <p className="mt-1 text-[12px] text-stone">Reasons agencies recorded. Other carriers are not named.</p>
          </div>

          <div className={`space-y-6 ${rise(on, reduced)}`} style={{ transitionDelay: "700ms" }}>
            <div>
              <h4 className="text-[14px] font-medium">Appetite gaps</h4>
              <ul className="mt-2 divide-y divide-ash border-y border-ash">
                {GAPS.map((g) => (
                  <li key={g.q} className="flex items-start justify-between gap-3 py-2.5">
                    <div>
                      <p className="text-[14px] text-ink">{g.q}</p>
                      <p className="text-[12px] text-stone">{g.note}</p>
                    </div>
                    <span className="shrink-0 text-[13px] tabular-nums text-charcoal">{g.n} asks</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[14px] font-medium">Agencies growing fastest</h4>
              <ul className="mt-2 divide-y divide-ash border-y border-ash">
                {AGENCIES.map((a) => (
                  <li key={a.a} className="flex items-start justify-between gap-3 py-2.5">
                    <div className="min-w-0">
                      <p className="truncate text-[14px] text-ink">{a.a}</p>
                      <p className="text-[12px] text-stone">{a.d}</p>
                    </div>
                    <span className="shrink-0 text-[13px] font-medium tabular-nums text-success">{a.g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="sr-only">
        Sample carrier portal for the fictional Lakeshore Mutual: opportunities seen, quoted and bound by line, reasons business was placed elsewhere, appetite gaps from agency questions, and the fastest growing agencies.
      </figcaption>
    </figure>
  );
}

/**
 * The invisible-opportunity view: the same agencies, line by line, and the
 * share of what they worked that came to Lakeshore. Derived from LINES.
 */
export function ShareByLine({ className = "" }: { className?: string }) {
  const { ref, on, reduced } = useReveal<HTMLElement>(0.3);
  const rows = LINES.map((l) => ({ ...l, share: Math.round((l.quoted / l.seen) * 100) }));
  return (
    <figure ref={ref} className={`${FIGURE} ${className}`}>
      <WindowBar title="Quote share by line · same 142 agencies" />
      <div className="p-5 md:p-6">
        <p className="text-[13px] text-charcoal">Of the opportunities your agencies worked, the share quoted with Lakeshore.</p>
        <ul className="mt-4 space-y-3.5">
          {rows.map((r, i) => {
            const low = r.share < 15;
            return (
              <li key={r.line}>
                <div className="flex items-baseline justify-between gap-3 text-[13px]">
                  <span className={low ? "font-medium text-ink" : "text-ink"}>{r.line}</span>
                  <span className="tabular-nums text-stone">
                    <span className={low ? "font-semibold text-bronze" : "font-medium text-ink"}>{r.share}%</span> of {r.seen.toLocaleString()}
                  </span>
                </div>
                <div className="relative mt-1 h-2.5 overflow-hidden rounded-full bg-ice" aria-hidden="true">
                  <div
                    className={`absolute inset-y-0 left-0 rounded-full ${low ? "bg-copper" : "bg-harbor"} ${grow(reduced)}`}
                    style={{ width: on ? `${r.share}%` : "0%", transitionDelay: `${150 + i * 110}ms` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
        <p className={`mt-5 rounded-md bg-linen px-3.5 py-2.5 text-[13px] leading-relaxed text-ink ${rise(on, reduced)}`} style={{ transitionDelay: "1000ms" }}>
          <span className="font-semibold">Same agencies, different story.</span> 36% of their homeowners quotes come to you. 4% of their life quotes do, across 610 opportunities.
        </p>
      </div>
      <figcaption className="sr-only">
        Sample quote share by line for the fictional Lakeshore Mutual across the same agencies: strong in homeowners and personal auto, 4 percent in life.
      </figcaption>
    </figure>
  );
}

const STANDINGS = [
  { a: "Northfield Insurance Group", apps: 14, bound: 9, rep: "Dana K." },
  { a: "Two Rivers Insurance", apps: 12, bound: 8, rep: "Dana K." },
  { a: "Prairie Gate Agency", apps: 11, bound: 5, rep: "Marcus T." },
  { a: "Lakeview Risk Partners", apps: 7, bound: 4, rep: "Marcus T." },
];

/** A growth incentive in flight: the rules, the standings, and who needs a push. */
export function IncentiveTracker({ className = "" }: { className?: string }) {
  const { ref, on, reduced } = useReveal<HTMLElement>(0.3);
  const lead = STANDINGS[0].bound;
  return (
    <figure ref={ref} className={`${FIGURE} ${className}`}>
      <WindowBar title="Incentives · Lakeshore Mutual" />
      <div className="p-5 md:p-7">
        <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-interactive">Growth incentive</p>
        <h3 className="mt-1 text-[20px] font-medium tracking-tight">Lakeshore Mutual Life Insurance Challenge</h3>
        <p className="mt-1 text-[13px] text-charcoal">Most term life policies bound in 60 days wins a trip to Charleston, SC for both the agency and its Lakeshore rep.</p>

        <div className="mt-4">
          <div className="flex justify-between text-[12px] text-stone">
            <span>Day 38 of 60</span>
            <span>22 days left</span>
          </div>
          <div className="mt-1 h-2 overflow-hidden rounded-full bg-ice" aria-hidden="true">
            <div className={`h-full rounded-full bg-interactive ${grow(reduced)}`} style={{ width: on ? `${(38 / 60) * 100}%` : "0%", transitionDelay: "200ms" }} />
          </div>
        </div>

        <dl className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-ash bg-ash text-center">
          {[
            { k: "Agencies in", v: "38" },
            { k: "Applications", v: "126" },
            { k: "Bound", v: "71" },
          ].map((x) => (
            <div key={x.k} className="bg-paper p-3">
              <dt className="text-[12px] text-stone">{x.k}</dt>
              <dd className="mt-0.5 text-[22px] font-medium leading-none tracking-tight">{x.v}</dd>
            </div>
          ))}
        </dl>

        <h4 className="mt-5 text-[14px] font-medium">Standings</h4>
        <ol className="mt-2 divide-y divide-ash border-y border-ash">
          {STANDINGS.map((s, i) => (
            <li key={s.a} className={`flex items-center gap-3 py-2.5 ${rise(on, reduced)}`} style={{ transitionDelay: `${350 + i * 110}ms` }}>
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold ${i === 0 ? "bg-copper text-midnight" : "bg-ice text-anchor"}`}>{i + 1}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[14px]">{s.a}</p>
                <p className="text-[12px] text-stone">{s.apps} apps · rep {s.rep}</p>
              </div>
              <span className="shrink-0 text-[13px] tabular-nums text-charcoal">{s.bound} bound{i > 0 && <span className="text-stone"> · {lead - s.bound} back</span>}</span>
            </li>
          ))}
        </ol>

        <p className="mt-4 rounded-md bg-ice px-3 py-2 text-[13px] leading-relaxed text-anchor">
          <span className="font-semibold">Needs a push.</span> 14 agencies have quoted life but bound nothing yet. Their reps get the list Monday.
        </p>
      </div>
      <figcaption className="sr-only">
        Sample incentive tracker for the fictional Lakeshore Mutual: a 60-day life insurance challenge with progress, totals, agency standings with their reps, and agencies that need a push.
      </figcaption>
    </figure>
  );
}

const BRIEF = [
  {
    tag: "Product demand",
    h: "BOP demand is up 18% across your agencies. Your quote share fell 4 points.",
    p: "Contractors with subcontracted roofing came up 64 times. Your guide declines them, and most were placed with another carrier.",
    who: "Product team",
    act: "Review the contractor appetite rule and the coverage it requires.",
  },
  {
    tag: "Agency to call",
    h: "Two Rivers Insurance quoted 38 term life policies last month and sent you 2.",
    p: "Most of their homeowners business already comes to you. The life conversations are happening with the same households.",
    who: "Territory rep",
    act: "Bring the Life Insurance Challenge to Two Rivers this week.",
  },
  {
    tag: "Appetite gap",
    h: "Short-term rentals came up 88 times, and your guide has no answer.",
    p: "40 agencies asked. Every one of them had to call someone or move on.",
    who: "Product team",
    act: "Decide yes or no, and publish a one-page bulletin.",
  },
];

/** The weekly brief: each signal resolves into the next step and who owns it. */
export function DistributionBrief({ className = "" }: { className?: string }) {
  const { ref, on, reduced } = useReveal<HTMLElement>(0.25);
  return (
    <figure ref={ref} className={`${FIGURE} ${className}`}>
      <div className="border-b border-ash bg-linen/70 px-5 py-3.5">
        <div className="flex items-center justify-between gap-3">
          <p className="truncate text-[14px] font-medium">Your distribution brief, week of November 10</p>
          <SampleTag />
        </div>
        <p className="mt-1 truncate text-[12px] text-stone">HarborIQ to Central territory team, Lakeshore Mutual</p>
      </div>

      <div className="px-5 py-6 md:px-7">
        <p className="text-[15px] leading-relaxed text-charcoal">
          Good morning. 142 agencies in your Central territory worked 4,470 opportunities in the last 30 days. Three things need a decision.
        </p>
        <ol className="mt-5 space-y-5">
          {BRIEF.map((b, i) => (
            <li key={b.tag} className="border-l-2 border-ash pl-4">
              <div className={rise(on, reduced)} style={{ transitionDelay: `${i * 450}ms` }}>
                <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-stone">{i + 1}. {b.tag}</p>
                <p className="mt-1 text-[16px] font-medium leading-snug">{b.h}</p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-charcoal">{b.p}</p>
              </div>
              <p
                className={`mt-2.5 flex gap-2 rounded-md bg-ice px-3 py-2 text-[13px] leading-relaxed text-anchor ${rise(on, reduced)}`}
                style={{ transitionDelay: `${i * 450 + 300}ms` }}
              >
                <span aria-hidden="true" className="text-interactive">→</span>
                <span><span className="font-semibold">{b.who}:</span> {b.act}</span>
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-ash pt-5">
          <span className="btn-radius inline-flex items-center bg-anchor px-4 py-2 text-[13px] font-semibold text-paper">Open the network pulse</span>
          <span className="text-[12px] text-stone">Built from agencies that share with Lakeshore. No client records.</span>
        </div>
      </div>
      <figcaption className="sr-only">
        Sample weekly email brief for the fictional Lakeshore Mutual: three signals, each paired with a next step for the product team or a territory rep.
      </figcaption>
    </figure>
  );
}

/** Agencies connecting to HarborIQ, and the carrier's view filling in as they do. Illustrative. */
const NODES = [
  { x: 40, y: 34 }, { x: 40, y: 82 }, { x: 40, y: 130 }, { x: 40, y: 178 }, { x: 40, y: 226 },
  { x: 92, y: 58 }, { x: 92, y: 154 }, { x: 92, y: 202 },
];
const HUB = { x: 250, y: 130 };
const VIEW = { x: 410, y: 130 };

export function NetworkGrowth({ className = "" }: { className?: string }) {
  const { ref, on, reduced } = useReveal<HTMLDivElement>(0.35);
  const step = 160;
  return (
    <div ref={ref} className={`grid items-center gap-8 md:grid-cols-[1.4fr_1fr] ${className}`}>
      <svg viewBox="0 0 470 260" className="w-full" role="img" aria-label="Illustration: agencies connect to HarborIQ one by one, and the carrier's view fills in.">
        {NODES.map((n, i) => {
          const len = Math.hypot(HUB.x - n.x, HUB.y - n.y);
          return (
            <line
              key={`l${i}`}
              x1={n.x}
              y1={n.y}
              x2={HUB.x}
              y2={HUB.y}
              stroke="var(--color-slate)"
              strokeWidth="1.25"
              strokeDasharray={len}
              strokeDashoffset={on ? 0 : len}
              style={{ transition: reduced ? "none" : `stroke-dashoffset 600ms ease-out ${i * step}ms` }}
            />
          );
        })}
        <line x1={HUB.x} y1={HUB.y} x2={VIEW.x - 34} y2={VIEW.y} stroke="var(--color-copper)" strokeWidth="2" />
        {NODES.map((n, i) => (
          <g key={`n${i}`}>
            <circle cx={n.x} cy={n.y} r="13" fill="var(--color-paper)" stroke="var(--color-ash)" />
            <circle
              cx={n.x}
              cy={n.y}
              r="5"
              fill={on ? "var(--color-harbor)" : "var(--color-fog)"}
              style={{ transition: reduced ? "none" : `fill 300ms ease-out ${i * step + 400}ms` }}
            />
          </g>
        ))}
        <circle cx={HUB.x} cy={HUB.y} r="30" fill="var(--color-anchor)" />
        <text x={HUB.x} y={HUB.y + 4} textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--color-paper)">HarborIQ</text>
        <rect x={VIEW.x - 34} y={VIEW.y - 30} width="68" height="60" rx="8" fill="var(--color-paper)" stroke="var(--color-ash)" />
        {[0, 1, 2, 3].map((r) => (
          <rect
            key={r}
            x={VIEW.x - 24}
            y={VIEW.y - 20 + r * 11}
            height="6"
            rx="3"
            width={on ? [48, 36, 42, 28][r] : 6}
            fill={r === 0 ? "var(--color-copper)" : "var(--color-mist)"}
            style={{ transition: reduced ? "none" : `width 900ms ease-out ${600 + r * 250}ms` }}
          />
        ))}
        <text x="66" y="252" textAnchor="middle" fontSize="11" fill="var(--color-stone)">Your agencies</text>
        <text x={VIEW.x} y="182" textAnchor="middle" fontSize="11" fill="var(--color-stone)">Your view</text>
      </svg>
      <div>
        <p className="text-[13px] text-stone">As participation grows</p>
        <dl className="mt-3 divide-y divide-ash border-y border-ash">
          {[
            { k: "Agencies sharing with you", from: "2", to: "8" },
            { k: "Opportunities you can see", from: "Few", to: "Most" },
            { k: "Confidence in each signal", from: "Directional", to: "Reliable" },
          ].map((x, i) => (
            <div key={x.k} className="flex items-baseline justify-between gap-4 py-3">
              <dt className="text-[14px] text-charcoal">{x.k}</dt>
              <dd className="whitespace-nowrap text-[15px]">
                <span className="text-stone">{x.from}</span>
                <span className="mx-1.5 text-slate" aria-hidden="true">→</span>
                <span className={`font-medium text-ink ${reduced ? "" : "transition-opacity duration-500"} ${on ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${900 + i * 200}ms` }}>{x.to}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
