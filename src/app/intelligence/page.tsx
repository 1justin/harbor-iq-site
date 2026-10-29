import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink, FaqSection, FinalCta, SectionHead } from "@/components/iq/Blocks";
import { Film } from "@/components/iq/Film";
import { FAQ_CARRIER_CHECK, FAQ_KEEP_AMS, FAQ_SETUP, FAQ_SOURCES } from "@/lib/faqs";
import { INTELLIGENCE, START_FREE_URL, START_INTELLIGENCE_URL } from "@/lib/constants";

/**
 * Intelligence product page (2026-10-29). Order: outcome and price, the Ask
 * film, what the agency adds, first use, pricing and FAQs, then the same
 * purchase action again. Free stays the quieter alternative throughout.
 */

const I = INTELLIGENCE;
const OFFER = `$${I.monthly} a month per agency. ${I.checksPerMonth} carrier checks. Your whole team included.`;

export const metadata: Metadata = {
  title: `HarborIQ Intelligence | Carrier answers for independent agencies, $${I.monthly} per agency`,
  description: `Carrier Ask answers appetite and underwriting questions from carrier documents with cited, dated sources. Intelligence is $${I.monthly} per agency per month, ${I.checksPerMonth} carrier checks shared across your team, never per person.`,
  alternates: { canonical: "/intelligence" },
  openGraph: {
    title: "HarborIQ Intelligence | Carrier answers with the source attached",
    description: `Ask any carrier question, get a cited answer with a date on it. $${I.monthly} per agency per month, no migration.`,
    url: "/intelligence",
  },
};

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

const FIRST_USE = [
  { h: "Ask a question", p: "Type the risk the way you'd search Google: a 1978 roof, a late-night restaurant, a new driver. No setup first." },
  { h: "Check the source", p: "The carrier's guideline and its date come with every answer, so you can confirm before you quote." },
  { h: "Add what you have, when you want", p: "Drop in files from your portals whenever you get to it. Every file makes the next answer better." },
];

export default function IntelligencePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-anchor pb-10 pt-16 md:pb-12 md:pt-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-wider text-ice">HarborIQ Intelligence</p>
          <h1 className="text-3xl font-medium leading-tight tracking-tight text-paper md:text-5xl">
            Never guess appetite&nbsp;again.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-mist md:text-[19px]">
            Ask any appetite or underwriting question. Get the answer with the carrier&rsquo;s own guideline and its date
            attached.
          </p>
          <p className="mt-5 text-[16px] font-medium text-paper">{OFFER}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaLink href={START_INTELLIGENCE_URL}>Start Intelligence</CtaLink>
            <CtaLink href={START_FREE_URL} variant="outline">
              Start free
            </CtaLink>
          </div>
        </div>
      </section>

      {/* ─── ASK FILM, right under the hero ─── */}
      <section className="bg-anchor pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <Film
            slug="ask"
            label="Carrier Ask"
            caption="A carrier question answered from the guideline, with demo data."
            dark
          />
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

      {/* ─── FIRST USE ─── */}
      <section className="bg-linen py-14 md:py-20" aria-labelledby="first-use-heading">
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

      {/* ─── WHAT $29 GETS YOU ─── */}
      <section className="bg-paper py-14 md:py-20" id="pricing" aria-labelledby="intel-price-heading">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
          <div>
            <p className="iq-eyebrow mb-4">What ${I.monthly} gets you</p>
            <h2 id="intel-price-heading" className="text-2xl font-medium leading-tight tracking-tight text-ink md:text-3xl">
              One price for the whole agency. Never per&nbsp;person.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-charcoal">
              Everything you set up in the free workspace makes Intelligence smarter. The contacts, guides, and bulletins
              your team adds become part of what Carrier Ask searches.
            </p>
            <p className="mt-4 text-[15px] text-charcoal">
              Not ready yet?{" "}
              <Link href={START_FREE_URL} className="text-interactive underline underline-offset-4 hover:text-deep">
                Start with the free workspace
              </Link>
              .
            </p>
          </div>
          <div className="iq-card p-7">
            <p className="text-[40px] font-medium leading-none tracking-tight text-ink">
              ${I.monthly}
              <span className="ml-2 text-[15px] font-normal tracking-normal text-charcoal">per agency / month</span>
            </p>
            <p className="mt-2 text-[14px] text-charcoal">Or ${I.annual} a year, billed upfront.</p>
            <ul className="mt-5 space-y-2.5">
              {[
                `${I.checksPerMonth} carrier checks each month, shared across your agency`,
                `Need more? $${I.pack.price} adds ${I.pack.checks}. No automatic top-ups.`,
                "Every answer cites the carrier's own document and its date",
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

      <FaqSection items={[FAQ_SOURCES, FAQ_SETUP, FAQ_KEEP_AMS, FAQ_CARRIER_CHECK]} className="!bg-linen" />

      <FinalCta
        heading="Get your first carrier answer today."
        body={`$${I.monthly} a month for your whole agency, or $${I.annual} a year. ${I.checksPerMonth} checks a month, no automatic top-ups.`}
        action={<CtaLink href={START_INTELLIGENCE_URL}>Start Intelligence</CtaLink>}
        secondary={
          <CtaLink href={START_FREE_URL} variant="outline">
            Start free
          </CtaLink>
        }
        note={
          <>
            No demo needed. Running the whole agency?{" "}
            <Link href="/agency" className="text-paper underline underline-offset-4">
              See Agency OS
            </Link>
            .
          </>
        }
      />
    </>
  );
}
