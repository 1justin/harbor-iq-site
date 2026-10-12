import type { Metadata } from "next";
import Link from "next/link";
import { BuildCostCalculator } from "@/components/BuildCostCalculator";
import { CtaSection } from "@/components/CtaSection";
import { ManifestoStrip } from "@/components/ManifestoStrip";
import { DEMO_PAGE, MARKETS_START_URL, PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HarborIQ vs Building Your Own | What It Costs to Keep",
  description:
    "If you built your own agency system, building it was the cheap part. A calculator for what it costs to keep running, where the hours go, and how to keep what you built.",
  alternates: { canonical: "/compare/build-your-own" },
  openGraph: {
    title: "HarborIQ vs Building Your Own | What It Costs to Keep",
    description:
      "Building it was the cheap part. Run your own numbers on what a homegrown agency system costs to keep.",
    url: "/compare/build-your-own",
  },
};

/**
 * What an agency system is made of, in owner language rather than
 * engineering terms. The first two are what a weekend with an AI tool
 * produces; `built` drives the color split in the figure.
 */
const layers = [
  { name: "Screens", note: "Forms, lists, dashboards", built: true },
  { name: "Stored data", note: "Clients, policies, the book", built: true },
  { name: "Logins and permissions", note: "Who sees what, and what happens when someone leaves" },
  { name: "Client data security", note: "Social Security numbers, dates of birth, licenses" },
  { name: "Backups you have tested", note: "Not backups you hope work" },
  { name: "Carrier and tool connections", note: "Each one changes on its own schedule" },
  { name: "Updates that do not break things", note: "Changing it safely while people are using it" },
  { name: "Staying online", note: "Monday at 8am, when everyone logs in" },
  { name: "Alerts when something fails", note: "So you hear it from the system, not a client" },
  { name: "A record of who changed what", note: "For a dispute, an audit, or an E&O claim" },
  { name: "Speed as the book grows", note: "What works at 300 clients, at 3,000" },
  { name: "Recovery when it goes down", note: "How long it takes, and who does it" },
  { name: "Someone on call", note: "Including the week you are away" },
];

/** Darkens down the stack so the hidden layers read as depth. */
const HIDDEN_SHADES = [
  "bg-harbor",
  "bg-harbor",
  "bg-harbor",
  "bg-deep",
  "bg-deep",
  "bg-deep",
  "bg-anchor",
  "bg-anchor",
  "bg-anchor",
  "bg-midnight",
  "bg-midnight",
];

const hoursBack = [
  {
    title: "Renewals",
    body: "Calling the accounts that renew in the next 60 days, before they shop.",
  },
  {
    title: "New clients",
    body: "The follow-ups and referral asks that only happen when someone has the time.",
  },
  {
    title: "Strategy",
    body: "Which carriers, which lines, and which niche to grow next.",
  },
  {
    title: "Certifications",
    body: "Yours, and the ones your team has been putting off.",
  },
  {
    title: "Training",
    body: "Getting a new producer writing business sooner.",
  },
  {
    title: "Promoting the agency",
    body: "The marketing that keeps getting pushed to next month.",
  },
];

const risks = [
  {
    title: "One person knows how it works.",
    body: "If they quit, take two weeks off, or get in a car accident, the agency is running on a system nobody else can fix. That is a lot of weight on one person, even when that person is you.",
  },
  {
    title: "Client data is yours to protect.",
    body: "Social Security numbers, dates of birth, driver's licenses. Who can see what, what happens to access when a producer leaves, and what the record shows if a regulator asks.",
  },
  {
    title: "Client data ends up in a chat window.",
    body: "When no system can answer the question, people paste it into ChatGPT or Claude: a dec page, a loss run, a client's date of birth. A personal AI account was not built to be an agency's record. Depending on the plan and settings, what gets pasted may be kept and used to train the model, and the agency has no log of who shared what.",
  },
  {
    title: "Everything it connects to keeps changing.",
    body: "Carriers change formats. Integrations get updated. The AI tools you built it with change every few months. Keeping up is a job with no finish line.",
  },
  {
    title: "Nobody is paid to watch it.",
    body: "Software you built has no warning light. A quiet failure, like a renewal that never made the list, shows up as a client call. That is an E&O question, not an IT one.",
  },
];

