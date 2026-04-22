import { CtaSection } from "./CtaSection";

type CompRow = { category: string; harboriq: string; competitor: string };

export function ComparePageLayout({
  competitorName,
  headline,
  subheadline,
  comparisonRows,
  bestForCompetitor,
  bestForHarborIQ,
  honestAdvantages,
  switchReasons,
  children,
}: {
  competitorName: string;
  headline: string;
  subheadline: string;
  comparisonRows: CompRow[];
  bestForCompetitor: string[];
  bestForHarborIQ: string[];
  honestAdvantages: string[];
  switchReasons: string[];
  children?: React.ReactNode;
}) {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-midnight py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[13px] font-medium text-ice uppercase tracking-wider mb-4">
            Honest comparison
          </p>
          <h1 className="text-3xl md:text-5xl font-medium text-paper leading-tight tracking-tight">
            {headline}
          </h1>
          <p className="mt-4 text-[17px] text-mist leading-relaxed max-w-2xl mx-auto">
            {subheadline}
          </p>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center mb-10">
            Side-by-side comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[15px]">
              <thead>
                <tr className="border-b-2 border-ash">
                  <th className="text-left py-3 pr-4 text-stone font-medium w-1/3"></th>
                  <th className="text-left py-3 px-4 text-ink font-medium w-1/3">HarborIQ</th>
                  <th className="text-left py-3 pl-4 text-ink font-medium w-1/3">{competitorName}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r, i) => (
                  <tr key={i} className="border-b border-ash">
                    <td className="py-4 pr-4 text-charcoal font-medium">{r.category}</td>
                    <td className="py-4 px-4 text-charcoal">{r.harboriq}</td>
                    <td className="py-4 pl-4 text-charcoal">{r.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── WHO IT'S BEST FOR ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center mb-10">
            Who each platform is best&nbsp;for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Competitor */}
            <div className="bg-pure rounded-xl border border-ash p-8">
              <h3 className="text-[17px] font-medium text-ink mb-4">
                {competitorName} may be better if&hellip;
              </h3>
              <ul className="space-y-3">
                {bestForCompetitor.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-charcoal leading-relaxed">
                    <span className="text-stone mt-0.5 shrink-0">&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* HarborIQ */}
            <div className="bg-pure rounded-xl border border-interactive/30 p-8">
              <h3 className="text-[17px] font-medium text-ink mb-4">
                HarborIQ may be better if&hellip;
              </h3>
              <ul className="space-y-3">
                {bestForHarborIQ.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-charcoal leading-relaxed">
                    <svg width="18" height="18" fill="none" stroke="#2E8B57" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHERE THEY'RE BETTER ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center mb-4">
            Where {competitorName} has the&nbsp;edge
          </h2>
          <p className="text-[16px] text-charcoal leading-relaxed text-center max-w-2xl mx-auto mb-8">
            We believe in honest comparisons. Here&rsquo;s where {competitorName} currently has advantages.
          </p>
          <ul className="space-y-4 max-w-xl mx-auto">
            {honestAdvantages.map((item, i) => (
              <li key={i} className="flex gap-3 text-[15px] text-charcoal leading-relaxed">
                <span className="text-stone mt-0.5 shrink-0">&bull;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {children}

      {/* ─── WHY AGENCIES SWITCH ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center mb-8">
            Why agencies consider switching
          </h2>
          <div className="space-y-4">
            {switchReasons.map((reason, i) => (
              <div key={i} className="flex gap-4 text-[15px] text-charcoal leading-relaxed">
                <div className="w-8 h-8 rounded-full bg-anchor flex items-center justify-center shrink-0 text-paper text-[13px] font-medium">
                  {i + 1}
                </div>
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CtaSection
        headline="Ready to see the difference?"
        description="Reserve your founding spot today. $100 refundable deposit. Lock in 33% off for life at Solo $119, Team $229, or Operating System $399."
      />
    </>
  );
}
