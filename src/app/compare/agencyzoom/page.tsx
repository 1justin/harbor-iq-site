import type { Metadata } from "next";
import { CtaSection } from "@/components/CtaSection";
import { DEMO_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HarborIQ vs AgencyZoom | One Operating System, Not an Overlay",
  description:
    "AgencyZoom is the leading sales-automation overlay for independent agencies. HarborIQ is the operating system that makes the overlay unnecessary.",
  alternates: { canonical: "/compare/agencyzoom" },
  openGraph: {
    title: "HarborIQ vs AgencyZoom | One Operating System, Not an Overlay",
    description:
      "AgencyZoom sits on top of your AMS. HarborIQ replaces the stack.",
    url: "/compare/agencyzoom",
  },
};

const contrastCards = [
  {
    label: "Systems your team logs into",
    harboriq: "One",
    competitor: "Two",
    detail: "AgencyZoom for pipeline. The AMS underneath for clients and policies.",
  },
  {
    label: "Cost for a 5-person agency",
    harboriq: "$379 flat",
    competitor: "$720+ and rising",
    detail: "AgencyZoom + a per-user AMS. Every hire is a raise for someone else.",
  },
  {
    label: "Source of truth for one client",
    harboriq: "One record",
    competitor: "Two records",
    detail: "Synced overnight. Eventually you ask which system is right.",
  },
  {
    label: "AI-assisted quoting",
    harboriq: "Built in",
    competitor: "Not included",
    detail: "AgencyZoom integrates with raters as separate tools.",
  },
];

const fullTable = [
  ["Category", "Operating system: AMS + CRM + AI in one platform", "Overlay: sales-automation CRM on top of your existing AMS"],
  ["Pricing model", "Flat monthly. $199 / $379 / $599. Published.", "From ~$79/mo plus the AMS underneath. Higher tiers gate 2-way email and SMS."],
  ["Client and policy management", "Included. One record across pipeline, policy, renewals, claims.", "Not included. AgencyZoom is pipeline and engagement only."],
  ["AI-assisted quoting", "Built in. Carrier-term translation, semantic mapping, pre-fill.", "Not included. Separate raters required (PL Rating, Tarmika, Bridge)."],
  ["Sales pipeline", "Native Kanban, multiple stages, AI-assisted next-best-action.", "Native and well-developed. Their strongest feature."],
  ["Google Reviews and referrals", "Built in on the Operating System tier.", "Built in. Requires sync with the underlying AMS for client context."],
  ["Renewals dashboard", "Dedicated view with priority escalation and price-change tracking.", "Renewal reminders as automations. No dedicated renewals view."],
  ["Data architecture", "One data model. No sync.", "Two-way sync with AMS. Lag, conflicts, and a source-of-truth question."],
  ["Ownership", "Independent. One product, every cycle.", "Owned by Vertafore (2022). Integration priority favors Vertafore products."],
  ["Onboarding timeline", "Days. CSV import, guided wizard.", "Weeks. Two systems to onboard, two data models to reconcile."],
];

