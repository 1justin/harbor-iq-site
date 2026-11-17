import type { Metadata } from "next";
import { CtaLink, FaqSection, FinalCta } from "@/components/iq/Blocks";
import { DistributionBrief, IncentiveTracker, NetworkPulse } from "@/components/site/CarrierScreens";
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

/** Where the data comes from, in three steps. Each step says whether it is live. */
const FLOW = [
  { h: "Agency activity in HarborIQ", p: "Agencies log opportunities, run quotes, bind policies and ask carrier questions in HarborIQ as part of their day.", live: true },
  { h: "Agency-controlled sharing", p: "Each agency chooses which carriers see its activity, and can turn it off at any time. Client records stay with the agency.", live: false },
  { h: "Actionable carrier intelligence", p: "You get agency-level and territory-level insight, the weekly brief, and a next step for your team.", live: false },
];

const LIVE = [
  "Free HarborIQ CRM beside the agency's AMS: clients, pipeline, renewals",
  "Carrier answers from carrier guides, with the page cited",
  "Agencies loading carrier guides and bulletins",
  "Insights on an agency's own book",
];

const BUILDING = [
  "Agency-controlled sharing with carriers",
  "The carrier network view and weekly brief",
  "Growth incentive tracking",
  "Delivery to carrier data teams",
];

/** How a carrier engagement starts. */
const ENGAGE = [
  { h: "Identify participating agencies", p: "Pick a territory and a handful of agencies your reps already work closely with." },
  { h: "Activate HarborIQ", p: "We set those agencies up beside their AMS, and each one chooses whether to share with you." },
  { h: "Review initial insights", p: "Once the agencies are working in it, we walk through the first brief with your distribution and product teams." },
];

/** What's in it for each party. The rep is the hero (campaign v2 frame, 2026-11-01). */
const WIIFM = [
  {
    who: "For your company",
    h: "See the business before it's decided.",
    p: "Know what your agencies are working, where your appetite turns them away, and why business goes elsewhere. Act on it in weeks, not at the annual review.",
  },
  {
    who: "For your field reps",
    h: "Walk in knowing what the agency needs.",
    p: "Reps see which agencies are growing and what they keep asking about your products. They show up with an answer, and bring back what the market wants.",
  },
  {
    who: "For your agencies",
    h: "Your appetite, at the moment they place the risk.",
    p: "Agencies get your guide answered in seconds while the client is on the phone, plus a free CRM beside the system they already run. Fewer calls to your underwriters.",
  },
];

/** What it takes, said plainly. No carrier price is published (Justin, 2026-11-17). */
const TAKES = [
  {
    who: "Your company",
    rows: [
      { k: "Cost", v: "Partner terms are set with the first carriers who join. We go through them on the call." },
      { k: "Integration", v: "None to start. Nothing connects to your policy or rating systems." },
      { k: "Your time", v: "A kickoff, your current appetite guides, and a rep or two to recommend us." },
    ],
  },
  {
    who: "Your agencies",
    rows: [
      { k: "Cost", v: "The CRM is free. Carrier answers are an optional upgrade the agency chooses." },
      { k: "What they rip out", v: "Nothing. HarborIQ runs beside their AMS. Their book and their workflow stay where they are." },
      { k: "Setup", v: "We do it with them. They send us files as they are, messy is fine, and we handle the setup." },
    ],
  },
];

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
    see: "Where every number comes from: agency-authorized, aggregated activity from agency workflow, not scraped from portals or rebuilt from bordereaux.",
    act: "Plan how it reaches the tools your teams already use. Format and delivery are set with each partner.",
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
  { h: "No client records", p: "You see agency-level counts, lines, territories and reasons. Never an insured's name, policy or record." },
  { h: "Other carriers stay unnamed", p: "When business goes elsewhere, you see why. You never see who." },
];

