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
  "Marketing automation",
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
      <section className="bg-paper pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-medium text-ink leading-tight tracking-tight">
            Simple pricing. No&nbsp;surprises.
          </h1>
          <p className="mt-4 text-lg text-charcoal leading-relaxed">
            Flat monthly fee. No per-quote charges. No usage metering. You know exactly what you&rsquo;re&nbsp;paying.
          </p>
        </div>
      </section>

      {/* ─── PER-SEAT CALLOUT ─── */}
      <section className="bg-paper pb-8">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-glow border border-amber/40 rounded-xl px-6 py-5 text-center">
            <p className="text-[15px] text-walnut leading-relaxed">
              Not per seat. Not per user. Not per agent. <strong className="font-medium text-ink">One flat price for your whole&nbsp;team.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ─── PRICING TIERS ─── */}
      <section className="bg-paper py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

            {/* Core */}
            <div className="bg-pure rounded-xl border border-ash p-8">
              <h3 className="text-lg font-medium text-ink">Core</h3>
              <p className="mt-2 text-3xl font-medium text-ink tracking-tight">
                $299<span className="text-lg text-stone font-normal">/month</span>
              </p>
              <p className="mt-1 text-[13px] text-stone">Your whole agency, up to 5 users</p>
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
            <div className="relative bg-pure rounded-xl border-2 border-copper p-8">
              {/* Founding badge */}
              <div className="inline-block bg-copper text-white text-[13px] font-medium px-3 py-1 rounded-md mb-4">
                Founding agency &middot; limited spots
              </div>
              <h3 className="text-lg font-medium text-ink">Pro</h3>
              <div className="mt-2 flex items-baseline gap-3">
                <p className="text-3xl font-medium text-ink tracking-tight">
                  $299<span className="text-lg text-stone font-normal">/month</span>
                </p>
                <p className="text-lg text-stone line-through">$499</p>
              </div>
              <p className="mt-1 text-[13px] text-stone">Your whole agency, up to 15 users</p>

              {/* FOUNDER code callout */}
              <div className="mt-4 bg-glow border border-amber/40 rounded-lg px-4 py-3">
                <p className="text-[14px] text-walnut">
                  Use code <strong className="font-medium text-ink tracking-wide">FOUNDER</strong> at checkout for $200/mo&nbsp;off
                </p>
              </div>

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
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-linen py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-medium text-ink tracking-tight text-center mb-10">
            Frequently asked questions
          </h2>
          <FAQ />
        </div>
      </section>

      {/* ─── AI DEMO ─── */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium text-ink tracking-tight">
            See the IQ in&nbsp;action
          </h2>
          <p className="mt-4 text-[15px] text-charcoal leading-relaxed">
            This is what AI-powered actually looks&nbsp;like.
          </p>
          <div className="mt-10 rounded-xl overflow-hidden border border-ash shadow-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            >
              <source src="/videos/ai-demo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ─── DEMO BOOKING ─── */}
      <section className="bg-linen py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium text-ink tracking-tight">
            Want to see it first? Let&rsquo;s&nbsp;talk.
          </h2>
          <p className="mt-4 text-[15px] text-charcoal leading-relaxed">
            Book a 15-minute demo. No pitch deck. We&rsquo;ll show you the product and answer your&nbsp;questions.
          </p>
          <a
            href="https://tidycal.com/cjmayer/15-minute-intro"
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
