import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "./FAQ";

export const metadata: Metadata = {
  title: "Pricing — HarborIQ",
  description:
    "Simple, flat monthly pricing for independent insurance agencies. Founding agency spots available at $299/month, locked for life.",
};

const foundingIncludes = [
  "Full platform access (pipeline, clients, team performance, marketing, Command Center)",
  "Up to 5 users",
  "Priority support and direct access to the product team",
  "AI-assisted quoting (when Phase 2 launches, included at no extra cost)",
  "Your feedback directly shapes the roadmap",
];

export default function PricingPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="bg-paper pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-medium text-ink leading-tight tracking-tight">
            Simple pricing. No surprises.
          </h1>
          <p className="mt-4 text-lg text-charcoal leading-relaxed">
            Flat monthly fee. No per-quote charges. No usage metering. You know exactly what you&rsquo;re paying.
          </p>
        </div>
      </section>

      {/* ─── PER-SEAT CALLOUT ─── */}
      <section className="bg-paper pb-8">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-glow border border-amber/40 rounded-xl px-6 py-5 text-center">
            <p className="text-[15px] text-walnut leading-relaxed">
              Yes, you read that right. <strong className="font-medium text-ink">$299/month for your whole team.</strong> Not per seat. Not per user. Not per agent. Your whole office. We thought you&rsquo;d want to read that twice.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FOUNDING AGENCY OFFER ─── */}
      <section className="bg-paper py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative bg-pure rounded-xl border-2 border-copper p-8 md:p-10">
            {/* Badge */}
            <div className="inline-block bg-copper text-white text-[13px] font-medium px-3 py-1 rounded-md mb-6">
              Founding agency &middot; limited spots
            </div>

            <div className="md:flex md:justify-between md:items-start gap-8">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-medium text-ink tracking-tight">
                  $299<span className="text-lg text-stone font-normal">/month</span>
                  <span className="block text-lg text-charcoal font-normal mt-1">Locked for life.</span>
                </h2>
                <p className="mt-3 text-[15px] text-charcoal leading-relaxed">
                  Your whole agency. Not per seat. Join our founding cohort, shape the product, and lock in a price that never goes up.
                </p>
              </div>

              <div className="mt-8 md:mt-0 md:text-right shrink-0">
                <Link
                  href="#"
                  className="inline-block bg-copper text-white rounded-lg px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors"
                >
                  Claim your founding spot
                </Link>
                <p className="mt-2 text-[13px] text-stone">$100 refundable deposit</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-ash">
              <h3 className="text-[13px] font-medium text-stone uppercase tracking-wider mb-4">
                What&rsquo;s included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {foundingIncludes.map((item) => (
                  <div key={item} className="flex gap-3 text-[15px] text-charcoal">
                    <svg width="20" height="20" fill="none" stroke="#1B7A4A" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-[13px] text-stone leading-relaxed">
              $100 deposit reserves your spot and is applied to your first month. Fully refundable if you change your mind before onboarding. Monthly subscription begins at product launch. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* ─── STANDARD PRICING ─── */}
      <section className="bg-linen py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-medium text-ink tracking-tight text-center mb-10">
            Standard pricing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Starter */}
            <div className="bg-pure rounded-xl border border-ash p-8">
              <h3 className="text-lg font-medium text-ink">Starter</h3>
              <p className="mt-2 text-3xl font-medium text-ink tracking-tight">
                $299<span className="text-lg text-stone font-normal">/month</span>
              </p>
              <p className="mt-1 text-[13px] text-stone">Up to 5 employees, not per seat</p>
              <div className="mt-6 space-y-3">
                {["Full platform access", "Your whole agency, up to 5 employees", "Email support"].map((item) => (
                  <div key={item} className="flex gap-3 text-[15px] text-charcoal">
                    <svg width="18" height="18" fill="none" stroke="#3B6FA0" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Growth */}
            <div className="bg-pure rounded-xl border border-ash p-8">
              <h3 className="text-lg font-medium text-ink">Growth</h3>
              <p className="mt-2 text-3xl font-medium text-ink tracking-tight">
                $499<span className="text-lg text-stone font-normal">/month</span>
              </p>
              <p className="mt-1 text-[13px] text-stone">6-15 employees, not per seat</p>
              <div className="mt-6 space-y-3">
                {[
                  "Full platform access",
                  "Your whole agency, 6-15 employees",
                  "Priority support",
                  "Team performance analytics",
                  "Dedicated onboarding",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-[15px] text-charcoal">
                    <svg width="18" height="18" fill="none" stroke="#3B6FA0" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-[13px] text-stone">
            Standard pricing takes effect after founding spots are claimed. Founding agencies keep their rate forever.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-medium text-ink tracking-tight text-center mb-10">
            Frequently asked questions
          </h2>
          <FAQ />
        </div>
      </section>

      {/* ─── DEMO BOOKING ─── */}
      <section className="bg-linen py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium text-ink tracking-tight">
            Want to see it first? Let&rsquo;s talk.
          </h2>
          <p className="mt-4 text-[15px] text-charcoal leading-relaxed">
            Book a 15-minute demo. No pitch deck. We&rsquo;ll show you the product and answer your questions.
          </p>
          <a
            href="https://tidycal.com/cjmayer/15-minute-intro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-harbor text-white rounded-lg px-6 py-3 text-[15px] font-medium hover:bg-deep transition-colors"
          >
            Book a 15-min demo
          </a>
        </div>
      </section>
    </>
  );
}