const check = (
  <svg
    width="18"
    height="18"
    fill="none"
    stroke="#2E8B57"
    strokeWidth="2"
    viewBox="0 0 24 24"
    className="shrink-0 mt-0.5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export default function CompareBuildYourOwnPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-anchor py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-medium text-paper leading-tight tracking-tight">
            HarborIQ vs building your&nbsp;own
          </h1>
          <p className="mt-5 text-[17px] md:text-[19px] text-mist leading-relaxed max-w-2xl mx-auto">
            If you built your own system, you already did the hard thinking
            about how an agency should run. Building it was the cheap part.
            This page is about what it costs to keep.
          </p>
        </div>
      </section>

      {/* ─── THE BUILDER IS THE HERO ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
            First, the honest part
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight">
            If you built your own, you are who we build&nbsp;for.
          </h2>
          <div className="mt-6 space-y-4 text-[16px] text-charcoal leading-relaxed">
            <p>
              Something new is true. An agency owner with an idea and a free
              weekend can now build working software. A few years ago that
              took a developer and a budget. It is worth being excited about,
              and we are.
            </p>
            <p>
              Most owners put up with whatever software they were sold. You
              looked at what was for sale, decided none of it fit, and made
              something that did. That takes a clear picture of how your agency
              should run. It is the same instinct HarborIQ came from.
            </p>
            <p>
              It is also how we work. HarborIQ is built hand in hand with the
              agencies that use it. They tell us what slows them down, and the
              product changes because of it. An owner who has built a system
              has sharper opinions about that than anyone.
            </p>
            <p className="font-medium text-ink">
              So this is not a page about what you did wrong. You did nothing
              wrong. Being able to build does not mean you have to build the
              whole thing. Build what makes your agency different. We can carry
              the rest.
            </p>
          </div>
        </div>
      </section>

      {/* ─── THE STACK: WHAT YOU SEE VS WHAT IS UNDERNEATH ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
              What a system is made of
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight">
              A weekend builds two layers. Running an agency on it takes
              {" "}{layers.length}.
            </h2>
            <p className="mt-6 text-[16px] text-charcoal leading-relaxed">
              Software looks like two things: the screens you click on, and the
              data behind them. That is the part the new tools are good at.
              The rest is invisible until the day it matters.
            </p>
          </div>

          <figure className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col">
                <p className="text-[13px] font-medium text-stone uppercase tracking-wider mb-3">
                  What a build looks like
                </p>
                <div className="flex flex-col gap-1.5 flex-1">
                  {layers
                    .filter((l) => l.built)
                    .map((l, i) => (
                      <div
                        key={l.name}
                        className={`${i === 0 ? "bg-copper" : "bg-bronze"} flex-1 min-h-[96px] rounded-lg px-5 flex flex-col justify-center text-white`}
                      >
                        <p className="text-[20px] font-medium leading-tight">
                          {l.name}
                        </p>
                        <p className="text-[14px] text-white/85 mt-1">{l.note}</p>
                      </div>
                    ))}
                </div>
              </div>

              <div>
                <p className="text-[13px] font-medium text-stone uppercase tracking-wider mb-3">
                  What running an agency on it takes
                </p>
                <ol className="flex flex-col gap-1.5">
                  {layers.map((l, i) => (
                    <li
                      key={l.name}
                      className={`${
                        l.built
                          ? i === 0
                            ? "bg-copper"
                            : "bg-bronze"
                          : HIDDEN_SHADES[i - 2]
                      } rounded-lg px-4 py-2.5 text-white`}
                    >
                      <p className="text-[15px] font-medium leading-tight">
                        {l.name}
                      </p>
                      <p className="text-[12.5px] text-white/85 leading-snug mt-0.5">
                        {l.note}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <figcaption className="mt-5 text-[13px] text-stone leading-relaxed">
              The two copper layers are what a weekend with an AI tool
              produces. The blue ones are what a subscription is buying.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ─── CALCULATOR ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4 text-center">
            Run your own numbers
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center max-w-3xl mx-auto">
            What does it cost to keep your own system&nbsp;running?
          </h2>
          <p className="mt-4 mb-10 text-[16px] text-charcoal leading-relaxed text-center max-w-2xl mx-auto">
            The tools are cheap. On the monthly bill alone, building your own
            usually wins: $100 to $200 against ${PRICING.agency.solo.monthly}{" "}
            to ${PRICING.agency.os.monthly}. The real cost is the time someone
            spends keeping it working. Put in your numbers and see.
          </p>
          <BuildCostCalculator />
        </div>
      </section>

      {/* ─── WHERE THE HOURS GO ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
              Where the hours go
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight">
              Every hour on the system is an hour off the&nbsp;agency.
            </h2>
            <p className="mt-6 text-[16px] text-charcoal leading-relaxed">
              A subscription is a way of buying someone else&rsquo;s hours.
              Ours go into the system, so yours can go into the agency. Here is
              what those hours could be instead.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hoursBack.map((h) => (
              <li
                key={h.title}
                className="bg-paper border-l-4 border-interactive p-5"
              >
                <p className="text-[16px] font-medium text-ink leading-tight tracking-tight">
                  {h.title}
                </p>
                <p className="text-[14px] text-charcoal leading-relaxed mt-2">
                  {h.body}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-[16px] font-medium text-ink">
            None of that can be handed to software. Maintaining software can.
          </p>
        </div>
      </section>

      {/* ─── RISKS ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
            What a calculator cannot show
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight max-w-3xl mb-10">
            The risks that come with owning&nbsp;it.
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {risks.map((r) => (
              <li
                key={r.title}
                className="bg-linen border border-ash rounded-md p-5 md:p-6"
              >
                <p className="text-[16px] font-medium text-ink leading-tight tracking-tight">
                  {r.title}
                </p>
                <p className="text-[14px] text-charcoal leading-relaxed mt-2">
                  {r.body}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[15px] text-charcoal leading-relaxed">
            We wrote about each of these in more detail, including what is safe
            to build yourself:{" "}
            <Link
              href="/blog/build-your-own-agency-management-system"
              className="text-interactive hover:text-deep font-medium underline underline-offset-4"
            >
              Should you build your own agency management system?
            </Link>
          </p>
        </div>
      </section>

      {/* ─── WHEN EACH IS RIGHT ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center mb-10">
            When each is the right call
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-paper border border-ash rounded-lg p-6 md:p-8">
              <h3 className="text-[17px] font-medium text-ink mb-5">
                Your own build is right when&hellip;
              </h3>
              <ul className="space-y-3 text-[15px] text-charcoal leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-stone mt-0.5 shrink-0">&bull;</span>
                  It is a small tool you could replace in a weekend.
                </li>
                <li className="flex gap-3">
                  <span className="text-stone mt-0.5 shrink-0">&bull;</span>
                  No client&rsquo;s coverage depends on it, and it holds no
                  sensitive client data.
                </li>
                <li className="flex gap-3">
                  <span className="text-stone mt-0.5 shrink-0">&bull;</span>
                  You enjoy the work, and the hours are not coming out of
                  selling.
                </li>
              </ul>
            </div>
            <div className="bg-pure border-2 border-interactive rounded-lg p-6 md:p-8">
              <h3 className="text-[17px] font-medium text-ink mb-5">
                HarborIQ is right when&hellip;
              </h3>
              <ul className="space-y-3 text-[15px] text-charcoal leading-relaxed">
                <li className="flex gap-3">
                  {check}
                  Your build has become the place the truth lives, and one
                  person holds the keys.
                </li>
                <li className="flex gap-3">
                  {check}
                  Upkeep is eating hours you would rather spend on renewals and
                  new business.
                </li>
                <li className="flex gap-3">
                  {check}
                  You want a say in what gets built next, without being the one
                  who builds it.
                </li>
                <li className="flex gap-3">
                  {check}
                  <span>
                    You want to keep your build and add what it does not have:
                    Markets is ${PRICING.markets.monthly} for{" "}
                    {PRICING.markets.seats} and runs next to it. Nothing to
                    migrate.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href={MARKETS_START_URL}
              className="cta-primary inline-block bg-copper text-white btn-radius px-7 py-3 text-[15px] font-medium hover:bg-bronze transition-colors"
            >
              Start with Markets
            </a>
            <a
              href={DEMO_PAGE}
              className="inline-block ml-3 text-interactive text-[15px] font-medium underline underline-offset-4"
            >
              or book an Agency demo
            </a>
          </div>
        </div>
      </section>

      <ManifestoStrip />
      <CtaSection
        headline="You know what your agency needs. Show us."
        description={`Book 20 minutes and walk us through what you built. Markets is $${PRICING.markets.monthly}/mo for 1 to 15 people and runs next to it. Agency is $${PRICING.agency.solo.monthly} solo, $${PRICING.agency.team.monthly} for 2 to 5, and $${PRICING.agency.os.monthly} for 6 to 15. Published, month to month, never per person.`}
      />
    </>
  );
}
