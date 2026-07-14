import type { Metadata } from "next";
import { CtaSection } from "@/components/CtaSection";
import { DEMO_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HarborIQ vs HawkSoft | Compare Insurance Agency Management Systems",
  description:
    "HawkSoft is one of the most-loved AMS platforms in the industry. Here's how HarborIQ takes a different approach for agencies ready for what's next.",
  alternates: { canonical: "/compare/hawksoft" },
  openGraph: {
    title: "HarborIQ vs HawkSoft | The Best 2018 AMS vs the First 2026 AMS",
    description:
      "HawkSoft is excellent. We're built for what's next: AI-native, flat-priced, pipeline included.",
    url: "/compare/hawksoft",
  },
};

const contrastCards = [
  {
    label: "Cost at 10 users",
    harboriq: "$599",
    competitor: "$1,190",
    detail: "Every hire is a raise for HawkSoft. HarborIQ is flat within the tier.",
  },
  {
    label: "AI-assisted quoting",
    harboriq: "Built in",
    competitor: "Not included",
    detail: "HawkSoft agents bolt on Gaya (≈ $300/mo) to get AI quoting.",
  },
  {
    label: "Prospect pipeline",
    harboriq: "Built in",
    competitor: "Not included",
    detail: "HawkSoft is purpose-built for current clients, not the prospect who said “call me in 6 months.”",
  },
  {
    label: "Contract terms",
    harboriq: "Month-to-month",
    competitor: "Month-to-month",
    detail: "HawkSoft has fair terms. We won’t beat that. We’ll match it.",
  },
];

const fullTable = [
  ["Pricing model", "Flat monthly. $199 / $379 / $599. Published.", "$250/mo base + $94/user/month"],
  ["5-person agency cost", "$379/mo (Team tier, all features)", "$720/month ($250 + 5 × $94)"],
  ["10-person agency cost", "$599/mo (Operating System, up to 15 users)", "$1,190/month ($250 + 10 × $94)"],
  ["Pipeline CRM", "Built-in prospect tracking with stages and follow-ups.", "Not included. Client management only."],
  ["AI capabilities", "AI-native: quoting, carrier translation, daily briefings.", "No AI features. Agents bolt on Gaya or similar."],
  ["Customer support", "Founder-direct for design partners. Hours, often minutes.", "Industry-leading reputation. Genuine competitive strength."],
  ["Team performance", "Production dashboards, goal tracking, bottleneck identification.", "Basic reports and dashboards."],
  ["Renewal management", "Dedicated dashboard with priority escalation.", "Renewal tracking included."],
  ["Client engagement", "Automated reminders, notifications, and outreach.", "Batch email marketing included."],
  ["Architecture", "Cloud-native, modern web app.", "Cloud-based with desktop and web interfaces."],
];

// Bar chart geometry: 3 headcount groups (5, 10, 15 users), 2 bars per group.
const COSTS = [
  { label: "5 people", harboriq: 379, competitor: 720 },
  { label: "10 people", harboriq: 599, competitor: 1190 },
  { label: "15 people", harboriq: 599, competitor: 1660 },
];
const CHART_MAX = 1750; // $ max for bar scaling
const CHART_BASE_Y = 250; // baseline for bars
const CHART_BAR_H = 200; // max bar height
const costToBarH = (cost: number) => (cost / CHART_MAX) * CHART_BAR_H;

