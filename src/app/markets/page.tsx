import type { Metadata } from "next";
import { AskDemo } from "@/components/AskDemo";
import { CtaSection } from "@/components/CtaSection";
import { MARKETS_START_URL, PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HarborIQ Markets | Carrier Intelligence, $199/mo at Any Size",
  description:
    "Never guess carrier appetite again. Cited, dated answers from carrier documents, plus profiles, login vault, carrier news, and a self-building knowledge base. $199/month flat for your whole team, no migration, live the same day.",
  alternates: { canonical: "/markets" },
  openGraph: {
    title: "HarborIQ Markets | Carrier Intelligence, $199/mo at Any Size",
    description:
      "Ask any carrier question, get a cited answer with a date on it. $199/month, whole team, nothing to migrate.",
    url: "/markets",
  },
};

const PILLARS = [
  {
    title: "Carrier Ask",
    body: "Will this carrier write a 1978 roof? Ask, and the answer comes from the carrier's own documents, with the page and the date it was last updated. Your team stops guessing and stops quoting carriers that will decline.",
  },
  {
    title: "A knowledge base that builds itself",
    body: "Good answers get promoted to your agency's own knowledge base in one click, categorized and credited. When a veteran retires, what they knew stays.",
  },
  {
    title: "Carrier News",
    body: "Appetite shifts, bulletins, and guideline changes, read for you overnight and summarized before coffee.",
  },
  {
    title: "The login vault",
    body: "Every carrier portal credential, rep, and contact in one place. The daily portal-and-password shuffle ends today.",
  },
  {
    title: "The team layer rides along",
    body: "Team chat, training, and license and CE tracking are included. One login for the whole team, one price.",
  },
  {
    title: "Nothing to migrate",
    body: "Markets is not a system of record, on purpose. It runs alongside whatever AMS you use today, which is why you can be live the same day.",
  },
];

export default function MarketsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-anchor py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[13px] font-medium text-ice uppercase tracking-wider mb-4">
            HarborIQ Markets
          </p>
          <h1 className="text-3xl md:text-5xl font-medium text-paper leading-tight tracking-tight">
            Never guess appetite&nbsp;again.
          </h1>
          <p className="mt-5 text-[17px] md:text-[19px] text-mist leading-relaxed max-w-2xl mx-auto">
            Cited carrier answers for your whole team, with the source and its
            date on every one. ${PRICING.markets.monthly} a month at any size,
            nothing to migrate, live the same day.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={MARKETS_START_URL}
              className="cta-primary bg-copper text-white btn-radius px-7 py-3.5 text-[16px] font-medium hover:bg-bronze transition-colors"
            >
              Start with Markets
            </a>
          </div>
          <p className="mt-4 text-[13px] text-mist">
            14-day free trial. Cancel anytime. Never a fee per person.
          </p>
        </div>
      </section>

      {/* ─── LIVE DEMO ─── */}
      <AskDemo />

      {/* ─── PILLARS ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center max-w-3xl mx-auto mb-12">
            Every carrier relationship, one&nbsp;place.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PILLARS.map((p) => (
              <div key={p.title}>
                <h3 className="text-[17px] font-medium text-ink mb-2">
                  {p.title}
                </h3>
                <p className="text-[15px] text-charcoal leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE LADDER NOTE ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight">
            And when you are ready, the same login runs the whole&nbsp;agency.
          </h2>
          <p className="mt-4 text-[16px] text-charcoal leading-relaxed">
            Markets is the first rung of one product. Add the book whenever the
            two-system tax gets old: clients, pipeline, renewals, commissions,
            and reports land in the same login, priced by your size at ${PRICING.agency.solo.monthly}{" "}
            solo, ${PRICING.agency.team.monthly} for 2 to 5, and ${PRICING.agency.os.monthly}{" "}
            for 6 to 15. Annual gets a month free and the book import free.
          </p>
          <a
            href="/agency"
            className="mt-6 inline-block text-interactive text-[15px] font-medium underline underline-offset-4"
          >
            See the Agency plan
          </a>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
