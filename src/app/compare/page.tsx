import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Compare HarborIQ | The Agency Software Category",
  description:
    "The independent-agency software market is split into three tiers: legacy enterprise, mid-market cloud, and AI-native point tools. HarborIQ doesn't fit any of them. Here's how we think about the category, and how we line up against the names you already know.",
  alternates: { canonical: "/compare" },
  openGraph: {
    title: "Compare HarborIQ | The Agency Software Category",
    description:
      "Three tiers dominate the independent-agency software market. HarborIQ doesn't fit any of them.",
    url: "/compare",
    type: "website",
  },
};

const compareSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Compare HarborIQ",
  url: "https://harboriq.co/compare",
  description:
    "Side-by-side comparison of HarborIQ against the major independent-agency software platforms.",
  isPartOf: {
    "@type": "WebSite",
    name: "HarborIQ",
    url: "https://harboriq.co",
  },
};

const tiers = [
  {
    name: "Legacy enterprise AMS",
    examples: "Applied Epic, AMS360",
    profile:
      "Built for 25+ person brokerages doing complex commercial. Opaque per-user pricing. Six-to-ten-week implementations. The pricing model rewards growth at the vendor and punishes growth at the agency.",
    fitFor: "Larger brokerages that need extensive customization.",
    painFor: "Small independent agencies overpaying for complexity they will never use.",
  },
  {
    name: "Mid-market cloud AMS",
    examples: "EZLynx, HawkSoft, NowCerts, QQ Catalyst",
    profile:
      "Cheaper than the enterprise tier, but still pre-AI architecturally. Per-user pricing. Separate raters, CRMs, and engagement tools bolt on top. Good enough for a long time. Not built for the next decade.",
    fitFor: "Agencies who want lower cost than enterprise and tolerate the bolt-on stack.",
    painFor: "Principals who want one place to run the agency, not five.",
  },
  {
    name: "AI-native point tools and overlays",
    examples: "Gaya, AgencyZoom, Sonant",
    profile:
      "Single-purpose tools that solve one workflow well, then sit on top of whichever AMS you already have. They make a fragmented stack faster. Not simpler.",
    fitFor: "Agencies who want a specific workflow improvement without changing their AMS.",
    painFor: "Principals who realize faster quoting into a broken system is faster busywork.",
  },
];

const rulesBroken = [
  {
    title: "No per-user pricing.",
    body: "Per-seat pricing rewards the vendor every time you hire. We won’t play that game. Three flat tiers. Hire freely.",
  },
  {
    title: "Pricing is published.",
    body: "You know in thirty seconds whether you can afford us. Not in thirty days of “contact sales.”",
  },
  {
    title: "No modules.",
    body: "AMS, CRM, rater, marketing, accounting were built by different teams in different decades. The category-changer is the operating system, not the suite.",
  },
  {
    title: "We sell less work.",
    body: "Feature count is irrelevant if your team still has five logins. The question that matters is how many seconds of attention the system returns to your team every day.",
  },
  {
    title: "Generous AI included.",
    body: "Vendors who meter AI per token will look as quaint in five years as the ones who metered text messages do today.",
  },
  {
    title: "Month-to-month default.",
    body: "Refundable founding-partner deposit. Cancel any month. If the product earns retention on merit, the contract structure becomes a marketing asset.",
  },
];

const rulesKept = [
  {
    title: "Trust-account compliance is non-negotiable.",
    body: "Three-way reconciliation is a legal requirement. Our accounting module ships Q1 2027. Until then, we run alongside your existing accounting.",
  },
  {
    title: "Insurance-native, not Salesforce with templates.",
    body: "The data model knows what a policy is, what a renewal is, and how carrier downloads work.",
  },
  {
    title: "IVANS, not reinvention.",
    body: "Carrier downloads live on IVANS. We integrate. We don’t try to rebuild the carrier network from scratch.",
  },
  {
    title: "Your data is yours.",
    body: "Exportable, in standard formats, at any time, with no exit fee. The vendor relationship lasts as long as the product earns it.",
  },
];