export default function CompareHawkSoftPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-anchor py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-medium text-paper leading-tight tracking-tight">
            HarborIQ vs HawkSoft
          </h1>
          <p className="mt-5 text-[17px] md:text-[19px] text-mist leading-relaxed max-w-2xl mx-auto">
            HawkSoft is the best-loved AMS in the independent-agency category.<br className="hidden md:inline" />
            {" "}We&rsquo;re building the first AMS designed around the next decade, not the last one.
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
                  <span className="font-medium text-charcoal">HawkSoft:</span> {c.competitor}
                </p>
                <p className="text-[13px] text-charcoal leading-relaxed mt-auto pt-5 border-t border-ash">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ARCHITECTURAL VISUAL: COST-BY-HEADCOUNT BAR CHART ─── */}
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
            The math gets ugly fast
          </p>
          <h2 className="text-2xl md:text-[34px] font-medium text-paper leading-tight tracking-tight text-center max-w-3xl mx-auto mb-10 md:mb-14">
            Monthly cost as your agency grows.
          </h2>

          <div className="bg-midnight/60 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
            <svg viewBox="0 0 700 320" className="w-full h-auto" role="img" aria-label="Bar chart of monthly cost: HarborIQ stays flat as the team grows. HawkSoft rises with every hire.">
              {/* Baseline */}
              <line x1="60" y1={CHART_BASE_Y} x2="660" y2={CHART_BASE_Y} stroke="rgba(255,255,255,0.18)" strokeWidth="1" />

              {/* Legend */}
              <rect x="60" y="20" width="14" height="14" rx="2" fill="#C4935A" />
              <text x="82" y="32" fontSize="12" fill="#F1E9D8">HarborIQ</text>
              <rect x="170" y="20" width="14" height="14" rx="2" fill="rgba(241,233,216,0.5)" />
              <text x="192" y="32" fontSize="12" fill="rgba(241,233,216,0.85)">HawkSoft</text>

              {COSTS.map((c, i) => {
                const groupX = 110 + i * 200;
                const barW = 52;
                const gap = 16;
                const hX = groupX;
                const cX = groupX + barW + gap;
                const hBarH = costToBarH(c.harboriq);
                const cBarH = costToBarH(c.competitor);
                return (
                  <g key={c.label}>
                    {/* HarborIQ bar */}
                    <rect x={hX} y={CHART_BASE_Y - hBarH} width={barW} height={hBarH} rx="3" fill="#C4935A" />
                    <text x={hX + barW / 2} y={CHART_BASE_Y - hBarH - 10} fontSize="12" fill="#C4935A" fontWeight="600" textAnchor="middle">${c.harboriq}</text>

                    {/* HawkSoft bar */}
                    <rect x={cX} y={CHART_BASE_Y - cBarH} width={barW} height={cBarH} rx="3" fill="rgba(241,233,216,0.5)" />
                    <text x={cX + barW / 2} y={CHART_BASE_Y - cBarH - 10} fontSize="12" fill="rgba(241,233,216,0.9)" fontWeight="600" textAnchor="middle">${c.competitor.toLocaleString()}</text>

                    {/* Group label */}
                    <text x={hX + barW + gap / 2} y={CHART_BASE_Y + 24} fontSize="13" fill="#F1E9D8" textAnchor="middle">{c.label}</text>
                  </g>
                );
              })}

              {/* Caption inside the chart */}
              <text x="350" y="305" fontSize="11" fill="rgba(241,233,216,0.6)" textAnchor="middle" fontStyle="italic">Per-month, all-in. HawkSoft = $250 base + $94 / user.</text>
            </svg>
          </div>

          <p className="text-[14px] md:text-[15px] text-mist leading-relaxed mt-8 text-center max-w-2xl mx-auto">
            HarborIQ stays flat as you grow.<br className="hidden md:inline" />
            {" "}HawkSoft rises with every hire.<br className="hidden md:inline" />
            {" "}At 15 people, the gap is over a thousand a month.
          </p>
        </div>
      </section>

      {/* ─── WHEN EACH IS THE RIGHT CALL ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center mb-10">
            When each is the right call
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-linen border border-ash rounded-lg p-6 md:p-8">
              <h3 className="text-[17px] font-medium text-ink mb-5">
                HawkSoft is right when&hellip;
              </h3>
              <ul className="space-y-3 text-[15px] text-charcoal leading-relaxed">
                <li className="flex gap-3"><span className="text-stone mt-0.5 shrink-0">&bull;</span>Customer-support quality is your single most important criterion (HawkSoft is industry-leading here).</li>
                <li className="flex gap-3"><span className="text-stone mt-0.5 shrink-0">&bull;</span>You don&rsquo;t expect to need AI-assisted workflows in the next twelve months.</li>
                <li className="flex gap-3"><span className="text-stone mt-0.5 shrink-0">&bull;</span>Your team has used HawkSoft for years and the switching cost outweighs the savings.</li>
              </ul>
            </div>
            <div className="bg-pure border-2 border-interactive rounded-lg p-6 md:p-8">
              <h3 className="text-[17px] font-medium text-ink mb-5">
                HarborIQ is right when&hellip;
              </h3>
              <ul className="space-y-3 text-[15px] text-charcoal leading-relaxed">
                <li className="flex gap-3">
                  <svg width="18" height="18" fill="none" stroke="#2E8B57" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Your team is growing and per-user pricing is starting to compound.
                </li>
                <li className="flex gap-3">
                  <svg width="18" height="18" fill="none" stroke="#2E8B57" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  You want AI-assisted quoting without bolting on Gaya for another $300/mo.
                </li>
                <li className="flex gap-3">
                  <svg width="18" height="18" fill="none" stroke="#2E8B57" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  You want prospect pipeline and client management sharing one record.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ALREADY ON HAWKSOFT? — ANNUAL COST FRAMING ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4 text-center">
            Already on HawkSoft?
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center max-w-3xl mx-auto mb-3">
            Here&rsquo;s what staying costs you every year.
          </h2>
          <p className="text-[16px] text-charcoal leading-relaxed text-center max-w-2xl mx-auto mb-10">
            HawkSoft is $250 base + $94 per user, per month. Annualize your headcount. We did the math.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left max-w-3xl mx-auto">
              <thead>
                <tr className="border-b-2 border-ash">
                  <th className="py-3 pr-4 text-[12px] font-medium text-stone uppercase tracking-wider">Headcount</th>
                  <th className="py-3 px-4 text-[12px] font-medium text-stone uppercase tracking-wider">HawkSoft / year</th>
                  <th className="py-3 px-4 text-[12px] font-medium text-stone uppercase tracking-wider">HarborIQ / year</th>
                  <th className="py-3 pl-4 text-[12px] font-medium text-copper uppercase tracking-wider">You keep</th>
                </tr>
              </thead>
              <tbody className="text-[15px]">
                <tr className="border-b border-ash/60">
                  <td className="py-4 pr-4 font-medium text-ink">5 people</td>
                  <td className="py-4 px-4 text-charcoal">$8,640</td>
                  <td className="py-4 px-4 text-charcoal">$4,188 <span className="text-stone text-[13px]">(Team)</span></td>
                  <td className="py-4 pl-4 font-medium text-copper">$4,452</td>
                </tr>
                <tr className="border-b border-ash/60">
                  <td className="py-4 pr-4 font-medium text-ink">10 people</td>
                  <td className="py-4 px-4 text-charcoal">$14,280</td>
                  <td className="py-4 px-4 text-charcoal">$7,188 <span className="text-stone text-[13px]">(OS)</span></td>
                  <td className="py-4 pl-4 font-medium text-copper">$7,092</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-ink">15 people</td>
                  <td className="py-4 px-4 text-charcoal">$19,920</td>
                  <td className="py-4 px-4 text-charcoal">$7,188 <span className="text-stone text-[13px]">(OS)</span></td>
                  <td className="py-4 pl-4 font-medium text-copper">$12,732</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[13px] text-stone leading-relaxed text-center max-w-2xl mx-auto mt-8">
            Source: HawkSoft public pricing ($250 base + $94/user/month). Reported by HarborIQ customers and by agencies pitched by HawkSoft in 2026.
          </p>
        </div>
      </section>

      {/* ─── FOUNDER CTA ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
            Talk to the founder
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight mb-4">
            HawkSoft is excellent.<br />
            We&rsquo;re building what comes next.
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
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <details className="group bg-paper border border-ash rounded-md">
            <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between text-[15px] font-medium text-ink hover:bg-linen transition-colors">
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
                    <th className="text-left py-3 pl-4 text-ink font-medium">HawkSoft</th>
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
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center mb-10">
            Why agencies are making the switch
          </h2>
          <div className="space-y-5">
            {[
              ["Per-user pricing compounds.", "At $94 per user, every hire is a permanent raise for HawkSoft. HarborIQ is flat within the tier."],
              ["The AI bolt-on stack adds up.", "HawkSoft + Gaya is two logins, two contracts, and prospects still aren’t in the same place as your clients."],
              ["The next decade is AI-native, not AI-adjacent.", "HawkSoft is a great 2018 AMS. We’re building for 2026 forward."],
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
