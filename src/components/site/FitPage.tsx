import Link from "next/link";
import { H2, TrustStrip, btn } from "@/components/site/Bits";
import { HarborLoop } from "@/components/site/HarborLoop";
import { FaqSection } from "@/components/iq/Blocks";
import type { FitConfig } from "@/lib/works-with";
import { INTELLIGENCE as I, START_INTELLIGENCE_URL, DEMO_PAGE } from "@/lib/constants";

/** The "HarborIQ with <AMS>" / "HarborIQ instead of <CRM>" page, on the Applied Epic pattern (2026-11-09). */
export function FitPage({ fit }: { fit: FitConfig }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Works with", item: "https://harboriq.co/works-with" },
      { "@type": "ListItem", position: 2, name: fit.vendor, item: `https://harboriq.co/works-with/${fit.slug}` },
    ],
  };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="bg-paper pb-10 pt-14 md:pt-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-[15px] text-stone"><Link href="/works-with" className="underline-offset-4 hover:underline">Works with</Link> / {fit.vendor}</p>
          <h1 className="mt-3 max-w-3xl text-[40px] font-medium leading-[1.04] tracking-[-0.02em] text-ink md:text-[56px]">{fit.h1}</h1>
          <p className="mt-5 max-w-[62ch] text-[18px] leading-relaxed text-charcoal">{fit.intro}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href={START_INTELLIGENCE_URL} className={btn.copper}>Start Intelligence, ${I.monthly} a month</Link>
            <Link href={DEMO_PAGE} className="text-[15px] font-medium text-interactive underline-offset-4 hover:underline">Book a 20-minute walkthrough</Link>
          </div>
        </div>
      </section>
      <section className="bg-paper pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-xl border border-ash">
            <div className="grid grid-cols-[1.6fr_1fr_1fr] bg-linen/70 px-5 py-3 text-[14px] text-charcoal"><span>Job</span><span>{fit.short}</span><span>HarborIQ</span></div>
            {fit.rows.map(([j, v, h]) => (
              <div key={j} className="grid grid-cols-[1.6fr_1fr_1fr] border-t border-ash px-5 py-3.5 text-[15px]">
                <span className="text-ink">{j}</span>
                <span className="text-charcoal">{v || <span className="text-stone">—</span>}</span>
                <span className="font-medium text-ink">{h || <span className="font-normal text-stone">—</span>}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[13px] text-stone">{fit.rowsNote}</p>
        </div>
      </section>
      <section className="bg-linen py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <H2 sub={fit.loopSub}>{fit.loopHeading}</H2>
          <HarborLoop slice={fit.loopSlice} className="mt-10" />
        </div>
      </section>
      <TrustStrip light />
      <FaqSection items={fit.faqs} className="bg-paper py-16 md:py-24" />
    </main>
  );
}
