import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink, FinalCta } from "@/components/iq/Blocks";
import { Film } from "@/components/iq/Film";
import { AGENCY_OS_DEMO_URL, IMPORT_TERMS, INTELLIGENCE, PRICING } from "@/lib/constants";

/**
 * Agency OS product page. Since 2026-10-29 it also carries what used to be
 * separate feature pages (pipeline, renewals, quoting, team performance);
 * the old /features/* URLs redirect to the anchors below.
 */

export const metadata: Metadata = {
  title: "HarborIQ Agency OS | Your AMS, CRM, and Carrier Tools. One Login.",
  description: `The full agency operating system: clients, policies, pipeline, renewals, quoting, team performance, commissions, and Carrier Ask, in one login. $${PRICING.agency.solo.monthly}/mo solo, $${PRICING.agency.team.monthly} for 2 to 5 people, $${PRICING.agency.os.monthly} for 6 to 15. Identical features at every price.`,
  alternates: { canonical: "/agency" },
  openGraph: {
    title: "HarborIQ Agency OS | Your AMS, CRM, and Carrier Tools. One Login.",
    description: "One login replaces the stack. Priced by agency size, never per person. Free book import with annual prepay.",
    url: "/agency",
    images: [{ url: "/og/agency.png", width: 1200, height: 630 }],
  },
};

const MODULES = [
  {
    title: "Clients and policies",
    body: "One record per client: policies, documents, claims, payments, and communications, with encrypted, audited storage for sensitive data. Life business lives in the same record as the P&C book.",
  },
  {
    title: "Pipeline",
    body: "Every prospect from first inquiry to bound, including the one who said call me in six months.",
    href: "#pipeline",
  },
  {
    title: "Renewals",
    body: "Surfaced weeks early, high-value clients first, so you re-quote before they shop.",
    href: "#renewals",
  },
  {
    title: "Quoting",
    body: "The right carriers first, one quoting profile, and a comparison that shows what the cheap quote leaves out.",
    href: "#quoting",
  },
  {
    title: "Team performance",
    body: "Quotes, binds, premium, and close rate per producer, with goals everyone can see.",
    href: "#team",
  },
  {
    title: "Payday",
    body: "Commissions with splits, per-producer statements, and payout tracking. Producers stop asking where their money is.",
  },
  {
    title: "Reports",
    body: "Book of business, production ranking, retention, and an executive view. Numbers you can actually run the agency from.",
  },
  {
    title: "The carrier tools, included",
    body: "Carrier Ask with cited answers, Carrier News, the login vault, the self-building knowledge base, team chat, and license and CE tracking.",
    href: "/intelligence",
  },
];

const DEEP = [
  {
    id: "pipeline",
    eyebrow: "Pipeline",
    heading: "Never lose another prospect.",
    body: "Most agency systems track current clients. Almost none track the prospect who said “call me in six months.” Use Agency OS as your CRM, or connect the one you have.",
    points: [
      "Every prospect has a stage, a next step, and a follow-up date. No sticky notes.",
      "Each morning, the highest-priority follow-ups are waiting for your team.",
      "See which prospects are most likely to close and which need attention.",
    ],
    film: { slug: "pipeline", label: "New business pipeline", caption: "Prospects, quotes, and follow-ups in one place, with demo data." },
  },
  {
    id: "renewals",
    eyebrow: "Renewals",
    heading: "Hear about a renewal before your client starts shopping.",
    body: "Retention is where independent agencies win or bleed. Agency OS puts every expiring policy in front of you weeks ahead.",
    points: [
      "Every expiring policy on one screen, sorted by date and priority.",
      "High-premium clients and clients facing a rate increase are flagged first.",
      "Retention by producer, month, and line, so you know if the book is growing or leaking.",
    ],
    film: { slug: "renewals", label: "Renewals", caption: "Every renewal due this month, built from the book, with demo data." },
  },
  {
    id: "quoting",
    eyebrow: "Quoting",
    heading: "The best quote isn’t always the cheapest. Now you can show why.",
    body: "Clients don’t remember who quoted fastest. They remember who caught the gap in the cheap quote and explained it straight.",
    points: [
      "Carrier Ask checks appetite first, so nobody quotes a carrier that was never going to write it.",
      "One quoting profile per client, with a record of where each answer came from.",
      "Quotes side by side, with the dropped coverage and the higher deductible flagged.",
    ],
    film: { slug: "quote-comparison", label: "Quote comparison", caption: "Carrier quotes lined up on one screen, with demo data." },
  },
  {
    id: "team",
    eyebrow: "Team performance",
    heading: "Coach your team with numbers, not guesswork.",
    body: "Know what each producer is quoting, binding, and closing, and what to work on today, this week, and this quarter.",
    points: [
      "Quotes, binds, premium written, and close rate per producer, updated as they work.",
      "When deals stall at the same stage, you see the pattern and coach the behavior.",
      "Production goals per producer, visible to the whole team. Activity logs itself.",
    ],
    film: { slug: "command-center", label: "Your day on one screen", caption: "What needs attention today, before you open a file, with demo data." },
  },
];

