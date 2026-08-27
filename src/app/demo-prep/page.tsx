import type { Metadata } from "next";
import { DemoPrepView } from "./DemoPrepView";

export const metadata: Metadata = {
  title: "Prepare your demo | HarborIQ",
  description:
    "A couple of minutes of context so your 20-minute demo fits your agency.",
  robots: { index: false, follow: false },
};

/**
 * Post-booking concierge. TidyCal's confirmation redirect points here and may
 * carry ?name=&email=&time=&tz=&src=&ref= query params; everything degrades
 * gracefully when absent. Channel defaults to "site" when untagged; clean
 * channel paths live at /demo-prep/[channel]. A concierge failure never
 * affects the booking.
 *
 * Deliberately chromeless (see RouteChrome): the prospect has booked, so the
 * page is a focused completion experience with no nav exits.
 */
export default function DemoPrepPage() {
  return <DemoPrepView />;
}
