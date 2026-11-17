import type { Metadata } from "next";
import { CtaLink, FaqSection } from "@/components/iq/Blocks";
import { DistributionBrief, IncentiveTracker, NetworkGrowth, NetworkPulse, ShareByLine } from "@/components/site/CarrierScreens";
import { H2, btn } from "@/components/site/Bits";
import { CARRIER_BOOKING_URL } from "@/lib/constants";

/**
 * Carriers page (2026-11-17): HarborIQ Distribution Intelligence for carrier
 * teams. Narrative: light hero with the dashboard, the opportunities a carrier
 * never sees, the weekly brief, incentives as one use, benefits by team, how
 * agency activity becomes intelligence, adoption and permissions, FAQ, first
 * engagement.
 *
 * No pricing on this page (Justin, 2026-11-17). Every product view is labeled
 * as fictional data (Lakeshore Mutual), and the carrier side is never described
 * as already deployed; availability is handled in the FAQ and the demo.
 */

const BOOK = `${CARRIER_BOOKING_URL}?src=carriers-page`;

export const metadata: Metadata = {
  title: "HarborIQ for carriers | Distribution Intelligence across your independent agencies",
  description:
    "See the business your independent agencies work but never send you, and know what to do next. Quote share by line and agency, appetite gaps, agency growth and recommended actions, from activity agencies choose to share.",
  alternates: { canonical: "/carriers" },
  openGraph: {
    title: "HarborIQ for carriers | See your whole agency network",
    description: "See the business you're missing. Know what to do next.",
    url: "/carriers",
  },
};

/** What a carrier rarely sees today, even with good submission data. */
const UNSEEN = [
  { k: "Missed opportunities", v: "Business your agencies evaluate but never submit to you." },
  { k: "Lost share", v: "Product lines and territories where agencies increasingly place business elsewhere." },
  { k: "Growth actions", v: "Specific agencies, appetite gaps, and product improvements your team can act on." },
]

/** Who reads it. Distribution covers the field reps. */
const TEAMS = [
  {
    who: "Distribution",
    see: "Which agencies are growing, which ones quote you rarely, and where your share is slipping by line and territory.",
    act: "Point reps at the agencies worth a visit this week, with the reason in hand.",
  },
  {
    who: "Product management",
    see: "Real demand by product and the exact appetite questions agencies ask, in their own words.",
    act: "Adjust a guideline, publish clearer guidance, or build the product the channel keeps asking for.",
  },
  {
    who: "Sales operations",
    see: "Opportunity, quote and bind counts by agency and line, as agencies work.",
    act: "Set territory goals, agency plans and incentives from what agencies saw, not only what they sent.",
  },
  {
    who: "Analytics, technology and data",
    see: "Where every number comes from: aggregated activity that agencies authorize, not scraped from portals or rebuilt from bordereaux.",
    act: "Plan how it reaches the tools your teams already use. Format and delivery are set with each carrier.",
  },
];

/** How agency activity becomes carrier intelligence. */
const FLOW = [
  { h: "Agency activity", p: "Agencies track opportunities, record quote and bind activity, and ask carrier questions in HarborIQ, alongside the AMS and carrier systems they already use." },
  { h: "Agency-controlled sharing", p: "Each agency chooses which carriers see its activity, and can change that at any time." },
  { h: "Carrier intelligence", p: "You get agency-level and territory-level insight, the weekly brief, and a next step for your team." },
];

const ADOPT = [
  { h: "Agencies keep their AMS", p: "HarborIQ runs beside the management system they already use. Nothing is ripped out." },
  { h: "No carrier integration to start", p: "Nothing connects to your policy or rating systems." },
  { h: "The agency CRM is free", p: "Carrier answers are an optional upgrade each agency chooses for itself." },
  { h: "Fewer questions for your team", p: "Agencies get your appetite answered from your own guides while they place the risk, which can mean fewer calls to your underwriters." },
];

const PRIVACY = [
  { h: "Agencies choose what to share", p: "An agency decides which of its carriers see its activity, and can stop at any time." },
  { h: "You see your own agencies", p: "Your view covers agencies that work with you and share with you. Nothing about anyone else's network." },
  { h: "No client records", p: "You see agency-level counts, lines, territories and reasons. Never an insured's name, policy or record." },
  { h: "Other carriers stay unnamed", p: "When business goes elsewhere, you see why. You never see who." },
];