export default function AgencyPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-anchor py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-wider text-ice">HarborIQ Agency OS</p>
          <h1 className="text-3xl font-medium leading-tight tracking-tight text-paper md:text-5xl">
            Your AMS, your CRM, and your carrier tools. One&nbsp;login.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-mist md:text-[19px]">
            Run the whole agency here, and see what to work on today, this week, and this quarter. $
            {PRICING.agency.solo.monthly}/mo solo, ${PRICING.agency.team.monthly}/mo for 2 to 5 people, $
            {PRICING.agency.os.monthly}/mo for 6 to 15. Same product at every price.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={AGENCY_OS_DEMO_URL}
              className="cta-primary btn-radius bg-copper px-7 py-3.5 text-[16px] font-medium text-midnight transition-colors hover:bg-copper-light"
            >
              Book an Agency OS demo
            </a>
            <Link
              href="/pricing#agency-os"
              className="cta-secondary btn-radius border border-mist/40 px-7 py-3.5 text-[16px] font-medium text-paper hover:border-paper"
            >
              See pricing
            </Link>
          </div>
          <p className="mt-4 text-[13px] text-mist">
            {IMPORT_TERMS.annual}. {IMPORT_TERMS.monthly}. Never a fee per person.
          </p>
        </div>
      </section>

      {/* ─── MODULES ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mx-auto mb-12 max-w-3xl text-center text-2xl font-medium leading-tight tracking-tight text-ink md:text-3xl">
            The stack, collapsed.
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((m) => (
              <div key={m.title}>
                <h3 className="mb-2 text-[17px] font-medium text-ink">
                  {m.href ? (
                    <Link href={m.href} className="hover:text-interactive">
                      {m.title}
                    </Link>
                  ) : (
                    m.title
                  )}
                </h3>
                <p className="text-[15px] leading-relaxed text-charcoal">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEEP DIVES (formerly separate feature pages) ─── */}
      {DEEP.map((d, i) => (
        <section
          key={d.id}
          id={d.id}
          className={`scroll-mt-16 py-14 md:py-20 ${i % 2 === 0 ? "bg-linen" : "bg-paper"}`}
          aria-labelledby={`${d.id}-heading`}
        >
          <div
            className={`mx-auto grid max-w-6xl items-center gap-10 px-6 md:gap-14 ${
              i % 2 === 0 ? "md:grid-cols-[0.9fr_1.1fr]" : "md:grid-cols-[1.1fr_0.9fr]"
            }`}
          >
            <div className={i % 2 === 0 ? "" : "md:order-2"}>
              <p className="iq-eyebrow mb-4">{d.eyebrow}</p>
              <h2 id={`${d.id}-heading`} className="text-2xl font-medium leading-tight tracking-tight text-ink md:text-3xl">
                {d.heading}
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-charcoal">{d.body}</p>
              <ul className="mt-6 space-y-3">
                {d.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-charcoal">
                    <span className="font-medium text-success" aria-hidden="true">
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <Film slug={d.film.slug} label={d.film.label} caption={d.film.caption} />
          </div>
        </section>
      ))}

      {/* ─── THE IMPORT PROMISE ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="iq-eyebrow mb-4">The switch</p>
          <h2 className="text-2xl font-medium leading-tight tracking-tight text-ink md:text-3xl">
            The import is the upgrade, not a&nbsp;project.
          </h2>
          <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-charcoal">
            <p>
              Our wizard reads CSV and PDF exports from your current system, deduplicates, matches carrier names, and
              stages anything it cannot place for your review instead of guessing. Onboarding is measured in days. One
              legacy vendor quoted an agency 3 to 4 months and $25,000; we think that says everything about whose
              software the migration serves.
            </p>
            <p>
              Not ready to move the book? Start with a{" "}
              <Link href="/free" className="text-interactive underline underline-offset-4">
                free workspace
              </Link>{" "}
              or{" "}
              <Link href="/intelligence" className="text-interactive underline underline-offset-4">
                Intelligence
              </Link>{" "}
              at ${INTELLIGENCE.monthly} per agency a month. Both run alongside your current AMS, and the move to Agency
              OS is one import, whenever you say so.
            </p>
          </div>
        </div>
      </section>

      <FinalCta
        heading="See it with your own book in mind."
        body={`A 20-minute walkthrough of Agency OS, built around how your agency works today. $${PRICING.agency.solo.monthly} solo, $${PRICING.agency.team.monthly} for 2 to 5 people, $${PRICING.agency.os.monthly} for 6 to 15. Never per person.`}
        action={<CtaLink href={AGENCY_OS_DEMO_URL}>Book an Agency OS demo</CtaLink>}
        secondary={
          <CtaLink href="/pricing#agency-os" variant="outline">
            See pricing
          </CtaLink>
        }
        note={
          <>
            Not ready to move the book?{" "}
            <Link href="/intelligence" className="text-paper underline underline-offset-4">
              Start with Intelligence
            </Link>{" "}
            at ${INTELLIGENCE.monthly} a month.
          </>
        }
      />
    </>
  );
}
