"use client";

import { useState } from "react";
import {
  DEMO_PAGE,
  IMPORT_TERMS,
  MARKETS_ANNUAL_URL,
  MARKETS_START_URL,
  PRICING,
} from "@/lib/constants";

/**
 * The two rungs, answered for one agency at a time.
 *
 * Whistle's review (2026-09-02) found the static ladder confusing to a
 * stranger: "$199 for up to 15 people" next to "Solo $199" reads as a
 * contradiction until you know there are two products. The fix is to ask
 * the one question both prices depend on, "how many people?", and show
 * both answers side by side. The ladder itself is unchanged (canon,
 * 2026-07-16 and 2026-08-09); only the presentation moved.
 */

type Band = {
  id: string;
  label: string;
  /** Representative headcount, used for copy like "all 5 of you". */
  size: number;
  agencyMonthly: number | null;
  agencyAnnual: number | null;
  /** Markets is published flat for 1 to 15; above that, demo first. */
  marketsSelfServe: boolean;
};

const BANDS: Band[] = [
  {
    id: "solo",
    label: "Just me",
    size: 1,
    agencyMonthly: PRICING.agency.solo.monthly,
    agencyAnnual: PRICING.agency.solo.annual,
    marketsSelfServe: true,
  },
  {
    id: "team",
    label: "2 to 5",
    size: 5,
    agencyMonthly: PRICING.agency.team.monthly,
    agencyAnnual: PRICING.agency.team.annual,
    marketsSelfServe: true,
  },
  {
    id: "os",
    label: "6 to 15",
    size: 15,
    agencyMonthly: PRICING.agency.os.monthly,
    agencyAnnual: PRICING.agency.os.annual,
    marketsSelfServe: true,
  },
  ...PRICING.large.map((band, i) => ({
    id: `large-${i}`,
    label: band.seats.replace(" people", ""),
    size: Number(band.seats.split(" to ")[1]),
    agencyMonthly: band.monthly,
    agencyAnnual: band.annual,
    marketsSelfServe: false,
  })),
  {
    id: "custom",
    label: "More than 50",
    size: 51,
    agencyMonthly: null,
    agencyAnnual: null,
    marketsSelfServe: false,
  },
];

const marketsIncludes = [
  "Carrier Ask: cited answers, with the source date on every citation",
  "Carrier profiles, reps, and function-specific contacts",
  "Login vault for every carrier portal",
  "Carrier document library and Carrier News",
  "Knowledge base that builds itself from your team's questions",
  "Team chat, training, license and CE tracking",
  "Command Center daily priorities",
  "Your whole team on one price, no fee per person",
];

const agencyIncludes = [
  "Everything in Markets",
  "Client records, policies, documents, claims, and payments",
  "Pipeline for prospects, from first inquiry to bound",
  "Renewals with escalation and price-change tracking",
  "Commissions: splits, statements, payouts (Payday)",
  "Reports: book of business, production, retention, executive view",
  "Book import wizard (CSV and PDF) with dedupe and review staging",
  "Client portal: passwordless, read-only policy access for insureds",
];

