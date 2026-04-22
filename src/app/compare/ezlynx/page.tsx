import type { Metadata } from "next";
import { ComparePageLayout } from "@/components/ComparePageLayout";

export const metadata: Metadata = {
  title: "HarborIQ vs EZLynx | EZLynx Alternative for Independent Agencies",
  description:
    "Honest comparison of HarborIQ and EZLynx for independent insurance agencies. Side-by-side on pricing, features, AI quoting, support, and pipeline CRM.",
  alternates: { canonical: "/compare/ezlynx" },
  openGraph: {
    title: "HarborIQ vs EZLynx | Honest Comparison",
    description:
      "Side-by-side comparison of HarborIQ and EZLynx for independent insurance agencies.",
    url: "/compare/ezlynx",
  },
};

export default function CompareEZLynxPage() {
  return (
    <ComparePageLayout
      competitorName="EZLynx"
      headline="HarborIQ vs EZLynx"
      subheadline="Both platforms serve independent agencies. They take very different approaches. Here's an honest look at how they compare."
      comparisonRows={[
        {
          category: "Pricing model",
          harboriq: "Flat monthly: Solo $179, Team $349, Operating System $599",
          competitor: "Starts at $350/mo + per-user fees + add-ons",
        },
        {
          category: "Per-user fees",
          harboriq: "None. Flat price per agency within each tier.",
          competitor: "Yes. Costs scale with each user.",
        },
        {
          category: "Pipeline CRM",
          harboriq: "Built-in prospect tracking with stages and follow-ups",
          competitor: "Not included. Requires separate CRM.",
        },
        {
          category: "Comparative rating",
          harboriq: "AI-assisted quoting with semantic carrier mapping",
          competitor: "Traditional API-based comparative rater (industry standard)",
        },
        {
          category: "Renewal management",
          harboriq: "Dedicated dashboard with priority escalation",
          competitor: "Basic renewal tracking",
        },
        {
          category: "Team performance",
          harboriq: "Agent dashboards with production metrics and goal tracking",
          competitor: "Limited reporting capabilities",
        },
        {
          category: "Onboarding timeline",
          harboriq: "Days, not months. CSV import + guided setup.",
          competitor: "6-8 weeks minimum per user reviews",
        },
        {
          category: "Support",
          harboriq: "Priority support with direct product team access",
          competitor: "Consistently cited as a pain point in reviews",
        },
        {
          category: "AI capabilities",
          harboriq: "AI-native: quoting, carrier translation, daily briefings",
          competitor: "No AI features",
        },
      ]}
      bestForCompetitor={[
        "You primarily need a traditional comparative rater with wide carrier integrations",
        "You're already in the Applied Systems ecosystem and want seamless integration",
        "Your agency does high-volume personal lines quoting and needs established carrier API connections",
        "You prefer an industry-standard tool that your staff may already know",
      ]}
      bestForHarborIQ={[
        "You want prospect pipeline management built into your AMS, not bolted on",
        "You're tired of per-user pricing that punishes you for growing your team",
        "You want AI-assisted quoting that understands carrier-specific terminology",
        "You need team performance visibility and coaching tools",
        "You want to be up and running in days, not months",
        "You want a platform built specifically for 1-15 person agencies",
      ]}
      honestAdvantages={[
        "EZLynx has been in the comparative rating space since 2003. Their carrier integration network is extensive and battle-tested.",
        "If your agency's primary workflow centers on high-volume personal lines quoting with carrier API connections, EZLynx's rater is the industry benchmark.",
        "EZLynx includes a built-in client portal and marketing automation features that have been refined over many years.",
        "As part of Applied Systems, EZLynx benefits from a large parent company's resources and carrier relationships.",
      ]}
      switchReasons={[
        "Per-user pricing becomes expensive as the team grows. A 10-person agency can pay $700+/month on EZLynx alone.",
        "Support response times don't meet expectations. Agencies report long wait times and difficulty getting issues resolved.",
        "No prospect pipeline means agents track leads in spreadsheets or their heads. Revenue leaks between the cracks.",
        "Implementation timelines of 6-8 weeks disrupt agency operations during the transition.",
        "Agencies want AI-powered workflows, not just digitized versions of the same manual processes.",
      ]}
    />
  );
}