const FAQS = [
  {
    q: "What does it cost us?",
    a: "Partner terms are set with the first carriers who join, and we go through them on a 15-minute call. Nothing needs to be installed or integrated to start.",
  },
  {
    q: "What does it cost our agencies?",
    a: "The HarborIQ CRM is free for an agency. Carrier answers from your guides are an optional upgrade each agency decides on for itself. Agencies never pay per person.",
  },
  {
    q: "Do our agencies have to replace their management system?",
    a: "No. HarborIQ runs beside the AMS they already have. Nothing gets ripped out, and the agency can export everything any time.",
  },
  {
    q: "Our agencies don't want to learn another system.",
    a: "We hear that every week, so we do the setup with them. They send their files as they are, we handle the setup, and the first thing most of them use is a plain question about a carrier's appetite, typed the way they'd say it.",
  },
  {
    q: "Now isn't a good time.",
    a: "Every month your agencies quote without you is business you never see and can't win back. The first partners also shape what the carrier view includes. A 15-minute call commits you to nothing.",
  },
  {
    q: "Can we run growth incentives through HarborIQ?",
    a: "Yes, that's part of the carrier view we're building with our partners. You set the product, dates, prize and agencies, standings come from the work agencies already log, and reps see who needs a push while the incentive is still running.",
  },
  {
    q: "Is Distribution Intelligence available today?",
    a: "Parts of it. The agency side is live: the free CRM, carrier answers from carrier guides, and insights on an agency's own book. Agency-controlled sharing, the carrier view, the weekly brief and incentive tracking are in development with our first carrier partners. Every view on this page uses a fictional carrier and fictional data.",
  },
  {
    q: "Where does the data come from?",
    a: "From the work independent agencies already do in HarborIQ: the opportunities they log, the quotes they run, the policies they bind and the carrier questions they ask. Nothing is pulled from your systems.",
  },
  {
    q: "What does it ask of our field reps?",
    a: "Recommend HarborIQ to the agencies they work with. The more of your agencies use it, the more complete your picture gets, and the more useful your reps are on every visit.",
  },
]

