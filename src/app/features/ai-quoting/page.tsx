import type { Metadata } from "next";
import { FeaturePageLayout } from "@/components/FeaturePageLayout";

export const metadata: Metadata = {
  title: "AI-Assisted Insurance Quoting Software | HarborIQ",
  description:
    "Enter client data once. HarborIQ translates between carrier-specific terminology and pre-fills quoting forms so your agents stop re-typing and start closing.",
  alternates: { canonical: "/features/ai-quoting" },
  openGraph: {
    title: "AI-Assisted Insurance Quoting Software | HarborIQ",
    description:
      "Enter client data once. AI translates carrier-specific terminology and pre-fills quoting forms automatically.",
    url: "/features/ai-quoting",
  },
};

export default function AiQuotingPage() {
  return (
    <FeaturePageLayout
      eyebrow="AI-Assisted Quoting"
      headline='Enter data once. Quote across&nbsp;carriers.'
      description='Your agents spend two hours quoting what a captive agent quotes in twenty minutes. Not because they&rsquo;re slow. Because every carrier portal speaks a different language. HarborIQ translates.'
      heroImage="/images/harboriq-quote-results-screen-carrier-recommendations-cropped.webp"
      heroImageAlt="HarborIQ AI quoting showing carrier recommendations and coverage comparison"
      benefits={[
        {
          title: "Enter client data once",
          description:
            "No more re-typing the same information into five different carrier portals. Enter it once in HarborIQ and let AI handle the rest.",
        },
        {
          title: "Carrier-specific translation",
          description:
            "Progressive calls it 'rental reimbursement.' Travelers calls it 'loss of use.' HarborIQ knows the difference and maps data correctly across carriers.",
        },
        {
          title: "Faster quotes, fewer errors",
          description:
            "Reduce quote time from 20+ minutes per carrier to under 5. And because AI handles the mapping, data entry errors drop dramatically.",
        },
        {
          title: "Carrier recommendations",
          description:
            "Based on the risk profile, HarborIQ suggests which carriers are most likely to offer competitive rates. Stop wasting time quoting carriers that won't bind.",
        },
      ]}
      howItWorks={[
        {
          step: 1,
          title: "Enter the client's information",
          description:
            "Add the client profile with their property, vehicle, or business details. Standard fields, entered once.",
        },
        {
          step: 2,
          title: "AI maps to carrier-specific formats",
          description:
            "HarborIQ's semantic mapping engine translates your data into each carrier's specific terminology and form structure.",
        },
        {
          step: 3,
          title: "Review, compare, and bind",
          description:
            "Compare quotes side by side with coverage details. Select the best option and move to binding, all from one screen.",
        },
      ]}
      comparisonIntro="Traditional comparative raters use rigid API integrations. HarborIQ uses AI to understand carrier differences at a semantic level."
      comparisonRows={[
        {
          feature: "Data entry",
          harboriq: "Enter once, AI maps to all carriers",
          competitors: "Re-enter per carrier portal",
        },
        {
          feature: "Carrier language translation",
          harboriq: "AI-powered semantic mapping",
          competitors: "Manual knowledge of each carrier",
        },
        {
          feature: "Quote comparison",
          harboriq: "Side-by-side with coverage details",
          competitors: "Tab-switching between portals",
        },
        {
          feature: "Architecture",
          harboriq: "AI-native, adapts to carrier changes",
          competitors: "API-based, breaks when carriers update",
        },
        {
          feature: "Integrated with AMS",
          harboriq: "Built into the platform",
          competitors: "Separate rater product ($200+/mo)",
        },
      ]}
    >
      <section className="bg-paper py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[13px] font-medium text-stone uppercase tracking-wider mb-3">
            Availability
          </p>
          <p className="text-[16px] text-charcoal leading-relaxed">
            AI Quoting is included on Team and Operating System when Phase 2 ships. Solo agencies can add it for $79/mo. Founding partners get it free at every tier.
          </p>
        </div>
      </section>
    </FeaturePageLayout>
  );
}