const ENGAGE = [
  { h: "Identify participating agencies", p: "Pick a territory and a handful of agencies your reps already work closely with." },
  { h: "Activate HarborIQ", p: "We set those agencies up beside their AMS, and each one chooses whether to share with you." },
  { h: "Review initial insights", p: "Once the agencies are working in it, we walk through the first brief with your distribution and product teams." },
];

const FAQS = [
  {
    q: "What does it cost us?",
    a: "Carrier terms are set with each carrier, and we go through them in the demo. Nothing needs to be installed or integrated to start.",
  },
  {
    q: "What does it cost our agencies?",
    a: "The HarborIQ CRM is free for an agency. Carrier answers from carrier guides are an optional upgrade each agency decides on for itself. Agencies never pay per person.",
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
    a: "The business your agencies place elsewhere this quarter usually renews where it was placed. The sooner you can see it, the sooner your team can compete for it. A demo commits you to nothing.",
  },
  {
    q: "What is available today?",
    a: "Agencies use HarborIQ today for their CRM, carrier answers from carrier guides, and insights on their own book. The carrier view, agency sharing controls, the weekly brief and incentive tracking are being set up with our first carrier partners, and the demo walks through exactly what your team would get and when. The views on this page use a fictional carrier and fictional data.",
  },
  {
    q: "Where does the data come from?",
    a: "From the work independent agencies do in HarborIQ: the opportunities they track, the quote and bind activity they record, and the carrier questions they ask, limited to what each agency chooses to share with you. Nothing is pulled from your systems.",
  },
  {
    q: "Can we run growth incentives through HarborIQ?",
    a: "Yes. You set the product, dates, prize and agencies, standings come from the work agencies already log, and reps see who needs a push while the incentive is still running.",
  },
  {
    q: "What does it ask of our field reps?",
    a: "Recommend HarborIQ to the agencies they work with. The more of your agencies use it, the more complete your picture gets, and the more useful your reps are on every visit.",
  },
];

const EYEBROW = "text-[13px] text-stone";
const SECTION_H2 = "text-[28px] font-medium leading-[1.12] tracking-tight text-ink md:text-[36px]";

