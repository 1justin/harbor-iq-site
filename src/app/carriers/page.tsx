import type { Metadata } from "next";
import { CtaLink, FaqSection, FinalCta } from "@/components/iq/Blocks";
import { DistributionBrief, NetworkPulse } from "@/components/site/CarrierScreens";
import { H2, btn } from "@/components/site/Bits";
import { CARRIER_BOOKING_URL } from "@/lib/constants";

/**
 * Carriers page (2026-11-17): HarborIQ Distribution Intelligence for carrier
 * teams. Audience in Justin's order: distribution, product management, sales
 * operations, technology and data. No pricing on this page (Justin, 2026-11-17):
 * the goal is carrier adoption and carriers recommending HarborIQ to their
 * agencies. The portal and brief are sample views of a carrier product that
 * does not exist yet, so they carry a "Sample view" tag and the page says the
 * program is enrolling partners, never that a carrier can log in today.
 */

const BOOK = `${CARRIER_BOOKING_URL}?src=carriers-page`;

export const metadata: Metadata = {
  title: "HarborIQ for carriers | Distribution Intelligence across your independent agencies",
  description:
    "See what your independent agencies quote, ask about and place elsewhere, not just what reaches your submission queue. Opportunity volume, product demand, appetite gaps, agency growth and competitive trends, with a next step attached.",
  alternates: { canonical: "/carriers" },
  openGraph: {
    title: "HarborIQ for carriers | See your whole agency network",
    description: "Distribution Intelligence: what your agencies see, ask and place elsewhere, with the next step attached.",
    url: "/carriers",
  },
};

/** The six signals. Each one comes from work agencies already do in HarborIQ. */
const SIGNALS = [
  { h: "Opportunity volume", p: "How many risks your agencies worked this month, by line and territory, before anyone decided where to send them." },
  { h: "Product demand", p: "Which products agencies are asking about, and which ones are rising faster than your quote share." },
  { h: "Submission patterns", p: "What gets quoted with you, what gets quoted elsewhere, and what never reaches you at all." },
  { h: "Agency growth", p: "Which agencies are adding producers, opening offices and quoting more, so your reps call the right ones first." },
  { h: "Appetite gaps", p: "The questions agencies ask about your products that your guide declines, leaves unclear, or never answers." },
  { h: "Competitive trends", p: "When business goes to another carrier, the reason agencies record: price, appetite or speed to quote." },
];

/** Who reads it, in the order they usually buy in. */
const TEAMS = [
  {
    who: "Distribution",
    see: "Which agencies are growing, which ones quote you rarely, and where your share is slipping by territory.",
    act: "Point reps at the agencies worth a visit this week, with the reason in hand.",
  },
  {
    who: "Product management",
    see: "Real demand by product and the exact appetite questions agencies ask, in their own words.",
    act: "Change a guideline, publish a bulletin, or build the product the channel keeps asking for.",
  },
  {
    who: "Sales operations",
    see: "Opportunity, quote and bind counts by agency and line, refreshed as agencies work.",
    act: "Set territory goals and agency plans from what agencies saw, not only what they sent.",
  },
  {
    who: "Technology and data",
    see: "A clean, aggregated feed built from agency workflow, not scraped from portals or rebuilt from bordereaux.",
    act: "Bring it into the tools your teams already use. We work through the format with you.",
  },
];

/** How the network builds. The carrier's move is the recommendation. */
const NETWORK = [
  { h: "You recommend HarborIQ", p: "Your reps tell their agencies about it. The free CRM costs an agency nothing to start." },
  { h: "Your agencies get faster", p: "Your appetite guide answers their questions while they are placing the risk. They stop guessing and stop calling to ask." },
  { h: "Your picture fills in", p: "Every agency that shares with you adds its opportunities, quotes and questions. Agencies on Intelligence add their carrier questions too." },
];

/** How agency data is handled. Stated as how it works, for Justin to confirm before publishing. */
const DATA = [
  { h: "Agencies choose to share", p: "An agency decides which of its carriers see its activity, and can stop at any time." },
  { h: "You see your own agencies", p: "Your view covers agencies that work with you and share with you. Nothing about anyone else's network." },
  { h: "No client details", p: "You see counts, lines, territories and reasons. Never a client's name or record." },
  { h: "Other carriers stay unnamed", p: "When business goes elsewhere, you see why. You never see who." },
];

const FAQS = [
  {
    q: "Is Distribution Intelligence available today?",
    a: "We are enrolling a small group of carrier partners now and building the carrier view with them. The screens on this page are sample views with a fictional carrier. A 15-minute call is the way in.",
  },
  {
    q: "Where does the data come from?",
    a: "From the work independent agencies already do in HarborIQ: the opportunities they log, the quotes they run, the policies they bind and the carrier questions they ask. Nothing is pulled from your systems.",
  },
  {
    q: "What do our agencies need to do?",
    a: "Start with the free CRM, which runs beside the management system they already have. Agencies that choose to share with you are part of your view.",
  },
  {
    q: "What does it ask of our field reps?",
    a: "Recommend HarborIQ to the agencies they work with. The more of your agencies use it, the more complete your picture gets, and the more useful your reps are on every visit.",
  },
  {
    q: "Does this replace our agency portal or submission system?",
    a: "No. Your portal shows what reaches you. HarborIQ shows the part of the agency's work that happens before and around that.",
  },
];

