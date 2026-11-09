"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/components/site/useReducedMotion";

/**
 * Hero variant B (2026-11-09): the real Ask screen playing out. A carrier
 * question types in, the answers arrive with the carrier's own page cited,
 * then the next question. Shows only what the shipped Ask does today.
 * Carrier names are fictional, as on AskDemo. Reduced motion shows the
 * finished first exchange with no animation.
 */

type Source = { carrier: string; doc: string; text: React.ReactNode };
type Exchange = { q: string; sources: Source[]; foot: string };

const EXCHANGES: Exchange[] = [
  {
    q: "Who writes roofers in Florida with $3M revenue?",
    sources: [
      {
        carrier: "Lakeshore Mutual",
        doc: "Contractors appetite guide 2026 · page 14",
        text: (
          <>
            Roofing contractors are <mark className="rounded-sm bg-ice px-1 font-medium text-deep">in appetite</mark> in FL, GA and SC up to $5M revenue. No TPO-only operations. Minimum 3 years in business.
          </>
        ),
      },
      {
        carrier: "Granite State Casualty",
        doc: "Underwriting guidelines · page 7",
        text: (
          <>
            Roofing is <mark className="rounded-sm bg-linen px-1 font-medium text-charcoal">excluded</mark> in coastal FL counties. Inland FL referred to underwriting.
          </>
        ),
      },
    ],
    foot: "Answered in 4 seconds from your agency's own guides.",
  },
  {
    q: "Will Lakeshore write a home with a 1978 roof?",
    sources: [
      {
        carrier: "Lakeshore Mutual",
        doc: "Homeowners underwriting guide · page 22",
        text: (
          <>
            Roofs 20 years or older <mark className="rounded-sm bg-linen px-1 font-medium text-charcoal">need an inspection</mark> before binding. Asphalt shingle over 25 years is actual cash value only, to 30 years.
          </>
        ),
      },
      {
        carrier: "Harbor Point Insurance",
        doc: "Property eligibility bulletin · page 3",
        text: (
          <>
            Roofs over 25 years are <mark className="rounded-sm bg-linen px-1 font-medium text-charcoal">not eligible</mark> for new business. Replacement within 12 months may be submitted with a contractor estimate.
          </>
        ),
      },
    ],
    foot: "Answered in 3 seconds. Two carriers, two pages, one answer for the client.",
  },
  {
    q: "Does Granite State need loss runs for a new BOP?",
    sources: [
      {
        carrier: "Granite State Casualty",
        doc: "BOP guidelines · page 4",
        text: (
          <>
            Three years of currently valued loss runs <mark className="rounded-sm bg-linen px-1 font-medium text-charcoal">required</mark> above $25,000 premium. Below that, a signed no-loss letter is accepted.
          </>
        ),
      },
      {
        carrier: "Lakeshore Mutual",
        doc: "Small commercial appetite guide · page 9",
        text: (
          <>
            <mark className="rounded-sm bg-ice px-1 font-medium text-deep">No loss runs</mark> for accounts under $10,000 premium with no prior claims in five years.
          </>
        ),
      },
    ],
    foot: "Answered in 4 seconds. The CSR says yes while the client is still on the phone.",
  },
];

const TYPE_MS = 34;
const THINK_MS = 700;
const CARD_GAP_MS = 520;
const HOLD_MS = 5200;

export function HeroAsk({ className = "" }: { className?: string }) {
  const [idx, setIdx] = useState(0);
  // Starts on the finished first exchange so the server HTML (and any crawler) sees the question and its cited answers;
  // the effect below restarts the typing cycle once mounted.
  const [typed, setTyped] = useState(EXCHANGES[0].q);
  const [shown, setShown] = useState(3); // 0 none, 1 first card, 2 both, 3 footer
  const reduced = useReducedMotion();
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (reduced) {
      setTyped(EXCHANGES[0].q);
      setShown(3);
      return;
    }
    const later = (fn: () => void, ms: number) => {
      timers.current.push(window.setTimeout(fn, ms));
    };
    const ex = EXCHANGES[idx];
    setTyped("");
    setShown(0);
    for (let i = 1; i <= ex.q.length; i++) later(() => setTyped(ex.q.slice(0, i)), i * TYPE_MS);
    const typedDone = ex.q.length * TYPE_MS;
    later(() => setShown(1), typedDone + THINK_MS);
    later(() => setShown(2), typedDone + THINK_MS + CARD_GAP_MS);
    later(() => setShown(3), typedDone + THINK_MS + CARD_GAP_MS * 2);
    later(() => setIdx((i) => (i + 1) % EXCHANGES.length), typedDone + THINK_MS + CARD_GAP_MS * 2 + HOLD_MS);
    return () => {
      timers.current.forEach((t) => window.clearTimeout(t));
      timers.current = [];
    };
  }, [idx, reduced]);

  const ex = EXCHANGES[idx];
  const typing = typed.length < ex.q.length;

  return (
    <div className={`overflow-hidden rounded-xl border border-ash bg-paper shadow-[0_1px_2px_rgba(26,26,24,0.04),0_24px_60px_-28px_rgba(26,26,24,0.22)] ${className}`} aria-live="polite">
      <div className="flex items-center gap-2 border-b border-ash/70 bg-linen/60 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-ash" />
          <span className="h-2 w-2 rounded-full bg-ash" />
          <span className="h-2 w-2 rounded-full bg-ash" />
        </span>
        <span className="ml-1 text-[12px] text-stone">HarborIQ · Ask</span>
      </div>
      <div className="min-h-[340px] p-4 md:p-5">
        <div className="flex items-center gap-2 rounded-md border border-ash bg-linen/50 px-3 py-2.5 text-[15px] text-ink">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-stone" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
          <span className="min-h-[1.4em]">
            {typed}
            {typing && !reduced && <span className="ml-px inline-block h-[1.1em] w-px translate-y-[2px] bg-ink motion-safe:animate-pulse" aria-hidden="true" />}
          </span>
        </div>

        {shown === 0 && !typing && (
          <p className="mt-3 flex items-center gap-2 text-[12px] text-stone">
            <span className="h-1.5 w-1.5 rounded-full bg-interactive motion-safe:animate-pulse" aria-hidden="true" />
            Reading your carrier guides
          </p>
        )}

        <div className="mt-3 space-y-3">
          {ex.sources.map((s, i) => (
            <div
              key={s.carrier + idx}
              className={`rounded-md border border-ash px-3 py-3 transition-all duration-500 ${shown > i ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"}`}
              aria-hidden={shown <= i}
            >
              <p className="text-[12px] text-stone">{s.carrier} · {s.doc}</p>
              <p className="mt-1.5 text-[14px] leading-snug text-ink">{s.text}</p>
            </div>
          ))}
        </div>

        <p className={`mt-3 flex items-center gap-1.5 text-[12px] text-stone transition-opacity duration-500 ${shown >= 3 ? "opacity-100" : "opacity-0"}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
          {ex.foot}
        </p>
      </div>
      {!reduced && (
        <div className="flex gap-1.5 border-t border-ash/70 px-4 py-2.5" aria-hidden="true">
          {EXCHANGES.map((_, i) => (
            <span key={i} className={`h-1 w-6 rounded-full ${i === idx ? "bg-interactive" : "bg-ash"}`} />
          ))}
        </div>
      )}
    </div>
  );
}