export default function CompareAgencyZoomPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-anchor py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-medium text-paper leading-tight tracking-tight">
            HarborIQ vs AgencyZoom
          </h1>
          <p className="mt-5 text-[17px] md:text-[19px] text-mist leading-relaxed max-w-2xl mx-auto">
            AgencyZoom is the best overlay on the market.<br className="hidden md:inline" />
            {" "}HarborIQ is the operating system that makes the overlay unnecessary.
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
                <p className="mt-1 text-[32px] md:text-[36px] font-medium text-copper leading-[1.05] tracking-tight">
                  {c.harboriq}
                </p>
                <p className="mt-4 text-[14px] text-stone leading-snug">
                  <span className="font-medium text-charcoal">AgencyZoom:</span> {c.competitor}
                </p>
                <p className="text-[13px] text-charcoal leading-relaxed mt-auto pt-5 border-t border-ash">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ARCHITECTURAL DIAGRAM ─── */}
      <section className="bg-anchor py-16 md:py-24 relative overflow-hidden">
        {/* Subtle grain texture — matches homepage hero */}
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
            The architectural call
          </p>
          <h2 className="text-2xl md:text-[34px] font-medium text-paper leading-tight tracking-tight text-center max-w-3xl mx-auto mb-12 md:mb-16">
            AgencyZoom connects tools.<br className="hidden md:inline" /> HarborIQ reduces the number of places your team has to live in.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch">
            {/* AgencyZoom + AMS — overlay diagram (smaller, muted) */}
            <div className="flex flex-col order-2 md:order-1">
              <p className="text-[12px] font-medium text-mist/70 uppercase tracking-[0.1em] text-center mb-6">
                AgencyZoom + AMS
              </p>

              <div className="relative bg-midnight/60 border border-white/10 rounded-xl p-5 md:p-6 backdrop-blur-sm">
                {/* AgencyZoom pill (top) */}
                <div className="relative z-10 bg-white/[0.05] border border-white/15 rounded-full px-4 py-2.5 text-center">
                  <p className="text-[10px] uppercase tracking-[0.1em] text-mist/60 mb-0.5">Overlay</p>
                  <p className="text-[14px] font-medium text-paper/90">AgencyZoom</p>
                </div>

                {/* Sync arrows with centered label */}
                <div className="my-3 flex items-center justify-center gap-2">
                  <svg width="14" height="26" viewBox="0 0 14 26" aria-hidden="true">
                    <path d="M 7 1 L 7 22" stroke="#C4935A" strokeWidth="1.25" strokeDasharray="2.5 2.5" opacity="0.7" />
                    <path d="M 7 22 L 4 17 M 7 22 L 10 17" stroke="#C4935A" strokeWidth="1.25" fill="none" strokeLinecap="round" opacity="0.85" />
                  </svg>
                  <div className="bg-anchor/90 border border-copper/30 rounded-full px-2.5 py-0.5">
                    <p className="text-[9px] uppercase tracking-[0.15em] text-copper italic whitespace-nowrap">overnight sync</p>
                  </div>
                  <svg width="14" height="26" viewBox="0 0 14 26" aria-hidden="true">
                    <path d="M 7 25 L 7 4" stroke="#C4935A" strokeWidth="1.25" strokeDasharray="2.5 2.5" opacity="0.7" />
                    <path d="M 7 4 L 4 9 M 7 4 L 10 9" stroke="#C4935A" strokeWidth="1.25" fill="none" strokeLinecap="round" opacity="0.85" />
                  </svg>
                </div>

                {/* AMS pill (bottom) */}
                <div className="relative z-10 bg-white/[0.05] border border-white/15 rounded-full px-4 py-2.5 text-center">
                  <p className="text-[10px] uppercase tracking-[0.1em] text-mist/60 mb-0.5">AMS underneath</p>
                  <p className="text-[14px] font-medium text-paper/90">HawkSoft / AMS360 / …</p>
                </div>
              </div>

              <p className="text-[14px] text-mist leading-relaxed mt-5 text-center md:px-2">
                Two systems.<br />
                Two logins.<br />
                The handoff between them is where work falls.
              </p>
            </div>

            {/* HarborIQ — unified diagram (larger, dominant) */}
            <div className="flex flex-col order-1 md:order-2">
              <p className="text-[12px] font-medium text-copper uppercase tracking-[0.1em] text-center mb-6">
                HarborIQ
              </p>

              <div className="relative bg-midnight/60 border-2 border-copper/50 rounded-2xl p-7 md:p-10 backdrop-blur-sm shadow-[0_0_60px_rgba(196,147,90,0.2)]">
                {/* Outer copper glow ring */}
                <div aria-hidden="true" className="pointer-events-none absolute -inset-1 rounded-2xl border border-copper/20" />

                {/* Central HarborIQ pill — larger, more presence */}
                <div className="flex justify-center mb-7">
                  <div className="bg-copper text-white rounded-full px-7 py-3 text-[17px] font-semibold tracking-tight shadow-[0_0_35px_rgba(196,147,90,0.55)]">
                    HarborIQ
                  </div>
                </div>

                {/* Capability pills, 3x2 — 6 capabilities */}
                <div className="grid grid-cols-2 gap-3 md:gap-3.5">
                  {["Pipeline", "Clients", "Renewals", "AI Quoting", "Reviews", "Carriers"].map((cap) => (
                    <div
                      key={cap}
                      className="bg-anchor/90 border border-copper/40 rounded-full px-3.5 py-2.5 text-center text-[13px] md:text-[14px] font-medium text-paper backdrop-blur-sm"
                    >
                      {cap}
                    </div>
                  ))}
                </div>

                <p className="text-center text-[11px] uppercase tracking-[0.15em] text-copper italic mt-7">
                  Same record. No sync.
                </p>
              </div>

              <p className="text-[14px] text-mist leading-relaxed mt-5 text-center md:px-2">
                One client record across the lifecycle.<br />
                The handoff doesn&rsquo;t exist because there&rsquo;s no second system.
              </p>
            </div>
          </div>
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
                AgencyZoom is right when&hellip;
              </h3>
              <ul className="space-y-3 text-[15px] text-charcoal leading-relaxed">
                <li className="flex gap-3"><span className="text-stone mt-0.5 shrink-0">&bull;</span>You&rsquo;re stuck on your current AMS and just need to close the prospect-pipeline gap.</li>
                <li className="flex gap-3"><span className="text-stone mt-0.5 shrink-0">&bull;</span>You&rsquo;re already deep in the Vertafore ecosystem and want the path of least resistance.</li>
                <li className="flex gap-3"><span className="text-stone mt-0.5 shrink-0">&bull;</span>Your team is trained on AgencyZoom today and switching feels heavier than the win.</li>
              </ul>
            </div>
            <div className="bg-pure border-2 border-interactive rounded-lg p-6 md:p-8">
              <h3 className="text-[17px] font-medium text-ink mb-5">
                HarborIQ is right when&hellip;
              </h3>
              <ul className="space-y-3 text-[15px] text-charcoal leading-relaxed">
                <li className="flex gap-3">
                  <svg width="18" height="18" fill="none" stroke="#2E8B57" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  <span>You&rsquo;re paying for an AMS <em>and</em> AgencyZoom today and would rather pay for one system.</span>
                </li>
                <li className="flex gap-3">
                  <svg width="18" height="18" fill="none" stroke="#2E8B57" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Your team toggles between two windows to get the full picture on one client.
                </li>
                <li className="flex gap-3">
                  <svg width="18" height="18" fill="none" stroke="#2E8B57" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  You want AI-assisted quoting and pipeline to share one client record, not sync overnight.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ALREADY RUNNING BOTH? — ANNUAL COST FRAMING ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4 text-center">
            Already running AgencyZoom on your AMS?
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center max-w-3xl mx-auto mb-3">
            Here&rsquo;s what the stack costs you every year.
          </h2>
          <p className="text-[16px] text-charcoal leading-relaxed text-center max-w-2xl mx-auto mb-10">
            AgencyZoom plus an AMS underneath. Two contracts, two renewals, two support queues. We did the math.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left max-w-3xl mx-auto">
              <thead>
                <tr className="border-b-2 border-ash">
                  <th className="py-3 pr-4 text-[12px] font-medium text-stone uppercase tracking-wider">Headcount</th>
                  <th className="py-3 px-4 text-[12px] font-medium text-stone uppercase tracking-wider">AgencyZoom + AMS / year</th>
                  <th className="py-3 px-4 text-[12px] font-medium text-stone uppercase tracking-wider">HarborIQ / year</th>
                  <th className="py-3 pl-4 text-[12px] font-medium text-copper uppercase tracking-wider">You keep</th>
                </tr>
              </thead>
              <tbody className="text-[15px]">
                <tr className="border-b border-ash/60">
                  <td className="py-4 pr-4 font-medium text-ink">5 people</td>
                  <td className="py-4 px-4 text-charcoal">≈ $9,588</td>
                  <td className="py-4 px-4 text-charcoal">$4,188 <span className="text-stone text-[13px]">(Team)</span></td>
                  <td className="py-4 pl-4 font-medium text-copper">$5,400</td>
                </tr>
                <tr className="border-b border-ash/60">
                  <td className="py-4 pr-4 font-medium text-ink">10 people</td>
                  <td className="py-4 px-4 text-charcoal">≈ $16,068</td>
                  <td className="py-4 px-4 text-charcoal">$7,188 <span className="text-stone text-[13px]">(OS)</span></td>
                  <td className="py-4 pl-4 font-medium text-copper">$8,880</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-ink">15 people</td>
                  <td className="py-4 px-4 text-charcoal">≈ $22,668</td>
                  <td className="py-4 px-4 text-charcoal">$7,188 <span className="text-stone text-[13px]">(OS)</span></td>
                  <td className="py-4 pl-4 font-medium text-copper">$15,480</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[13px] text-stone leading-relaxed text-center max-w-2xl mx-auto mt-8">
            Source: AgencyZoom paired with HawkSoft pricing. Other AMS pairings (AMS360, NowCerts) vary in the same range. Reported by HarborIQ customers and by agencies pitched by AgencyZoom in 2026.
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
            Not a discovery call. A live demo.
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
                    <th className="text-left py-3 pl-4 text-ink font-medium">AgencyZoom</th>
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
              ["Two systems, one client.", "The source-of-truth question never goes away. We remove it."],
              ["Compounding cost.", "AgencyZoom + a per-user AMS rises with every hire. HarborIQ is flat."],
              ["Vertafore owns the roadmap.", "AgencyZoom’s direction will increasingly serve the Vertafore suite, not your agency."],
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
