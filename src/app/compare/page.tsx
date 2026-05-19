import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compare HarborIQ | The Agency Software Category, Honestly",
  description:
    "The independent-agency software market is split into three tiers: legacy enterprise, mid-market cloud, and AI-native point tools. HarborIQ doesn't fit any of them. Here's how we think about the category, and how we compare against the names you already know.",
  alternates: { canonical: "/compare" },
  openGraph: {
    title: "Compare HarborIQ | The Agency Software Category, Honestly",
    description:
      "Three tiers dominate the independent-agency software market. HarborIQ doesn't fit any of them. Here's how to think about the category, and how to compare us against the names you already know.",
    url: "/compare",
    type: "website",
  },
};

const compareSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Compare HarborIQ",
  url: "https://harboriq.com/compare",
  description:
    "Side-by-side comparison of HarborIQ against the major independent-agency software platforms.",
  isPartOf: {
    "@type": "WebSite",
    name: "HarborIQ",
    url: "https://harboriq.com",
  },
};

const tiers = [
  {
    name: "Legacy enterprise AMS",
    examples: "Applied Epic, AMS360, HawkSoft",
    profile:
      "Built for 25-plus-person brokerages doing complex commercial. Deep customization, opaque per-user pricing, six-to-ten-week implementations. The pricing model rewards growth at the vendor and punishes growth at the agency.",
    fitFor: "Larger brokerages that need extensive customization.",
    painFor: "Small independent agencies overpaying for complexity they will never use.",
  },
  {
    name: "Mid-market cloud AMS",
    examples: "EZLynx, NowCerts, QQ Catalyst",
    profile:
      "Cheaper than the enterprise tier, but still pre-AI architecturally. Per-user pricing, separate raters and CRMs that bolt on top, multi-week implementations. Good enough for a long time. Not built for the next decade.",
    fitFor: "Agencies who want lower cost than enterprise and tolerate the bolt-on stack.",
    painFor: "Principals who want one place to run the agency, not five.",
  },
  {
    name: "AI-native point tools",
    examples: "Gaya, Sonant, intake utilities",
    profile:
      "Single-purpose tools that solve one workflow well. Faster quoting, AI receptionists, dec-page extractors. They sit on top of whichever AMS you already have, which means they make a fragmented stack faster, not simpler.",
    fitFor: "Agencies who want a specific workflow improvement without changing their AMS.",
    painFor: "Principals who realize faster quoting into a broken system is faster busywork.",
  },
];

const rulesBroken = [
  {
    title: "We don't charge per user.",
    body:
      "Per-seat pricing is the SaaS default for a reason: it's better for the vendor. It is also structurally aligned against agency growth. HarborIQ is three flat tiers. Hire freely inside the tier. The bill does not move when you do.",
  },
  {
    title: "We don't hide the price.",
    body:
      "Published pricing on the website. You know in thirty seconds whether you can afford us, not in thirty days of \"contact sales.\"",
  },
  {
    title: "We don't sell modules.",
    body:
      "AMS, CRM, rater, marketing, accounting: built by different teams in different decades, stitched together with sync jobs. The category-changer is the operating system, not the suite. One client record. One pipeline. One renewals view.",
  },
  {
    title: "We don't sell features. We sell less work.",
    body:
      "Feature count is irrelevant if your team still has five logins. The question that matters is how many seconds of attention the system returns to your team every day.",
  },
  {
    title: "We don't meter AI like long-distance minutes.",
    body:
      "Generous AI included on every plan. Predictable for the buyer. The vendors who meter AI per token will look as quaint in five years as the ones who metered text messages do today.",
  },
  {
    title: "We don't lock you in with annual contracts.",
    body:
      "Month-to-month default. Founding-partner deposit refundable. Cancel any month. If the product is good enough to retain customers on merit, the contract structure becomes a marketing asset, not a defensive moat.",
  },
];

const rulesKept = [
  {
    title: "Trust-account compliance is non-negotiable.",
    body:
      "Three-way reconciliation is a legal requirement, not a feature request. HarborIQ's accounting module is on a dated roadmap. Until it ships, we run alongside your existing accounting workflow. We don't pretend the regulation isn't there.",
  },
  {
    title: "Insurance-native, not Salesforce with templates.",
    body:
      "Agencies don't want a generic CRM. The data model knows what a policy is, what a renewal is, what an endorsement is, and how carrier downloads work.",
  },
  {
    title: "IVANS, not reinvention.",
    body:
      "Carrier downloads live on IVANS. We integrate. We don't try to rebuild the carrier network from scratch.",
  },
  {
    title: "Your data is yours.",
    body:
      "Exportable, in standard formats, at any time, with no exit fee. The vendor relationship lasts as long as the product earns it.",
  },
];

