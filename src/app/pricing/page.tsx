import type { Metadata } from "next";
import { Plans, TrustStrip, H2 } from "@/components/site/Bits";
import { ValueCalc } from "@/components/site/ValueCalc";
import { FaqSection, type Faq } from "@/components/iq/Blocks";
import { FAQ_CARRIER_CHECK, FAQ_KEEP_AMS, FAQ_SETUP } from "@/lib/faqs";
import { INTELLIGENCE as I, LAUNCH, introActive } from "@/lib/constants";

/**
 * Re-render hourly so the introductory offer, and the schema that describes
 * it, disappear on their own after December 31, 2026 (Next needs a literal here).
 */
export const revalidate = 3600;

export function generateMetadata(): Metadata {
  const intro = introActive();
  const free = LAUNCH.freeCrm ? "Free CRM" : "Free workspace";
  const lead = intro ? I.intro.monthly : I.monthly;
  const offer = intro
    ? ` Agencies that start a paid subscription by ${I.intro.untilLabel} pay $${I.intro.monthly} a month ($${I.intro.annual} for the first year) for their first ${I.intro.months} months.`
    : "";
  return {
    title: `Pricing | ${free}, Intelligence from $${lead} per agency | HarborIQ`,
    description: `Published pricing for independent insurance agencies. ${free}, $0. Intelligence is $${I.monthly} per agency per month or $${I.annual}/year for agencies up to 30 people, with ${I.checksPerMonth} shared carrier checks and optional $${I.pack.price} packs. Never per person.${offer}`,
    alternates: { canonical: "/pricing" },
    openGraph: {
      title: `Pricing | Intelligence from $${lead} per agency | HarborIQ`,
      description: `${free}, $0. Intelligence for the whole agency, up to 30 people, never per person.${intro ? ` Introductory $${I.intro.monthly} a month through ${I.intro.untilLabel}.` : ""}`,
      url: "/pricing",
      images: [{ url: "/og/pricing.png", width: 1200, height: 630 }],
    },
  };
}

/* Static build-time data serialized with JSON.stringify: no user input reaches it. */
function productSchema() {
  const intro = introActive();
  const unit = (price: number, unitCode: "MON" | "ANN") => ({ "@type": "UnitPriceSpecification", price: String(price), priceCurrency: "USD", unitCode });
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "HarborIQ",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: [
      {
        "@type": "Offer",
        name: LAUNCH.freeCrm ? "HarborIQ Free CRM" : "HarborIQ Free Agency Workspace",
        price: "0",
        priceCurrency: "USD",
        description: LAUNCH.freeCrm
          ? "Clients and prospects, sales pipeline, renewals and follow-ups, notes, periodic CSV imports from your AMS, and carrier contacts. Free for the whole agency."
          : "Private carrier contacts, license and CE reminders, and limited carrier checks.",
      },
      {
        "@type": "Offer",
        name: "HarborIQ Intelligence",
        price: String(I.monthly),
        priceCurrency: "USD",
        priceSpecification: unit(I.monthly, "MON"),
        description: `Standard price per agency per month, up to 30 people. ${I.checksPerMonth} carrier checks each month, shared across the agency, with sources you can inspect.`,
      },
      {
        "@type": "Offer",
        name: "HarborIQ Intelligence (annual)",
        price: String(I.annual),
        priceCurrency: "USD",
        priceSpecification: unit(I.annual, "ANN"),
        description: `Standard price per agency per year, billed upfront. Two months free. ${I.checksPerMonth} carrier checks each month.`,
      },
      ...(intro
        ? [
            {
              "@type": "Offer",
              name: "HarborIQ Intelligence, introductory price",
              price: String(I.intro.monthly),
              priceCurrency: "USD",
              priceSpecification: unit(I.intro.monthly, "MON"),
              priceValidUntil: I.intro.until,
              description: `Introductory price for agencies that start a paid subscription by ${I.intro.untilLabel}: $${I.intro.monthly} a month for the first ${I.intro.months} months, then $${I.monthly} a month. A price guarantee, not a contract; cancel any time.`,
            },
            {
              "@type": "Offer",
              name: "HarborIQ Intelligence (annual), introductory price",
              price: String(I.intro.annual),
              priceCurrency: "USD",
              priceSpecification: unit(I.intro.annual, "ANN"),
              priceValidUntil: I.intro.until,
              description: `Introductory first-year price for agencies that start by ${I.intro.untilLabel}, then $${I.annual} a year. Two months free with annual billing.`,
            },
          ]
        : []),
      { "@type": "Offer", name: "HarborIQ carrier check pack", price: String(I.pack.price), priceCurrency: "USD", description: `${I.pack.checks} additional carrier checks. One-time purchase, never automatic.` },
    ],
  };
}