const startingPoints = [
  {
    href: "/compare/applied-epic",
    label: "Currently on Applied Epic?",
    summary: "Built for 50-person brokerages. If you’re 1-9 people, you’re being sold the same enterprise process by a small-agency rep.",
  },
  {
    href: "/compare/agencyzoom",
    label: "Running AgencyZoom on top of an AMS?",
    summary: "AgencyZoom is the best overlay on the market. HarborIQ is the operating system that makes the overlay unnecessary.",
  },
  {
    href: "/compare/ezlynx",
    label: "Currently on EZLynx?",
    summary: "EZLynx built a great rater and bolted an AMS on top. Six-to-eight-week implementations. Tiered support queue.",
  },
  {
    href: "/compare/hawksoft",
    label: "Currently on HawkSoft?",
    summary: "HawkSoft is the best-loved AMS in the category. We don’t trash that. We’re building what comes next.",
  },
];

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(compareSchema) }}
      />

      {/* ─── HERO ─── */}
      <section className="bg-anchor py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-medium text-paper leading-tight tracking-tight">
            The agency software market has three tiers.<br className="hidden md:inline" />
            {" "}We don&rsquo;t fit any of them.
          </h1>
          <p className="mt-5 text-[17px] md:text-[19px] text-mist leading-relaxed max-w-2xl mx-auto">
            Most comparison pages line up features and let you pick the winner.<br className="hidden md:inline" />
            {" "}That&rsquo;s the wrong question.
          </p>
        </div>
      </section>

      {/* ─── THE THREE TIERS ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
            The category
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight max-w-3xl mb-10">
            Three tiers, none built for where independent agencies are headed.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="bg-linen border border-ash rounded-lg p-6 flex flex-col h-full"
              >
                <h3 className="text-[18px] font-medium text-ink leading-tight tracking-tight">
                  {tier.name}
                </h3>
                <p className="text-[13px] text-stone mt-1">{tier.examples}</p>
                <p className="text-[15px] text-charcoal leading-relaxed mt-4">
                  {tier.profile}
                </p>
                <div className="mt-5 pt-5 border-t border-ash space-y-3">
                  <div>
                    <p className="text-[12px] font-medium text-interactive uppercase tracking-wider">
                      Fit for
                    </p>
                    <p className="text-[14px] text-charcoal leading-relaxed mt-1">
                      {tier.fitFor}
                    </p>
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-copper uppercase tracking-wider">
                      Pain for
                    </p>
                    <p className="text-[14px] text-charcoal leading-relaxed mt-1">
                      {tier.painFor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOUNDER MANIFESTO ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
            What we built instead
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight mb-8">
            An operating system, not another module.
          </h2>

          <div className="bg-paper border-l-4 border-copper p-6 md:p-8 rounded-r-md">
            <p className="text-[17px] text-charcoal leading-relaxed">
              AMS software was built in 2008 for 50-person brokerages and adapted downward. Independent agencies with 1-15 people got the worst version of the worst tool.
            </p>
            <p className="text-[17px] text-charcoal leading-relaxed mt-4">
              We&rsquo;re rebuilding the category for the agency that actually exists today. The one running on five tabs, a spreadsheet, and a sticky note.
            </p>
            <p className="text-[17px] text-charcoal leading-relaxed mt-4">
              One client record. One pipeline. One renewals view. AI working in the background of every workflow because the data model was built for it from the start.
            </p>
            <p className="mt-6 text-[14px] font-medium text-ink">
              Justin Mayer, Founder
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="text-[15px] text-interactive hover:text-deep font-medium border-b border-interactive/40 hover:border-interactive transition-colors pb-1"
            >
              Read the story
            </Link>
            <Link
              href="/pricing"
              className="text-[15px] text-interactive hover:text-deep font-medium border-b border-interactive/40 hover:border-interactive transition-colors pb-1"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ─── RULES WE WON'T PLAY BY ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
            Rules we won&rsquo;t play by
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight max-w-3xl mb-10">
            The things every major AMS does. We don&rsquo;t.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rulesBroken.map((rule) => (
              <div
                key={rule.title}
                className="bg-linen border-l-4 border-interactive p-5 md:p-6"
              >
                <h3 className="text-[16px] font-medium text-ink leading-tight tracking-tight">
                  {rule.title}
                </h3>
                <p className="text-[14px] text-charcoal leading-relaxed mt-2">
                  {rule.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE HONOR ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
            What we honor
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight max-w-3xl mb-10">
            Insurance has real constraints. We respect every one of them.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {rulesKept.map((rule) => (
              <div
                key={rule.title}
                className="bg-paper border border-ash rounded-md p-5 md:p-6"
              >
                <h3 className="text-[16px] font-medium text-ink leading-tight tracking-tight">
                  {rule.title}
                </h3>
                <p className="text-[14px] text-charcoal leading-relaxed mt-2">
                  {rule.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHERE DO YOU START? (DECISION BAND) ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4 text-center">
            Where do you start?
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center max-w-3xl mx-auto mb-10">
            Pick the system you&rsquo;re on today.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {startingPoints.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="block bg-linen border border-ash hover:border-interactive rounded-lg p-6 transition-colors group"
              >
                <h3 className="text-[16px] font-medium text-ink leading-tight tracking-tight group-hover:text-interactive transition-colors">
                  {p.label}
                </h3>
                <p className="text-[14px] text-charcoal leading-relaxed mt-2">
                  {p.summary}
                </p>
                <p className="text-[13px] text-interactive mt-3 font-medium">
                  Read the comparison &rarr;
                </p>
              </Link>
            ))}
          </div>

          {/* Escape hatch for spreadsheet/no-system buyers */}
          <div className="mt-6 bg-anchor/5 border border-anchor/20 rounded-lg p-6 text-center">
            <p className="text-[15px] text-charcoal leading-relaxed">
              <span className="font-medium text-ink">Still on a spreadsheet?</span> Book a demo and tell us what you&rsquo;d want. We&rsquo;ll show you the operating system built for exactly that starting point.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        headline="The fastest comparison is a working demo."
        description="Bring your messiest data. We will show you what one operating system looks like in practice, in under thirty minutes."
      />
    </>
  );
}
