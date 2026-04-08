import type { Metadata } from "next";
import { ComparePageLayout } from "@/components/ComparePageLayout";

export const metadata: Metadata = {
  title: "HarborIQ vs Applied Epic | Applied Epic Alternative for Small Agencies",
  description:
    "Honest comparison of HarborIQ and Applied Epic. If you're a small independent agency paying enterprise prices for enterprise complexity, there's a better fit.",
  alternates: { canonical: "/compare/applied-epic" },
  openGraph: {
    title: "HarborIQ vs Applied Epic — Honest Comparison",
    description:
      "Is Applied Epic overkill for your agency? Honest comparison for small independent agencies.",
    url: "/compare/applied-epic",
  },
};

export default function CompareAppliedEpicPage() {
  return (
    <ComparePageLayout
      competitorName="Applied Epic"
      headline="HarborIQ vs Applied&nbsp;Epic"
      subheadline="Applied Epic is the industry's leading enterprise AMS. But if you're a 5-person personal lines agency, you may be overbuying. Here's an honest comparison."
      comparisonRows={[
        {
          category: "Built for",
          harboriq: "1-15 person independent agencies",
          competitor: "Mid-to-large agencies and brokerages (50+ employees)",
        },
        {
          category: "Pricing",
          harboriq: "Flat monthly: $299 or $499/mo. Published and transparent.",
          competitor: "Contract-based, negotiated. Not published. Per-user fees standard.",
        },
        {
          category: "Complexity",
          harboriq: "20 features done well. Clean, modern interface.",
          competitor: "Hundreds of features. Steep learning curve. Extensive customization.",
        },
        {
          category: "Onboarding",
          harboriq: "Days. CSV import, guided wizard, live in a week.",
          competitor: "Weeks to months. Enterprise implementation process.",
        },
        {
          category: "Pipeline CRM",
          harboriq: "Built-in prospect tracking with stages and follow-ups",
          competitor: "Focused on existing client/policy management",
        },
        {
          category: "AI capabilities",
          harboriq: "AI-native: quoting, carrier translation, daily briefings",
          competitor: "Investing in 'agentic AI' for underwriting and claims",
        },
        {
          category: "Carrier integrations",
          harboriq: "Carrier directory + AI quoting. IVANS on roadmap.",
          competitor: "Deep IVANS integration via Ivans network (industry leader)",
        },
        {
          category: "Data portability",
          harboriq: "Your data is always exportable. No lock-in.",
          competitor: "Data migration out is notoriously difficult per user reports.",
        },
        {
          category: "Support",
          harboriq: "Direct product team access for founding agencies",
          competitor: "Tiered support. Small agencies may have less leverage.",
        },
      ]}
      bestForCompetitor={[
        "Your agency has 50+ employees and needs deep customization across workflows",
        "You do complex commercial lines that require extensive carrier integrations",
        "You need IVANS automated downloads today (HarborIQ has this on the roadmap)",
        "You operate across multiple regions or need global support",
        "You have an IT team that can manage configuration and customization",
      ]}
      bestForHarborIQ={[
        "You're a 1-15 person agency paying enterprise prices for features you don't use",
        "You want transparent pricing, not contract negotiations",
        "You need prospect pipeline management that Applied Epic doesn't prioritize",
        "You want AI-assisted quoting built into the platform",
        "You want to be live in days, not go through an enterprise implementation",
        "You want a platform that grows with you without per-user cost escalation",
      ]}
      honestAdvantages={[
        "Applied Epic is the most popular AMS overall for a reason. Their carrier integration depth via the Ivans network is unmatched in the industry.",
        "For agencies doing complex commercial lines across multiple states, Applied Epic's customization capabilities are genuinely necessary.",
        "Applied Systems (the parent company) has deep resources and is actively investing in AI for underwriting and claims processing.",
        "If your agency plans to grow to 50+ employees, Applied Epic scales to that size without a platform change.",
      ]}
      switchReasons={[
        "Small agencies pay enterprise prices for enterprise complexity they never use. A 5-person personal lines shop doesn't need 200 features.",
        "The learning curve is consistently cited in reviews. New hires take weeks to get productive on Applied Epic.",
        "Pricing is opaque and negotiated. Small agencies with less bargaining power often get less favorable terms.",
        "Data lock-in makes it difficult to leave once you're committed. HarborIQ keeps your data exportable at all times.",
        "Agencies want a platform that understands the 1-15 person agency workflow, not one that was designed for large brokerages and adapted downward.",
      ]}
    />
  );
}
