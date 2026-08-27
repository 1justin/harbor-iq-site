import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
 *
 * Deliberately chromeless (see RouteChrome): the prospect has booked, so the
 * page is a focused completion experience with no nav exits.
 */
export default function DemoPrepPage() {
  return (
    <div className="min-h-screen bg-anchor">
      <header className="border-b border-white/10">
        <div className="max-w-3xl mx-auto px-5 h-16 flex items-center justify-between">
          <Image
            src="/images/harboriq-logo-white.svg"
            alt="HarborIQ"
            width={140}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className="flex items-center gap-2 text-sm text-white">
            <span className="w-6 h-6 rounded-full bg-success flex items-center justify-center text-white text-xs">
              &#10003;
            </span>
            Your demo is confirmed
          </span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-5 py-10 pb-20">
        <Suspense fallback={null}>
          <BookingCard />
        </Suspense>

        <p className="text-copper text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          Prepare your demo
        </p>
        <h1 className="text-white text-3xl sm:text-4xl font-semibold mb-3">
          Let&apos;s make your 20 minutes useful.
        </h1>
        <p className="text-mist mb-8 max-w-xl text-[17px]">
          Tell us what brought you here. Justin will use your confirmed recap to
          focus the demo on{" "}
          <span className="text-white font-medium underline decoration-copper decoration-2 underline-offset-4">
            your agency
          </span>
          , not give you a generic product tour.
        </p>

        <Suspense fallback={null}>
          <ConciergeChat rescheduleUrl={DEMO_URL} />
        </Suspense>

        <p className="text-center mt-8">
          <Link href="/" className="text-mist/80 text-sm underline">
            Return to HarborIQ
          </Link>
        </p>
      </main>
    </div>
  );
}
