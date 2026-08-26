import type { Metadata } from "next";
import { Suspense } from "react";
import { ConciergeChat, BookingCard } from "./ConciergeChat";
import { DEMO_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Prepare your demo | HarborIQ",
  description:
    "A couple of minutes of context so your 20-minute demo fits your agency.",
  robots: { index: false, follow: false },
};

/**
 * Post-booking concierge. TidyCal's confirmation redirect points here and may
 * carry ?name=&email=&time=&tz=&src=&ref= query params; everything degrades
 * gracefully when absent. Params are read client-side so this page stays
 * static; the conversation itself runs through /api/concierge, and a failure
 * there never affects the booking.
 */
export default function DemoPrepPage() {
  return (
    <div className="min-h-screen bg-anchor">
      <main className="max-w-3xl mx-auto px-5 py-10 pb-20">
        <Suspense fallback={null}>
          <BookingCard />
        </Suspense>

        <p className="text-ice/70 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          Prepare your demo
        </p>
        <h1 className="text-white text-3xl sm:text-4xl font-semibold mb-3">
          Let&apos;s make your 20 minutes useful.
        </h1>
        <p className="text-mist mb-8 max-w-xl">
          A few quick questions help Justin focus on your agency, your systems,
          and the parts of HarborIQ that matter to you.
        </p>

        <Suspense fallback={null}>
          <ConciergeChat rescheduleUrl={DEMO_URL} />
        </Suspense>
      </main>
    </div>
  );
}
