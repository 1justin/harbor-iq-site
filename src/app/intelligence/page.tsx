import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink, FaqSection, FinalCta, SectionHead } from "@/components/iq/Blocks";
import { Film } from "@/components/iq/Film";
import { HeroAsk } from "@/components/site/HeroAsk";
import { HarborLoop } from "@/components/site/HarborLoop";
import { INTEL_SLICES } from "@/components/site/slices";
import { InsightsScreen } from "@/components/site/Screens";
import { H2, Quotes, TrustStrip, btn } from "@/components/site/Bits";
import { FAQ_CARRIER_CHECK, FAQ_KEEP_AMS, FAQ_SETUP, FAQ_SOURCES } from "@/lib/faqs";
import { INTELLIGENCE, LAUNCH, START_FREE_URL, START_INTELLIGENCE_URL, currentIntelligenceMonthly, introActive } from "@/lib/constants";

/** Hourly, so the introductory price lapses on its own after December 31, 2026. */
export const revalidate = 3600;

/**
 * Intelligence product page (2026-10-29). Order: outcome and price, the Ask
 * film, what the agency adds, first use, pricing and FAQs, then the same
 * purchase action again. Free stays the quieter alternative throughout.
 */

const I = INTELLIGENCE;

export function generateMetadata(): Metadata {
  const intro = introActive();
  const offer = intro ? ` Introductory price: $${I.intro.monthly} a month for the first ${I.intro.months} months when you start by ${I.intro.untilLabel}.` : "";
  return {
    title: `HarborIQ Intelligence | Carrier answers for independent agencies, $${I.monthly} per agency`,
    description: `Carrier Ask answers appetite and underwriting questions from carrier documents with cited, dated sources. Intelligence is $${I.monthly} per agency per month, ${I.checksPerMonth} carrier checks shared across your team, never per person.${offer}`,
    alternates: { canonical: "/intelligence" },
    openGraph: {
      title: "HarborIQ Intelligence | Carrier answers with the source attached",
      description: `Ask any carrier question, get a cited answer with a date on it. $${I.monthly} per agency per month, no migration.${offer}`,
      url: "/intelligence",
    },
  };
}

const AGENCY_VALUE = [
  {
    h: "Your guides, in the answers",
    p: "Drag in the appetite guides, bulletins, and rate sheets from your portals. Carrier Ask searches them alongside the carrier documents it already has.",
  },
  {
    h: "Good answers stay with the agency",
    p: "When an answer is worth keeping, save it with one click. The next person doesn't have to ask, and the knowledge doesn't leave when a veteran retires.",
  },
  {
    h: "Everyone gets the same answer",
    p: "Your newest producer and your most experienced one see the same cited answer. One price covers the whole team.",
  },
];

/** Three first-time readers. `today` is what they have now, `with` is what changes. No claim that anyone is wrong: the answer is the carrier's own page. */
const WHO_FOR = [
  {
    who: "Your AMS already shows some appetite",
    today: "It gives you a list of who might write the risk.",
    with: "Intelligence reads the carrier\u2019s own guide and gives you the page, the conditions and the date. You see why, not only who.",
  },
  {
    who: "You have thirty years in",
    today: "You know your markets cold, and the whole office asks you.",
    with: "Guides change. Check the one that changed last month in seconds, and let your newest hire get the answer you would have given.",
  },
  {
    who: "You are new to insurance",
    today: "You are not sure yet who writes what, and you do not want to guess.",
    with: "Quote with the carrier\u2019s own page in front of you, without waiting for someone senior to be free.",
  },
];

/** What Intelligence shows from the CRM data. Each of these exists in the app today. */
const INSIGHTS_LIST = [
  { t: "Priorities for the day and the week", d: "The renewals, quotes and follow-ups that need you first, and why." },
  { t: "Summaries of what happened", d: "What was bound, what renewed and what is stuck, without opening every record." },
  { t: "Team performance", d: "Who is quoting, who is closing, and where someone needs a hand." },
];

const FIRST_USE = [
  { h: "Ask a question", p: "Type the risk the way you'd search Google: a 1978 roof, a late-night restaurant, a new driver. No setup first." },
  { h: "Check the source", p: "The carrier's guideline and its date come with every answer, so you can confirm before you quote." },
  { h: "Add what you have, when you want", p: "Drop in files from your portals whenever you get to it. Every file makes the next answer better." },
];

