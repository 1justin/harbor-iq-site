import type { Metadata } from "next";
import Link from "next/link";
import { FirstStepPicker } from "./FirstStepPicker";
import { LegacyWorkspace } from "./LegacyWorkspace";
import { Film } from "@/components/iq/Film";
import { CrmFrame } from "@/components/site/CrmFrame";
import { ClientListScreen, ClientPageScreen, RenewalsScreen, FollowupScreen, ImportScreen } from "@/components/site/Screens";
import { Arrow, FaqSection, FinalCta, SectionHead, TextCta, type Faq } from "@/components/iq/Blocks";
import { INTELLIGENCE as I, LAUNCH, START_FREE_URL, currentIntelligenceMonthly, introActive } from "@/lib/constants";

/** Hourly, so the introductory price lapses on its own after December 31, 2026. */
export const revalidate = 3600;

export function generateMetadata(): Metadata {
  const crm = LAUNCH.freeCrm;
  return {
    title: crm
      ? "Free CRM for independent insurance agencies | Clients, pipeline, renewals | HarborIQ"
      : "Free Agency Workspace | Carrier contacts and deadlines in one place | HarborIQ",
    description: crm
      ? "A free CRM for independent insurance agencies: clients and prospects, sales pipeline, renewals and follow-ups, notes, periodic CSV imports from your AMS, and carrier contacts. Free for the whole agency. Start with one client. No credit card."
      : "A free workspace for independent insurance agencies: private carrier contacts and portal links, license and CE reminders for the dates you enter, and limited carrier discovery with sources.",
    alternates: { canonical: "/free" },
    // Held out of search until free signup is live (LAUNCH in constants).
    robots: LAUNCH.freeWorkspaceIndexed ? undefined : { index: false, follow: true },
    openGraph: {
      title: crm
        ? "A free CRM for independent insurance agencies. Start with one client. | HarborIQ"
        : "Your carrier contacts and important deadlines. In one free workspace. | HarborIQ",
      url: "/free",
      images: [{ url: "/og/free.png", width: 1200, height: 630 }],
    },
  };
}

/**
 * The Free CRM page (reworked 2026-11-10). This is where a "free CRM" ad lands,
 * so every section answers one of three questions: what it does, why it is
 * worth having, and how to start. The entitlement is the agreed product model:
 * clients and prospects, pipeline, renewals, follow-ups, notes, carrier
 * contacts and periodic CSV imports. Carrier research, reporting and analytics
 * are Intelligence, and the page says so plainly. Nothing here may promise free
 * carrier checks, license reminders or a marketplace profile.
 */

/** The three things a cold visitor has to believe before they sign up. */
const HOW_IT_STARTS = [
  { t: "Start with one client", d: "Add a client or a prospect and you are working. There is no setup project." },
  { t: "Import from your AMS when you are ready", d: "Export a CSV and bring your clients in. Do it again whenever you want the list refreshed." },
  { t: "Keep your AMS", d: "HarborIQ works beside it. Nothing to migrate, nothing to cancel, no credit card." },
];

const INCLUDED = [
  { t: "Clients and prospects", d: "Every client and prospect in one list the whole team can search, with policies, contacts and notes on one page." },
  { t: "Sales pipeline", d: "Prospect, quoting, bound. Move a deal along and the next person sees where it stands." },
  { t: "Renewals", d: "Every policy with a date becomes a renewal with an owner and a days-out count." },
  { t: "Follow-ups", d: "Every follow-up has a person and a due date, and it sits on the client record." },
  { t: "Notes", d: "What the client said, what you promised, and who spoke to them last. The history stays when staff change." },
  { t: "Carrier contacts", d: "Underwriter contacts and portal links in one private place your team can find." },
];

const IMPORT_FROM = ["Applied Epic", "EZLynx", "HawkSoft", "NowCerts", "AMS360", "Any spreadsheet"];

const INTELLIGENCE_ADDS = [
  "AI carrier appetite and product research",
  "Answers backed by carrier guidelines, with citations",
  `${I.checksPerMonth} shared checks a month, optional top-ups`,
  "Reporting and analytics",
];

