import type { Metadata } from "next";
import { FeaturePageLayout } from "@/components/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Carrier Management for Independent Insurance Agents | HarborIQ",
  description:
    "Manage all your carriers in one place. HarborIQ's carrier directory tracks appetites, underwriting guidelines, and portal credentials so your team stops guessing.",
  alternates: { canonical: "/features/carriers" },
  openGraph: {
    title: "Carrier Management for Independent Agents | HarborIQ",
    description:
      "Manage all your carriers in one place. Track appetites, guidelines, and portal credentials.",
    url: "/features/carriers",
  },
};

export default function CarriersPage() {
  return (
    <FeaturePageLayout
      eyebrow="Carrier Management"
      headline="Every carrier. One&nbsp;place."
      description="Independent agents work with dozens of carriers, each with different appetites, guidelines, and portals. HarborIQ puts it all in one searchable directory."
      heroImage="/images/harboriq-ai-tools-features.webp"
      heroImageAlt="HarborIQ carrier management showing carrier directory and coverage guidelines"
      benefits={[
        {
          title: "Carrier appetites at a glance",
          description:
            "Know which carriers write what, where, and for whom. Stop quoting carriers that won't bind the risk.",
        },
        {
          title: "Underwriting guidelines on file",
          description:
            "Store each carrier's underwriting requirements, minimum premiums, and documentation needs in one place.",
        },
        {
          title: "Portal credentials organized",
          description:
            "No more hunting for carrier portal logins. Your team has one source of truth for every carrier system.",
        },
        {
          title: "Document library per carrier",
          description:
            "Store rate sheets, commission schedules, and bulletins by carrier. Everything your agents need is where they expect it.",
        },
      ]}
      howItWorks={[
        {
          step: 1,
          title: "Add your carrier appointments",
          description:
            "Enter your appointed carriers during onboarding. Include appetites, contact info, and portal credentials.",
        },
        {
          step: 2,
          title: "Your team references the directory daily",
          description:
            "When quoting, agents check the carrier directory to find the right markets for the risk. No more tribal knowledge.",
        },
        {
          step: 3,
          title: "Keep it current as things change",
          description:
            "Carrier appetites shift. Update the directory when you get bulletins, and the whole team sees the change immediately.",
        },
      ]}
      comparisonIntro="Most agencies track carrier info in spreadsheets, emails, and people's heads. HarborIQ makes carrier knowledge a shared, searchable asset."
      comparisonRows={[
        {
          feature: "Carrier directory",
          harboriq: "Searchable, organized by line and appetite",
          competitors: "Spreadsheet or tribal knowledge",
        },
        {
          feature: "Underwriting guidelines",
          harboriq: "Stored per carrier, accessible to all agents",
          competitors: "In individual agent email inboxes",
        },
        {
          feature: "Portal credentials",
          harboriq: "Centralized and secure",
          competitors: "Sticky notes or shared spreadsheets",
        },
        {
          feature: "ACORD form generation",
          harboriq: "Built-in ACORD forms",
          competitors: "Separate tool or manual process",
        },
        {
          feature: "Commission tracking",
          harboriq: "Track commissions by carrier and policy",
          competitors: "Manual spreadsheet reconciliation",
        },
      ]}
    >
      <section className="bg-paper py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[13px] font-medium text-stone uppercase tracking-wider mb-3">
            Availability
          </p>
          <p className="text-[16px] text-charcoal leading-relaxed">
            Carrier management is included on every plan. Solo, Team, and Operating System.
          </p>
        </div>
      </section>
    </FeaturePageLayout>
  );
}
