import type { Metadata } from "next";
import { CtaSection } from "@/components/CtaSection";
import { DEMO_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HarborIQ vs EZLynx | EZLynx Alternative for Independent Agencies",
  description:
    "EZLynx built a great comparative rater and bolted an AMS on top. HarborIQ is one platform, built that way from day one.",
  alternates: { canonical: "/compare/ezlynx" },
  openGraph: {
    title: "HarborIQ vs EZLynx | One Platform, Not a Rater With an AMS Bolted On",
    description:
      "EZLynx implementation: 6-8 weeks. HarborIQ: 4 days. See the gap.",
    url: "/compare/ezlynx",
  },
};

const contrastCards = [
  {
    label: "Implementation time",
    harboriq: "≈ 4 days",
    competitor: "6-8 weeks",
    detail: "Six weeks of training, parallel runs, and disruption before EZLynx is live.",
  },
  {
    label: "Support model",
    harboriq: "Founder answers",
    competitor: "Tiered queue",
    detail: "EZLynx support response time is the single most-cited complaint in public reviews.",
  },
  {
    label: "Pricing transparency",
    harboriq: "Published, flat",
    competitor: "$350 + per-user + add-ons",
    detail: "EZLynx base price hides per-user fees, implementation fees, and module upsells.",
  },
  {
    label: "Architectural origin",
    harboriq: "AMS-first, AI-native",
    competitor: "Rater first, AMS bolted on",
    detail: "EZLynx started as a comparative rater and grew an AMS around it.",
  },
];

const fullTable = [
  ["Pricing model", "Flat monthly. $199 / $379 / $599. Published.", "Starts at $350/mo + per-user fees + add-ons"],
  ["Per-user fees", "None. Flat price per agency within each tier.", "Yes. Costs scale with each user."],
  ["Pipeline CRM", "Built-in prospect tracking with stages and follow-ups.", "Not included. Requires separate CRM."],
  ["Comparative rating", "AI-assisted quoting with semantic carrier mapping.", "Traditional API-based comparative rater (their original product)."],
  ["Renewal management", "Dedicated dashboard with priority escalation.", "Basic renewal tracking."],
  ["Team performance", "Agent dashboards with production metrics and goal tracking.", "Limited reporting capabilities."],
  ["Onboarding timeline", "Days. CSV import + guided setup.", "6-8 weeks minimum per user reviews."],
  ["Support", "Founder-direct for design partners. Hours, often minutes.", "Tiered queue. Long response times cited in reviews."],
  ["AI capabilities", "AI-native: quoting, carrier translation, daily briefings.", "No AI-native features."],
  ["Ownership", "Independent. One product, every cycle.", "Owned by Applied Systems since 2018."],
];

// Implementation-impact timeline geometry. HarborIQ at 4 days; EZLynx at 56 days (8 weeks).
const IMPL_LEFT = 24;
const IMPL_RIGHT = 684;
const dayToImplX = (d: number) => IMPL_LEFT + (d / 56) * (IMPL_RIGHT - IMPL_LEFT);

