import type { Metadata } from "next";
import Link from "next/link";
import { Plans, TrustStrip, H2, btn } from "@/components/site/Bits";
import { ValueCalc } from "@/components/site/ValueCalc";
import { FaqSection, type Faq } from "@/components/iq/Blocks";
import { FAQ_KEEP_AMS, FAQ_SETUP } from "@/lib/faqs";
import { DEMO_PAGE, IMPORT_TERMS, INTELLIGENCE as I } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Pricing | Free workspace, Intelligence $${I.monthly} per agency | HarborIQ`,
  description: `Published pricing for independent insurance agencies. Free agency workspace. Intelligence is $${I.monthly} per agency per month or $${I.annual}/year for agencies up to 30 people, with ${I.checksPerMonth} shared carrier checks and optional $${I.pack.price} packs. Never per person.`,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: `Pricing | Intelligence $${I.monthly} per agency | HarborIQ`,
    description: `Free workspace. Intelligence $${I.monthly}/month for the whole agency, up to 30 people. Never per person.`,
    url: "/pricing",
    images: [{ url: "/og/pricing.png", width: 1200, height: 630 }],
  },
};


/* Static build-time data serialized with JSON.stringify: no user input reaches it. */
const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "HarborIQ",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: [
    { "@type": "Offer", name: "HarborIQ Free Agency Workspace", price: "0", priceCurrency: "USD", description: "The agency record, private carrier contacts, license and CE reminders, limited carrier checks." },
    { "@type": "Offer", name: "HarborIQ Intelligence", price: String(I.monthly), priceCurrency: "USD", description: `Per agency per month, up to 30 people. ${I.checksPerMonth} carrier checks each month, shared across the agency, with sources you can inspect.` },
    { "@type": "Offer", name: "HarborIQ Intelligence (annual)", price: String(I.annual), priceCurrency: "USD", description: `Per agency per year, billed upfront. ${I.checksPerMonth} carrier checks each month.` },
    { "@type": "Offer", name: "HarborIQ carrier check pack", price: String(I.pack.price), priceCurrency: "USD", description: `${I.pack.checks} additional carrier checks. One-time purchase, never automatic.` },
  ],
};

const faqs: Faq[] = [
  { q: "Is Intelligence really one price for everyone?", a: `Yes. $${I.monthly} a month covers every person at the agency, up to 30 people. Larger agencies ask us for a quote, and it stays nominal. The ${I.checksPerMonth} carrier checks are shared across the team. If you run out, a $${I.pack.price} pack adds ${I.pack.checks} more, and we never add one without you asking.` },
  { q: "What counts as a carrier check?", a: "One question answered from your carrier guides, with its sources. Browsing your book, renewals, contacts and tasks is never metered." },
  { q: "What happens when the free workspace is not enough?", a: "You move to Intelligence in a click, with everything you loaded still there. Nothing to re-import." },
  FAQ_KEEP_AMS,
  FAQ_SETUP,
  { q: "Can HarborIQ run the whole agency?", a: "Yes, as Agency OS: your book, pipeline, renewals and the carrier answers in one place, priced by agency size and never per person. Moving the book is the biggest step, so it is the one plan we walk you through. Book a walkthrough and ask." },
];

export default function PricingPage() {
  return (
    <>
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
        <section className="bg-paper pb-4 pt-14 md:pt-20">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="max-w-3xl text-[40px] font-medium leading-[1.04] tracking-[-0.02em] text-ink md:text-[56px]">One price for the whole agency.</h1>
            <p className="mt-5 max-w-[60ch] text-[18px] leading-relaxed text-charcoal">Not per seat, not per login. Intelligence is ${I.monthly} a month whether you are two people or thirty. Start free if you want to look around first.</p>
          </div>
        </section>
        <Plans detailed copperCta heading="Two ways to start. Most agencies pick Intelligence." />
        <section className="bg-linen py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <H2 sub="Intelligence does not replace what you pay for. It gives back the hours your team spends finding carrier answers and rebuilding lists by hand.">What ${I.monthly} a month buys back.</H2>
            <div className="mt-10"><ValueCalc /></div>
          </div>
        </section>
        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <H2 sub="Moving the whole book over is the biggest step, so it is the one thing we walk you through on a call.">Bringing your book over</H2>
            <dl className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="border-t border-ink pt-4"><dt className="text-[17px] font-medium text-ink">Annual</dt><dd className="mt-2 text-[15px] text-charcoal">{IMPORT_TERMS.annual}.</dd></div>
              <div className="border-t border-ink pt-4"><dt className="text-[17px] font-medium text-ink">Monthly</dt><dd className="mt-2 text-[15px] text-charcoal">{IMPORT_TERMS.monthly}.</dd></div>
            </dl>
            <Link href={DEMO_PAGE} className={`${btn.ghost} mt-8`}>Book a walkthrough</Link>
          </div>
        </section>
        <TrustStrip />
        <FaqSection items={faqs} className="bg-paper py-16 md:py-24" />
      </main>
    </>
  );
}
