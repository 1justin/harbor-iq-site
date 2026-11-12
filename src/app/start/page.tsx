import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { SignupForm } from "./SignupForm";
import { INTELLIGENCE as I, LAUNCH, START_INTELLIGENCE_URL, currentIntelligenceMonthly, introActive } from "@/lib/constants";

type Search = Promise<{ plan?: string | string[] }>;

const isIntelligence = (sp: { plan?: string | string[] }) => sp.plan === "intelligence";

/**
 * The page reads ?plan= on the server so the words beside the form match the
 * button the visitor pressed: a free CRM signup never opens on carrier-answer
 * copy, and an Intelligence signup never opens on the free offer. Rendered per
 * request for that reason, which also keeps the introductory price current.
 */
export async function generateMetadata({ searchParams }: { searchParams: Search }): Promise<Metadata> {
  const intelligence = isIntelligence(await searchParams);
  const crm = LAUNCH.freeCrm;
  return {
    title: intelligence
      ? "Start Intelligence | HarborIQ for independent insurance agencies"
      : crm
        ? "Start your free CRM | HarborIQ for independent insurance agencies"
        : "Start free | HarborIQ for independent insurance agencies",
    description: crm
      ? `Start the free HarborIQ CRM for your agency: clients, pipeline, renewals and follow-ups, no credit card. Or start Intelligence at $${I.monthly} per agency a month for carrier answers with the source attached.`
      : `Set up a free HarborIQ workspace for your agency, or start Intelligence at $${I.monthly} per agency a month. Carrier answers with the source attached.`,
    alternates: { canonical: "/start" },
    // Follows the free workspace launch gate: held out of search until signup is self-serve.
    robots: LAUNCH.freeWorkspaceIndexed ? undefined : { index: false, follow: true },
  };
}

const FREE_CRM = [
  "Clients and prospects, with notes on every record",
  "Sales pipeline, renewals and follow-ups",
  "CSV imports from your AMS, whenever you are ready",
  "Carrier contacts for the whole team",
  "No credit card. Never a fee per person.",
];

/** The free workspace list, shown only while LAUNCH.freeCrm is false. */
const FREE_WORKSPACE = [
  "Try carrier questions, with the source behind each answer",
  "Underwriter contacts and portal links in one private place",
  "License and CE reminders for the dates you enter",
  "An agency profile, published only if you approve it",
];

const INTELLIGENCE_LIST = [
  "AI carrier appetite and product research",
  "Answers cited to the carrier’s own guideline, with its date",
  `${I.checksPerMonth} checks a month, shared by your whole team`,
  `Optional $${I.pack.price} packs of ${I.pack.checks} more. Never automatic.`,
];

function Ticks({ items }: { items: string[] }) {
  return (
    <ul className="mt-7 space-y-3">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-[16px] text-charcoal">
          <span className="mt-0.5 font-medium text-success" aria-hidden="true">✓</span>
          {t}
        </li>
      ))}
    </ul>
  );
}

/**
 * Signup for the free CRM (default) and Intelligence (?plan=intelligence).
 * Optional ?goal= preselects the first step from the /free picker. Records go
 * through /api/signup; see that route for how they land in the sales database.
 */
export default async function StartPage({ searchParams }: { searchParams: Search }) {
  const intelligence = isIntelligence(await searchParams);
  const crm = LAUNCH.freeCrm;
  const intro = introActive();
  const priceLine = intro
    ? `Introductory price: $${I.intro.monthly} per agency a month for your first ${I.intro.months} months when you start by ${I.intro.untilLabel}, then $${I.monthly}. Annual is $${I.intro.annual} for the first year, then $${I.annual}. A price guarantee, not a contract: cancel any time. `
    : `Intelligence is $${I.monthly} per agency a month, or $${I.annual} a year. `;

  return (
    <section className="min-h-[70vh] bg-linen py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16">
        {intelligence ? (
          <div>
            <p className="iq-eyebrow mb-4">Start Intelligence</p>
            <h1 className="text-3xl font-medium leading-tight tracking-tight text-ink md:text-[44px]">
              Get carrier answers with the source attached.
            </h1>
            <p className="mt-4 text-[17px] leading-relaxed text-charcoal md:text-[19px]">
              Ask a carrier question the way you&rsquo;d ask Google. Your whole agency can use it, and you keep the
              tools you already have.
            </p>
            <Ticks items={crm ? ["Everything in the free CRM", ...INTELLIGENCE_LIST, "Reporting and analytics"] : INTELLIGENCE_LIST} />
            <div className="mt-8 rounded-xl border border-ash bg-paper px-6 py-5">
              <p className="text-[15px] font-medium text-ink">${currentIntelligenceMonthly()} a month covers your whole agency</p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-charcoal">
                {priceLine}
                {I.checksPerMonth} carrier checks are shared across your team. Never per person.
              </p>
            </div>
          </div>
        ) : crm ? (
          <div>
            <p className="iq-eyebrow mb-4">Free CRM</p>
            <h1 className="text-3xl font-medium leading-tight tracking-tight text-ink md:text-[44px]">
              Start your free CRM with one client.
            </h1>
            <p className="mt-4 text-[17px] leading-relaxed text-charcoal md:text-[19px]">
              Clients, prospects, pipeline, renewals and follow-ups in one place your whole team can see. Keep your AMS,
              and import a CSV from it when you are ready.
            </p>
            <Ticks items={FREE_CRM} />
            <div className="mt-8 rounded-xl border border-ash bg-paper px-6 py-5">
              <p className="text-[15px] font-medium text-ink">Want carrier answers too?</p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-charcoal">
                Carrier research and reporting are part of Intelligence, ${currentIntelligenceMonthly()} a month for the
                whole agency{intro ? ` when you start by ${I.intro.untilLabel}` : ""}. You can add it any time.{" "}
                <Link href={START_INTELLIGENCE_URL} className="text-interactive underline underline-offset-4 hover:text-deep">
                  Start with Intelligence
                </Link>
                .
              </p>
            </div>
          </div>
        ) : (
          <div>
            <p className="iq-eyebrow mb-4">Start free</p>
            <h1 className="text-3xl font-medium leading-tight tracking-tight text-ink md:text-[44px]">
              Get carrier answers with the source attached.
            </h1>
            <p className="mt-4 text-[17px] leading-relaxed text-charcoal md:text-[19px]">
              Ask a carrier question the way you&rsquo;d ask Google. Keep your contacts and deadlines in one place. Your
              whole agency can use it, and you keep the tools you already have.
            </p>
            <Ticks items={FREE_WORKSPACE} />
            <div className="mt-8 rounded-xl border border-ash bg-paper px-6 py-5">
              <p className="text-[15px] font-medium text-ink">${currentIntelligenceMonthly()} a month covers your whole agency</p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-charcoal">
                {priceLine}
                {I.checksPerMonth} carrier checks are shared across your team. Never per person.
              </p>
            </div>
          </div>
        )}

        <Suspense fallback={null}>
          <SignupForm intro={intro} crm={crm} />
        </Suspense>
      </div>
    </section>
  );
}