const crmFaqs: Faq[] = [
  {
    q: "Is the CRM really free?",
    a: "Yes. The free CRM is $0 for the whole agency, with no credit card and no per-person fee. Clients and prospects, pipeline, renewals, follow-ups, notes, carrier contacts and CSV imports are all included.",
  },
  {
    q: "Do I have to replace my AMS?",
    a: "No. HarborIQ works beside your AMS. Your AMS keeps doing what it does, and nothing in it changes.",
  },
  {
    q: "Do I have to import my whole book to start?",
    a: "No. Create your login, add one client, and you are working. Add clients as you go, or import a CSV from your AMS whenever you are ready. Nothing is required up front.",
  },
  {
    q: "How do my clients get in?",
    a: "Add them by hand, or import a CSV export from your AMS. Imports are periodic, so export again whenever you want the list refreshed. HarborIQ does not sync with your AMS automatically.",
  },
  {
    q: "Does the free CRM include carrier research?",
    a: `No. AI carrier appetite and product research is part of Intelligence, which includes ${I.checksPerMonth} shared checks a month with cited answers. The free CRM keeps your carrier contacts and portal links.`,
  },
  {
    q: "Does the free CRM include reports?",
    a: "No. Reporting and analytics are part of Intelligence. In the free CRM you can see every record and every list: clients, pipeline, renewals and follow-ups.",
  },
  {
    q: "Will I have to fill out a long setup form?",
    a: "No. Signing up asks for your name, work email and agency. No team roster and no book upload.",
  },
];

