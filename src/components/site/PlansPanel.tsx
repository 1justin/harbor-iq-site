"use client";

import { useState } from "react";
import Link from "next/link";
import { INTELLIGENCE as I, START_FREE_URL, START_INTELLIGENCE_URL } from "@/lib/constants";

/**
 * The two-column plans block (mocked 2026-11-10, mock/conversion-2026-11-10.html).
 * Two typographic columns, a monthly/annual toggle, and the introductory offer.
 *
 * `intro` and `crm` are decided on the server and passed in, so this component
 * never reads the clock and cannot hydrate differently from what was rendered:
 *   - intro: the introductory offer is still running (introActive()).
 *   - crm:   the app delivers the free CRM and Intelligence reporting
 *            (LAUNCH.freeCrm). While false, nothing here may say "CRM",
 *            "pipeline" or "reporting": the free rung cannot open those yet.
 *
 * Copy follows the brand guide: no em dashes, sentence case, no urgency beyond
 * the stated December 31 deadline.
 */

const btnCopper = "cta-primary btn-radius inline-flex items-center justify-center bg-copper px-6 py-3 text-[15px] font-semibold text-midnight hover:bg-copper-light";
const btnNavy = "btn-radius inline-flex items-center justify-center bg-anchor px-6 py-3 text-[15px] font-semibold text-paper hover:bg-deep";

function Ticks({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2.5 border-t border-ash pt-5">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-[15px] text-charcoal"><span className="text-success" aria-hidden="true">✓</span>{t}</li>
      ))}
    </ul>
  );
}

export function PlansPanel({ intro, crm, copperCta = false }: { intro: boolean; crm: boolean; copperCta?: boolean }) {
  const [annual, setAnnual] = useState(false);

  const monthlyNow = intro ? I.intro.monthly : I.monthly;
  const annualNow = intro ? I.intro.annual : I.annual;
  const annualWas = intro ? I.intro.monthly * 12 : I.monthly * 12;

  const intelBullets = crm
    ? [
        "Everything in Free CRM",
        "AI carrier appetite and product research",
        "Answers backed by carrier guidelines, with citations",
        `${I.checksPerMonth} shared checks a month, optional top-ups`,
        "Reporting and analytics",
      ]
    : [
        "Carrier appetite and product research",
        "Answers backed by your carrier guides, with the page cited",
        `${I.checksPerMonth} carrier checks a month, shared by the whole team`,
        `Optional $${I.pack.price} packs of ${I.pack.checks} more checks. Never automatic.`,
      ];

  const freeBullets = crm
    ? [
        "Clients and prospects",
        "Sales pipeline",
        "Renewals and follow-ups",
        "Notes and relationship management",
        "Periodic CSV imports from your AMS",
        "Carrier contacts and a basic workspace",
      ]
    : ["Try carrier questions with sources", "Underwriter contacts and portal links", "License and CE reminders"];

  return (
    <div className="mt-8">
      <div role="group" aria-label="Billing period" className="inline-flex rounded-full border border-ash bg-paper p-[3px]">
        {([["Monthly", false], ["Annual", true]] as const).map(([label, isAnnual]) => (
          <button
            key={label}
            type="button"
            aria-pressed={annual === isAnnual}
            onClick={() => setAnnual(isAnnual)}
            className={`min-h-[38px] rounded-full px-4 text-[14px] ${annual === isAnnual ? "bg-anchor font-semibold text-paper" : "text-charcoal"}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid border-t border-ink md:grid-cols-2">
        {/* Intelligence */}
        <div id="intelligence" className="relative scroll-mt-24 py-8 md:pr-10">
          <span className="absolute -top-px left-0 h-[3px] w-full bg-interactive" aria-hidden="true" />
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-[22px] font-medium text-ink">Intelligence</h3>
            {intro && <span className="rounded-full bg-ice px-2.5 py-0.5 text-[12px] font-semibold text-deep">Introductory price</span>}
          </div>
          <p className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-ink">
            <span className="text-[46px] font-medium leading-none tracking-tight">${annual ? annualNow : monthlyNow}</span>
            <span className="text-[15px] text-charcoal">{annual ? (intro ? "for your first year" : "a year, per agency") : "a month, per agency"}</span>
            {intro && (
              <span className="text-[15px] text-stone">
                <s>${annual ? annualWas : I.monthly}</s> {annual ? "at the monthly rate" : "standard price"}
              </span>
            )}
          </p>
          {annual && <p className="mt-2 text-[13px] font-semibold text-success">Get 2 months free with annual billing</p>}
          <p className="mt-3 max-w-[46ch] text-[15px] text-charcoal">
            {intro
              ? `${annual ? `Standard annual price is $${I.annual} a year, instead of $${I.monthly * 12}. ` : `Lock in $${I.intro.monthly} a month for your first ${I.intro.months} months. `}Start a paid subscription by ${I.intro.untilLabel}. Your whole team is included.`
              : `${annual ? `$${I.annual} a year instead of $${I.monthly * 12}. ` : ""}Your whole team is included, up to 30 people.`}
          </p>
          <Ticks items={intelBullets} />
          <p className="mt-5 max-w-[48ch] text-[13.5px] leading-relaxed text-stone">
            {annual
              ? `Billed once for the year. Cancel any time and you keep access through the end of the year; it simply will not renew. ${intro ? `After year one it renews at $${I.annual} a year, and we ` : "We "}email you first.`
              : `${intro ? `A price guarantee, not a ${I.intro.months}-month commitment: ` : ""}cancel any time, effective at the end of your billing period.${intro ? ` After ${I.intro.months} months it renews at $${I.monthly} a month, and we email you first.` : ""}`}
          </p>
          <p className="mt-2 max-w-[48ch] text-[13.5px] text-stone">Larger than 30 people? <Link href="/demo" className="text-interactive underline-offset-4 hover:underline">Ask us for a quote</Link>.</p>
          <Link href={START_INTELLIGENCE_URL} className={`${copperCta ? btnCopper : btnNavy} mt-6`}>Start Intelligence</Link>
        </div>

        {/* Free */}
        <div className="border-t border-ash py-8 md:border-l md:border-t-0 md:pl-10">
          <h3 className="text-[22px] font-medium text-ink">{crm ? "Free CRM" : "Free workspace"}</h3>
          <p className="mt-4 flex items-baseline gap-3 text-ink">
            <span className="text-[46px] font-medium leading-none tracking-tight">$0</span>
            <span className="text-[15px] text-charcoal">for your whole agency</span>
          </p>
          <p className="mt-3 max-w-[46ch] text-[15px] text-charcoal">
            {crm
              ? "Keep your AMS. Start with one client and add the rest as you go, or import a CSV when you are ready. Add Intelligence when the team wants carrier answers."
              : "Not ready for a subscription? Start here and move up when the team asks for more."}
          </p>
          <Ticks items={freeBullets} />
          <p className="mt-5 text-[13.5px] text-stone">No card. No per-person fee.</p>
          <Link href={START_FREE_URL} className={`${btnNavy} mt-6`}>{crm ? "Start the free CRM" : "Start the free workspace"}</Link>
        </div>
      </div>
    </div>
  );
}
