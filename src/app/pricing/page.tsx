import type { Metadata } from "next";
import { FAQ } from "./FAQ";
import { pricingFaqs } from "./faqData";
import {
  DEMO_URL,
  IMPORT_TERMS,
  MARKETS_ANNUAL_URL,
  MARKETS_START_URL,
  PRICING,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing | Markets $199 flat, Agency from $199 | HarborIQ",
  description:
    "Published pricing for independent insurance agencies. Markets is $199/month at any size, self-serve, no migration. Agency runs the whole operation: $199 solo, $399 for 2 to 5 people, $599 for 6 to 15. Never per person.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Markets $199 flat, Agency from $199 | HarborIQ",
    description:
      "Published pricing, never per person. Markets $199/month at any size. Agency $199 solo, $399 for 2 to 5, $599 for 6 to 15. Same product at every price.",
    url: "/pricing",
  },
};

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

/*
 * JSON-LD blocks below use the standard Next.js pattern. Content is static,
 * build-time data serialized with JSON.stringify: no user input reaches it.
 */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "HarborIQ",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: [
    {
      "@type": "Offer",
      name: "HarborIQ Markets",
      price: String(PRICING.markets.monthly),
      priceCurrency: "USD",
      description:
        "Carrier intelligence layer for independent insurance agencies. Flat monthly price at any size from 1 to 15 people. Self-serve, no migration.",
    },
    {
      "@type": "Offer",
      name: "HarborIQ Agency (solo)",
      price: String(PRICING.agency.solo.monthly),
      priceCurrency: "USD",
      description: "Full agency operating system for a 1-person agency.",
    },
    {
      "@type": "Offer",
      name: "HarborIQ Agency (2 to 5 people)",
      price: String(PRICING.agency.team.monthly),
      priceCurrency: "USD",
      description:
        "Full agency operating system for 2 to 5 person agencies. Identical features at every price.",
    },
    {
      "@type": "Offer",
      name: "HarborIQ Agency (6 to 15 people)",
      price: String(PRICING.agency.os.monthly),
      priceCurrency: "USD",
      description:
        "Full agency operating system for 6 to 15 person agencies. Identical features at every price.",
    },
    {
      "@type": "Offer",
      name: "HarborIQ Markets — Annual",
      price: String(PRICING.markets.annual),
      priceCurrency: "USD",
      description:
        "Twelve months of HarborIQ Markets for the price of ten.",
    },
    {
      "@type": "Offer",
      name: "HarborIQ Agency — Annual (2 to 5 people)",
      price: String(PRICING.agency.team.annual),
      priceCurrency: "USD",
      description:
        "Eleven months' price for twelve months of HarborIQ Agency, with the book import free.",
    },
    {
      "@type": "Offer",
      name: "HarborIQ Agency — Annual (6 to 15 people)",
      price: String(PRICING.agency.os.annual),
      priceCurrency: "USD",
      description:
        "Eleven months' price for twelve months of HarborIQ Agency, with the book import free.",
    },
  ],
};

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
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* ─── HEADER ─── */}
      <section className="bg-paper pt-14 pb-6 md:pt-20 md:pb-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-medium text-ink leading-tight tracking-tight">
            Priced by your size. Never per&nbsp;person.
          </h1>
          <p className="mt-4 text-[17px] md:text-[19px] text-charcoal leading-relaxed max-w-2xl mx-auto">
            Published prices, month to month, cancel anytime. One product, two
            ways in: start with your markets, or run the whole agency.
          </p>
        </div>
      </section>

      {/* ─── THE TWO RUNGS ─── */}
      <section className="bg-paper py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start max-w-5xl mx-auto">
            {/* Markets */}
            <div className="bg-pure rounded-xl border border-ash p-8 flex flex-col">
              <div className="flex-1">
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-stone">
                  Start here · self-serve
                </p>
                <h3 className="mt-1 text-xl font-medium text-ink">Markets</h3>
                <p className="mt-2 text-[15px] text-charcoal leading-relaxed">
                  Run every carrier relationship in one place, and never guess
                  appetite again. No system of record, so nothing has to move.
                </p>
                <p className="mt-6 text-3xl font-medium text-ink tracking-tight">
                  ${PRICING.markets.monthly}
                  <span className="text-lg text-stone font-normal">/month</span>
                </p>
                <p className="mt-1 text-[13px] text-stone">
                  {PRICING.markets.seats}, one price. Live the same day.
                </p>
                <p className="mt-2 text-[13px] font-medium text-interactive">
                  <a
                    href={MARKETS_ANNUAL_URL}
                    className="underline underline-offset-4 hover:text-deep"
                  >
                    Or ${PRICING.markets.annual.toLocaleString()}/year: twelve
                    months for the price of ten.
                  </a>
                </p>
                <div className="mt-6 space-y-3">
                  {marketsIncludes.map((item) => (
                    <div key={item} className="flex gap-3 text-[15px] text-charcoal">
                      <Check />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={MARKETS_START_URL}
                className="cta-primary mt-8 block text-center bg-copper text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors"
              >
                Start with Markets
              </a>
              <p className="mt-3 text-[13px] text-stone text-center">
                14-day free trial. No migration. Cancel anytime.
              </p>
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
                  Everything in Markets, plus the book. Your AMS, your CRM
                  overlay, and your carrier tools collapse into one.
                </p>

                <div className="mt-6 divide-y divide-anchor/60 rounded-lg border border-anchor/60">
                  {[
                    PRICING.agency.solo,
                    PRICING.agency.team,
                    PRICING.agency.os,
                  ].map((band) => (
                    <div
                      key={band.seats}
                      className="flex items-baseline justify-between px-4 py-3"
                    >
                      <span className="text-[15px] text-mist">{band.seats}</span>
                      <span className="text-[20px] font-medium text-paper tracking-tight">
                        ${band.monthly}
                        <span className="text-[13px] text-slate font-normal">
                          /mo
                        </span>
                      </span>
                    </div>
                  ))}
                  <div className="flex items-baseline justify-between px-4 py-3">
                    <span className="text-[15px] text-mist">Above 15 people</span>
                    <span className="text-[14px] font-medium text-ice">
                      Talk to us
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-[14px] leading-relaxed text-ice">
                  Same product at every price. Nothing is withheld, you just pay
                  for your size.
                </p>
                <p className="mt-2 text-[13px] text-slate">
                  Annual: ${PRICING.agency.solo.annual.toLocaleString()} solo, ${PRICING.agency.team.annual.toLocaleString()} for
                  2 to 5, ${PRICING.agency.os.annual.toLocaleString()} for 6 to 15. Eleven months&rsquo;
                  price, and the book import free.
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
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary mt-8 block text-center bg-copper text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors"
              >
                Book an Agency demo
              </a>
              <p className="mt-3 text-[13px] text-slate text-center">
                {IMPORT_TERMS.annual}. {IMPORT_TERMS.monthly}.
              </p>
            </div>
          </div>

          {/* Import callout */}
          <div className="max-w-5xl mx-auto mt-8">
            <div className="bg-linen border border-ash rounded-xl px-6 py-5">
              <h3 className="text-[15px] font-medium text-ink">
                The book import is the upgrade, not a project
              </h3>
              <p className="mt-2 text-[15px] text-charcoal leading-relaxed">
                Moving from Markets to Agency, or from another AMS, is one
                import measured in days. {IMPORT_TERMS.annual};{" "}
                {IMPORT_TERMS.monthly.toLowerCase()}. Our wizard reads CSV and
                PDF exports, deduplicates, matches carrier names, and stages
                anything it cannot place for your review instead of guessing.
                One incumbent quoted an agency 3 to 4 months and $25,000 to
                onboard. We think that tells you everything about whose software
                the migration serves.
              </p>
              <p className="mt-2 text-[13px] text-stone">
                Your data stays yours, always exportable, no extraction fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AI USAGE ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
              AI usage
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight">
              Generous AI included. No surprise bills. No meter anxiety.
            </h2>
            <p className="mt-3 text-[16px] text-charcoal leading-relaxed max-w-2xl mx-auto">
              We want your team asking Carrier Ask on every quote, so we will
              never make you ration it. Every plan includes an allowance sized
              for real agency work, and a $50 per month overage cap is on by
              default. You see usage in the app, you get a warning at 80%, and
              you will never open an invoice you did not expect.
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-[15px] text-charcoal leading-relaxed">
              Each month HarborIQ also shows you the receipt: how many carrier
              questions it answered, how many renewals it flagged, and how many
              clients it watched for you. You should know what you are paying
              for, every cycle.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHAT YOUR CURRENT STACK REALLY COSTS ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink tracking-tight text-center mb-3">
            What your current stack really costs.
          </h2>
          <p className="text-[16px] text-charcoal leading-relaxed text-center max-w-2xl mx-auto mb-10">
            Most agencies pay for an AMS, then bolt a CRM overlay (AgencyZoom or
            GoHighLevel) on top because the AMS cannot track a prospect. Two
            logins, two data models, one sync that is always behind.
          </p>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-ash">
                  <th className="py-3 pr-4 text-[13px] font-medium text-stone uppercase tracking-wider">
                    Agency size
                  </th>
                  <th className="py-3 px-4 text-[14px] font-medium text-success">
                    HarborIQ Agency
                  </th>
                  <th className="py-3 px-4 text-[14px] font-medium text-charcoal">
                    HawkSoft
                  </th>
                  <th className="py-3 px-4 text-[14px] font-medium text-charcoal">
                    NowCerts (Momentum)
                  </th>
                  <th className="py-3 px-4 text-[14px] font-medium text-charcoal">
                    AMS + AgencyZoom or GHL
                  </th>
                </tr>
              </thead>
              <tbody className="text-[15px]">
                <tr className="border-b border-ash/60">
                  <td className="py-3 pr-4 text-charcoal">1-person agency</td>
                  <td className="py-3 px-4 text-success font-medium">$199/mo</td>
                  <td className="py-3 px-4 text-charcoal">~$344/mo</td>
                  <td className="py-3 px-4 text-charcoal">$99/mo</td>
                  <td className="py-3 px-4 text-charcoal">~$280 to $550/mo</td>
                </tr>
                <tr className="border-b border-ash/60">
                  <td className="py-3 pr-4 text-charcoal">5-person agency</td>
                  <td className="py-3 px-4 text-success font-medium">$399/mo</td>
                  <td className="py-3 px-4 text-charcoal">~$720/mo</td>
                  <td className="py-3 px-4 text-charcoal">$349/mo</td>
                  <td className="py-3 px-4 text-charcoal">~$580 to $900/mo</td>
                </tr>
                <tr className="border-b border-ash/60">
                  <td className="py-3 pr-4 text-charcoal">10-person agency</td>
                  <td className="py-3 px-4 text-success font-medium">$599/mo</td>
                  <td className="py-3 px-4 text-charcoal">~$1,190/mo</td>
                  <td className="py-3 px-4 text-charcoal">~$700/mo est.</td>
                  <td className="py-3 px-4 text-charcoal">~$800 to $1,400/mo</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-charcoal">Logins to manage</td>
                  <td className="py-3 px-4 text-success font-medium">1</td>
                  <td className="py-3 px-4 text-charcoal">1 (no CRM or AI)</td>
                  <td className="py-3 px-4 text-charcoal">1 (no CRM or AI)</td>
                  <td className="py-3 px-4 text-charcoal">2 or more</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="md:hidden space-y-4">
            {[
              {
                size: "1-person agency",
                harbor: "$199/mo",
                competitors: [
                  ["HawkSoft", "~$344/mo"],
                  ["NowCerts (Momentum)", "$99/mo"],
                  ["AMS + AgencyZoom or GHL", "~$280 to $550/mo"],
                ],
              },
              {
                size: "5-person agency",
                harbor: "$399/mo",
                competitors: [
                  ["HawkSoft", "~$720/mo"],
                  ["NowCerts (Momentum)", "$349/mo"],
                  ["AMS + AgencyZoom or GHL", "~$580 to $900/mo"],
                ],
              },
              {
                size: "10-person agency",
                harbor: "$599/mo",
                competitors: [
                  ["HawkSoft", "~$1,190/mo"],
                  ["NowCerts (Momentum)", "~$700/mo est."],
                  ["AMS + AgencyZoom or GHL", "~$800 to $1,400/mo"],
                ],
              },
            ].map((row) => (
              <div key={row.size} className="bg-pure border border-ash rounded-xl p-5">
                <p className="text-[13px] font-medium text-stone uppercase tracking-wider">
                  {row.size}
                </p>
                <p className="mt-2 text-[17px] font-medium text-success">
                  HarborIQ Agency {row.harbor}
                </p>
                <div className="mt-3 space-y-1 text-[14px]">
                  {row.competitors.map(([name, price]) => (
                    <div key={name} className="flex justify-between">
                      <span className="text-charcoal">{name}</span>
                      <span className="text-charcoal">{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[13px] text-stone text-center max-w-3xl mx-auto leading-relaxed">
            Published pricing as of July 2026: HawkSoft $250/mo base + $94/user;
            NowCerts Essentials $99/user, Business $349 for 5 users; AgencyZoom
            from $79/mo; GoHighLevel $97 to $297/mo plus usage fees for SMS,
            email, and AI. Stack ranges pair a mid-market AMS with one overlay.
            NowCerts is the cheapest established AMS, and a fine one; it has no
            CRM overlay, no carrier intelligence, and no AI, which is why so
            many of its agencies also pay for one of the tools in the last
            column.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink tracking-tight text-center mb-10">
            Frequently asked questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>

      {/* ─── DEMO BOOKING ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-ink tracking-tight">
            Want to see the whole agency run in one login?
          </h2>
          <p className="mt-3 text-[16px] text-charcoal leading-relaxed">
            Book a 15-minute Agency demo. No pitch deck. We&rsquo;ll show you
            the product and answer your questions.
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary inline-block mt-8 bg-interactive text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-deep transition-colors"
          >
            Book an Agency demo
          </a>
        </div>
      </section>
    </>
  );
}
