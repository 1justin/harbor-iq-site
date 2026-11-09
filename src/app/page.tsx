import type { Metadata } from "next";
import Link from "next/link";
import { HeroAsk } from "@/components/site/HeroAsk";
import { AskScreen, ImportScreen, RenewalsScreen, FollowupScreen, ClientListScreen, ClientPageScreen } from "@/components/site/Screens";
import { FeatureSlice, Villains, Integrations, TrustStrip, Plans, Quotes, H2, InOut, btn } from "@/components/site/Bits";
import { FaqSection, type Faq } from "@/components/iq/Blocks";
import { FAQ_CARRIER_CHECK, FAQ_KEEP_AMS, FAQ_SETUP, FAQ_SOURCES } from "@/lib/faqs";
import { DEMO_PAGE, INTELLIGENCE as I, START_INTELLIGENCE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HarborIQ | Carrier appetite answers for independent insurance agencies",
  description: `Ask who writes it and get the carrier's own page back in seconds. Carrier answers, your book and your renewals beside the AMS you already have. Intelligence is $${I.monthly} a month for the whole agency.`,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Bind more policies. Open fewer portals. | HarborIQ",
    description: `Carrier answers in seconds, cited to the page, beside your AMS. $${I.monthly} a month for the whole agency.`,
    url: "/",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "HarborIQ, for independent insurance agencies." }],
  },
};

/** Hero copy, decided 2026-11-09: the portal wish agents voice in meetings, and the seconds claim. */
const HEADLINE = ["Bind more policies.", "Open fewer portals."];
const SUBHEAD = "Ask who writes it. Get the carrier's own page back in seconds.";

const BUILT_FOR = ["Independent agencies", "One owner to fifty staff", "Personal and commercial lines", "Their clients and carriers"];

const faqs: Faq[] = [
  {
    q: "What is HarborIQ?",
    a: `HarborIQ answers your team's carrier questions from your own carrier guides, with the page cited, and keeps your book, renewals and follow-ups in one record beside your AMS. Intelligence is $${I.monthly} a month for the whole agency.`,
  },
  FAQ_KEEP_AMS,
  FAQ_SOURCES,
  FAQ_CARRIER_CHECK,
  FAQ_SETUP,
  {
    q: "Which carriers does it cover?",
    a: "Every carrier you write. HarborIQ reads the appetite guides, underwriting guidelines and bulletins you load, for any carrier, any state and any line of business, and answers only from those documents.",
  },
  {
    q: "Is there a free version?",
    a: `Yes. The free workspace is $0 for the agency, with a few carrier checks a month, underwriter contacts and license reminders. Most agencies move to Intelligence once the team starts asking it questions every day.`,
  },
];

const RECORD = ["Clients", "Policies", "Renewals", "Tasks", "Notes", "Who owns what"];

export default function Home() {
  return (
    <>
      <main>
        {/* Hero: navy, so the eye lands here. The product screen sits on paper inside it. */}
        <section className="relative overflow-hidden bg-anchor pb-16 pt-14 md:pb-24 md:pt-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(46,117,182,0.35),transparent_60%)]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-6">
              <h1 className="text-[40px] font-medium leading-[1.04] tracking-[-0.02em] text-paper md:text-[52px] lg:text-[58px]">
                {HEADLINE.map((line) => <span key={line} className="block">{line}</span>)}
              </h1>
              <p className="mt-6 max-w-[46ch] text-[18px] leading-relaxed text-mist md:text-[20px]">{SUBHEAD}</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href={START_INTELLIGENCE_URL} className={btn.copper}>Start Intelligence, ${I.monthly} a month</Link>
                <Link href={DEMO_PAGE} className="text-[15px] font-medium text-ice underline-offset-4 hover:underline">Book a 20-minute walkthrough</Link>
              </div>
              <p className="mt-5 text-[14px] text-mist/70">No card to start. Nothing charged until you confirm.</p>
            </div>
            <div className="md:col-span-6">
              <HeroAsk className="shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]" />
            </div>
          </div>
          {/* Built for: one row, like a byline for the whole page. */}
          <div className="relative mx-auto mt-14 max-w-6xl px-6 md:mt-20">
            <div className="flex flex-col gap-3 border-t border-paper/15 pt-6 md:flex-row md:items-baseline md:gap-10">
              <span className="whitespace-nowrap text-[13px] text-mist/70">Built for</span>
              <ul className="flex flex-wrap gap-x-8 gap-y-2 text-[17px] text-paper md:text-[19px]">
                {BUILT_FOR.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          </div>
        </section>

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

        {/* The record: table stakes, included with every plan. */}
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
        <Quotes />
        <FaqSection items={faqs} className="bg-paper py-16 md:py-24" />

        <section className="bg-anchor py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-[28px] font-medium leading-tight tracking-tight text-paper md:text-[34px]">Ask it the question your team asked you yesterday.</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-mist">Load one carrier guide and ask. If the answer with its page does not beat what you do today, you have lost ten minutes.</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={START_INTELLIGENCE_URL} className={btn.light}>Start Intelligence</Link>
              <Link href={DEMO_PAGE} className="inline-flex items-center justify-center text-[15px] font-medium text-mist underline-offset-4 hover:underline">Or book a walkthrough</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