export default function CarriersPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-anchor pb-16 pt-14 md:pb-20 md:pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(46,117,182,0.35),transparent_60%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-[14px] font-medium text-ice">HarborIQ Distribution Intelligence</p>
            <h1 className="mt-3.5 text-[38px] font-medium leading-[1.06] tracking-[-0.02em] text-paper md:text-[52px] lg:text-[56px]">
              See your whole agency network, not just your submission queue.
            </h1>
            <p className="mt-6 max-w-[58ch] text-[18px] leading-relaxed text-mist md:text-[20px]">
              Your independent agencies work far more risks than they send you. HarborIQ shows you what they quoted, what they asked about your products, and what went elsewhere, with a next step for your team.
            </p>
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <CtaLink href={BOOK}>Book 15 minutes</CtaLink>
              <a href="#sample" className={btn.light}>See a sample view</a>
            </div>
            <p className="mt-5 text-[14px] text-mist/80">Now enrolling carrier partners. Built with the carriers who join first.</p>
          </div>
          <NetworkPulse className="mt-12 md:mt-14" />
        </div>
      </section>

      {/* ─── THE GAP ─── */}
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <H2>Your submissions are the end of the story.</H2>
          </div>
          <div className="space-y-4 md:col-span-7">
            <p className="text-[17px] leading-relaxed text-charcoal">
              By the time a submission reaches you, the agency has already decided. It looked at the risk, asked who writes it, quoted two or three markets, and picked one. You see the result. You don&rsquo;t see the rest.
            </p>
            <p className="text-[17px] leading-relaxed text-ink">
              HarborIQ is where independent agencies do that work: their pipeline, their quotes, and their carrier questions answered from the carriers&rsquo; own guides. Distribution Intelligence turns that activity into a view of your network you can act on.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SIX SIGNALS ─── */}
      <section className="bg-linen py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <H2 sub="Bound premium tells you what happened. These tell you why, and what to do next.">What you can see across your agencies.</H2>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {SIGNALS.map((s) => (
              <div key={s.h} className="border-t border-ink pt-5">
                <h3 className="text-[19px] font-medium text-ink">{s.h}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BY TEAM ─── */}
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <H2 sub="One view of the channel, read four ways.">Built for the teams who manage distribution.</H2>
          <div className="mt-10 divide-y divide-ash border-y border-ash">
            {TEAMS.map((t) => (
              <div key={t.who} className="grid gap-3 py-6 md:grid-cols-12 md:gap-8">
                <h3 className="text-[20px] font-medium text-ink md:col-span-3">{t.who}</h3>
                <div className="md:col-span-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-stone">What you see</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-charcoal">{t.see}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-interactive">What you do with it</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink">{t.act}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE WEEKLY BRIEF ─── */}
      <section id="sample" className="scroll-mt-16 bg-linen py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[13px] text-stone">The weekly brief</p>
            <h2 className="mt-2 text-[28px] font-medium leading-[1.12] tracking-tight text-ink md:text-[34px]">Every insight comes with a next step.</h2>
            <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-charcoal">
              A dashboard waits for someone to open it. The brief comes to your inbox each Monday with the three things worth acting on, and who should act: a rep, the product team, or both.
            </p>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-stone">
              Sample brief for Lakeshore Mutual, a fictional carrier. Agencies and numbers are invented.
            </p>
          </div>
          <div className="md:col-span-7"><DistributionBrief /></div>
        </div>
      </section>

      {/* ─── THE NETWORK ─── */}
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <H2 sub="Distribution Intelligence is only as complete as the network behind it. Your field team is how it grows.">It gets sharper with every agency you bring.</H2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {NETWORK.map((n, i) => (
              <li key={n.h}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ice">
                  <span className="text-lg font-medium text-interactive">{i + 1}</span>
                </div>
                <h3 className="text-[19px] font-medium text-ink">{n.h}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">{n.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── DATA ─── */}
      <section className="bg-anchor py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-[28px] font-medium leading-[1.12] tracking-tight text-paper md:text-[36px]">The agency&rsquo;s data stays the agency&rsquo;s.</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-mist">Agencies keep their book in HarborIQ. Carriers see the channel, never the client.</p>
          </div>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {DATA.map((d) => (
              <div key={d.h} className="border-t border-paper/25 pt-5">
                <h3 className="text-[18px] font-medium text-paper">{d.h}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-mist">{d.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={FAQS} className="!bg-linen" />

      <FinalCta
        heading="See what your agencies see."
        body="Fifteen minutes with the founder: how the carrier view works, what your agencies would get, and whether your team should be one of the first partners."
        action={<CtaLink href={BOOK}>Book 15 minutes</CtaLink>}
        note="For carrier distribution, product, sales operations and data teams."
      />
    </>
  );
}