function buildFaqs(): Faq[] {
  const intro = introActive();
  const faqs: Faq[] = [
    {
      q: "Is Intelligence really one price for everyone?",
      a: `Yes. $${I.monthly} a month, or $${I.annual} a year, covers every person at the agency, up to ${30} people. Larger agencies ask us for a quote. The ${I.checksPerMonth} carrier checks are shared across the team. If you run out, a $${I.pack.price} pack adds ${I.pack.checks} more, and we never add one without you asking.`,
    },
  ];
  if (intro) {
    faqs.push({
      q: "How does the introductory price work?",
      a: `Agencies that start a paid Intelligence subscription by ${I.intro.untilLabel} pay $${I.intro.monthly} a month, or $${I.intro.annual} for the first year, for their first ${I.intro.months} months. It is a price guarantee, not a ${I.intro.months}-month commitment: cancel any time. After the first ${I.intro.months} months, Intelligence renews at the standard $${I.monthly} a month, or $${I.annual} a year, and we email you before it does.`,
    });
  }
  faqs.push(
    {
      q: "How do monthly and annual plans cancel and renew?",
      a: `Monthly plans cancel any time, effective at the end of your billing period. Annual plans are billed once for the year: cancel any time and you keep access through the end of the year, and the plan then does not renew. Annual billing is two months free, $${I.annual} instead of $${I.monthly * 12}. We email you before any renewal.`,
    },
    FAQ_CARRIER_CHECK,
    {
      q: "What happens when we use all the checks?",
      a: `We tell you as you get close. You can wait for the monthly reset or add a pack of ${I.pack.checks} more checks for $${I.pack.price}. We never add a pack without you asking.`,
    },
  );
  if (LAUNCH.freeCrm) {
    faqs.push({
      q: "Do I have to import my whole book to start?",
      a: "No. Create your workspace, add one client, and you are working. Add clients as you go, or import a CSV from your AMS whenever you are ready. Nothing is required up front.",
    });
  } else {
    faqs.push({ q: "What happens when the free workspace is not enough?", a: "You move to Intelligence in a click, with everything you loaded still there. Nothing to re-import." });
  }
  faqs.push(
    FAQ_KEEP_AMS,
    {
      q: "Does HarborIQ connect to my AMS?",
      a: "You bring information in from your AMS by CSV export, as often as you like. HarborIQ works beside your AMS. It does not replace it, and it does not sync with it automatically.",
    },
    FAQ_SETUP,
  );
  return faqs;
}

/** What each plan includes. Rendered only when LAUNCH.freeCrm is true: it names CRM and reporting features the free rung cannot open until the app ships them. */
const COMPARE: { group: string; rows: [string, "y" | "n" | string, "y" | "n" | string][] }[] = [
  {
    group: "Run the agency",
    rows: [
      ["Clients and prospects", "y", "y"],
      ["Sales pipeline", "y", "y"],
      ["Renewals and follow-ups", "y", "y"],
      ["Notes and relationships", "y", "y"],
      ["Periodic CSV import from your AMS", "y", "y"],
      ["Carrier contacts and basic workspace", "y", "y"],
    ],
  },
  {
    group: "Understand your carriers and your book",
    rows: [
      ["Carrier appetite and product research", "n", "y"],
      ["Answers cited to carrier guidelines", "n", "y"],
      ["Monthly carrier checks", "n", `${I.checksPerMonth}, shared by the team`],
      ["Reporting and analytics", "n", "y"],
    ],
  },
];

