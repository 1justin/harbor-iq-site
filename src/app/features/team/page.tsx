import type { Metadata } from "next";
import { FeaturePageLayout } from "@/components/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Insurance Agency Team Performance Tracking — HarborIQ",
  description:
    "See who's quoting, who's closing, and where the bottlenecks are. HarborIQ gives agency principals real-time production visibility and coaching tools.",
  alternates: { canonical: "/features/team" },
  openGraph: {
    title: "Insurance Agency Team Performance Tracking — HarborIQ",
    description:
      "Real-time production visibility for agency principals. See who's quoting, closing, and where bottlenecks are.",
    url: "/features/team",
  },
};

export default function TeamPage() {
  return (
    <FeaturePageLayout
      eyebrow="Team Performance"
      headline="Coach your team with data, not&nbsp;guesswork."
      description="Most agency principals have no idea how many quotes each agent is running, what their close rate is, or where deals stall. HarborIQ changes that."
      heroImage="/images/harboriq-team-performance-management-screens.webp"
      heroImageAlt="HarborIQ team performance dashboards showing agent activity, production metrics, and goal tracking"
      benefits={[
        {
          title: "Real-time production visibility",
          description:
            "See quotes submitted, policies bound, premiums written, and close rates per agent. Updated automatically as your team works.",
        },
        {
          title: "Identify bottlenecks before they cost you",
          description:
            "When deals stall at the same stage for the same agent, you'll see the pattern. Coach the behavior, not the result.",
        },
        {
          title: "Goal setting and tracking",
          description:
            "Set production goals per agent and track progress in real time. Your team sees where they stand without asking.",
        },
        {
          title: "Activity logging without extra work",
          description:
            "Calls, quotes, and policy actions are logged automatically as agents use the platform. No separate activity tracking required.",
        },
      ]}
      howItWorks={[
        {
          step: 1,
          title: "Your team uses HarborIQ daily",
          description:
            "As agents quote, follow up, and bind policies, every action is logged automatically. No manual reporting.",
        },
        {
          step: 2,
          title: "Dashboards populate in real time",
          description:
            "The team performance dashboard shows production, activity, and pipeline health per agent and for the agency overall.",
        },
        {
          step: 3,
          title: "You coach with data",
          description:
            "Weekly 1:1s go from 'how are things going?' to 'your close rate dropped 10% this month — let's look at where deals are stalling.'",
        },
      ]}
      comparisonIntro="Traditional AMS platforms don't track agent production beyond basic policy counts. HarborIQ was built for principals who want to grow their team."
      comparisonRows={[
        {
          feature: "Agent production dashboard",
          harboriq: "Real-time quotes, binds, premiums, close rates",
          competitors: "Basic policy count reports",
        },
        {
          feature: "Activity logging",
          harboriq: "Automatic (calls, quotes, emails)",
          competitors: "Manual entry required",
        },
        {
          feature: "Goal tracking",
          harboriq: "Set and track goals per agent",
          competitors: "Not available",
        },
        {
          feature: "Pipeline visibility per agent",
          harboriq: "See each agent's prospect pipeline",
          competitors: "No prospect tracking",
        },
        {
          feature: "Performance coaching tools",
          harboriq: "Bottleneck identification, trend data",
          competitors: "Anecdotal / manual review",
        },
      ]}
    />
  );
}
