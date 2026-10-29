import type { Metadata } from "next";
import { pricingFaqs } from "./faqData";
import { Film } from "@/components/iq/Film";
import { PlanCards } from "@/components/iq/PlanCards";
import { CtaLink, FaqSection, FinalCta, SectionHead } from "@/components/iq/Blocks";
import {
  AGENCY_OS_DEMO_URL,
  INTELLIGENCE as I,
  PRICING,
  START_FREE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `Pricing | Free, Intelligence $${I.monthly}/agency, Agency OS by size | HarborIQ`,
  description: `Published pricing for independent insurance agencies. Free agency workspace. Intelligence is $${I.monthly} per agency per month or $${I.annual}/year with ${I.checksPerMonth} shared carrier checks and optional $${I.pack.price} packs. Agency OS from $${PRICING.agency.solo.monthly}/month by agency size. Never per person.`,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: `Pricing | Intelligence $${I.monthly} per agency | HarborIQ`,
    description: `Free workspace. Intelligence $${I.monthly}/month, ${I.checksPerMonth} carrier checks shared across your agency. Agency OS priced by agency size, never per person.`,
    url: "/pricing",
    images: [{ url: "/og/pricing.png", width: 1200, height: 630 }],
  },
};

const money = (n: number) => `$${n.toLocaleString("en-US")}`;

const agencyBands = [
  { seats: "Solo", monthly: PRICING.agency.solo.monthly },
  { seats: "2 to 5 people", monthly: PRICING.agency.team.monthly },
  { seats: "6 to 15 people", monthly: PRICING.agency.os.monthly },
  ...PRICING.large.map((b) => ({ seats: b.seats, monthly: b.monthly })),
];

/* Static build-time data serialized with JSON.stringify: no user input reaches it. */
const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "HarborIQ",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: [
    {
      "@type": "Offer",
      name: "HarborIQ Free Agency Workspace",
      price: "0",
      priceCurrency: "USD",
      description: "Private carrier contacts, license and CE reminders, limited carrier discovery, and an optional agency profile.",
    },
    {
      "@type": "Offer",
      name: "HarborIQ Intelligence",
      price: String(I.monthly),
      priceCurrency: "USD",
      description: `Per agency per month. ${I.checksPerMonth} carrier checks each month, shared across the agency, with sources you can inspect.`,
    },
    {
      "@type": "Offer",
      name: "HarborIQ Intelligence (annual)",
      price: String(I.annual),
      priceCurrency: "USD",
      description: `Per agency per year, billed upfront. ${I.checksPerMonth} carrier checks each month.`,
    },
    {
      "@type": "Offer",
      name: "HarborIQ carrier check pack",
      price: String(I.pack.price),
      priceCurrency: "USD",
      description: `${I.pack.checks} additional carrier checks. One-time purchase, never automatic.`,
    },
    ...agencyBands.map((b) => ({
      "@type": "Offer",
      name: `HarborIQ Agency OS (${b.seats})`,
      price: String(b.monthly),
      priceCurrency: "USD",
      description: "Full agency workspace priced by agency size. Identical features at every price.",
    })),
  ],
};