function Cell({ v }: { v: string }) {
  if (v === "y") return <span className="font-medium text-success">Included</span>;
  if (v === "n") return <span className="text-stone">Not included</span>;
  return <span>{v}</span>;
}

function ComparisonTable() {
  return (
    <section className="bg-paper pb-16 md:pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <table className="w-full border-collapse text-left text-[15px]">
          <caption className="sr-only">What is included in Free CRM and Intelligence</caption>
          <thead>
            <tr className="border-b border-ink text-[12px] uppercase tracking-wider text-stone">
              <th scope="col" className="py-2.5 font-semibold">What is included</th>
              <th scope="col" className="w-[24%] py-2.5 font-semibold">Free CRM</th>
              <th scope="col" className="w-[24%] py-2.5 font-semibold">Intelligence</th>
            </tr>
          </thead>
          {COMPARE.map((g) => (
            <tbody key={g.group}>
              <tr><th scope="rowgroup" colSpan={3} className="pb-2 pt-7 text-[12px] font-semibold uppercase tracking-wider text-interactive">{g.group}</th></tr>
              {g.rows.map(([label, free, paid]) => (
                <tr key={label} className="border-b border-ash text-charcoal">
                  <th scope="row" className="py-3 pr-4 font-normal text-ink">{label}</th>
                  <td className="py-3"><Cell v={free} /></td>
                  <td className="py-3"><Cell v={paid} /></td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
}

export default function PricingPage() {
  const intro = introActive();
  const faqs = buildFaqs();
  return (
    <>
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema()) }} />
        <section className="bg-paper pb-4 pt-14 md:pt-20">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="max-w-3xl text-[40px] font-medium leading-[1.04] tracking-[-0.02em] text-ink md:text-[56px]">One price for the whole agency.</h1>
            <p className="mt-5 max-w-[60ch] text-[18px] leading-relaxed text-charcoal">
              {LAUNCH.freeCrm
                ? "A free CRM for your clients, pipeline and renewals. Intelligence adds carrier answers and reporting. Not per seat, not per login."
                : "Start free, then add Intelligence for carrier answers. Not per seat, not per login."}
            </p>
          </div>
        </section>
        <Plans copperCta heading="Start free. Add Intelligence when the team wants answers." />
        {LAUNCH.freeCrm && <ComparisonTable />}

        {intro && (
          <section className="bg-paper pb-16 md:pb-20">
            <div className="mx-auto max-w-6xl px-6">
              <h2 className="text-[28px] font-medium leading-tight tracking-tight text-ink">The introductory offer</h2>
              <dl className="mt-6 grid gap-10 md:grid-cols-3">
                <div className="border-t border-ink pt-4"><dt className="text-[16px] font-medium text-ink">Who qualifies</dt><dd className="mt-2 text-[15px] text-charcoal">Agencies that start a paid Intelligence subscription by {I.intro.untilLabel}. Your whole team is included, up to 30 people.</dd></div>
                <div className="border-t border-ink pt-4"><dt className="text-[16px] font-medium text-ink">What is guaranteed</dt><dd className="mt-2 text-[15px] text-charcoal">${I.intro.monthly} a month, or ${I.intro.annual} for the first year, for your first {I.intro.months} months. A price guarantee, not a {I.intro.months}-month commitment. Monthly plans cancel any time, effective at the end of your billing period. Annual plans are billed once, and if you cancel you keep access through the end of the year.</dd></div>
                <div className="border-t border-ink pt-4"><dt className="text-[16px] font-medium text-ink">After {I.intro.months} months</dt><dd className="mt-2 text-[15px] text-charcoal">Intelligence renews at the standard ${I.monthly} a month, or ${I.annual} a year. We email you before it does, and cancelling before the renewal date means nothing further is charged.</dd></div>
              </dl>
            </div>
          </section>
        )}

        <section className="bg-linen py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <H2 sub="Intelligence does not replace what you pay for. It gives back the hours your team spends finding carrier answers and rebuilding lists by hand.">What ${I.monthly} a month buys back.</H2>
            <div className="mt-10"><ValueCalc /></div>
          </div>
        </section>
        <TrustStrip />
        <FaqSection items={faqs} className="bg-paper py-16 md:py-24" />
      </main>
    </>
  );
}
