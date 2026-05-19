import type { Metadata } from "next";
import { CtaSection } from "@/components/CtaSection";
import { DEMO_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HarborIQ vs Applied Epic | Applied Epic Alternative for Small Agencies",
  description:
    "Applied Epic is the most credible name in agency software. If you're 1-9 people, you're being sold an enterprise sales motion built for someone else.",
  alternates: { canonical: "/compare/applied-epic" },
  openGraph: {
    title: "HarborIQ vs Applied Epic | Built for Where You Actually Are",
    description:
      "Applied Epic schedules your demo for week 4. HarborIQ is live in a week. Built for 1-15 person independent agencies.",
    url: "/compare/applied-epic",
  },
};

const contrastCards = [
  {
    label: "Time to live demo",
    harboriq: "Today",
    competitor: "≈ 1 month",
    detail: "Multiple discovery calls before any demo is scheduled, even for a 9-person agency.",
  },
  {
    label: "Per-user fee",
    harboriq: "$0 flat",
    competitor: "$355/mo",
    detail: "The per-user rate Applied charges independent agencies in 2026.",
  },
  {
    label: "Runs on",
    harboriq: "Any browser",
    competitor: "Windows + Parallels on Mac",
    detail: "Mac, Windows, phone. Anything with a modern browser. Applied still needs a $100/yr virtualization layer on Mac.",
  },
  {
    label: "Pricing variables",
    harboriq: "Published · 1 possible overage",
    competitor: "Custom per line of business",
    detail: "Every line of business probed in discovery is a pricing input.",
  },
];

const fullTable = [
  ["Built for", "1-15 person independent agencies", "Mid-to-large agencies and brokerages (50+ employees)"],
  ["Pricing", "Flat monthly. $179 / $349 / $599. Published.", "Contract-based, negotiated per agency. Per-user fees standard."],
  ["Complexity", "20 features done well. Clean, modern interface.", "Hundreds of features. Steep learning curve. Extensive customization."],
  ["Onboarding", "Days. CSV import, guided wizard.", "Weeks to months. Enterprise implementation process."],
  ["Pipeline CRM", "Built-in prospect tracking with stages and follow-ups.", "Focused on existing client and policy management."],
  ["AI capabilities", "AI-native: quoting, carrier translation, daily briefings.", "Investing in 'agentic AI' for underwriting and claims."],
  ["Carrier integrations", "Carrier directory + AI quoting. IVANS on roadmap.", "Deep IVANS integration (industry leader)."],
  ["Data portability", "Your data is always exportable. No lock-in.", "Data migration out is notoriously difficult per user reports."],
  ["Support", "Direct product team access for founding agencies.", "Tiered support. Small agencies have less leverage."],
];

// Timeline geometry — single axis 0→90 days mapped across the viewBox.
const TIMELINE_LEFT = 24;
const TIMELINE_RIGHT = 684;
const dayToX = (d: number) => TIMELINE_LEFT + (d / 90) * (TIMELINE_RIGHT - TIMELINE_LEFT);

