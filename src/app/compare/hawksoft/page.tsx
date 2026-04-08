import type { Metadata } from "next";
import { ComparePageLayout } from "@/components/ComparePageLayout";

export const metadata: Metadata = {
  title: "HarborIQ vs HawkSoft | Compare Insurance Agency Management Systems",
  description:
    "Honest comparison of HarborIQ and HawkSoft for independent insurance agencies. Side-by-side on pricing, AI capabilities, prospect pipeline, and team analytics.",
  alternates: { canonical: "/compare/hawksoft" },
  openGraph: {
    title: "HarborIQ vs HawkSoft — Honest Comparison",
    description:
      "Side-by-side comparison for independent insurance agencies. Pricing, AI, pipeline CRM, and more.",
    url: "/compare/hawksoft",
  },
};

export default function CompareHawkSoftPage() {
  return (
    <ComparePageLayout
      competitorName="HawkSoft"
      headline="HarborIQ vs HawkSoft"
      subheadline="HawkSoft is one of the most-loved AMS platforms in the industry. Here's how HarborIQ takes a different approach for agencies ready for what's next."
      comparisonRows={[
        {
          category: "Pricing model",
          harboriq: "Flat monthly: $299 or $499/mo",
          competitor: "$250/mo base + $94/user/month",
        },
        {
          category: "5-person agency cost",
          harboriq: "$299/mo or $499/mo (all features)",
          competitor: "$720/month ($250 + 5 x $94)",
        },
        {
          category: "10-person agency cost",
          harboriq: "$499/month (unlimited users)",
          competitor: "$1,190/month ($250 + 10 x $94)",
        },
        {
          category: "Pipeline CRM",
          harboriq: "Built-in prospect tracking with stages and follow-ups",
          competitor: "Not included. Client management only.",
        },
        {
          category: "AI capabilities",
          harboriq: "AI-native: quoting, carrier translation, daily briefings",
          competitor: "No AI features. Agents use Gaya or similar bolt-ons.",
        },
        {
          category: "Team performance",
          harboriq: "Production dashboards, goal tracking, bottleneck identification",
          competitor: "Basic reports and dashboards",
        },
        {
          category: "Renewal management",
          harboriq: "Dedicated dashboard with priority escalation",
          competitor: "Renewal tracking included",
        },
        {
          category: "Client engagement",
          harboriq: "Automated reminders, notifications, and outreach",
          competitor: "Batch email marketing included",
        },
        {
          category: "Architecture",
          harboriq: "Cloud-native, modern web app",
          competitor: "Cloud-based with desktop and web interfaces",
        },
      ]}
      bestForCompetitor={[
        "You value a proven track record and deep AMS functionality refined over many years",
        "Exceptional customer support is your top priority (HawkSoft consistently leads the industry here)",
        "You prefer a tool your team may already know from a previous agency",
        "You want all core features included at one price with no feature gates or add-on tiers",
        "Contract flexibility matters: HawkSoft has no minimum contracts and no data extraction fees",
      ]}
      bestForHarborIQ={[
        "Per-user pricing is becoming expensive as your team grows",
        "You want prospect pipeline management built in, not managed in spreadsheets",
        "You want AI-assisted quoting without bolting on a separate tool like Gaya ($300+/mo)",
        "You need team production visibility to coach agents with data",
        "You want a modern, cloud-native platform built for where the industry is going",
        "You're a 1-15 person agency that wants enterprise features without enterprise complexity",
      ]}
      honestAdvantages={[
        "HawkSoft has among the highest customer satisfaction scores in the AMS industry — consistently 4.5+ stars across review platforms. Agencies genuinely love using it.",
        "Their support team is frequently described as responsive, helpful, and personal. This is a real competitive advantage.",
        "HawkSoft has been purpose-built for independent agents for years. The depth of their AMS functionality reflects that experience.",
        "No predatory contract terms, no data extraction fees, and no feature gating. Their business practices earn trust.",
      ]}
      switchReasons={[
        "Per-user pricing adds up fast. At $94/user, a growing agency pays more every time they hire — the 'growth tax.'",
        "No built-in prospect pipeline means agents track leads in spreadsheets, sticky notes, or their memory. Revenue falls through the cracks.",
        "No AI capabilities means agents who want quoting automation need to pay $300+/mo for a separate tool like Gaya on top of their AMS costs.",
        "Agencies want a single platform that handles prospects, clients, quoting, and team management — not multiple tools stitched together.",
        "Modern agencies are looking for AI-native workflows, not traditional software with AI bolted on later.",
      ]}
    />
  );
}