/* What Agency OS includes, built up from the two plans above it (2026-10-28). */
const OS_INCLUDES: { title: string; items: string[]; added?: boolean; replaces?: string }[] = [
  {
    title: "Everything in the free workspace",
    items: ["Underwriter contacts and portal links", "License and CE reminders", "Your agency profile"],
  },
  {
    title: "Everything in Intelligence",
    items: ["Carrier questions answered with the source", "Your carrier guides, searchable", "Carrier appetite comparison"],
  },
  {
    title: "Your AMS",
    added: true,
    items: ["Client records and policies", "Documents, claims, and payments", "Commissions and payouts", "Book of business reports"],
    replaces: "EZLynx, HawkSoft, Applied Epic, NowCerts",
  },
  {
    title: "Your CRM",
    added: true,
    items: ["Pipeline from first call to bound", "Renewals flagged 60 days out", "Cross-sell and follow-up views", "Team roles and visibility"],
    replaces: "AgencyZoom, GoHighLevel",
  },
];

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      {/* ─── Hero ─── */}
      <section className="bg-paper pb-6 pt-14 md:pb-10 md:pt-20" aria-labelledby="pricing-heading">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="iq-eyebrow mb-4">Three starting points. One agency.</p>
          <h1 id="pricing-heading" className="mx-auto max-w-4xl text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
            Get the answers you need. Choose how much work to&nbsp;bring.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed text-charcoal md:text-[19px]">
            Start free. Add Intelligence for your whole agency at ${I.monthly} a month. Run the whole agency on Agency OS when you&rsquo;re
            ready. Published, per agency, never per person.
          </p>
        </div>
      </section>

      {/* ─── Plans ─── */}
      <section className="bg-paper pb-14 pt-8 md:pb-20" aria-label="Plan comparison">
        <div className="mx-auto max-w-6xl px-6">
          <PlanCards detailed />
        </div>
      </section>

      {/* ─── How checks work ─── */}
      <section className="bg-linen py-14 md:py-20" aria-labelledby="usage-heading">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead
            id="usage-heading"
            eyebrow="How usage works"
            heading="Count carrier checks. Not tokens."
            sub={`One carrier check is a question and its source-backed answer. Your agency shares ${I.checksPerMonth} a month, about 15 per business day, with no daily limit. Full book analysis and operational workflows belong to Agency OS.`}
          />
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {[
              ["Know what you have left.", "Your remaining balance is always on screen. No token math."],
              [
                `Add more in $${I.pack.price} packs.`,
                `Each pack adds ${I.pack.checks} checks. You see the quantity and the one-time price before you pay. Your subscription stays at $${I.monthly}/month or $${I.annual}/year.`,
              ],
              [
                "Stop when you want.",
                "Nothing is bought automatically. If you use your allowance, new research pauses until the reset or a pack you approve. Earlier answers stay available.",
              ],
            ].map(([h, p], i) => (
              <div key={h} className="iq-card p-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ice">
                  <span className="text-lg font-medium text-interactive">{i + 1}</span>
                </div>
                <h3 className="text-lg font-medium text-ink">{h}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Agency OS bands ─── */}
      <section className="scroll-mt-16 bg-paper py-14 md:py-20" id="agency-os" aria-labelledby="agency-pricing-heading">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead
            id="agency-pricing-heading"
            eyebrow="Agency OS · The full platform"
            heading={<>Everything in Free and Intelligence. Plus your AMS and your CRM, in one&nbsp;login.</>}
            sub="When you're ready to run the whole agency on HarborIQ. Same product at every size. Nothing is withheld, you pay for your size."
          />

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OS_INCLUDES.map((col) => (
              <div
                key={col.title}
                className={`flex flex-col rounded-xl border p-6 ${col.added ? "border-anchor bg-anchor" : "border-ash bg-paper"}`}
              >
                <p className={`text-[12px] font-medium uppercase tracking-[0.12em] ${col.added ? "text-slate" : "text-stone"}`}>
                  {col.added ? "Added in Agency OS" : "Included"}
                </p>
                <h3 className={`mt-2 text-[19px] font-medium leading-snug tracking-tight ${col.added ? "text-paper" : "text-ink"}`}>
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {col.items.map((it) => (
                    <li key={it} className={`flex gap-2.5 text-[14px] leading-relaxed ${col.added ? "text-mist" : "text-charcoal"}`}>
                      <span className={`font-medium ${col.added ? "text-slate" : "text-success"}`} aria-hidden="true">✓</span>
                      {it}
                    </li>
                  ))}
                </ul>
                {col.replaces && (
                  <p className="mt-auto border-t border-white/10 pt-3 text-[12.5px] leading-relaxed text-slate">
                    Replaces {col.replaces}
                  </p>
                )}
              </div>
            ))}
          </div>

          <h3 className="mt-14 text-center text-[20px] font-medium tracking-tight text-ink">
            Priced by agency size. Everyone in your band is included.
          </h3>
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {agencyBands.map((b) => (
              <div key={b.seats} className="rounded-xl border border-ash bg-linen px-4 py-5 text-center">
                <span className="block text-[13px] text-stone">{b.seats}</span>
                <strong className="mt-1 block text-[26px] font-medium tracking-tight text-anchor">
                  {money(b.monthly)}
                  <small className="text-[14px] font-normal tracking-normal text-stone">/mo</small>
                </strong>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-center text-[14px] leading-relaxed text-stone">
            Above 50 people: custom pricing. Annual prepay is 11 times the monthly fee, with the book import included.
            On monthly billing, the book import is a one-time fee equal to one month. Intelligence allowances and packs
            do not apply to Agency OS.
          </p>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-ash bg-linen px-6 py-5">
              <h3 className="text-[15px] font-medium text-ink">What is one more policy worth?</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                One extra policy earning <span className="font-medium text-ink">$500 in agency commission</span> covers
                the <span className="font-medium text-ink">${PRICING.agency.team.monthly} Agency OS subscription</span>{" "}
                for that month.
              </p>
              <p className="mt-2 text-[13px] text-stone">
                Illustrative gross commission before servicing costs. Not a promise of additional business.
              </p>
            </div>
            <div className="rounded-xl border border-ash bg-linen px-6 py-5">
              <h3 className="text-[15px] font-medium text-ink">The book import is the upgrade, not a project</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                Moving your book into Agency OS is one import measured in days, done with you. Anything the import
                cannot place is staged for your review instead of guessed.
              </p>
              <p className="mt-2 text-[13px] text-stone">Your data stays yours, always exportable, no extraction fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Setup ─── */}
      <section className="bg-anchor py-14 md:py-20" aria-labelledby="setup-heading">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[1fr_1.1fr] md:gap-14">
          <div>
            <p className="iq-eyebrow mb-4 !text-slate">Your tools, your choice</p>
            <h2 id="setup-heading" className="text-2xl font-medium leading-tight tracking-tight text-paper md:text-3xl">
              Start with one question. Move more when it helps.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-mist">
              Try a carrier question, add your guides or an agency export when it helps, and keep the tools you already
              have. When you move the book into Agency OS, the import is done with you.
            </p>
          </div>
          <Film slug="getting-your-data-in" label="Getting your data in" caption="How the Agency OS import works, with demo data." dark />
        </div>
      </section>

      <FaqSection heading="Straight answers before you choose." items={pricingFaqs} />

      <FinalCta
        heading="Start with what helps today."
        body="Keep a carrier contact handy, set one reminder, or try a carrier question. The free workspace does not need an Intelligence subscription."
        action={<CtaLink href={START_FREE_URL}>Set up your free workspace</CtaLink>}
        secondary={<CtaLink href={AGENCY_OS_DEMO_URL} variant="navy">Book an Agency OS walkthrough</CtaLink>}
      />
    </>
  );
}