export default function FreeCrmPage() {
  if (!LAUNCH.freeCrm) return <LegacyWorkspace />;
  const intro = introActive();
  return (
    <>
      {/* ─── Hero: the ad's promise, the product, the way in ─── */}
      <section className="relative overflow-hidden bg-anchor">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(46,117,182,0.35),transparent_60%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-12 pt-14 md:grid-cols-[1fr_1.15fr] md:items-center md:gap-14 md:pb-16 md:pt-20">
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-ice">Free CRM · $0 for the whole agency</p>
            <h1 className="mt-4 text-[36px] font-medium leading-[1.08] tracking-[-0.02em] text-paper md:text-[52px]">
              A free CRM for independent insurance agencies.{" "}
              <span className="text-interactive">Start with one&nbsp;client.</span>
            </h1>
            <p className="mt-5 max-w-[50ch] text-[17px] leading-relaxed text-mist md:text-[19px]">
              Clients, prospects, pipeline, renewals, follow-ups and notes in one place your whole team can see. Keep your AMS.
            </p>
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Link href={START_FREE_URL} className="cta-primary btn-radius inline-flex items-center justify-center bg-copper px-7 py-3.5 text-[16px] font-semibold text-midnight hover:bg-copper-light">
                Start the free CRM
              </Link>
              <a href="#included" className="text-[15px] font-medium text-ice underline-offset-4 hover:underline">See what is included</a>
            </div>
            <p className="mt-4 text-[14px] text-mist/80">No credit card. No import needed to start. Never a fee per person.</p>
          </div>
          <CrmFrame />
        </div>
        {/* How it starts: three facts in text, the same strip the homepage uses under its hero. */}
        <div className="relative mx-auto max-w-6xl px-6">
          <dl className="grid border-t border-paper/20 md:grid-cols-3">
            {HOW_IT_STARTS.map((x, i) => (
              <div key={x.t} className={`py-6 md:py-7 ${i ? "border-t border-paper/20 md:border-l md:border-t-0 md:pl-8" : "md:pr-8"} ${i === 1 ? "md:pr-8" : ""}`}>
                <dt className="text-[16px] font-medium text-paper">{x.t}</dt>
                <dd className="mt-1.5 max-w-[40ch] text-[15px] leading-relaxed text-mist">{x.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── Included ─── */}
      <section className="scroll-mt-16 bg-linen py-14 md:py-20" id="included" aria-labelledby="included-heading">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead id="included-heading" eyebrow="Included free" heading="What the free CRM does." sub="The work your agency does every day, in one place. All of it is included at $0." />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {INCLUDED.map((x) => (
              <div key={x.t} className="iq-card p-7">
                <h3 className="text-lg font-medium text-ink">{x.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[15px] text-charcoal">
            Carrier research, reporting and analytics are part of{" "}
            <Link href="/intelligence" className="text-interactive underline underline-offset-4 hover:text-deep">Intelligence</Link>.
          </p>
        </div>
      </section>

      {/* ─── Clients and prospects ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="iq-eyebrow mb-4">Clients and prospects</p>
          <h2 className="max-w-[26ch] text-2xl font-medium leading-tight tracking-tight text-ink md:text-3xl">
            Everyone on the team sees the same client.
          </h2>
          <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-charcoal">
            Search the book, open a client, and see every policy, renewal date, owner and note on one page. Prospects sit in the same list and move from prospect to quoting to bound, so the next person always knows where a deal stands.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-12 md:items-start">
            <div className="md:col-span-7"><ClientListScreen /></div>
            <div className="md:col-span-5"><ClientPageScreen /></div>
          </div>
        </div>
      </section>

      {/* ─── Renewals and follow-ups ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="iq-eyebrow mb-4">Renewals and follow-ups</p>
          <h2 className="max-w-[28ch] text-2xl font-medium leading-tight tracking-tight text-ink md:text-3xl">
            Nothing renews, and no follow-up slips, without an owner.
          </h2>
          <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-charcoal">
            Every policy with a date becomes a renewal with an owner and a days-out count. Every follow-up has a person and a due date, and it sits on the client record where the whole team can see it.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 md:items-start">
            <RenewalsScreen />
            <FollowupScreen inbox={false} />
          </div>
        </div>
      </section>

      {/* ─── Getting clients in: one at a time, or a CSV from the AMS ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <p className="iq-eyebrow mb-4">Bring your clients in</p>
            <h2 className="text-2xl font-medium leading-tight tracking-tight text-ink md:text-3xl">
              One client today. A CSV from your AMS when you are ready.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-charcoal">
              Add clients by hand as they call, or export a CSV from your AMS and HarborIQ maps the columns for you. Import again whenever you want the list refreshed. There is no automatic sync, and nothing changes in your AMS.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {IMPORT_FROM.map((n) => (
                <li key={n} className="rounded-md border border-ash bg-paper px-3 py-1.5 text-[14px] text-ink">{n}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-7"><ImportScreen /></div>
        </div>
      </section>

      {/* ─── First step ─── */}
      <section className="scroll-mt-16 bg-linen py-14 md:py-20" id="choose-first-step" aria-labelledby="first-step-heading">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead
            id="first-step-heading"
            eyebrow="Choose your starting point"
            heading="Where do you want to start?"
            sub="Pick one. Everything else can wait until you need it."
          />
          <div className="mx-auto max-w-5xl">
            <FirstStepPicker />
          </div>
        </div>
      </section>

      {/* ─── Carrier contacts: part of the CRM, not the headline ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
          <div className="md:order-2">
            <p className="iq-eyebrow mb-4">Also in the free CRM</p>
            <h2 className="text-2xl font-medium leading-tight tracking-tight text-ink md:text-3xl">
              Your carrier contacts, next to your clients.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-charcoal">
              Each carrier gets a card with its product lines, states, and your rep. Open it and the contacts are sorted
              by department, so anyone on the team knows who handles underwriting and who handles claims.
            </p>
          </div>
          <Film slug="carrier-directory" label="Carrier directory" caption="Carrier cards and contacts by department, with demo data." />
        </div>
      </section>

      {/* ─── What is paid ─── */}
      <section className="bg-midnight py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-14">
          <div>
            <p className="iq-eyebrow mb-4 !text-slate">When you want more</p>
            <h2 className="text-2xl font-medium leading-tight tracking-tight text-paper md:text-3xl">
              Carrier research and reporting are in Intelligence.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-mist">
              The free CRM runs the day. Intelligence includes everything in it and adds the answers: who writes the risk, with the carrier&rsquo;s own page cited, and reporting on your book.
            </p>
            <ul className="mt-5 space-y-2.5">
              {INTELLIGENCE_ADDS.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] text-mist"><span className="font-semibold text-ice" aria-hidden="true">+</span>{t}</li>
              ))}
            </ul>
            <TextCta href="/intelligence" light className="mt-6">See Intelligence <Arrow /></TextCta>
          </div>
          <div className="rounded-xl border border-interactive/50 bg-anchor/60 p-7">
            <p className="text-[40px] font-medium leading-none tracking-tight text-paper">
              ${currentIntelligenceMonthly()}
              <span className="ml-2 text-[15px] font-normal tracking-normal text-mist">per agency / month</span>
            </p>
            <p className="mt-2 text-[14px] text-mist">
              {intro
                ? `Introductory price for your first ${I.intro.months} months when you start by ${I.intro.untilLabel}, then $${I.monthly}. A price guarantee, not a contract: cancel any time. Annual: $${I.intro.annual} for the first year.`
                : `Or $${I.annual} a year, billed upfront. Get 2 months free with annual billing.`}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-mist">
              <span className="font-medium text-paper">{I.checksPerMonth} carrier checks each month,</span> shared
              across your agency. ${I.pack.price} adds {I.pack.checks} more, only when you choose.
            </p>
            <p className="mt-4 border-t border-white/10 pt-3 text-[13px] leading-relaxed text-slate">
              You never need Intelligence to keep using the free CRM.
            </p>
          </div>
        </div>
      </section>

      <FaqSection items={crmFaqs} />

      <FinalCta
        heading="Start with one client."
        body="Add your first client and you are working. Bring in more as you go, or import a CSV from your AMS when you are ready."
        action={
          <Link href={START_FREE_URL} className="cta-primary iq-btn iq-btn-copper">
            Start the free CRM
          </Link>
        }
        note="Free for the whole agency. No credit card. Your AMS stays where it is."
      />
    </>
  );
}
