import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "./FAQ";

export const metadata: Metadata = {
  title: "Pricing — HarborIQ",
  description:
    "Simple, flat monthly pricing for independent insurance agencies. Founding agency spots available at $299/month for Pro, locked for life.",
};

const CREEM_PRO = "https://www.creem.io/test/payment/prod_1zF9yBXpb0b3E7UT9aFfIU";
const CREEM_CORE = "https://www.creem.io/test/payment/prod_5tuYAqFQn50nJwa7NuxlGz";

const coreIncludes = [
  "Pipeline CRM",
  "Client profiles & renewals",
  "Command Center",
  "Up to 5 users",
  "Email support",
];

const proIncludes = [
  "Everything in Core",
  "Team performance analytics",
  "Client engagement automation",
  "AI-assisted quoting (when Phase 2 launches)",
  "Up to 15 users",
  "Priority support & direct product team access",
  "Dedicated onboarding",
  "Your feedback directly shapes the roadmap",
];

export default function PricingPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="bg-paper pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-medium text-ink leading-tight tracking-tight">
            Simple pricing. No&nbsp;surprises.
          </h1>
          <p className="mt-3 text-[17px] text-charcoal leading-relaxed">
            Flat monthly fee. No per-quote charges. No usage metering.<br className="hidden md:inline" />
            You know exactly what you&rsquo;re&nbsp;paying.
          </p>
        </div>
      </section>

      {/* ─── PER-SEAT CALLOUT ─── */}
      <section className="bg-paper pb-6">
        <div className="max-w-2xl mx-auto px-6 md:px-10">
          <div className="bg-glow border border-amber/40 rounded-xl px-6 py-4 text-center">
            <p className="text-[15px] text-walnut leading-relaxed">
              Not per seat. Not per user. Not per agent. <strong className="font-medium text-ink">One flat price for your whole&nbsp;team.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ─── PRICING TIERS ─── */}
      <section className="bg-paper py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start max-w-5xl mx-auto">

            {/* Core */}
            <div className="bg-pure rounded-xl border border-ash p-8">
              <h3 className="text-lg font-medium text-ink">Core</h3>
              <p className="mt-2 text-3xl font-medium text-ink tracking-tight">
                $299<span className="text-lg text-stone font-normal">/month</span>
              </p>
              <p className="mt-1 text-[13px] text-stone">Up to 5 users</p>
              <div className="mt-6 space-y-3">
                {coreIncludes.map((item) => (
                  <div key={item} className="flex gap-3 text-[15px] text-charcoal">
                    <svg width="18" height="18" fill="none" stroke="#3B6FA0" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              <a
                href={CREEM_CORE}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary mt-8 block text-center text-harbor border border-harbor rounded-lg px-6 py-3 text-[15px] font-medium hover:bg-harbor hover:text-white transition-colors"
              >
                Get started
              </a>
            </div>

            {/* Pro (Founding Offer) */}
            <div className="relative bg-pure rounded-xl border-2 border-anchor p-8 overflow-hidden">
              {/* Badge: Blue background to draw the eye */}
              <div className="absolute top-0 left-0 right-0 bg-anchor px-4 py-2">
                <p className="text-[12px] font-medium text-ice text-center tracking-wide">Founding agency &middot; limited spots</p>
              </div>
              <div className="pt-8">
              <h3 className="text-lg font-medium text-ink">Pro</h3>
              <div className="mt-2 flex items-baseline gap-3">
                <p className="text-3xl font-medium text-ink tracking-tight">
                  $299<span className="text-lg text-stone font-normal">/month</span>
                </p>
                <p className="text-lg text-stone line-through">$499</p>
              </div>
              <p className="mt-1 text-[13px] text-stone">Up to 15 users</p>

              <div className="mt-6 space-y-3">
                {proIncludes.map((item) => (
                  <div key={item} className="flex gap-3 text-[15px] text-charcoal">
                    <svg width="18" height="18" fill="none" stroke="#1B7A4A" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              {/* CTA: Only copper element on the card */}
              <a
                href={CREEM_PRO}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary mt-8 block text-center bg-copper text-white rounded-lg px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors"
              >
                Claim your founding spot
              </a>
              <p className="mt-3 text-[13px] text-stone text-center">
                Price locked for life. Cancel&nbsp;anytime.
              </p>
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-pure rounded-xl border border-ash p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-medium text-ink">Enterprise</h3>
                <p className="mt-2 text-[15px] text-charcoal leading-relaxed">
                  More than 15&nbsp;employees
                </p>
                <p className="mt-4 text-[16px] text-charcoal leading-relaxed">
                  Let&rsquo;s build a plan that fits your&nbsp;agency.
                </p>
              </div>
              <a
                href="https://tidycal.com/cjmayer/harboriq-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary mt-8 block text-center text-harbor border border-harbor rounded-lg px-6 py-3 text-[15px] font-medium hover:bg-harbor hover:text-white transition-colors"
              >
                Contact us
              </a>
            </div>
          </div>

          {/* Onboarding fee callout */}
          <div className="max-w-5xl mx-auto mt-8">
            <div className="bg-linen border border-ash rounded-xl px-6 py-5">
              <h3 className="text-[15px] font-medium text-ink">Data migration &amp; onboarding</h3>
              <p className="mt-2 text-[15px] text-charcoal leading-relaxed">
                Switching from spreadsheets, EasyAgent, or another platform? We&rsquo;ll handle the migration. <strong className="font-medium text-ink">$499 one-time setup fee</strong> includes data cleanup, import, and a hands-on walkthrough to get your team&nbsp;running.
              </p>
              <p className="mt-2 text-[13px] text-stone">
                Your existing data stays yours. We import what we can and get you set up for the&nbsp;future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-medium text-ink tracking-tight text-center mb-10">
            Frequently asked questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>

      {/* ─── DEMO BOOKING ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-ink tracking-tight">
            Want to see it first? Let&rsquo;s&nbsp;talk.
          </h2>
          <p className="mt-3 text-[16px] text-charcoal leading-relaxed">
            Book a 15-minute demo. No pitch deck. We&rsquo;ll show you the product and answer your&nbsp;questions.
          </p>
          <a
            href="https://tidycal.com/cjmayer/harboriq-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary inline-block mt-8 bg-harbor text-white rounded-lg px-6 py-3 text-[15px] font-medium hover:bg-deep transition-colors"
          >
            Book a 15-min demo
          </a>
        </div>
      </section>
    </>
  );
}
