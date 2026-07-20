import type { Metadata } from "next";
import { FeaturePageLayout } from "@/components/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Smarter Insurance Quoting for Independent Agents | HarborIQ",
  description:
    "HarborIQ makes every quote smarter: appetite checked before you quote, one organized quoting profile, and comparisons that flag what the cheapest quote leaves out, with a plain-English explanation for your client.",
  alternates: { canonical: "/features/ai-quoting" },
  openGraph: {
    title: "Smarter Insurance Quoting | HarborIQ",
    description:
      "The best quote is not always the cheapest. HarborIQ helps your agents prove it, and deliver quotes like advisors.",
    url: "/features/ai-quoting",
  },
};

export default function AiQuotingPage() {
  return (
    <FeaturePageLayout
      eyebrow="Smarter quoting"
      headline="The best quote is not always the cheapest. Now you can prove&nbsp;it."
      description="Your clients will not remember who quoted fastest. They remember who caught the gap in the cheap quote and explained it straight. HarborIQ hands you the proof."
      heroImage="/images/harboriq-quote-results-ai-recommendation.jpg"
      heroImageAlt="HarborIQ quote comparison: the AI recommendation explains why the best-value quote beats the cheapest one"
      benefits={[
        {
          title: "Quote the right carriers first",
          description:
            "Carrier Ask answers the appetite question before anyone opens a portal. No more quoting a carrier that was never going to write the risk.",
        },
        {
          title: "One quoting profile, built once",
          description:
            "Property, vehicle, and business details organized in one place, with a record of where each answer came from. When a carrier asks, your agent is not re-assembling the file from memory.",
        },
        {
          title: "Compare what quotes actually cover",
          description:
            "The assistant reads the quotes side by side and flags the differences that matter: the dropped coverage, the higher deductible, the sublimit nobody mentioned. Cheapest is not always best, and now you can show why.",
        },
        {
          title: "Deliver quotes like an advisor",
          description:
            "HarborIQ drafts the plain-English explanation of the recommendation, so every producer presents options the way your best producer does. Clients buy the advice, not the spreadsheet.",
        },
      ]}
      howItWorks={[
        {
          step: 1,
          title: "Build the quoting profile",
          description:
            "Enter the client's details once. The profile keeps everything a carrier will ask for, organized and ready.",
        },
        {
          step: 2,
          title: "Check appetite before you quote",
          description:
            "Ask Carrier Ask which of your markets actually want this risk. Kill the dead-end quotes before they cost an hour each.",
        },
        {
          step: 3,
          title: "Compare, explain, and win",
          description:
            "Bring the quotes back, see the coverage differences flagged, and send your client a recommendation they can understand and trust.",
        },
      ]}
      comparisonIntro="A comparative rater sorts by price. HarborIQ is built on a different belief: the agent who explains coverage best wins the client, and keeps them."
      comparisonRows={[
        {
          feature: "Which carriers to quote",
          harboriq: "Appetite checked first, with cited answers",
          competitors: "Guess, or quote everyone and waste the hours",
        },
        {
          feature: "Quote comparison",
          harboriq: "Coverage-level differences flagged automatically",
          competitors: "Sorted by price, gaps invisible",
        },
        {
          feature: "Client explanation",
          harboriq: "Plain-English recommendation drafted for you",
          competitors: "Every producer starts from a blank page",
        },
        {
          feature: "Multi-carrier rating",
          harboriq: "On our roadmap, built as far as carrier connections allow, and we say so plainly",
          competitors: "Limited by the same carrier connections, sold as if they were not",
        },
      ]}
    >
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
            The truth about raters
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight">
            You will never be fully happy with a rater. It is not the
            rater&rsquo;s&nbsp;fault.
          </h2>
          <div className="mt-6 space-y-4 text-[16px] text-charcoal leading-relaxed">
            <p>
              Carriers decide which products connect, how fresh the rates are,
              and whether a bridge works at all. Until the industry agrees on
              real standards, that ceiling holds for every rater on the market,
              including any we build.
            </p>
            <p>
              So we started where the ceiling is not: the advice. The right
              carriers approached first, one organized quoting profile, and a
              comparison that shows what the cheap quote quietly leaves out.
              When the standards mature, we intend to build the best rater in
              the business. Until then, we will not sell you one.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-paper py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[13px] font-medium text-stone uppercase tracking-wider mb-3">
            Availability
          </p>
          <p className="text-[16px] text-charcoal leading-relaxed">
            Quoting profiles and quote comparison live in the Agency plan, where
            your book and pipeline are. Carrier Ask, which powers the appetite
            check, is included in every plan. Automated multi-carrier rating is
            on the roadmap, and we publish what is shipped versus what is
            coming; you will never find out the difference in a demo.
          </p>
        </div>
      </section>
    </FeaturePageLayout>
  );
}