export default function CompareAppliedEpicPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-anchor py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-medium text-paper leading-tight tracking-tight">
            HarborIQ vs Applied Epic
          </h1>
          <p className="mt-5 text-[17px] md:text-[19px] text-mist leading-relaxed max-w-2xl mx-auto">
            Applied Epic is the most credible name in agency software.<br className="hidden md:inline" />
            {" "}If you&rsquo;re 1-9 people, you&rsquo;re being sold an enterprise sales motion built for someone else.
          </p>
        </div>
      </section>

      {/* ─── BIG CONTRAST BAND ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4 text-center">
            At a glance
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center max-w-3xl mx-auto mb-12">
            Four points paint the picture.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contrastCards.map((c) => (
              <div
                key={c.label}
                className="bg-linen border border-ash rounded-lg p-6 flex flex-col"
              >
                <p className="text-[11px] font-medium text-stone uppercase tracking-[0.1em]">
                  {c.label}
                </p>
                <p className="mt-5 text-[12px] font-medium text-interactive uppercase tracking-[0.1em]">
                  HarborIQ
                </p>
                <p className="mt-1 text-[26px] md:text-[30px] font-medium text-copper leading-[1.05] tracking-tight">
                  {c.harboriq}
                </p>
                <p className="mt-4 text-[14px] text-stone leading-snug">
                  <span className="font-medium text-charcoal">Applied Epic:</span> {c.competitor}
                </p>
                <p className="text-[13px] text-charcoal leading-relaxed mt-auto pt-5 border-t border-ash">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ARCHITECTURAL VISUAL: TIMELINE ─── */}
      <section className="bg-anchor py-16 md:py-24 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.2 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.45'/></svg>\")",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6">
          <p className="text-[13px] font-medium text-copper uppercase tracking-[0.12em] mb-4 text-center">
            Same agency. Two timelines.
          </p>
          <h2 className="text-2xl md:text-[34px] font-medium text-paper leading-tight tracking-tight text-center max-w-3xl mx-auto mb-10 md:mb-14">
            From first outreach to live on the system.
          </h2>

          <div className="bg-midnight/60 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
            <svg viewBox="0 0 700 280" className="w-full h-auto" role="img" aria-label="Timeline: HarborIQ outreach to live in days, on your schedule. Applied Epic live around day 90.">
              {/* HarborIQ track (top) */}
              <text x={TIMELINE_LEFT} y="28" fontSize="14" fontWeight="600" fill="#C4935A">HarborIQ</text>

              <line x1={dayToX(0)} y1="68" x2={dayToX(5)} y2="68" stroke="#C4935A" strokeWidth="3" strokeLinecap="round" />

              <circle cx={dayToX(0)} cy="68" r="6" fill="#C4935A" />
              <text x={dayToX(0)} y="92" fontSize="11" fill="#F1E9D8" textAnchor="middle">Outreach</text>

              <circle cx={dayToX(5)} cy="68" r="10" fill="#C4935A" stroke="#C4935A" strokeWidth="2" />
              <text x={dayToX(5) + 18} y="58" fontSize="13" fill="#C4935A" fontWeight="700" textAnchor="start">Live</text>
              <text x={dayToX(5) + 18} y="76" fontSize="11" fill="#F1E9D8" textAnchor="start">Day 1 demo · ½-day onboard</text>
              <text x={dayToX(5) + 18} y="92" fontSize="11" fill="#F1E9D8" textAnchor="start">On your schedule</text>

              {/* Financial annotation under HarborIQ */}
              <text x={TIMELINE_LEFT} y="116" fontSize="11" fill="rgba(196,147,90,0.85)" fontWeight="600">$349 flat · you choose when to go live</text>

              {/* Divider */}
              <line x1={TIMELINE_LEFT} y1="140" x2={TIMELINE_RIGHT} y2="140" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 4" />

              {/* Applied Epic track (bottom) */}
              <text x={TIMELINE_LEFT} y="170" fontSize="14" fontWeight="600" fill="rgba(241,233,216,0.85)">Applied Epic</text>

              <line x1={dayToX(0)} y1="208" x2={dayToX(90)} y2="208" stroke="rgba(241,233,216,0.35)" strokeWidth="2" />

              <circle cx={dayToX(0)} cy="208" r="5" fill="#F1E9D8" stroke="#0F2440" strokeWidth="1.5" />
              <text x={dayToX(0)} y="234" fontSize="11" fill="rgba(241,233,216,0.7)" textAnchor="middle">Outreach</text>

              <circle cx={dayToX(7)} cy="208" r="5" fill="#F1E9D8" stroke="#0F2440" strokeWidth="1.5" />
              <text x={dayToX(7)} y="252" fontSize="11" fill="rgba(241,233,216,0.7)" textAnchor="middle">Discovery 1</text>

              <circle cx={dayToX(18)} cy="208" r="5" fill="#F1E9D8" stroke="#0F2440" strokeWidth="1.5" />
              <text x={dayToX(18)} y="234" fontSize="11" fill="rgba(241,233,216,0.7)" textAnchor="middle">Discovery 2-3</text>

              <circle cx={dayToX(28)} cy="208" r="5" fill="#F1E9D8" stroke="#0F2440" strokeWidth="1.5" />
              <text x={dayToX(28)} y="252" fontSize="11" fill="rgba(241,233,216,0.7)" textAnchor="middle">Live demo</text>

              <circle cx={dayToX(42)} cy="208" r="5" fill="#F1E9D8" stroke="#0F2440" strokeWidth="1.5" />
              <text x={dayToX(42)} y="234" fontSize="11" fill="rgba(241,233,216,0.7)" textAnchor="middle">Contract</text>

              <circle cx={dayToX(70)} cy="208" r="5" fill="#F1E9D8" stroke="#0F2440" strokeWidth="1.5" />
              <text x={dayToX(70)} y="252" fontSize="11" fill="rgba(241,233,216,0.7)" textAnchor="middle">Implementation</text>

              <circle cx={dayToX(90)} cy="208" r="9" fill="#F1E9D8" stroke="#0F2440" strokeWidth="2" />
              <text x={dayToX(90) - 14} y="204" fontSize="13" fill="rgba(241,233,216,0.95)" textAnchor="end" fontWeight="700">Live · Day 90</text>
            </svg>
          </div>

          {/* ─── FINANCIAL WEIGHT CALLOUT ─── */}
          <div className="mt-8 md:mt-10 bg-midnight/60 border border-copper/30 rounded-xl p-6 md:p-8 backdrop-blur-sm">
            <p className="text-[12px] font-medium text-copper uppercase tracking-[0.12em] mb-3 text-center">
              What the gap actually costs you
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-5">
              <div className="text-center">
                <p className="text-[28px] md:text-[34px] font-medium text-copper leading-none">Day 1 vs Day 28</p>
                <p className="mt-2 text-[13px] text-mist leading-snug">to a live demo. Applied stretches discovery across multiple calls before you see the product.</p>
              </div>
              <div className="text-center">
                <p className="text-[28px] md:text-[34px] font-medium text-copper leading-none">½ day vs 6 weeks</p>
                <p className="mt-2 text-[13px] text-mist leading-snug">to onboard. Ours is a guided CSV import. Theirs is training, configuration, and parallel runs.</p>
              </div>
              <div className="text-center">
                <p className="text-[28px] md:text-[34px] font-medium text-copper leading-none">$0 vs $355</p>
                <p className="mt-2 text-[13px] text-mist leading-snug">per user, per month. The compounding cost stays compounding for as long as you stay.</p>
              </div>
            </div>
          </div>

          <p className="text-[14px] md:text-[15px] text-mist leading-relaxed mt-8 text-center max-w-2xl mx-auto">
            Same 9-person agency in both lanes.<br className="hidden md:inline" />
            {" "}One waits a month to see the product.<br className="hidden md:inline" />
            {" "}The other picks the day they go live.
          </p>
        </div>
      </section>

      {/* ─── ALREADY ON APPLIED? — ANNUAL COST FRAMING ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4 text-center">
            Already on Applied?
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center max-w-3xl mx-auto mb-3">
            Here&rsquo;s what staying costs you every year.
          </h2>
          <p className="text-[16px] text-charcoal leading-relaxed text-center max-w-2xl mx-auto mb-10">
            Applied charges $355 per user, per month. Run your headcount. We did the math.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left max-w-3xl mx-auto">
              <thead>
                <tr className="border-b-2 border-ash">
                  <th className="py-3 pr-4 text-[12px] font-medium text-stone uppercase tracking-wider">Headcount</th>
                  <th className="py-3 px-4 text-[12px] font-medium text-stone uppercase tracking-wider">Applied Epic / year</th>
                  <th className="py-3 px-4 text-[12px] font-medium text-stone uppercase tracking-wider">HarborIQ / year</th>
                  <th className="py-3 pl-4 text-[12px] font-medium text-copper uppercase tracking-wider">You keep</th>
                </tr>
              </thead>
              <tbody className="text-[15px]">
                <tr className="border-b border-ash/60">
                  <td className="py-4 pr-4 font-medium text-ink">5 people</td>
                  <td className="py-4 px-4 text-charcoal">$21,300</td>
                  <td className="py-4 px-4 text-charcoal">$4,188 <span className="text-stone text-[13px]">(Team)</span></td>
                  <td className="py-4 pl-4 font-medium text-copper">$17,112</td>
                </tr>
                <tr className="border-b border-ash/60">
                  <td className="py-4 pr-4 font-medium text-ink">10 people</td>
                  <td className="py-4 px-4 text-charcoal">$42,600</td>
                  <td className="py-4 px-4 text-charcoal">$7,188 <span className="text-stone text-[13px]">(OS)</span></td>
                  <td className="py-4 pl-4 font-medium text-copper">$35,412</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-ink">15 people</td>
                  <td className="py-4 px-4 text-charcoal">$63,900</td>
                  <td className="py-4 px-4 text-charcoal">$7,188 <span className="text-stone text-[13px]">(OS)</span></td>
                  <td className="py-4 pl-4 font-medium text-copper">$56,712</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[13px] text-stone leading-relaxed text-center max-w-2xl mx-auto mt-8">
            Source: $355/user/month reported by Applied customers and by agencies pitched by Applied in 2026. Your contracted rate may differ. The per-user trend line does not.
          </p>
        </div>
      </section>

      {/* ─── WHEN EACH IS THE RIGHT CALL ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center mb-10">
            When each is the right call
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-linen border border-ash rounded-lg p-6 md:p-8">
              <h3 className="text-[17px] font-medium text-ink mb-5">
                Applied Epic is right when&hellip;
              </h3>
              <ul className="space-y-3 text-[15px] text-charcoal leading-relaxed">
                <li className="flex gap-3"><span className="text-stone mt-0.5 shrink-0">&bull;</span>You&rsquo;re 50+ people doing complex commercial across multiple states.</li>
                <li className="flex gap-3"><span className="text-stone mt-0.5 shrink-0">&bull;</span><span>You need IVANS-deep carrier integrations <em>today</em>, not summer 2026.</span></li>
                <li className="flex gap-3"><span className="text-stone mt-0.5 shrink-0">&bull;</span>Your team includes dedicated IT to manage customization and configuration.</li>
              </ul>
            </div>
            <div className="bg-pure border-2 border-interactive rounded-lg p-6 md:p-8">
              <h3 className="text-[17px] font-medium text-ink mb-5">
                HarborIQ is right when&hellip;
              </h3>
              <ul className="space-y-3 text-[15px] text-charcoal leading-relaxed">
                <li className="flex gap-3">
                  <svg width="18" height="18" fill="none" stroke="#2E8B57" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  You&rsquo;re 1-15 people and won&rsquo;t be sold an enterprise process built for someone else.
                </li>
                <li className="flex gap-3">
                  <svg width="18" height="18" fill="none" stroke="#2E8B57" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  You want a published price you can decide on in thirty seconds.
                </li>
                <li className="flex gap-3">
                  <svg width="18" height="18" fill="none" stroke="#2E8B57" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  You want to be live this week, not staring down a six-week implementation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ACCOUNTING TRANSPARENCY BLOCK ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4 text-center">
            About accounting
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center mb-6">
            Three-way reconciliation ships by end of summer.
          </h2>
          <div className="bg-linen border-l-4 border-copper p-6 md:p-8 rounded-r-md">
            <p className="text-[16px] text-charcoal leading-relaxed">
              Insurance-grade trust accounting including three-way reconciliation, GL, and commission tracking, ships summer 2026. Until then, HarborIQ runs alongside your existing accounting workflow.
            </p>
            <p className="text-[16px] text-charcoal leading-relaxed mt-4">
              No commingling. No compliance risk. No shortcuts. You don&rsquo;t have to choose between modernizing your agency and keeping every carrier contract you hold today.
            </p>
            <p className="text-[16px] text-charcoal leading-relaxed mt-4">
              We&rsquo;re in the field with agency accounting teams (principals, CSRs, and ops managers) to make sure what ships matches the workflows that protect every carrier contract you hold.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FOUNDER CTA ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
            Talk to the founder
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight mb-4">
            Applied schedules your demo for week four.<br />
            You book HarborIQ when you&rsquo;re ready.
          </h2>
          <p className="text-[17px] text-charcoal leading-relaxed max-w-2xl mx-auto mb-8">
            We&rsquo;ll show you what one operating system looks like in practice, in under thirty minutes. You can even bring your data.
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-interactive hover:bg-deep text-white btn-radius px-8 py-3 text-[15px] font-medium transition-colors"
          >
            Book a demo
          </a>
        </div>
      </section>

      {/* ─── EXPANDABLE FULL COMPARISON ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <details className="group bg-linen border border-ash rounded-md">
            <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between text-[15px] font-medium text-ink hover:bg-pure transition-colors">
              <span>See the full feature-by-feature comparison</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-200 group-open:rotate-180">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <div className="px-6 pb-6 pt-2 border-t border-ash overflow-x-auto">
              <table className="w-full text-[14px] mt-4">
                <thead>
                  <tr className="border-b-2 border-ash">
                    <th className="text-left py-3 pr-4 text-stone font-medium w-1/4">&nbsp;</th>
                    <th className="text-left py-3 px-4 text-ink font-medium">HarborIQ</th>
                    <th className="text-left py-3 pl-4 text-ink font-medium">Applied Epic</th>
                  </tr>
                </thead>
                <tbody>
                  {fullTable.map(([cat, h, c], i) => (
                    <tr key={i} className="border-b border-ash/60">
                      <td className="py-3 pr-4 text-charcoal font-medium align-top">{cat}</td>
                      <td className="py-3 px-4 text-charcoal align-top">{h}</td>
                      <td className="py-3 pl-4 text-charcoal align-top">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </div>
      </section>

      {/* ─── SWITCH REASONS ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center mb-10">
            Why agencies are making the switch
          </h2>
          <div className="space-y-5">
            {[
              ["Enterprise complexity, agency-sized.", "Applied Epic was built for 50-person brokerages. A 5-person agency uses a fraction of it and pays full price."],
              ["Per-user pricing scales against you.", "$355 per user, per month. Every hire is a raise for someone else."],
              ["The Mac problem is an architectural tell.", "A 2026 platform shouldn’t need a 2010 workaround. HarborIQ runs in the browser. Mac, Windows, phone."],
            ].map(([title, body], i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-anchor flex items-center justify-center shrink-0 text-paper text-[13px] font-medium mt-0.5">
                  {i + 1}
                </div>
                <p className="text-[16px] text-charcoal leading-relaxed">
                  <span className="font-medium text-ink">{title}</span> {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