function Check({ color = "#3B6FA0" }: { color?: string }) {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      stroke={color}
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function usd(n: number) {
  return `$${n.toLocaleString()}`;
}

export function PricingLadder() {
  const [bandId, setBandId] = useState<string>("team");
  const band = BANDS.find((b) => b.id === bandId) ?? BANDS[1];

  const teamWord =
    band.size === 1
      ? "just you"
      : band.size > 50
        ? "a team over 50"
        : `a team of ${band.label}`;

  return (
    <div className="max-w-5xl mx-auto">
      {/* ─── THE ONE QUESTION ─── */}
      <fieldset className="text-center">
        <legend className="mx-auto text-[15px] md:text-[17px] font-medium text-ink">
          How many people work at your agency?
        </legend>
        <div
          className="mt-4 inline-flex flex-wrap justify-center gap-2"
          role="radiogroup"
          aria-label="Agency size"
        >
          {BANDS.map((b) => {
            const active = b.id === band.id;
            return (
              <button
                key={b.id}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setBandId(b.id)}
                className={`btn-radius px-4 py-2 text-[14px] font-medium border transition-colors ${
                  active
                    ? "bg-midnight text-paper border-midnight"
                    : "bg-pure text-charcoal border-ash hover:border-harbor hover:text-ink"
                }`}
              >
                {b.label}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-[13px] text-stone">
          Two products, one question. Both prices below are for {teamWord}.
        </p>
      </fieldset>

      {/* ─── THE TWO RUNGS ─── */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Markets */}
        <div className="bg-pure rounded-xl border border-ash p-8 flex flex-col">
          <div className="flex-1">
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-stone">
              Start here · free trial
            </p>
            <h3 className="mt-1 text-xl font-medium text-ink">Markets</h3>
            <p className="mt-2 text-[15px] text-charcoal leading-relaxed">
              Run every carrier relationship in one place, and never guess
              appetite again. No system of record, so nothing has to move.
            </p>

            {band.size === 1 ? (
              <>
                <p className="mt-6 text-3xl font-medium text-ink tracking-tight">
                  Included in Agency
                </p>
                <p className="mt-1 text-[13px] text-stone">
                  At one person, Agency is the same {usd(PRICING.agency.solo.monthly)} and adds the
                  book. Start the free trial here if you want to see Markets
                  first; nothing has to move.
                </p>
              </>
            ) : band.marketsSelfServe ? (
              <>
                <p className="mt-6 text-3xl font-medium text-ink tracking-tight">
                  {usd(PRICING.markets.monthly)}
                  <span className="text-lg text-stone font-normal">/month</span>
                </p>
                <p className="mt-1 text-[13px] text-stone">
                  One price for {teamWord}. Live the same day.
                </p>
                <p className="mt-2 text-[13px] font-medium text-interactive">
                  <a
                    href={MARKETS_ANNUAL_URL}
                    className="underline underline-offset-4 hover:text-deep"
                  >
                    Or {usd(PRICING.markets.annual)}/year: twelve months for the
                    price of ten.
                  </a>
                </p>
              </>
            ) : (
              <>
                <p className="mt-6 text-3xl font-medium text-ink tracking-tight">
                  Demo first
                </p>
                <p className="mt-1 text-[13px] text-stone">
                  Markets is published flat at {usd(PRICING.markets.monthly)} for
                  teams of 1 to 15. Above 15 people, we set Markets up with you
                  after a demo, and the price stays per agency, never per person.
                </p>
              </>
            )}

            <div className="mt-6 space-y-3">
              {marketsIncludes.map((item) => (
                <div key={item} className="flex gap-3 text-[15px] text-charcoal">
                  <Check />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {band.marketsSelfServe ? (
            <>
              <a
                href={MARKETS_START_URL}
                className="cta-primary mt-8 block text-center bg-copper text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors"
              >
                Start free trial
              </a>
              <p className="mt-3 text-[13px] text-stone text-center">
                14 days free. No migration. Cancel anytime.
              </p>
            </>
          ) : (
            <>
              <a
                href={DEMO_PAGE}
                className="cta-secondary mt-8 block text-center border border-ash text-ink btn-radius px-6 py-3 text-[15px] font-medium hover:border-harbor transition-colors"
              >
                Book a 20-minute demo
              </a>
              <p className="mt-3 text-[13px] text-stone text-center">
                No migration. Cancel anytime.
              </p>
            </>
          )}
        </div>

        {/* Agency (visual anchor) */}
        <div className="relative bg-midnight rounded-xl p-8 overflow-hidden shadow-lg shadow-midnight/30 flex flex-col">
          <div className="absolute top-0 left-0 right-0 bg-anchor px-4 py-2">
            <p className="text-[12px] font-medium text-ice text-center tracking-wide">
              The whole agency, one login
            </p>
          </div>
          <div className="pt-8 flex-1">
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-slate">
              Then move the book · with a demo
            </p>
            <h3 className="mt-1 text-xl font-medium text-paper">Agency</h3>
            <p className="mt-2 text-[15px] text-mist leading-relaxed">
              Everything in Markets, plus the book. Your AMS, your CRM overlay,
              and your carrier tools collapse into one.
            </p>

            {band.agencyMonthly !== null ? (
              <>
                <p className="mt-6 text-3xl font-medium text-paper tracking-tight">
                  {usd(band.agencyMonthly)}
                  <span className="text-lg text-slate font-normal">/month</span>
                </p>
                <p className="mt-1 text-[13px] text-slate">
                  {band.size === 1
                    ? "One person. Everything in Markets, plus the book."
                    : `For ${band.label} people. Hire inside your band and the price does not move.`}
                </p>
                {band.agencyAnnual !== null && (
                  <p className="mt-2 text-[13px] text-ice">
                    Or {usd(band.agencyAnnual)}/year: eleven months&rsquo; price,
                    and the book import free.
                  </p>
                )}
              </>
            ) : (
              <>
                <p className="mt-6 text-3xl font-medium text-paper tracking-tight">
                  Custom
                </p>
                <p className="mt-1 text-[13px] text-slate">
                  Above 50 people we quote on the call. Same product, still by
                  agency size, still never per person.
                </p>
              </>
            )}

            <p className="mt-4 text-[14px] leading-relaxed text-ice">
              Same product at every price. Nothing is withheld, you just pay for
              your size.
            </p>

            <div className="mt-6 space-y-3">
              {agencyIncludes.map((item) => (
                <div key={item} className="flex gap-3 text-[15px] text-mist">
                  <Check color="#7BA3CC" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <a
            href={DEMO_PAGE}
            className="cta-primary mt-8 block text-center bg-copper text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors"
          >
            Book an Agency demo
          </a>
          <p className="mt-3 text-[13px] text-slate text-center">
            {IMPORT_TERMS.annual}. {IMPORT_TERMS.monthly}.
          </p>
        </div>
      </div>
    </div>
  );
}
