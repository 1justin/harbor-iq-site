import type { Metadata } from "next";
import Link from "next/link";
import { HeroAsk } from "@/components/site/HeroAsk";
import { AskScreen, ImportScreen, RenewalsScreen, FollowupScreen, ClientListScreen, ClientPageScreen } from "@/components/site/Screens";
import { CrmFrame } from "@/components/site/CrmFrame";
import { WorkspaceFrame } from "@/components/site/WorkspaceFrame";
import { FeatureSlice, Villains, Integrations, TrustStrip, Plans, Quotes, H2, InOut, btn } from "@/components/site/Bits";
import { FaqSection, type Faq } from "@/components/iq/Blocks";
import { FAQ_CARRIER_CHECK, FAQ_KEEP_AMS, FAQ_SETUP, FAQ_SOURCES } from "@/lib/faqs";
import { DEMO_PAGE, INTELLIGENCE as I, LAUNCH, START_FREE_URL, START_INTELLIGENCE_URL, currentIntelligenceMonthly, introActive } from "@/lib/constants";

/** Re-render hourly so the introductory price on the buttons and in Plans lapses on its own after December 31, 2026. */
export const revalidate = 3600;

export function generateMetadata(): Metadata {
  const intro = introActive();
  const offer = intro ? ` Introductory $${I.intro.monthly} a month through ${I.intro.untilLabel}.` : "";
  const description = LAUNCH.freeCrm
    ? `A free CRM for independent insurance agencies, and carrier answers with the page cited. Ask who writes it and get the carrier's own page back in seconds. Intelligence is $${I.monthly} a month for the whole agency.${offer}`
    : `Ask who writes it and get the carrier's own page back in seconds. Carrier answers beside the AMS you already have, with a free workspace to start. Intelligence is $${I.monthly} a month for the whole agency.${offer}`;
  return {
    title: "HarborIQ | Carrier appetite answers for independent insurance agencies",
    description,
    alternates: { canonical: "/" },
    openGraph: {
      title: "Bind more policies. Open fewer portals. | HarborIQ",
      description: `Carrier answers in seconds, cited to the page, beside your AMS. $${currentIntelligenceMonthly()} a month for the whole agency.`,
      url: "/",
      images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "HarborIQ, for independent insurance agencies." }],
    },
  };
}

/** Hero copy, decided 2026-11-09: the portal wish agents voice in meetings, and the seconds claim. */
const HEADLINE = ["Bind more policies.", "Open fewer portals."];
const SUBHEAD = "Ask who writes it. Get the carrier's own page back in seconds.";

function buildFaqs(): Faq[] {
  const crm = LAUNCH.freeCrm;
  return [
    {
      q: "What is HarborIQ?",
      a: crm
        ? `HarborIQ is a free CRM for your clients, pipeline, renewals and follow-ups, beside your AMS, plus Intelligence: carrier answers from your own guides, with the page cited, and reporting. Intelligence is $${I.monthly} a month for the whole agency.`
        : `HarborIQ answers your team's carrier questions from your own carrier guides, with the page cited, beside your AMS. Intelligence is $${I.monthly} a month for the whole agency.`,
    },
    FAQ_KEEP_AMS,
    FAQ_SOURCES,
    FAQ_CARRIER_CHECK,
    FAQ_SETUP,
    {
      q: "Which carriers does it cover?",
      a: "Every carrier you write. HarborIQ reads the appetite guides, underwriting guidelines and bulletins you load, for any carrier, any state and any line of business, and answers only from those documents.",
    },
    crm
      ? {
          q: "Is there a free version?",
          a: "Yes. The free CRM is $0 for the whole agency: clients and prospects, pipeline, renewals and follow-ups, notes, periodic CSV imports from your AMS, and carrier contacts. You can start with one client. Intelligence adds carrier research with citations and reporting.",
        }
      : {
          q: "Is there a free version?",
          a: "Yes. The free workspace is $0 for the agency, with a few carrier checks a month, underwriter contacts and license reminders.",
        },
  ];
}

const RECORD = ["Clients", "Policies", "Renewals", "Tasks", "Notes", "Who owns what"];

const TICKS_CRM = ["Clients and prospects", "Sales pipeline", "Renewals and follow-ups", "Notes and relationships", "Carrier contacts"];
const TICKS_WORKSPACE = ["Carrier contacts and portal links", "License and CE reminders for the dates you enter", "A few cited carrier answers to try", "Your whole team, no per-person fee"];

