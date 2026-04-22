import type { Metadata } from "next";
import { FAQ } from "./FAQ";
import {
  CREEM_RESERVE,
  DEMO_URL,
  FOUNDING_CLOSE_DATE,
  FOUNDING_SPOTS_TOTAL,
  PRICING,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing | Solo $179, Team $349, Operating System $599 | HarborIQ",
  description:
    "Flat monthly pricing per agency for independent insurance agencies. No per-user fees. Solo $179, Team $349, Operating System $599. Founding partners lock in 33% off for life.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Solo $179, Team $349, Operating System $599 | HarborIQ",
    description:
      "Flat monthly pricing per agency. No per-user fees. Founding partners lock in 33% off for life. Offer closes August 1, 2026.",
    url: "/pricing",
  },
};

const soloIncludes = [
  "Pipeline CRM with kanban and follow-ups",
  "Client profiles and renewals",
  "Carrier directory and knowledge base",
  "Document ingestion with AI extraction",
  "Command Center daily priorities",
  "Basic AI assistance (drafts, search, summaries)",
  "500 AI credits per month",
  "1 user",
];

const teamIncludes = [
  "Everything in Solo",
  "Up to 5 users",
  "Team management and roles",
  "Client engagement automation",
  "Team-level reporting",
  "Full email and SMS automation (birthdays, renewals, re-engagement)",
  "2,000 AI credits per month, shared",
  "AI Quoting when Phase 2 ships",
];

const osIncludes = [
  "Everything in Team",
  "Up to 15 users",
  "Full team performance analytics",
  "Agency-wide reporting and custom reports",
  "Advanced AI workflows (bulk ops, deep analysis, report intelligence)",
  "Priority support",
  "Dedicated onboarding",
  "5,000 AI credits per month, shared",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between Solo, Team, and Operating System?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solo is for 1-person agencies and includes the full Command Center, pipeline CRM, carrier directory, and basic AI assistance. Team is for 2 to 5 people and adds team management, engagement automation, team-level reporting, and AI Quoting when Phase 2 ships. Operating System is for 6 to 15 people and adds full performance analytics, advanced AI workflows, priority support, and dedicated onboarding.",
      },
    },
    {
      "@type": "Question",
      name: "How does the founding partner reservation work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pay $100 to reserve your founding partner spot. You lock in 33% off for life at whichever tier fits your agency: Solo $119, Team $229, or Operating System $399. The deposit is fully refundable before launch. The offer closes August 1, 2026 and is limited to 20 agencies across all tiers. Founding partners also get AI Quoting free at every tier when Phase 2 ships, priority support, direct product team access, and a listing as a design partner.",
      },
    },
    {
      "@type": "Question",
      name: "Are prices per user or for the whole team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not per user. Not per seat. Not per agent. One flat price per agency within each tier's band. Solo covers 1 person. Team covers up to 5. Operating System covers up to 15. We priced it this way because per-seat pricing punishes you for growing your team.",
      },
    },
    {
      "@type": "Question",
      name: "What if I outgrow Solo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upgrade to Team whenever you hire your second person. No migration, no data loss, no onboarding fee. You pay the new monthly rate starting the day you upgrade.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I run out of AI credits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You will see your usage in the app at all times and get an email warning at 80% of your monthly allowance. If you hit 100%, you can pause AI until the next reset or continue at $0.10 per credit above the allowance. A $50 per month overage cap is on by default so you never get a surprise bill. Most agencies never notice the allowance exists.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. No long-term contracts. Monthly billing, cancel anytime.",
      },
    },
    {
      "@type": "Question",
      name: "What about my existing data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We help you migrate during onboarding. Bring your client list as a CSV and we will clean, import, and walk your team through the platform. If you prefer to import it yourself using our CSV tool, there is no setup fee.",
      },
    },
    {
      "@type": "Question",
      name: "What does AI-powered actually mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Intelligence is built into the platform, not sprinkled on top. AI in HarborIQ understands carrier differences, tells your team what to do next each morning by analyzing your pipeline, and generates your marketing content. This is not a chatbot bolted on. The intelligence is in the foundation.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI going to replace my agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. HarborIQ makes your agents faster and smarter, not obsolete. AI handles the repetitive work so your team can do what actually requires a human: building relationships, advising clients, and closing business.",
      },
    },
  ],
};