const competitors = [
  {
    href: "/compare/applied-epic",
    name: "vs Applied Epic",
    summary:
      "Applied Epic is the right choice for a 50-person brokerage doing complex commercial. For a 5-person personal-lines agency, you are paying enterprise prices for enterprise complexity you will never use.",
  },
  {
    href: "/compare/ezlynx",
    name: "vs EZLynx",
    summary:
      "EZLynx built a great rater, then bolted an AMS on top and called it a platform. Support is a known problem. Implementation takes months. HarborIQ is one platform, built that way from day one.",
  },
  {
    href: "/compare/hawksoft",
    name: "vs HawkSoft",
    summary:
      "HawkSoft is a well-loved product with excellent support. At $94 per user per month, a growing agency pays more every time it hires. HarborIQ is flat-priced with AI built in, not bolted on.",
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
      <section className="bg-midnight pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-mist uppercase tracking-wider mb-4">
            Compare HarborIQ
          </p>
          <h1 className="text-3xl md:text-4xl font-medium text-paper leading-tight tracking-tight max-w-3xl">
            The independent-agency software market has three tiers. We don&rsquo;t fit any of them.
          </h1>
          <p className="mt-5 text-[17px] text-mist leading-relaxed max-w-2xl">
            Most comparison pages line up features and let you pick the winner. We don&rsquo;t think that&rsquo;s the right question. Here is how we think about the category, what we refuse to do, and how we line up against the names you already know.
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
            Three tiers, none of which were built for where independent agencies are headed.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="bg-linen border border-ash p-6 flex flex-col h-full"
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

      {/* ─── WHAT WE BUILT INSTEAD ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
              What we built instead
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight mb-6">
              An operating system, not another module.
            </h2>
            <p className="text-[17px] text-charcoal leading-relaxed">
              The three tiers above all share the same architectural assumption: that a working agency runs on a federation of separate products held together by sync jobs. We disagreed. HarborIQ is one client record across the lifecycle, one pipeline, one renewals view, with AI working in the background of every workflow because the data model was built for it from the start.
            </p>
            <p className="text-[17px] text-charcoal leading-relaxed mt-4">
              That is not a feature list. It is an architectural posture. It changes what comparison means.
            </p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rulesBroken.map((rule) => (
              <div
                key={rule.title}
                className="bg-linen border-l-4 border-interactive p-6"
              >
                <h3 className="text-[17px] font-medium text-ink leading-tight tracking-tight">
                  {rule.title}
                </h3>
                <p className="text-[15px] text-charcoal leading-relaxed mt-3">
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
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight max-w-3xl mb-6">
            Insurance has real constraints. We respect every one of them.
          </h2>
          <p className="text-[17px] text-charcoal leading-relaxed max-w-3xl mb-10">
            Breaking the wrong rules is how vendors get agencies in trouble. The list below is what we hold sacred.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rulesKept.map((rule) => (
              <div
                key={rule.title}
                className="bg-paper border border-ash p-6"
              >
                <h3 className="text-[16px] font-medium text-ink leading-tight tracking-tight">
                  {rule.title}
                </h3>
                <p className="text-[15px] text-charcoal leading-relaxed mt-3">
                  {rule.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIRECT COMPARISONS ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
            Direct comparisons
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight max-w-3xl mb-6">
            Already evaluating a specific platform? Start here.
          </h2>
          <p className="text-[17px] text-charcoal leading-relaxed max-w-3xl mb-10">
            Honest side-by-side comparisons against the three platforms our customers ask about most.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competitors.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block bg-linen border border-ash p-6 hover:border-interactive transition-colors group h-full"
              >
                <h3 className="text-[18px] font-medium text-ink leading-tight tracking-tight group-hover:text-interactive transition-colors">
                  HarborIQ {c.name}
                </h3>
                <p className="text-[15px] text-charcoal leading-relaxed mt-3">
                  {c.summary}
                </p>
                <p className="text-[13px] text-interactive mt-4 font-medium">
                  Read the full comparison &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-midnight py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-paper leading-tight tracking-tight">
            The fastest comparison is a working demo.
          </h2>
          <p className="mt-4 text-[17px] text-mist leading-relaxed max-w-2xl mx-auto">
            Bring your messiest data. We will show you what one operating system looks like in practice, in under thirty minutes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://tidycal.com/cjmayer/harboriq-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-interactive hover:bg-deep text-white btn-radius px-8 py-3 text-[15px] font-medium transition-colors"
            >
              Book a demo
            </a>
            <Link
              href="/pricing"
              className="border border-paper/40 text-paper hover:bg-paper/10 btn-radius px-8 py-3 text-[15px] font-medium transition-colors"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
