import Image from "next/image";
import { CtaSection } from "./CtaSection";
import { CREEM_RESERVE, DEMO_URL } from "@/lib/constants";

type Benefit = { title: string; description: string };
type Step = { step: number; title: string; description: string };
type CompRow = { feature: string; harboriq: string; competitors: string };

export function FeaturePageLayout({
  eyebrow,
  headline,
  description,
  heroImage,
  heroImageAlt,
  benefits,
  howItWorks,
  comparisonIntro,
  comparisonRows,
  children,
}: {
  eyebrow: string;
  headline: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  benefits: Benefit[];
  howItWorks: Step[];
  comparisonIntro: string;
  comparisonRows: CompRow[];
  children?: React.ReactNode;
}) {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-anchor py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[13px] font-medium text-ice uppercase tracking-wider mb-4">
            {eyebrow}
          </p>
          <h1 className="text-3xl md:text-5xl font-medium text-paper leading-tight tracking-tight max-w-3xl mx-auto">
            {headline}
          </h1>
          <p className="mt-4 text-[17px] text-mist leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CREEM_RESERVE}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary bg-copper text-white btn-radius px-7 py-3.5 text-[16px] font-medium hover:bg-bronze transition-colors"
            >
              Reserve Your Founding Spot
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary bg-interactive text-white btn-radius px-7 py-3.5 text-[16px] font-medium hover:bg-deep transition-colors"
            >
              Book a demo
            </a>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-ice flex items-center justify-center shrink-0 mt-1">
                  <svg width="20" height="20" fill="none" stroke="#3B6FA0" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[17px] font-medium text-ink">{b.title}</h3>
                  <p className="mt-1 text-[15px] text-charcoal leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SCREENSHOT ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-xl overflow-hidden shadow-md shadow-ink/5">
            <Image
              src={heroImage}
              alt={heroImageAlt}
              width={1200}
              height={750}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center mb-12">
            How it works
          </h2>
          <div className="space-y-10">
            {howItWorks.map((s) => (
              <div key={s.step} className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-anchor flex items-center justify-center shrink-0 text-paper text-[15px] font-medium">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-[17px] font-medium text-ink">{s.title}</h3>
                  <p className="mt-1 text-[15px] text-charcoal leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {children}

      {/* ─── COMPARISON ─── */}
      <section className="bg-midnight py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-paper leading-tight tracking-tight text-center mb-4">
            How HarborIQ compares
          </h2>
          <p className="text-[16px] text-mist leading-relaxed text-center max-w-2xl mx-auto mb-10">
            {comparisonIntro}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-[15px]">
              <thead>
                <tr className="border-b border-anchor">
                  <th className="text-left py-3 pr-4 text-mist font-medium">Feature</th>
                  <th className="text-left py-3 px-4 text-paper font-medium">HarborIQ</th>
                  <th className="text-left py-3 pl-4 text-mist font-medium">Typical AMS</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r, i) => (
                  <tr key={i} className="border-b border-anchor/30">
                    <td className="py-3 pr-4 text-mist">{r.feature}</td>
                    <td className="py-3 px-4 text-success">{r.harboriq}</td>
                    <td className="py-3 pl-4 text-copper">{r.competitors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CtaSection />
    </>
  );
}
