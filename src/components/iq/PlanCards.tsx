import Link from "next/link";
import {
  AGENCY_OS_DEMO_URL,
  INTELLIGENCE as I,
  LAUNCH,
  PRICING,
  START_FREE_URL,
  START_INTELLIGENCE_URL,
} from "@/lib/constants";

/**
 * The plan decision (2026-10-28): two cards, Free then Intelligence, because
 * the site leans visitors into Intelligence, sold as one price for the whole
 * agency (2026-10-28: lead with "whole agency", not how often they ask). Agency OS is a
 * quieter navy band for owners running the whole agency, not a third equal
 * choice. `detailed` is the pricing page version with the full lists.
 */

const FREE_SHORT = [
  "Try carrier questions, with sources",
  "Underwriter contacts and portal links",
  "License and CE reminders",
];
const FREE_FULL = [
  "Private underwriter contacts and portal links",
  "License and CE reminders for the dates you enter",
  "Limited carrier discovery with sources and conditions",
  "A small private guide upload",
  "Optional team invitations",
  "Shareable specialty profile, published only with your approval",
];
const INTEL_SHORT = [
  `${I.checksPerMonth} carrier checks a month, whole team`,
  "Your own carrier guides, searchable",
  `Optional $${I.pack.price} top-ups, never automatic`,
];
const INTEL_FULL = [
  `${I.checksPerMonth} carrier checks each month, shared across your agency`,
  "Your agency's carrier guidance, searchable",
  "Answers with sources you can inspect",
  "Carrier appetite comparison",
  "Basic book insights from the exports you provide",
  ...(LAUNCH.chatgpt ? ["Use it in HarborIQ or from ChatGPT"] : []),
];

function Checks({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex-1 space-y-2.5 border-t border-ash pt-5">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-charcoal">
          <span className="font-medium text-success" aria-hidden="true">✓</span>
          {t}
        </li>
      ))}
    </ul>
  );
}

export function PlanCards({ detailed = false, className = "" }: { detailed?: boolean; className?: string }) {
  return (
    <div className={`mx-auto max-w-4xl ${className}`}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <article className="flex flex-col rounded-xl border border-ash bg-paper p-7 md:p-8">
          <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-stone">Start here</p>
          <h3 className="mt-2 text-[24px] font-medium tracking-tight text-ink">Free workspace</h3>
          <p className="mt-3 text-[40px] font-medium leading-none tracking-tight text-anchor">
            $0<span className="ml-2 text-[15px] font-normal tracking-normal text-stone">per agency</span>
          </p>
          <p className="mt-3 text-[14px] text-stone">Useful without a subscription. No card needed.</p>
          <Checks items={detailed ? FREE_FULL : FREE_SHORT} />
          <Link
            href={START_FREE_URL}
            className="cta-primary iq-btn iq-btn-copper mt-7 w-full"
          >
            Start free
          </Link>
        </article>

        <article
          id={detailed ? "intelligence" : undefined}
          className="relative flex scroll-mt-24 flex-col rounded-xl border border-interactive bg-paper p-7 shadow-lg ring-1 ring-interactive md:p-8"
        >
          <span className="absolute -top-3 left-7 rounded-full bg-interactive px-3 py-1 text-[12px] font-medium text-white">
            One price. Your whole agency.
          </span>
          <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-stone">Carrier research for the whole team</p>
          <h3 className="mt-2 text-[24px] font-medium tracking-tight text-ink">Intelligence</h3>
          <p className="mt-3 flex items-baseline gap-2 text-anchor">
            <span className="text-[52px] font-medium leading-none tracking-tight">${I.monthly}</span>
            <span className="text-[16px] font-medium leading-snug text-ink">
              a month
              <br />
              for your whole agency
            </span>
          </p>
          <div className="mt-4 flex items-center gap-3 rounded-lg bg-ice px-3.5 py-2.5">
            <span className="flex -space-x-2" aria-hidden="true">
              {["P", "J", "D", "M", "+"].map((x, i) => (
                <span
                  key={i}
                  className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-ice text-[11px] font-medium ${
                    x === "+" ? "bg-interactive text-white" : "bg-anchor text-paper"
                  }`}
                >
                  {x}
                </span>
              ))}
            </span>
            <span className="text-[14px] leading-snug text-ink">
              <span className="font-medium">Everyone on your team is included.</span> Not per person. Under $1 a day.
            </span>
          </div>
          <p className="mt-3 text-[14px] text-stone">
            Or ${I.annual} a year, billed upfront{detailed ? `. Saves $${I.annualSavings}.` : "."}
          </p>
          <Checks items={detailed ? INTEL_FULL : INTEL_SHORT} />
          {detailed && (
            <div className="mt-5 rounded-lg bg-ice px-4 py-3">
              <p className="text-[14px] font-medium text-ink">Need more? Add a ${I.pack.price} pack.</p>
              <p className="mt-1 text-[14px] leading-relaxed text-charcoal">
                {I.pack.checks} more carrier checks, only when you choose. No automatic top-ups or surprise bills.
              </p>
            </div>
          )}
          <Link href={START_INTELLIGENCE_URL} className="cta-primary iq-btn iq-btn-navy mt-7 w-full">
            Start Intelligence
          </Link>
        </article>
      </div>

      <div className="mt-6 flex flex-col gap-4 rounded-xl bg-anchor px-7 py-6 md:flex-row md:items-center md:justify-between">
        <p className="text-[15px] leading-relaxed text-mist">
          <span className="font-medium text-paper">Running the whole agency?</span> Agency OS adds your book, pipeline,
          and renewals. From ${PRICING.agency.solo.monthly} a month by agency size, never per person.
        </p>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
          <Link href={AGENCY_OS_DEMO_URL} className="cta-secondary iq-link iq-link-light">
            Book a walkthrough <span aria-hidden="true">→</span>
          </Link>
          {!detailed && (
            <Link href="/pricing#agency-os" className="iq-link iq-link-light text-[14px] !text-mist">
              Agency OS pricing
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
