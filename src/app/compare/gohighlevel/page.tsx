import type { Metadata } from "next";
import { CtaSection } from "@/components/CtaSection";
import { DEMO_URL, MARKETS_START_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HarborIQ vs GoHighLevel | They Win the Lead. We Run the Agency.",
  description:
    "GoHighLevel (and its insurance re-skins) is a marketing machine: missed-call text-back, nurture sequences, booking. It has no policy, no carrier, no renewal in it. HarborIQ is the system your agency actually runs on.",
  alternates: { canonical: "/compare/gohighlevel" },
  openGraph: {
    title: "HarborIQ vs GoHighLevel | They Win the Lead. We Run the Agency.",
    description:
      "GHL is a great top-of-funnel machine wearing an insurance costume. Here is what happens after the lead says yes.",
    url: "/compare/gohighlevel",
  },
};

const contrastCards = [
  {
    label: "What it is",
    harboriq: "Agency OS",
    competitor: "Marketing platform",
    detail:
      "GoHighLevel is a generic sales-and-marketing machine, white-labeled by resellers for every industry, insurance included.",
  },
  {
    label: "After the lead says yes",
    harboriq: "The system of record",
    competitor: "Nothing",
    detail:
      "No policy, no ACORD, no carrier, no renewal, no book of business. The moment a lead becomes a client, GHL's job is over.",
  },
  {
    label: "Insurance-native",
    harboriq: "Built for P&C",
    competitor: "A costume",
    detail:
      "HarborIQ speaks carrier appetite, renewals, and compliance. GHL speaks funnels, regardless of what you sell.",
  },
  {
    label: "Real monthly cost",
    harboriq: "$199 to $599 flat",
    competitor: "$97 to $297 + usage",
    detail:
      "GHL bills usage on top for SMS, email, and AI. The sticker is the floor, not the price.",
  },
];

export default function CompareGoHighLevelPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-anchor py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-medium text-paper leading-tight tracking-tight">
            HarborIQ vs GoHighLevel
          </h1>
          <p className="mt-5 text-[17px] md:text-[19px] text-mist leading-relaxed max-w-2xl mx-auto">
            GoHighLevel wins the lead. HarborIQ runs the agency. Those are
            different jobs, and only one of them needs to know what a renewal
            is.
          </p>
        </div>
      </section>

      {/* ─── CONTRAST CARDS ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4 text-center">
            At a glance
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center max-w-3xl mx-auto mb-12">
            A great funnel is not an agency.
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
                <p className="mt-1 text-[24px] md:text-[27px] font-medium text-copper leading-[1.1] tracking-tight">
                  {c.harboriq}
                </p>
                <p className="mt-4 text-[14px] text-stone leading-snug">
                  <span className="font-medium text-charcoal">GoHighLevel:</span>{" "}
                  {c.competitor}
                </p>
                <p className="text-[13px] text-charcoal leading-relaxed mt-auto pt-5 border-t border-ash">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE HONEST FRAME ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
            The honest frame
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight">
            If you love your GHL setup, keep&nbsp;it.
          </h2>
          <div className="mt-6 space-y-4 text-[16px] text-charcoal leading-relaxed">
            <p>
              Missed-call text-back and nurture sequences are real, and if your
              GHL funnel (or the insurance re-skin you bought) is producing
              leads, we are not here to talk you out of it. It lives at the top
              of the funnel. HarborIQ is everything downstream of it: the
              client record, the policies, the renewals, the carrier answers,
              the commissions, the book.
            </p>
            <p>
              The problem we see weekly: an agency pays $97 to $297 a month
              plus usage for the funnel, and the agency itself still runs on a
              15-year-old AMS, spreadsheets, and memory. The lead gets a text
              back in 60 seconds; the client's renewal slips for 60 days.
              HarborIQ fixes the second half, and its pipeline can take your
              GHL leads directly.
            </p>
            <p className="font-medium text-ink">
              Buy the funnel if you want the funnel. But do not mistake it for
              an operating system, no matter whose logo the reseller put on it.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHEN EACH IS RIGHT ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center mb-10">
            When each is the right call
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-linen border border-ash rounded-lg p-6 md:p-8">
              <h3 className="text-[17px] font-medium text-ink mb-5">
                GoHighLevel is right when&hellip;
              </h3>
              <ul className="space-y-3 text-[15px] text-charcoal leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-stone mt-0.5 shrink-0">&bull;</span>
                  Your bottleneck is raw lead flow and speed-to-contact, and
                  nothing else is on fire.
                </li>
                <li className="flex gap-3">
                  <span className="text-stone mt-0.5 shrink-0">&bull;</span>
                  You have a marketing operator who lives in funnels and wants
                  full control of them.
                </li>
              </ul>
            </div>
            <div className="bg-pure border-2 border-interactive rounded-lg p-6 md:p-8">
              <h3 className="text-[17px] font-medium text-ink mb-5">
                HarborIQ is right when&hellip;
              </h3>
              <ul className="space-y-3 text-[15px] text-charcoal leading-relaxed">
                <li className="flex gap-3">
                  <svg width="18" height="18" fill="none" stroke="#2E8B57" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  The leads are landing in a system that cannot manage a
                  policy, a renewal, or a carrier.
                </li>
                <li className="flex gap-3">
                  <svg width="18" height="18" fill="none" stroke="#2E8B57" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  You are paying for a funnel on top of an AMS on top of a
                  rater, and the stack costs more than the operating system.
                </li>
                <li className="flex gap-3">
                  <svg width="18" height="18" fill="none" stroke="#2E8B57" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  <span>
                    You want to start without moving anything: Markets is $199
                    at any size and touches nothing you run today.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href={MARKETS_START_URL}
              className="cta-primary inline-block bg-copper text-white btn-radius px-7 py-3 text-[15px] font-medium hover:bg-bronze transition-colors"
            >
              Start with Markets
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block ml-3 text-interactive text-[15px] font-medium underline underline-offset-4"
            >
              or book an Agency demo
            </a>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