export default function CarriersPage() {
  return (
    <>
      {/* ─── HERO: light, the dashboard set in with depth ─── */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,var(--color-paper)_0%,var(--color-paper)_55%,var(--color-linen)_55%,var(--color-linen)_100%)] pt-14 md:pt-20">
        <div className="relative mx-auto max-w-6xl px-6">
          <p className={EYEBROW}>HarborIQ Distribution Intelligence, for carriers</p>
          <h1 className="mt-3 text-[36px] font-medium leading-[1.08] tracking-[-0.02em] text-anchor md:text-[48px]">
            See your whole agency network, not just your submission queue.
          </h1>
          <p className="mt-5 text-[18px] leading-relaxed text-charcoal md:text-[20px]">
            See where your share is slipping, why agencies place business elsewhere, and where your distribution team can win more.
          </p>
          <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <CtaLink href={BOOK}>See a carrier intelligence demo</CtaLink>
            <a href="#sample" className={btn.ghost}>See a sample view</a>
          </div>
          <NetworkPulse className="mt-12 md:mt-14" />
          <p className="pb-14 pt-4 text-center text-[13px] text-stone md:pb-16">
            Illustrative view. Lakeshore Mutual is a fictional carrier, and every agency and number on this page is invented.
          </p>
        </div>
      </section>

      {/* ─── INVISIBLE OPPORTUNITIES ─── */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <p className={EYEBROW}>Where share is won</p>
            <h2 className={`mt-2 ${SECTION_H2}`}>The biggest opportunities in your agency network may be the ones you never see.</h2>
            <p className="mt-5 max-w-[56ch] text-[17px] leading-relaxed text-charcoal">
              You know what gets submitted and bound with you, and you know your results vary by product, territory and agency. Every agency you appoint also represents your competitors. What your data can&rsquo;t show is the rest of what those agencies work:
            </p>
            <ul className="mt-5 space-y-3">
              {UNSEEN.map((t) => (
                <li key={t.k} className="flex gap-3 text-[16px] leading-relaxed text-charcoal">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-copper" aria-hidden="true" />
                  <span><span className="font-medium text-ink">{t.k}:</span> {t.v}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[56ch] border-l-2 border-copper pl-4 text-[16px] leading-relaxed text-ink">
              The goal isn&rsquo;t more submissions. It&rsquo;s a larger share of the business your agencies already write, and the business placed elsewhere this quarter usually renews where it went.
            </p>
          </div>
          <div className="md:col-span-6"><ShareByLine /></div>
        </div>
      </section>

      {/* ─── THE WEEKLY BRIEF ─── */}
      <section id="sample" className="scroll-mt-16 bg-linen py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className={EYEBROW}>The weekly brief</p>
            <h2 className={`mt-2 ${SECTION_H2}`}>Don&rsquo;t just see what&rsquo;s happening. Know what to do about it.</h2>
            <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-charcoal">
              Nobody needs another dashboard to watch. Each Monday the brief brings the few signals worth acting on, and pairs each one with a next step and the team that owns it.
            </p>
            <dl className="mt-6 divide-y divide-ash border-y border-ash">
              {[
                { s: "Demand up, quote share down", a: "Product reviews appetite or coverage" },
                { s: "An agency quoting heavily elsewhere", a: "The territory rep gets a specific follow-up" },
                { s: "Questions your guide can't answer", a: "Product publishes clearer guidance" },
              ].map((x) => (
                <div key={x.s} className="py-3">
                  <dt className="text-[15px] text-charcoal">{x.s}</dt>
                  <dd className="mt-0.5 text-[15px] font-medium text-ink"><span className="text-interactive" aria-hidden="true">→ </span>{x.a}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="md:col-span-7"><DistributionBrief /></div>
        </div>
      </section>

      {/* ─── INCENTIVES: intelligence put to work ─── */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-12">
          <div className="md:order-2 md:col-span-7 md:pl-6"><IncentiveTracker /></div>
          <div className="md:order-1 md:col-span-5">
            <p className={EYEBROW}>Putting it to work</p>
            <h2 className={`mt-2 ${SECTION_H2}`}>Aim the incentive where the share is.</h2>
            <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-charcoal">
              When life share is low in agencies that already trust you with homeowners, a 60-day life challenge is the obvious move. HarborIQ tracks it from the same agency activity, so reps see who has quoted but not bound while there&rsquo;s still time to help.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BY TEAM ─── */}
      <section className="bg-linen py-16 md:py-20">
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

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <H2 sub="Agencies decide what you see. You see agencies, lines and territories, never an insured's record.">How agency activity becomes carrier intelligence.</H2>
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
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ice text-[15px] font-medium text-interactive">{i + 1}</span>
                  <h3 className="mt-4 text-[18px] font-medium text-ink">{f.h}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-charcoal">{f.p}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-14 border-t border-ash pt-10">
            <h3 className="max-w-2xl text-[22px] font-medium leading-snug text-ink">Start small. Every agency that joins shows you more.</h3>
            <p className="mt-3 max-w-[64ch] text-[16px] leading-relaxed text-charcoal">
              Start with a handful of agencies in one territory. As more agencies participate, you see more opportunities, identify stronger patterns, and uncover more ways to grow your share.
            </p>
            <NetworkGrowth className="mt-8" />
          </div>
        </div>
      </section>

      {/* ─── ADOPTION AND PERMISSIONS ─── */}
      <section className="bg-linen py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <H2 sub="Agencies don't want another system to learn. Carriers don't want another integration. Neither is required.">Simple for agencies. Private by design.</H2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { title: "Easy to adopt", items: ADOPT },
              { title: "Agencies stay in control", items: PRIVACY },
            ].map((col) => (
              <div key={col.title} className="iq-card p-7">
                <h3 className="text-[20px] font-medium text-ink">{col.title}</h3>
                <dl className="mt-4 divide-y divide-ash border-t border-ash">
                  {col.items.map((r) => (
                    <div key={r.h} className="py-3.5">
                      <dt className="text-[15px] font-medium text-ink">{r.h}</dt>
                      <dd className="mt-0.5 text-[15px] leading-relaxed text-charcoal">{r.p}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={FAQS} />

      {/* ─── FIRST ENGAGEMENT AND CTA ─── */}
      <section className="border-t border-ash bg-linen py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className={EYEBROW}>Getting started</p>
          <h2 className={`mt-2 max-w-2xl ${SECTION_H2}`}>See where you can win more of your agencies&rsquo; business.</h2>
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
          <p className="mt-5 text-[13px] text-stone">For carrier distribution, product, sales operations and data teams.</p>
        </div>
      </section>
    </>
  );
}
