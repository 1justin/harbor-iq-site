import type { Metadata } from "next";
import { CtaSection } from "@/components/CtaSection";
import { DEMO_URL, IMPORT_TERMS, PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HarborIQ Agency | Your AMS, CRM, and Carrier Tools. One Login.",
  description:
    "The full agency operating system: clients, policies, pipeline, renewals, commissions, reports, and the carrier intelligence layer, in one login. $199/mo solo, $399 for 2 to 5 people, $599 for 6 to 15. Identical features at every price.",
  alternates: { canonical: "/agency" },
  openGraph: {
    title: "HarborIQ Agency | Your AMS, CRM, and Carrier Tools. One Login.",
    description:
      "One login replaces the stack. Priced by agency size, never per person. Free book import with annual prepay.",
    url: "/agency",
  },
};

const MODULES = [
  {
    title: "Clients and policies",
    body: "One record per client: policies, documents, claims, payments, and communications, with encrypted, audited storage for sensitive data.",
  },
  {
    title: "Pipeline",
    body: "Every prospect from first inquiry to bound, including the one who said call me in six months. Your AMS forgets them. This does not.",
  },
  {
    title: "Renewals",
    body: "Surfaced 60 days early with escalation, re-quote flags, and price-change tracking. Retention is where independent agencies win or bleed.",
  },
  {
    title: "Payday",
    body: "Commissions with splits, per-producer statements, and payout tracking. Producers stop asking where their money is.",
  },
  {
    title: "Reports",
    body: "Book of business, production ranking, retention, and an executive view. Numbers you can actually run the agency from.",
  },
  {
    title: "Everything in Markets",
    body: "Carrier Ask with cited answers, Carrier News, the login vault, the self-building knowledge base, team chat, and license and CE tracking, included.",
  },
];

export default function AgencyPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-anchor py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[13px] font-medium text-ice uppercase tracking-wider mb-4">
            HarborIQ Agency
          </p>
          <h1 className="text-3xl md:text-5xl font-medium text-paper leading-tight tracking-tight">
            Your AMS, your CRM, and your carrier tools. One&nbsp;login.
          </h1>
          <p className="mt-5 text-[17px] md:text-[19px] text-mist leading-relaxed max-w-2xl mx-auto">
            The whole agency runs here, all day. ${PRICING.agency.solo.monthly}/mo
            solo, ${PRICING.agency.team.monthly}/mo for 2 to 5 people,{" "}
            ${PRICING.agency.os.monthly}/mo for 6 to 15. Same product at every
            price. Nothing is withheld, you just pay for your size.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary bg-copper text-white btn-radius px-7 py-3.5 text-[16px] font-medium hover:bg-bronze transition-colors"
            >
              Book an Agency demo
            </a>
          </div>
          <p className="mt-4 text-[13px] text-mist">
            {IMPORT_TERMS.annual}. {IMPORT_TERMS.monthly}. Never a fee per
            person.
          </p>
        </div>
      </section>

      {/* ─── MODULES ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center max-w-3xl mx-auto mb-12">
            The stack, collapsed.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MODULES.map((m) => (
              <div key={m.title}>
                <h3 className="text-[17px] font-medium text-ink mb-2">
                  {m.title}
                </h3>
                <p className="text-[15px] text-charcoal leading-relaxed">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE IMPORT PROMISE ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
            The switch
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight">
            The import is the upgrade, not a&nbsp;project.
          </h2>
          <div className="mt-6 space-y-4 text-[16px] text-charcoal leading-relaxed">
            <p>
              Our wizard reads CSV and PDF exports from your current system,
              deduplicates, matches carrier names, and stages anything it
              cannot place for your review instead of guessing. Onboarding is
              measured in days. One incumbent quoted an agency 3 to 4 months
              and $25,000; we think that says everything about whose software
              the migration serves.
            </p>
            <p>
              Not ready to move the book? Start with{" "}
              <a
                href="/markets"
                className="text-interactive underline underline-offset-4"
              >
                Markets
              </a>{" "}
              at ${PRICING.markets.monthly}/mo. It runs alongside your current
              AMS, and the upgrade to Agency is one import, whenever you say
              so.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
