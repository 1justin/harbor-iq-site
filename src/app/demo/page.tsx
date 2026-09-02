import type { Metadata } from "next";
import { Suspense } from "react";
import { DemoBooking } from "./DemoBooking";

export const metadata: Metadata = {
  title: "Book a 20-minute demo | HarborIQ",
  description:
    "See HarborIQ live: Carrier Ask, your book in one place, and straight answers on fit, migration, and price. Twenty minutes with the founder, no deck.",
  alternates: { canonical: "/demo" },
};

/**
 * Pre-calendar capture (Whistle recommendation, 2026-09-02). Name and email
 * first, then the TidyCal calendar inline with both prefilled, so a prospect
 * who never picks a time is still a lead Justin can follow up with. The
 * booking itself, the confirmation redirect to /demo-prep, and the concierge
 * are unchanged. Optional ?src= carries channel attribution into the record.
 */
export default function DemoPage() {
  return (
    <section className="bg-linen min-h-[70vh] py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
              Book a demo
            </p>
            <h1 className="text-3xl md:text-4xl font-medium text-ink leading-tight tracking-tight">
              Twenty minutes. Live product. No deck.
            </h1>
            <p className="mt-4 text-[17px] text-charcoal leading-relaxed">
              You will see Carrier Ask answer a real appetite question, your
              book in one place with a renewals list that builds itself, and get
              straight answers on fit, migration, and price. Our pricing is
              published, so there is nothing to pry out of us.
            </p>
            <ul className="mt-6 space-y-2 text-[15px] text-charcoal">
              <li className="flex gap-3">
                <span className="text-copper" aria-hidden="true">&#8226;</span>
                Justin, the founder, runs every call himself.
              </li>
              <li className="flex gap-3">
                <span className="text-copper" aria-hidden="true">&#8226;</span>
                Bring whoever uses your system all day. They ask the best
                questions.
              </li>
              <li className="flex gap-3">
                <span className="text-copper" aria-hidden="true">&#8226;</span>
                If HarborIQ is not right for your agency, you will hear it on
                the call, not after.
              </li>
            </ul>
          </div>

          <Suspense fallback={null}>
            <DemoBooking />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