export default function CompareEZLynxPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-anchor py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-medium text-paper leading-tight tracking-tight">
            HarborIQ vs EZLynx
          </h1>
          <p className="mt-5 text-[17px] md:text-[19px] text-mist leading-relaxed max-w-2xl mx-auto">
            EZLynx built one of the best comparative raters in the industry.<br className="hidden md:inline" />
            {" "}Then they bolted an AMS on top and called it a platform.
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
                  <span className="font-medium text-charcoal">EZLynx:</span> {c.competitor}
                </p>
                <p className="text-[13px] text-charcoal leading-relaxed mt-auto pt-5 border-t border-ash">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ARCHITECTURAL VISUAL: IMPLEMENTATION IMPACT TIMELINE ─── */}
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
            What your agency goes through
          </p>
          <h2 className="text-2xl md:text-[34px] font-medium text-paper leading-tight tracking-tight text-center max-w-3xl mx-auto mb-10 md:mb-14">
            Six weeks of disruption or four days of import.
          </h2>

          <div className="bg-midnight/60 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
            <svg viewBox="0 0 700 300" className="w-full h-auto" role="img" aria-label="Implementation timeline: HarborIQ live in 4 days. EZLynx live around 8 weeks.">
              {/* HarborIQ track (top) */}
              <text x={IMPL_LEFT} y="28" fontSize="14" fontWeight="600" fill="#C4935A">HarborIQ</text>

              <line x1={dayToImplX(0)} y1="68" x2={dayToImplX(4)} y2="68" stroke="#C4935A" strokeWidth="3" strokeLinecap="round" />

              <circle cx={dayToImplX(0)} cy="68" r="7" fill="#C4935A" />
              <text x={dayToImplX(0)} y="94" fontSize="11" fill="#F1E9D8" textAnchor="middle">CSV import</text>

              <circle cx={dayToImplX(2)} cy="68" r="6" fill="#C4935A" />
              <text x={dayToImplX(2)} y="112" fontSize="11" fill="#F1E9D8" textAnchor="middle">Walkthrough</text>

              <circle cx={dayToImplX(4)} cy="68" r="9" fill="#C4935A" stroke="#C4935A" strokeWidth="2" />
              <text x={dayToImplX(4) + 14} y="72" fontSize="12" fill="#C4935A" fontWeight="600" textAnchor="start">→ Live in 4 days</text>

              {/* Divider */}
              <line x1={IMPL_LEFT} y1="150" x2={IMPL_RIGHT} y2="150" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 4" />

              {/* EZLynx track (bottom) */}
              <text x={IMPL_LEFT} y="180" fontSize="14" fontWeight="600" fill="rgba(241,233,216,0.85)">EZLynx</text>

              <line x1={dayToImplX(0)} y1="220" x2={dayToImplX(56)} y2="220" stroke="rgba(241,233,216,0.35)" strokeWidth="2" />

              <circle cx={dayToImplX(0)} cy="220" r="5" fill="#F1E9D8" stroke="#0F2440" strokeWidth="1.5" />
              <text x={dayToImplX(0)} y="246" fontSize="11" fill="rgba(241,233,216,0.7)" textAnchor="middle">Kickoff</text>

              <circle cx={dayToImplX(7)} cy="220" r="5" fill="#F1E9D8" stroke="#0F2440" strokeWidth="1.5" />
              <text x={dayToImplX(7)} y="264" fontSize="11" fill="rgba(241,233,216,0.7)" textAnchor="middle">Data export</text>

              <circle cx={dayToImplX(21)} cy="220" r="5" fill="#F1E9D8" stroke="#0F2440" strokeWidth="1.5" />
              <text x={dayToImplX(21)} y="246" fontSize="11" fill="rgba(241,233,216,0.7)" textAnchor="middle">Migration & config</text>

              <circle cx={dayToImplX(35)} cy="220" r="5" fill="#F1E9D8" stroke="#0F2440" strokeWidth="1.5" />
              <text x={dayToImplX(35)} y="264" fontSize="11" fill="rgba(241,233,216,0.7)" textAnchor="middle">Training (agents off desk)</text>

              <circle cx={dayToImplX(45)} cy="220" r="5" fill="#F1E9D8" stroke="#0F2440" strokeWidth="1.5" />
              <text x={dayToImplX(45)} y="246" fontSize="11" fill="rgba(241,233,216,0.7)" textAnchor="middle">Parallel run</text>

              <circle cx={dayToImplX(56)} cy="220" r="9" fill="#F1E9D8" stroke="#0F2440" strokeWidth="2" />
              <text x={dayToImplX(56) - 12} y="224" fontSize="11" fill="rgba(241,233,216,0.85)" textAnchor="end" fontWeight="600">Live ≈ Week 8</text>
            </svg>
          </div>

          {/* ─── FINANCIAL WEIGHT CALLOUT ─── */}
          <div className="mt-8 md:mt-10 bg-midnight/60 border border-copper/30 rounded-xl p-6 md:p-8 backdrop-blur-sm">
            <p className="text-[12px] font-medium text-copper uppercase tracking-[0.12em] mb-3 text-center">
              What the gap actually costs you
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-5">
              <div className="text-center">
                <p className="text-[28px] md:text-[34px] font-medium text-copper leading-none">4 days vs 8 weeks</p>
                <p className="mt-2 text-[13px] text-mist leading-snug">to live. Ours is a CSV import. Theirs is training sessions and parallel runs while client calls go to voicemail.</p>
              </div>
              <div className="text-center">
                <p className="text-[28px] md:text-[34px] font-medium text-copper leading-none">Founder vs Tier&#8209;1</p>
                <p className="mt-2 text-[13px] text-mist leading-snug">for support. EZLynx tickets enter a queue. Yours come straight to me.</p>
              </div>
              <div className="text-center">
                <p className="text-[28px] md:text-[34px] font-medium text-copper leading-none">$379 flat vs the stack</p>
                <p className="mt-2 text-[13px] text-mist leading-snug">EZLynx is base + per-user + add-ons + implementation. Our price is published. There&rsquo;s nothing else to add.</p>
              </div>
            </div>
          </div>

          <p className="text-[14px] md:text-[15px] text-mist leading-relaxed mt-8 text-center max-w-2xl mx-auto">
            Six weeks of training sessions and parallel runs.<br className="hidden md:inline" />
            {" "}Or four days of CSV import and a guided walkthrough.<br className="hidden md:inline" />
            {" "}Same book of business in both lanes.
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
                EZLynx is right when&hellip;
              </h3>
              <ul className="space-y-3 text-[15px] text-charcoal leading-relaxed">
                <li className="flex gap-3"><span className="text-stone mt-0.5 shrink-0">&bull;</span>You primarily need a comparative rater with established carrier API connections.</li>
                <li className="flex gap-3"><span className="text-stone mt-0.5 shrink-0">&bull;</span>You&rsquo;re already in the Applied Systems ecosystem and want the easy in-suite path.</li>
                <li className="flex gap-3"><span className="text-stone mt-0.5 shrink-0">&bull;</span>Your team can absorb six weeks of implementation without losing focus on clients.</li>
              </ul>
            </div>
            <div className="bg-pure border-2 border-interactive rounded-lg p-6 md:p-8">
              <h3 className="text-[17px] font-medium text-ink mb-5">
                HarborIQ is right when&hellip;
              </h3>
              <ul className="space-y-3 text-[15px] text-charcoal leading-relaxed">
                <li className="flex gap-3">
                  <svg width="18" height="18" fill="none" stroke="#2E8B57" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Support response time matters more to you than the deepest existing rater.
                </li>
                <li className="flex gap-3">
                  <svg width="18" height="18" fill="none" stroke="#2E8B57" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Your team can&rsquo;t afford to be in training while client calls go to voicemail.
                </li>
                <li className="flex gap-3">
                  <svg width="18" height="18" fill="none" stroke="#2E8B57" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  You want pipeline, quoting, renewals, and AI sharing one client record.
                </li>
              </ul>
            </div>
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
            EZLynx assigns you a tier-1 queue.<br />
            HarborIQ has me.
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
                    <th className="text-left py-3 pl-4 text-ink font-medium">EZLynx</th>
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
              ["Support is the single most-cited complaint.", "Public reviews consistently flag long response times. The founder answers HarborIQ tickets directly."],
              ["Six weeks of implementation is six weeks of disruption.", "Client calls go to voicemail while your agents are in training. Four days of CSV import is a different operation."],
              ["The Applied Systems parent matters.", "EZLynx is owned by Applied. The same ecosystem dynamics (pricing opacity, suite upsells) apply downstream."],
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
