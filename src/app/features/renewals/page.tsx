import type { Metadata } from "next";
import { FeaturePageLayout } from "@/components/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Insurance Renewal Management Software — HarborIQ",
  description:
    "Stay ahead of every renewal. HarborIQ surfaces expiring policies before the deadline so your clients get re-quoted on time, not after they've already shopped.",
  alternates: { canonical: "/features/renewals" },
  openGraph: {
    title: "Insurance Renewal Management Software — HarborIQ",
    description:
      "Stay ahead of every renewal. Re-quote clients before the deadline, not after.",
    url: "/features/renewals",
  },
};

export default function RenewalsPage() {
  return (
    <FeaturePageLayout
      eyebrow="Renewal Management"
      headline="Stop losing clients at renewal."
      description="Most agencies find out about renewals too late. HarborIQ surfaces expiring policies weeks in advance so your team re-quotes proactively, not reactively."
      heroImage="/images/harboriq-renewals-screen-focused.webp"
      heroImageAlt="HarborIQ renewals dashboard showing upcoming policy expirations and priority actions"
      benefits={[
        {
          title: "Renewals surfaced weeks in advance",
          description:
            "See every expiring policy on a single dashboard, sorted by date and priority. No more spreadsheet tracking.",
        },
        {
          title: "Priority escalation for high-value clients",
          description:
            "High-premium clients and clients with rate increases get flagged first. Focus retention where it matters most.",
        },
        {
          title: "Re-quote before they shop",
          description:
            "Proactive renewal outreach means your clients hear from you before they hear from a competitor. Fewer lapses, more retention.",
        },
        {
          title: "Retention tracking over time",
          description:
            "See your retention rate by agent, by month, by line of business. Know whether your agency is growing or leaking.",
        },
      ]}
      howItWorks={[
        {
          step: 1,
          title: "Policies populate automatically",
          description:
            "When you add client policies, renewal dates are tracked automatically. No separate data entry required.",
        },
        {
          step: 2,
          title: "Dashboard shows what's coming",
          description:
            "The renewals dashboard shows policies expiring in the next 30, 60, and 90 days with priority indicators.",
        },
        {
          step: 3,
          title: "Your team takes action",
          description:
            "Each renewal has a clear next step: re-quote, contact client, or confirm renewal. Progress is tracked in real time.",
        },
      ]}
      comparisonIntro="Spreadsheet-based renewal tracking is how agencies lose clients. HarborIQ makes renewals a system, not a memory exercise."
      comparisonRows={[
        {
          feature: "Renewal dashboard",
          harboriq: "Dedicated view with 30/60/90 day horizon",
          competitors: "Basic reminders or spreadsheets",
        },
        {
          feature: "Priority escalation",
          harboriq: "High-value clients flagged automatically",
          competitors: "Manual prioritization",
        },
        {
          feature: "Rate change tracking",
          harboriq: "Price changes surfaced per renewal",
          competitors: "Discovered during re-quote",
        },
        {
          feature: "Retention reporting",
          harboriq: "Built-in retention metrics by agent and line",
          competitors: "Manual calculation in Excel",
        },
        {
          feature: "Proactive outreach",
          harboriq: "Automated reminder notifications",
          competitors: "Calendar-based manual tracking",
        },
      ]}
    />
  );
}