export default function IntelligencePage() {
  const intro = introActive();
  const crm = LAUNCH.freeCrm;
  /** The offer in three facts. While the introductory price runs: today, the deadline, and what follows. */
  const offerFacts = intro
    ? [
        { t: `Today: $${I.intro.monthly} a month`, d: `Or $${I.intro.annual} for the first year. Your whole team is included, up to 30 people.` },
        { t: `Start by ${I.intro.untilLabel}`, d: `Agencies that start a paid subscription by then keep $${I.intro.monthly} for their first ${I.intro.months} months.` },
        { t: `After that: $${I.monthly} a month`, d: `The standard price, or $${I.annual} a year. A price guarantee, not a contract: cancel any time.` },
      ]
    : [
        { t: `$${I.monthly} a month per agency`, d: "Your whole team is included, up to 30 people. Never a fee per person." },
        { t: `$${I.annual} a year`, d: "Billed upfront. Two months free with annual billing." },
        { t: `${I.checksPerMonth} shared checks a month`, d: `A $${I.pack.price} pack adds ${I.pack.checks} more, only when you choose.` },
      ];
  return (
    <>
      {/* ─── HERO: the homepage layout (words left, the Ask screen playing right), with the offer stated in full ─── */}
      <section className="relative overflow-hidden bg-anchor pt-14 md:pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(46,117,182,0.35),transparent_60%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <p className="text-[14px] font-medium text-ice">HarborIQ Intelligence</p>
            <h1 className="mt-3.5 text-[40px] font-medium leading-[1.04] tracking-[-0.02em] text-paper md:text-[52px] lg:text-[58px]">
              <span className="block">Never guess</span>
              <span className="block">appetite again.</span>
            </h1>
            <p className="mt-6 max-w-[46ch] text-[18px] leading-relaxed text-mist md:text-[20px]">
              Ask any appetite or underwriting question and get the carrier&rsquo;s own guideline back, with its date. Then see what your book needs from you this week.
            </p>

            {/* The price, said once and completely: what it is today, until when, and what it becomes. */}
            <div className="mt-7 border-l-2 border-copper pl-5">
              <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-paper">
                <span className="text-[40px] font-medium leading-none tracking-tight">${intro ? I.intro.monthly : I.monthly}</span>
                <span className="text-[16px] text-mist">a month for your whole agency</span>
                {intro && <span className="text-[16px] text-mist/70"><s>${I.monthly}</s></span>}
              </p>
              <p className="mt-2 max-w-[48ch] text-[15px] leading-relaxed text-mist">
                {intro ? (
                  <>
                    Introductory price when you start by <span className="font-medium text-paper">{I.intro.untilLabel}</span>. You keep ${I.intro.monthly} for your first {I.intro.months} months. The standard price is ${I.monthly}.
                  </>
                ) : (
                  <>Or ${I.annual} a year, two months free. Never a fee per person.</>
                )}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Link href={START_INTELLIGENCE_URL} className={btn.copper}>Start Intelligence, ${intro ? I.intro.monthly : I.monthly} a month</Link>
              <Link href={START_FREE_URL} className={btn.light}>{crm ? "Start the free CRM" : "Start free"}</Link>
            </div>
            <p className="mt-5 max-w-[56ch] text-[14px] text-mist/80">
              {I.checksPerMonth} carrier checks a month, shared by your whole team. Cancel any time. Your AMS stays where it is.
            </p>
          </div>
          <div className="md:col-span-6">
            <HeroAsk className="shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]" />
          </div>
        </div>
        {/* The offer in three facts, in the strip the homepage uses under its hero. */}
        <div className="relative mx-auto mt-14 max-w-6xl px-6 md:mt-16">
          <dl className="grid border-t border-paper/20 md:grid-cols-3">
            {offerFacts.map((x, i) => (
              <div key={x.t} className={`py-6 md:py-7 ${i ? "border-t border-paper/20 md:border-l md:border-t-0 md:pl-8" : ""} ${i < 2 ? "md:pr-8" : ""}`}>
                <dt className="text-[12px] font-semibold uppercase tracking-[0.06em] text-slate">{x.t}</dt>
                <dd className="mt-1.5 max-w-[40ch] text-[16px] leading-relaxed text-mist">{x.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── WHO IT IS FOR: three readers, one line each on what they have and what changes ─── */}
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <H2 sub="The same question, asked for three different reasons.">Useful in your first year and your thirtieth.</H2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-3">
            {WHO_FOR.map((w) => (
              <div key={w.who} className="border-t border-ink pt-5">
                <h3 className="text-[19px] font-medium leading-snug text-ink">{w.who}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-stone">{w.today}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink">{w.with}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ASK FILM ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
          <div>
            <p className="iq-eyebrow mb-4">Watch it work</p>
            <h2 className="text-2xl font-medium leading-tight tracking-tight text-ink md:text-3xl">
              The carrier question gets answered on the first call.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-charcoal">
              Type the risk the way a client describes it. HarborIQ reads the guides your agency has loaded and answers with the carrier&rsquo;s own page beside it, so your CSR can say yes, no, or who else while the client is still on the phone.
            </p>
            <div className="mt-6 flex items-baseline gap-3 border-l-2 border-interactive pl-4">
              <span className="text-[34px] font-medium leading-none tracking-tight text-ink">2 hours</span>
              <span className="text-[15px] text-charcoal">back on every hard-to-place quote</span>
            </div>
          </div>
          <Film slug="ask" label="Carrier Ask" caption="A carrier question answered from the guideline, with demo data." />
        </div>
      </section>

      {/* ─── HOW INTELLIGENCE HELPS: the loop diagram, with only what Intelligence adds ─── */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-[13px] text-stone">How Intelligence helps</p>
          <div className="mt-3 max-w-3xl">
            <h2 className="text-[30px] font-medium leading-[1.1] tracking-tight text-ink md:text-[40px]">Your carriers&rsquo; own documents go in. Answers your team can check come out.</h2>
            <p className="mt-5 max-w-[60ch] text-[17px] leading-relaxed text-charcoal md:text-[18px]">
              Appetite guides, underwriting guidelines and bulletins already sit in your carrier portals. Load them once and everyone at the agency asks the same source, and gets the page it came from.{crm ? " Your CRM data goes in too, and comes back as priorities." : ""}
            </p>
          </div>
          <HarborLoop className="mt-10 md:mt-12" items={crm ? INTEL_SLICES : INTEL_SLICES.slice(0, 3)} hubNote={`${I.checksPerMonth} shared checks a month, every answer cited`} />
        </div>
      </section>

      {/* ─── INSIGHTS ON YOUR BOOK: the second half of what Intelligence adds ─── */}
      <section className="bg-linen py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[13px] text-stone">Insights on your book</p>
            <h2 className="mt-2 text-[28px] font-medium leading-[1.12] tracking-tight text-ink md:text-[34px]">Know what to work on, and how the team is doing.</h2>
            <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-charcoal">
              Intelligence reads the clients, pipeline and renewals in your CRM and tells you what they mean. No report to build first.
            </p>
            <dl className="mt-6 divide-y divide-ash border-y border-ash">
              {INSIGHTS_LIST.map((x) => (
                <div key={x.t} className="py-3.5">
                  <dt className="text-[16px] font-medium text-ink">{x.t}</dt>
                  <dd className="mt-0.5 text-[15px] text-charcoal">{x.d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="md:col-span-7"><InsightsScreen /></div>
        </div>
      </section>

      {/* ─── WHAT YOUR AGENCY ADDS ─── */}
      <section className="bg-paper py-14 md:py-20" aria-labelledby="agency-value-heading">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead
            id="agency-value-heading"
            eyebrow="Smarter with every file"
            heading="It learns your agency, not just the&nbsp;carriers."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {AGENCY_VALUE.map((v) => (
              <div key={v.h} className="iq-card p-7">
                <h3 className="text-[18px] font-medium text-ink">{v.h}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Quotes />

      {/* ─── FIRST USE ─── */}
      <section className="bg-paper py-14 md:py-20" aria-labelledby="first-use-heading">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead id="first-use-heading" eyebrow="Getting started" heading="Your first answer takes a&nbsp;minute." />
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
            {FIRST_USE.map((s, i) => (
              <div key={s.h} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-ice">
                  <span className="text-xl font-medium text-interactive">{i + 1}</span>
                </div>
                <h3 className="mb-2 text-lg font-medium text-ink">{s.h}</h3>
                <p className="text-[15px] leading-relaxed text-charcoal">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT INTELLIGENCE COSTS ─── */}
      <section className="scroll-mt-16 bg-linen py-14 md:py-20" id="pricing" aria-labelledby="intel-price-heading">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
          <div>
            <p className="iq-eyebrow mb-4">What ${currentIntelligenceMonthly()} gets you</p>
            <h2 id="intel-price-heading" className="text-2xl font-medium leading-tight tracking-tight text-ink md:text-3xl">
              One price for the whole agency. Never per&nbsp;person.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-charcoal">
              {LAUNCH.freeCrm
                ? "Intelligence includes everything in the free CRM: clients, pipeline, renewals, follow-ups, notes and carrier contacts. It adds carrier answers with the page cited, and insights on your book: priorities, summaries and team performance."
                : "Everything you set up in the free workspace makes Intelligence smarter. The contacts, guides, and bulletins your team adds become part of what Carrier Ask searches."}
            </p>
            <p className="mt-4 text-[15px] text-charcoal">
              Not ready yet?{" "}
              <Link href={START_FREE_URL} className="text-interactive underline underline-offset-4 hover:text-deep">
                {LAUNCH.freeCrm ? "Start with the free CRM" : "Start with the free workspace"}
              </Link>
              .
            </p>
          </div>
          <div className="iq-card p-7">
            {introActive() && <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-interactive">Introductory price</p>}
            <p className="text-[40px] font-medium leading-none tracking-tight text-ink">
              ${currentIntelligenceMonthly()}
              <span className="ml-2 text-[15px] font-normal tracking-normal text-charcoal">per agency / month</span>
              {introActive() && <span className="ml-2 text-[15px] font-normal tracking-normal text-stone"><s>${I.monthly}</s> standard</span>}
            </p>
            <p className="mt-2 text-[14px] text-charcoal">
              {introActive()
                ? `Lock in $${I.intro.monthly} a month for your first ${I.intro.months} months when you start by ${I.intro.untilLabel}. A price guarantee, not a contract: cancel any time. Annual: $${I.intro.annual} for the first year, then $${I.annual}. Get 2 months free with annual billing.`
                : `Or $${I.annual} a year, billed upfront. Get 2 months free with annual billing.`}
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                ...(LAUNCH.freeCrm ? ["Everything in the free CRM"] : []),
                `${I.checksPerMonth} carrier checks each month, shared across your agency`,
                `Need more? $${I.pack.price} adds ${I.pack.checks}. No automatic top-ups.`,
                "Every answer cites the carrier's own document and its date",
                ...(LAUNCH.freeCrm ? ["Insights on your book: priorities, summaries and team performance"] : []),
                "Runs beside your AMS. Nothing to migrate.",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-charcoal">
                  <span className="font-medium text-success" aria-hidden="true">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <CtaLink href={START_INTELLIGENCE_URL} className="mt-6 w-full justify-center text-center">
              Start Intelligence
            </CtaLink>
          </div>
        </div>
      </section>

      <TrustStrip light />

      <FaqSection items={[FAQ_SOURCES, FAQ_SETUP, FAQ_KEEP_AMS, FAQ_CARRIER_CHECK]} className="!bg-linen" />

      <FinalCta
        heading="Get your first carrier answer today."
        body={`$${currentIntelligenceMonthly()} a month for your whole agency${intro ? ` for your first ${I.intro.months} months when you start by ${I.intro.untilLabel}. The standard price is $${I.monthly}` : `, or $${I.annual} a year`}. ${I.checksPerMonth} checks a month, no automatic top-ups.`}
        action={<CtaLink href={START_INTELLIGENCE_URL}>Start Intelligence</CtaLink>}
        secondary={
          <CtaLink href={START_FREE_URL} variant="outline">
            {crm ? "Start the free CRM" : "Start free"}
          </CtaLink>
        }
        note={
          <>
            No demo needed. Nothing is charged until you confirm.
          </>
        }
      />
    </>
  );
}
