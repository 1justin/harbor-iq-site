import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ManifestoPrinciples } from "./ManifestoPrinciples";
import { MANIFESTO_FAQS, MANIFESTO_SUBTITLE, PRINCIPLES } from "./principles";

const DEMO_URL = "https://tidycal.com/cjmayer/harboriq-demo";

export const metadata: Metadata = {
  title: "How we build software | The HarborIQ manifesto",
  description:
    "Eighteen things HarborIQ believes about insurance agency software: published pricing, no per-seat fees, no implementation consultants, full data export, and a twenty minute demo. Read the manifesto.",
  alternates: { canonical: "/manifesto" },
  openGraph: {
    title: "How we build software | The HarborIQ manifesto",
    description:
      "Eighteen things we believe about the software independent agencies are made to use. Published pricing. No per-seat fees. You can leave.",
    url: "/manifesto",
    type: "article",
    images: [{ url: "/og/manifesto.png", width: 1200, height: 630 }],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How we build software: the HarborIQ manifesto",
  description: MANIFESTO_SUBTITLE,
  url: "https://harboriq.co/manifesto",
  author: {
    "@type": "Person",
    name: "Justin Mayer",
    jobTitle: "Founder",
  },
  publisher: {
    "@type": "Organization",
    name: "HarborIQ",
    url: "https://harboriq.co",
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "The HarborIQ manifesto: eighteen principles",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: PRINCIPLES.length,
  itemListElement: PRINCIPLES.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.title,
    description: p.body,
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: MANIFESTO_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ManifestoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ─── HERO ─── */}
      <section className="bg-midnight pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-slate uppercase tracking-[0.12em] mb-5">
            The manifesto
          </p>
          <h1 className="text-4xl md:text-5xl font-medium text-paper leading-[1.12] tracking-tight max-w-3xl">
            How we build software
          </h1>
          <p className="mt-5 text-[19px] text-mist leading-relaxed max-w-2xl">
            {MANIFESTO_SUBTITLE}
          </p>
          <div className="mt-9 w-14 h-[3px] bg-copper" aria-hidden="true" />
        </div>
      </section>

      {/* ─── PREFACE ─── */}
      <section className="bg-paper pt-16 md:pt-20 pb-2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[18px] text-charcoal leading-[1.7]">
              You run an independent agency. You answer to your clients, not to a
              corporate office, and the software you pay for should answer to you.
              Most of it does not. It was designed a long time ago, by companies
              that no longer have to try, and you have been working around it ever
              since.
            </p>
            <p className="mt-4 text-[18px] text-charcoal leading-[1.7]">
              We wrote down exactly how we operate, in public, where you can hold
              us to it. <span className="font-medium text-ink">Here it is. All eighteen.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── PRINCIPLES ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ManifestoPrinciples />
        </div>
      </section>

      {/* ─── CLOSING ─── */}
      <section className="bg-linen py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[19px] text-charcoal leading-[1.7]">
              We named the company HarborIQ because a harbor is where you come in
              out of the weather. That is what your clients buy from you, and it is
              the least your software could offer you in return.
            </p>
            <p className="mt-9 text-2xl md:text-[26px] font-medium text-ink tracking-tight">
              One login. Your whole agency.
            </p>
            <p className="mt-3 text-[16px] font-medium text-harbor">HarborIQ</p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-medium text-ink tracking-tight mb-2">
              Questions, answered plainly
            </h2>
            <p className="text-[16px] text-charcoal leading-relaxed mb-8">
              The short versions of what the manifesto promises, in the words
              people actually ask.
            </p>
            <FaqAccordion items={MANIFESTO_FAQS} />
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="bg-anchor py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-paper leading-tight tracking-tight">
            Hold us to it.
          </h2>
          <p className="mt-3 text-[16px] text-mist leading-relaxed">
            Twenty minutes is enough to decide. Stay longer if you want,
            gladly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary bg-copper text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors"
            >
              Book a 20 minute demo
            </a>
            <Link
              href="/pricing"
              className="cta-secondary border border-slate text-mist btn-radius px-6 py-3 text-[15px] font-medium hover:border-paper hover:text-paper transition-colors"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
