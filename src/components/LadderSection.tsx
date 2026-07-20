import {
  DEMO_URL,
  IMPORT_TERMS,
  MARKETS_START_URL,
  PRICING,
} from "@/lib/constants";

/**
 * The two-rung ladder (ratified 2026-07-16): Markets flat at any size,
 * Agency priced by size with identical features. The only feature line in
 * the product is the book. This section replaces the abstract "new core"
 * diagram with the actual offer.
 */

const MARKETS_FEATURES = [
  "Carrier Ask: cited answers, with the source date on every citation",
  "Carrier profiles, reps, and function-specific contacts",
  "Login vault that ends the daily portal-and-MFA shuffle",
  "Carrier document library and Carrier News, summarized overnight",
  "A knowledge base that builds itself from your team's questions",
  "Team layer included: chat, training, license and CE tracking",
];

const AGENCY_FEATURES = [
  "Client records, policies, documents, claims, and payments",
  "Pipeline for the prospects your AMS forgets",
  "Renewals with escalation and price-change tracking",
  "Commissions: splits, statements, and payouts (Payday)",
  "Reports: book of business, production, retention, executive view",
  "Carrier News matched to your book: the 23 clients a change affects",
];

export function LadderSection() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="rounded-xl border border-harbor/40 bg-midnight/40 p-7 md:p-8">
        <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-slate">
          Start here · self-serve
        </p>
        <h3 className="mt-2 text-[26px] font-medium tracking-tight text-paper">
          Markets
        </h3>
        <p className="mt-1 text-[17px] text-mist">
          <span className="font-medium text-paper">
            ${PRICING.markets.monthly}/mo
          </span>{" "}
          · {PRICING.markets.seats.toLowerCase()} · whole team included
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-mist">
          Run every carrier relationship in one place and never guess appetite
          again. No system of record, no migration, nothing to move. Live the
          same day.
        </p>
        <ul className="mt-5 space-y-2.5">
          {MARKETS_FEATURES.map((f) => (
            <li key={f} className="flex gap-3 text-[14px] leading-relaxed text-mist">
              <span
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-harbor"
                aria-hidden="true"
              />
              {f}
            </li>
          ))}
        </ul>
        <a
          href={MARKETS_START_URL}
          className="cta-primary btn-radius mt-7 inline-block bg-copper px-6 py-3 text-[15px] font-medium text-white hover:bg-bronze"
        >
          Start with Markets
        </a>
      </div>

      <div className="rounded-xl border border-interactive/50 bg-midnight/40 p-7 md:p-8">
        <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-slate">
          Then move the book · with a demo
        </p>
        <h3 className="mt-2 text-[26px] font-medium tracking-tight text-paper">
          Agency
        </h3>
        <p className="mt-1 text-[17px] text-mist">
          <span className="font-medium text-paper">
            ${PRICING.agency.solo.monthly} solo · ${PRICING.agency.team.monthly}{" "}
            for 2 to 5 · ${PRICING.agency.os.monthly} for 6 to 15
          </span>
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-mist">
          Everything in Markets, plus the book. One login replaces the AMS, the
          CRM, and the carrier tools.{" "}
          <span className="text-paper">
            Same product at every price. Nothing is withheld, you just pay for
            your size.
          </span>
        </p>
        <ul className="mt-5 space-y-2.5">
          {AGENCY_FEATURES.map((f) => (
            <li key={f} className="flex gap-3 text-[14px] leading-relaxed text-mist">
              <span
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-interactive"
                aria-hidden="true"
              />
              {f}
            </li>
          ))}
        </ul>
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-secondary btn-radius mt-7 inline-block border border-mist/40 px-6 py-3 text-[15px] font-medium text-paper hover:border-paper"
        >
          Book an Agency demo
        </a>
        <p className="mt-3 text-[13px] text-slate">
          {IMPORT_TERMS.annual}. {IMPORT_TERMS.monthly}. Above 15 people, talk
          to&nbsp;us.
        </p>
      </div>
    </div>
  );
}