export default function CarriersPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-anchor pb-16 pt-14 md:pb-20 md:pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,rgba(46,117,182,0.28),transparent_75%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-[14px] font-medium text-ice">HarborIQ Distribution Intelligence</p>
            <h1 className="mt-3.5 text-[38px] font-medium leading-[1.06] tracking-[-0.02em] text-paper md:text-[52px] lg:text-[56px]">
              See your whole agency network, not just your submission queue.
            </h1>
            <p className="mt-6 max-w-[58ch] text-[18px] leading-relaxed text-mist md:text-[20px]">
              Your independent agencies work far more risks than they send you. From the activity agencies authorize you to see, HarborIQ shows what they quoted, what they asked about your products, and what went elsewhere, with a next step for your team.
            </p>
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <CtaLink href={BOOK}>See a carrier intelligence demo</CtaLink>
              <a href="#sample" className={btn.light}>See a sample view</a>
            </div>
            <p className="mt-5 text-[14px] text-mist/80">Now enrolling carrier partners. The views on this page use a fictional carrier and fictional data.</p>
          </div>
          <NetworkPulse className="mt-12 md:mt-14" />
        </div>
      </section>

      {/* ─── THE WEEKLY BRIEF ─── */}
      <section id="sample" className="scroll-mt-16 bg-linen py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[13px] text-stone">The weekly brief</p>
            <h2 className="mt-2 text-[28px] font-medium leading-[1.12] tracking-tight text-ink md:text-[34px]">Don&rsquo;t just see what&rsquo;s happening. Know what to do about it.</h2>
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

      {/* ─── WHERE THE DATA COMES FROM ─── */}
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <H2 sub="Agencies decide what you see. You see agencies, lines and territories, never an insured's record.">Where the data comes from.</H2>
          <ol className="mt-10 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
            {FLOW.map((f, i) => (
              <li key={f.h} className="contents">
                {i > 0 && (
                  <span className="flex items-center justify-center text-[22px] text-slate" aria-hidden="true">
                    <span className="md:hidden">↓</span>
                    <span className="hidden md:inline">→</span>
                  </span>
                )}
                <div className="iq-card flex flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ice text-[15px] font-medium text-interactive">{i + 1}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.06em] ${f.live ? "bg-success/10 text-success" : "bg-linen text-stone"}`}>
                      {f.live ? "Live today" : "With carrier partners"}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[18px] font-medium text-ink">{f.h}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-charcoal">{f.p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── LIVE TODAY VS. IN DEVELOPMENT ─── */}
      <section className="bg-linen py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <H2 sub="There is no carrier data network to buy into yet. The first partners shape what it includes.">What&rsquo;s live today, and what we&rsquo;re building with carriers.</H2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="iq-card p-7">
              <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-success">Live today, for agencies</p>
              <ul className="mt-4 space-y-3">
                {LIVE.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                    <span className="font-medium text-success" aria-hidden="true">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="iq-card p-7">
              <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-stone">In development with carrier partners</p>
              <ul className="mt-4 space-y-3">
                {BUILDING.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-charcoal">
                    <span className="text-stone" aria-hidden="true">○</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
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

      {/* ─── WHAT'S IN IT ─── */}
      <section className="bg-paper pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {WIIFM.map((w) => (
              <div key={w.who} className="iq-card p-7">
                <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-interactive">{w.who}</p>
                <h3 className="mt-2 text-[19px] font-medium leading-snug text-ink">{w.h}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">{w.p}</p>
              </div>
            ))}
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

      {/* ─── GROWTH INCENTIVES ─── */}
      <section className="bg-linen py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-12">
          <div className="md:col-span-7 md:order-2 md:pl-6"><IncentiveTracker /></div>
          <div className="md:col-span-5 md:order-1">
            <p className="text-[13px] text-stone">One way to use it: growth incentives</p>
            <h2 className="mt-2 text-[28px] font-medium leading-[1.12] tracking-tight text-ink md:text-[34px]">Run the incentive, and see it work while it runs.</h2>
            <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-charcoal">
              The 60-day contest your team already runs, tracked from the same agency activity. Standings update as agencies bind, and reps see who has quoted but not bound while there&rsquo;s still time to help.
            </p>
          </div>
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

      {/* ─── WHAT IT TAKES ─── */}
      <section className="bg-linen py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <H2 sub="Agencies tell us they don't want to learn another system. Carriers tell us they don't want another integration. Neither is required.">What it takes, and what nobody rips out.</H2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {TAKES.map((t) => (
              <div key={t.who} className="iq-card p-7">
                <h3 className="text-[20px] font-medium text-ink">{t.who}</h3>
                <dl className="mt-4 divide-y divide-ash border-t border-ash">
                  {t.rows.map((r) => (
                    <div key={r.k} className="grid gap-1 py-3.5 sm:grid-cols-[9rem_1fr] sm:gap-4">
                      <dt className="text-[13px] font-semibold uppercase tracking-[0.06em] text-stone">{r.k}</dt>
                      <dd className="text-[15px] leading-relaxed text-ink">{r.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GETTING STARTED ─── */}
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <H2>How a carrier engagement starts.</H2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {ENGAGE.map((e, i) => (
              <li key={e.h} className="border-t border-ink pt-5">
                <p className="text-[13px] font-semibold text-interactive">Step {i + 1}</p>
                <h3 className="mt-1 text-[19px] font-medium text-ink">{e.h}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">{e.p}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <CtaLink href={BOOK}>See a carrier intelligence demo</CtaLink>
            <a href="#sample" className={btn.ghost}>See a sample view</a>
          </div>
        </div>
      </section>

      {/* ─── DATA ─── */}
      <section className="bg-anchor py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-[28px] font-medium leading-[1.12] tracking-tight text-paper md:text-[36px]">The agency&rsquo;s data stays the agency&rsquo;s.</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-mist">Carriers see authorized, agency-level insights. Never an individual insured or client record.</p>
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
        action={<CtaLink href={BOOK}>See a carrier intelligence demo</CtaLink>}
        note="For carrier distribution, product, sales operations and data teams."
      />
    </>
  );
}