function Check({ color = "#3B6FA0" }: { color?: string }) {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      stroke={color}
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="shrink-0 mt-0.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ─── FOUNDING PARTNER BANNER ─── */}
      <section className="bg-anchor py-3">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[13px] md:text-[14px] font-medium text-ice tracking-wide">
            Founding Partner offer. 33% off locked for life. Closes {FOUNDING_CLOSE_DATE}. Limited to {FOUNDING_SPOTS_TOTAL} agencies.
          </p>
        </div>
      </section>

      {/* ─── HEADER ─── */}
      <section className="bg-paper pt-14 pb-6 md:pt-20 md:pb-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-medium text-ink leading-tight tracking-tight">
            One simple price per agency.
          </h1>
          <p className="mt-4 text-[17px] md:text-[19px] text-charcoal leading-relaxed max-w-2xl mx-auto">
            No per-seat tax. No surprise AI bills. No penalty for growing your team.
          </p>
        </div>
      </section>

      {/* ─── TIER CARDS ─── */}
      <section className="bg-paper py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start max-w-5xl mx-auto">
            {/* Solo */}
            <div className="bg-pure rounded-xl border border-ash p-8 md:mt-24 flex flex-col">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-ink">Solo</h3>
                <p className="mt-2 text-[15px] text-charcoal leading-relaxed">
                  Simple organization for one person.
                </p>
                <p className="mt-6 text-3xl font-medium text-ink tracking-tight">
                  ${PRICING.solo.monthly}
                  <span className="text-lg text-stone font-normal">/month</span>
                </p>
                <p className="mt-1 text-[13px] text-stone">
                  ${PRICING.solo.annual}/mo paid annually. {PRICING.solo.seats}.
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-[13px] text-interactive font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-interactive" aria-hidden />
                  Founding price ${PRICING.solo.founding}/mo locked for life
                </div>
                <div className="mt-6 space-y-3">
                  {soloIncludes.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 text-[15px] text-charcoal"
                    >
                      <Check />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={CREEM_RESERVE}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary mt-8 block text-center text-interactive border border-interactive btn-radius px-6 py-3 text-[15px] font-medium hover:bg-interactive hover:text-white transition-colors"
              >
                Reserve Founding Spot
              </a>
              <p className="mt-3 text-[13px] text-stone text-center">
                $100 refundable deposit
              </p>
            </div>

            {/* Team (visual anchor) */}
            <div className="relative bg-midnight rounded-xl p-8 overflow-hidden shadow-lg shadow-midnight/30 flex flex-col">
              <div className="absolute top-0 left-0 right-0 bg-anchor px-4 py-2">
                <p className="text-[12px] font-medium text-ice text-center tracking-wide">
                  Most popular for growing agencies
                </p>
              </div>
              <div className="pt-8 flex-1">
                <h3 className="text-lg font-medium text-paper">Team</h3>
                <p className="mt-2 text-[15px] text-mist leading-relaxed">
                  Shared workflows for growing agencies.
                </p>
                <div className="mt-6 flex items-baseline gap-3">
                  <p className="text-3xl font-medium text-paper tracking-tight">
                    ${PRICING.team.monthly}
                    <span className="text-lg text-mist font-normal">/month</span>
                  </p>
                </div>
                <p className="mt-1 text-[13px] text-slate">
                  ${PRICING.team.annual}/mo paid annually. {PRICING.team.seats}.
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-[13px] text-ice font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-ice" aria-hidden />
                  Founding price ${PRICING.team.founding}/mo locked for life
                </div>
                <div className="mt-6 space-y-3">
                  {teamIncludes.map((item) => (
                    <div key={item} className="flex gap-3 text-[15px] text-mist">
                      <Check color="#7BA3CC" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={CREEM_RESERVE}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary mt-8 block text-center bg-copper text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors"
              >
                Reserve Founding Spot
              </a>
              <p className="mt-3 text-[13px] text-slate text-center">
                $100 refundable deposit
              </p>
            </div>

            {/* Operating System */}
            <div className="bg-pure rounded-xl border border-ash p-8 md:mt-24 flex flex-col">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-ink">Operating System</h3>
                <p className="mt-2 text-[15px] text-charcoal leading-relaxed">
                  The full platform for agencies that want everything connected.
                </p>
                <p className="mt-6 text-3xl font-medium text-ink tracking-tight">
                  ${PRICING.os.monthly}
                  <span className="text-lg text-stone font-normal">/month</span>
                </p>
                <p className="mt-1 text-[13px] text-stone">
                  ${PRICING.os.annual}/mo paid annually. {PRICING.os.seats}.
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-[13px] text-interactive font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-interactive" aria-hidden />
                  Founding price ${PRICING.os.founding}/mo locked for life
                </div>
                <div className="mt-6 space-y-3">
                  {osIncludes.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 text-[15px] text-charcoal"
                    >
                      <Check />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={CREEM_RESERVE}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary mt-8 block text-center text-interactive border border-interactive btn-radius px-6 py-3 text-[15px] font-medium hover:bg-interactive hover:text-white transition-colors"
              >
                Reserve Founding Spot
              </a>
              <p className="mt-3 text-[13px] text-stone text-center">
                $100 refundable deposit
              </p>
            </div>
          </div>

          {/* Enterprise callout */}
          <div className="max-w-5xl mx-auto mt-8">
            <div className="bg-linen border border-ash rounded-xl px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-[16px] font-medium text-ink">Enterprise</h3>
                <p className="mt-1 text-[15px] text-charcoal leading-relaxed">
                  More than 15 employees? Let&rsquo;s build a plan that fits your
                  agency. Includes everything in Operating System plus unlimited
                  users, custom integrations, and a dedicated account manager.
                </p>
              </div>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary shrink-0 block text-center text-interactive border border-interactive btn-radius px-6 py-3 text-[15px] font-medium hover:bg-interactive hover:text-white transition-colors"
              >
                Talk to us
              </a>
            </div>
          </div>

          {/* Onboarding fee callout */}
          <div className="max-w-5xl mx-auto mt-6">
            <div className="bg-linen border border-ash rounded-xl px-6 py-5">
              <h3 className="text-[15px] font-medium text-ink">
                Data migration and onboarding
              </h3>
              <p className="mt-2 text-[15px] text-charcoal leading-relaxed">
                Free if you import your data yourself with our CSV tool. If you
                want our team to do it for you, the setup fee equals one month
                of your plan (Solo $179, Team $349, Operating System $599). We
                clean your data, import it, and give your team a hands-on
                walkthrough.
              </p>
              <p className="mt-2 text-[13px] text-stone">
                Your existing data stays yours. We import what we can and get
                you set up for the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AI CREDIT ALLOWANCE ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
              AI usage
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight">
              Generous AI included. No surprise bills.
            </h2>
            <p className="mt-3 text-[16px] text-charcoal leading-relaxed max-w-2xl mx-auto">
              Every plan includes a monthly allowance sized for normal agency
              work. Light AI like search, short drafts, and carrier language
              translation is always free. Heavy work like bulk document
              extraction and report generation uses credits from your monthly
              allowance.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-linen border border-ash rounded-xl p-6 text-center">
              <p className="text-[13px] font-medium text-stone uppercase tracking-wider">
                Solo
              </p>
              <p className="mt-3 text-3xl font-medium text-ink tracking-tight">
                500
              </p>
              <p className="text-[14px] text-stone">credits per month</p>
              <p className="mt-4 text-[14px] text-charcoal leading-relaxed">
                Roughly 200 document extractions plus steady day-to-day AI
                assistance.
              </p>
            </div>
            <div className="bg-linen border border-ash rounded-xl p-6 text-center">
              <p className="text-[13px] font-medium text-stone uppercase tracking-wider">
                Team
              </p>
              <p className="mt-3 text-3xl font-medium text-ink tracking-tight">
                2,000
              </p>
              <p className="text-[14px] text-stone">credits per month</p>
              <p className="mt-4 text-[14px] text-charcoal leading-relaxed">
                Shared across your team. Sized for typical 2 to 5 person agency
                volume.
              </p>
            </div>
            <div className="bg-linen border border-ash rounded-xl p-6 text-center">
              <p className="text-[13px] font-medium text-stone uppercase tracking-wider">
                Operating System
              </p>
              <p className="mt-3 text-3xl font-medium text-ink tracking-tight">
                5,000
              </p>
              <p className="text-[14px] text-stone">credits per month</p>
              <p className="mt-4 text-[14px] text-charcoal leading-relaxed">
                Shared across your team. Covers power users and bulk work.
              </p>
            </div>
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-[15px] text-charcoal leading-relaxed">
              If you ever get close to your limit, you will see it in the app
              and get a warning by email. You can pause AI or cap overages at
              any time. A $50 per month overage cap is on by default so you
              never get a surprise bill.
            </p>
            <p className="mt-3 text-[13px] text-stone">
              Allowances may be tuned during launch. Current customers are
              notified before any change.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHAT YOUR CURRENT STACK REALLY COSTS ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink tracking-tight text-center mb-3">
            What your current stack really costs.
          </h2>
          <p className="text-[16px] text-charcoal leading-relaxed text-center max-w-2xl mx-auto mb-10">
            Per-seat pricing adds up fast. Add a rater, a CRM, and the hours
            lost to manual data entry, and the affordable option isn&rsquo;t.
          </p>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-ash">
                  <th className="py-3 pr-4 text-[13px] font-medium text-stone uppercase tracking-wider">
                    Agency size
                  </th>
                  <th className="py-3 px-4 text-[14px] font-medium text-success">
                    HarborIQ
                  </th>
                  <th className="py-3 px-4 text-[14px] font-medium text-charcoal">
                    EasyAgent
                  </th>
                  <th className="py-3 px-4 text-[14px] font-medium text-charcoal">
                    EasyAgent + Gaya
                  </th>
                  <th className="py-3 px-4 text-[14px] font-medium text-charcoal">
                    HawkSoft
                  </th>
                </tr>
              </thead>
              <tbody className="text-[15px]">
                <tr className="border-b border-ash/60">
                  <td className="py-3 pr-4 text-charcoal">1-person agency</td>
                  <td className="py-3 px-4 text-success font-medium">
                    Solo $179/mo
                  </td>
                  <td className="py-3 px-4 text-charcoal">~$230/mo</td>
                  <td className="py-3 px-4 text-charcoal">~$530/mo</td>
                  <td className="py-3 px-4 text-charcoal">~$200 to $300/mo</td>
                </tr>
                <tr className="border-b border-ash/60">
                  <td className="py-3 pr-4 text-charcoal">5-person agency</td>
                  <td className="py-3 px-4 text-success font-medium">
                    Team $349/mo
                  </td>
                  <td className="py-3 px-4 text-charcoal">~$680/mo</td>
                  <td className="py-3 px-4 text-charcoal">~$980/mo</td>
                  <td className="py-3 px-4 text-charcoal">~$300 to $500/mo</td>
                </tr>
                <tr className="border-b border-ash/60">
                  <td className="py-3 pr-4 text-charcoal">10-person agency</td>
                  <td className="py-3 px-4 text-success font-medium">
                    Operating System $599/mo
                  </td>
                  <td className="py-3 px-4 text-charcoal">~$1,430/mo</td>
                  <td className="py-3 px-4 text-charcoal">~$1,730/mo</td>
                  <td className="py-3 px-4 text-charcoal">~$500 to $800/mo</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-charcoal">Logins to manage</td>
                  <td className="py-3 px-4 text-success font-medium">1</td>
                  <td className="py-3 px-4 text-charcoal">1</td>
                  <td className="py-3 px-4 text-charcoal">3 or more</td>
                  <td className="py-3 px-4 text-charcoal">1</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="md:hidden space-y-4">
            {[
              {
                size: "1-person agency",
                harbor: "Solo $179/mo",
                save: "Saves about $612/year vs EasyAgent",
                competitors: [
                  ["EasyAgent", "~$230/mo"],
                  ["EasyAgent + Gaya", "~$530/mo"],
                  ["HawkSoft", "~$200 to $300/mo"],
                ],
              },
              {
                size: "5-person agency",
                harbor: "Team $349/mo",
                save: "Saves about $7,572/year vs EasyAgent + Gaya",
                competitors: [
                  ["EasyAgent", "~$680/mo"],
                  ["EasyAgent + Gaya", "~$980/mo"],
                  ["HawkSoft", "~$300 to $500/mo"],
                ],
              },
              {
                size: "10-person agency",
                harbor: "Operating System $599/mo",
                save: "Saves about $13,572/year vs EasyAgent + Gaya",
                competitors: [
                  ["EasyAgent", "~$1,430/mo"],
                  ["EasyAgent + Gaya", "~$1,730/mo"],
                  ["HawkSoft", "~$500 to $800/mo"],
                ],
              },
            ].map((row) => (
              <div
                key={row.size}
                className="bg-pure border border-ash rounded-xl p-5"
              >
                <p className="text-[13px] font-medium text-stone uppercase tracking-wider">
                  {row.size}
                </p>
                <p className="mt-2 text-[17px] font-medium text-success">
                  HarborIQ {row.harbor}
                </p>
                <p className="text-[13px] text-stone">{row.save}</p>
                <div className="mt-3 space-y-1 text-[14px]">
                  {row.competitors.map(([name, price]) => (
                    <div key={name} className="flex justify-between">
                      <span className="text-charcoal">{name}</span>
                      <span className="text-charcoal">{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[13px] text-stone text-center">
            Based on published pricing from leading AMS platforms. Per-seat
            costs compound every time you hire.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink tracking-tight text-center mb-10">
            Frequently asked questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>

      {/* ─── DEMO BOOKING ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-ink tracking-tight">
            Want to see it first? Let&rsquo;s talk.
          </h2>
          <p className="mt-3 text-[16px] text-charcoal leading-relaxed">
            Book a 15-minute demo. No pitch deck. We&rsquo;ll show you the
            product and answer your questions.
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary inline-block mt-8 bg-interactive text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-deep transition-colors"
          >
            Book a 15-min demo
          </a>
        </div>
      </section>
    </>
  );
}
