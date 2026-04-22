import type { Metadata } from "next";
import { FeaturePageLayout } from "@/components/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Insurance Agency CRM & Pipeline Management | HarborIQ",
  description:
    "Track every prospect from first call to bound policy. HarborIQ's built-in pipeline CRM means the people who said 'call me in six months' never fall through the cracks.",
  alternates: { canonical: "/features/pipeline" },
  openGraph: {
    title: "Insurance Agency CRM & Pipeline Management | HarborIQ",
    description:
      "Track every prospect from first call to bound policy. Built-in pipeline CRM for independent insurance agencies.",
    url: "/features/pipeline",
  },
};

export default function PipelinePage() {
  return (
    <FeaturePageLayout
      eyebrow="Pipeline CRM"
      headline="Never lose another prospect."
      description="Every agency management system tracks current clients. Almost none track the prospect who said 'call me in six months.' HarborIQ's built-in pipeline CRM changes that."
      heroImage="/images/harboriq-pipeline-screen.webp"
      heroImageAlt="HarborIQ Pipeline CRM showing prospect stages from lead to bound policy"
      benefits={[
        {
          title: "Every prospect tracked, automatically",
          description:
            "From first call to bound policy, every prospect has a stage, a next step, and a follow-up date. No sticky notes. No spreadsheets.",
        },
        {
          title: "Morning briefings that tell you what to do",
          description:
            "The Command Center analyzes your pipeline and surfaces the highest-priority follow-ups each morning. Your team starts the day knowing exactly where to focus.",
        },
        {
          title: "Win probability scoring",
          description:
            "See which prospects are most likely to close and which need attention. Prioritize effort where it matters most.",
        },
        {
          title: "No bolt-on CRM needed",
          description:
            "Other agencies pay $79+/mo for a separate CRM like AgencyZoom on top of their AMS. HarborIQ includes prospect pipeline management in every plan.",
        },
      ]}
      howItWorks={[
        {
          step: 1,
          title: "Add a prospect in seconds",
          description:
            "Enter the basics: name, contact info, lines of interest, and estimated premium. The pipeline card is created instantly.",
        },
        {
          step: 2,
          title: "Drag through stages as you work",
          description:
            "Move prospects from Lead to Quoted to Proposal Sent to Bound. Each stage transition is logged automatically.",
        },
        {
          step: 3,
          title: "Get reminded before they go cold",
          description:
            "Set follow-up dates and HarborIQ surfaces them in your Command Center. Stale prospects get flagged before they disappear.",
        },
      ]}
      comparisonIntro="Most agency management systems were built to manage current clients and policies. HarborIQ was built to grow your book of business."
      comparisonRows={[
        {
          feature: "Prospect tracking",
          harboriq: "Built-in pipeline with stages",
          competitors: "Not included (need separate CRM)",
        },
        {
          feature: "Follow-up reminders",
          harboriq: "Automatic, surfaced daily",
          competitors: "Manual calendar entries",
        },
        {
          feature: "Win probability",
          harboriq: "AI-scored per prospect",
          competitors: "Not available",
        },
        {
          feature: "Pipeline reporting",
          harboriq: "Real-time conversion metrics",
          competitors: "No pipeline = no reporting",
        },
        {
          feature: "Cost",
          harboriq: "Included in every plan",
          competitors: "$79+/mo bolt-on (AgencyZoom, etc.)",
        },
      ]}
    >
      <section className="bg-paper py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[13px] font-medium text-stone uppercase tracking-wider mb-3">
            Availability
          </p>
          <p className="text-[16px] text-charcoal leading-relaxed">
            Pipeline CRM is included on every plan. Solo, Team, and Operating System.
          </p>
        </div>
      </section>
    </FeaturePageLayout>
  );
}