export default function Home() {
  const crm = LAUNCH.freeCrm;
  const intro = introActive();
  const freeLabel = crm ? "the free CRM" : "the free workspace";
  const faqs = buildFaqs();
  return (
    <>
      <main>
        {/* Hero: navy, so the eye lands here. The product screen sits on paper inside it. */}
        <section className="relative overflow-hidden bg-anchor pt-14 md:pt-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(46,117,182,0.35),transparent_60%)]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-6">
              <p className="text-[14px] font-medium text-ice">{crm ? "Free CRM and carrier answers for independent agencies" : "Carrier answers and a free workspace for independent agencies"}</p>
              <h1 className="mt-3.5 text-[40px] font-medium leading-[1.04] tracking-[-0.02em] text-paper md:text-[52px] lg:text-[58px]">
                {HEADLINE.map((line) => <span key={line} className="block">{line}</span>)}
              </h1>
              <p className="mt-6 max-w-[46ch] text-[18px] leading-relaxed text-mist md:text-[20px]">{SUBHEAD}</p>
              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <Link href={START_INTELLIGENCE_URL} className={btn.copper}>Start Intelligence, ${currentIntelligenceMonthly()} a month</Link>
                <Link href={START_FREE_URL} className={btn.light}>Start {freeLabel}</Link>
              </div>
              <p className="mt-5 max-w-[56ch] text-[14px] text-mist/80">
                {intro ? `Introductory price through ${I.intro.untilLabel}. ` : ""}Your whole team is included, and your AMS stays where it is. No card to start.
              </p>
            </div>
            <div className="md:col-span-6">
              <HeroAsk className="shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]" />
            </div>
          </div>
          {/* Two doors, described in text. The buttons above are the only actions. */}
          <div className="relative mx-auto mt-14 max-w-6xl px-6 md:mt-16">
            <div className="grid border-t border-paper/20 md:grid-cols-2">
              <div className="py-6 pr-6 md:py-7">
                <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-slate">{crm ? "Free CRM" : "Free workspace"}</p>
                <p className="mt-1.5 max-w-[44ch] text-[16px] text-mist">
                  {crm
                    ? "Clients, pipeline, renewals and follow-ups for the whole agency. Start with one client. Free, no card."
                    : "Carrier contacts and portal links, license and CE reminders, and a few carrier answers to try. Free, no card."}
                </p>
              </div>
              <div className="border-t border-paper/20 py-6 md:border-l md:border-t-0 md:py-7 md:pl-10">
                <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-slate">Intelligence</p>
                <p className="mt-1.5 max-w-[44ch] text-[16px] text-mist">
                  Carrier appetite answers with the page cited, from your own guides. {I.checksPerMonth} shared checks a month{crm ? ", plus reporting." : "."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The free offer, shown as the product when the app delivers it. */}
        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <p className="text-[13px] text-stone">{crm ? "Free CRM" : "Free workspace"}</p>
              <h2 className="mt-2 max-w-[22ch] text-[30px] font-medium leading-[1.1] tracking-tight text-ink md:text-[38px]">
                {crm ? "Every client, renewal and follow-up in one place." : "Your carrier contacts and deadlines, free, beside your AMS."}
              </h2>
              <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-charcoal">
                {crm
                  ? "Add your first client and you are working. Bring in more as you go, or import a CSV from your AMS when you are ready. Your AMS stays where it is."
                  : "Keep underwriter contacts and portal links in one place, never miss a license or CE date you enter, and try carrier answers with the sources behind them. Free for the agency, no card."}
              </p>
              <ul className="mt-6 grid gap-2.5 text-[16px] text-charcoal">
                {(crm ? TICKS_CRM : TICKS_WORKSPACE).map((t) => (
                  <li key={t} className="flex gap-3"><span className="font-semibold text-success" aria-hidden="true">✓</span>{t}</li>
                ))}
              </ul>
              <p className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
                <Link href={START_FREE_URL} className={btn.navy}>Start {freeLabel}</Link>
                <span className="text-[13px] text-stone">{crm ? "Free for the whole agency. No card. No import needed to start." : "Free for the whole agency. No card."}</span>
              </p>
            </div>
            {crm ? <CrmFrame className="md:col-span-7" /> : <WorkspaceFrame className="md:col-span-7" />}
          </div>
        </section>

        <Quotes />

        {/* How HarborIQ helps: the one explainer. The diagram lives on the Works with page now. */}
        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-[13px] text-stone">How HarborIQ helps</p>
            <div className="mt-3 md:grid md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <h2 className="text-[30px] font-medium leading-[1.1] tracking-tight text-ink md:text-[40px]">The answers your team asks each other all day, with the page they came from.</h2>
                <p className="mt-5 max-w-[60ch] text-[17px] leading-relaxed text-charcoal md:text-[18px]">
                  Who writes this. What renews next. Who owns it. HarborIQ reads your carrier guides and your book and answers from them, so the CSR says yes while the client is on the phone, the producer sees every renewal before it is late, and the carrier gets submissions that fit the guide it published. Your AMS stays where it is. Your team spends the day quoting and renewing, not searching.
                </p>
                <Link href="/works-with#how-it-works" className="mt-6 inline-block text-[15px] font-medium text-interactive underline-offset-4 hover:underline">See how it works</Link>
              </div>
              <InOut className="mt-10 md:col-span-5 md:mt-2" />
            </div>
          </div>
        </section>

        {/* The record: product screens, restored (it was dropped in the 2026-11-10 rewrite). Included with every plan. */}
        <section className="bg-linen py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <H2 sub={`Clients, policies, renewals, tasks, notes and who owns what, in one place the whole team can see. It is the part every agency already needs, so it comes with the free workspace and with Intelligence at $${I.monthly}. Import your book from the AMS or a spreadsheet and the record is there the same day.`}>
              The record comes with every plan.
            </H2>
            <div className="mt-10 grid gap-6 md:grid-cols-12 md:items-start">
              <div className="md:col-span-7"><ClientListScreen /></div>
              <div className="md:col-span-5"><ClientPageScreen /></div>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-[15px] text-charcoal">
              {RECORD.map((r) => (
                <li key={r} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-interactive" aria-hidden="true" />{r}</li>
              ))}
            </ul>
            <p className="mt-4 text-[14px] text-stone">Not a replacement for your AMS. The working copy your team actually opens, with the carrier answers beside it.</p>
          </div>
        </section>

        <FeatureSlice
          slice="ask"
          heading="The carrier question gets answered on the first call."
          body="Type the risk the way a client describes it. HarborIQ reads every guide your agency has loaded and answers with the carrier's own page beside it, so the CSR can say yes, no, or who else, while the client is still on the phone."
          stat="2 hours"
          statLabel="back on every hard-to-place quote"
          screen={<AskScreen />}
        />
        <FeatureSlice
          slice="book"
          heading="Your book comes in as it is."
          body="Export from Epic, EZLynx, HawkSoft, NowCerts or a spreadsheet. HarborIQ maps the columns, keeps the odd rows and rejects nothing. We do the first import with you, on a call."
          stat="1 day"
          statLabel="from export to a team using it"
          screen={<ImportScreen />}
          flip
          linen
        />
        <FeatureSlice
          slice="book"
          heading="Nothing renews without you knowing."
          body="Every policy with a date becomes a renewal with an owner and a days-out count. The list is built from your book, not from someone's memory, and it is the same list for the producer and the owner."
          stat="Every policy"
          statLabel="every date, one list"
          screen={<RenewalsScreen />}
        />
        <FeatureSlice
          slice="inbox"
          heading="The follow-up gets sent."
          body="Tasks sit on the client record with the inbox beside them. When a CSR is out, the next person sees the whole thread. When staff change, the record stays with the agency."
          stat="1 record"
          statLabel="per client, for as long as you have them"
          screen={<FollowupScreen />}
          flip
          linen
        />

        <Villains />
        <Integrations />
        <TrustStrip light />
        <Plans />
        <FaqSection items={faqs} className="bg-paper py-16 md:py-24" />

        <section className="bg-anchor py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-[28px] font-medium leading-tight tracking-tight text-paper md:text-[34px]">One place for your agency. Answers from the carriers you write.</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-mist">
              {crm
                ? "Start the free CRM with your first client in minutes. Add Intelligence when you want carrier answers with the page cited, from your own guides."
                : "Start free in minutes. Add Intelligence when you want carrier answers with the page cited, from your own guides."}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={START_INTELLIGENCE_URL} className={btn.copper}>Start Intelligence</Link>
              <Link href={START_FREE_URL} className={btn.light}>Start {freeLabel}</Link>
            </div>
            <p className="mt-5"><Link href={DEMO_PAGE} className="text-[15px] font-medium text-mist underline-offset-4 hover:underline">Or book a walkthrough</Link></p>
          </div>
        </section>
      </main>
    </>
  );
}
