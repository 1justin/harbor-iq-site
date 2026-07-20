import type { Metadata } from "next";
import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import { PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Carrier Intelligence for Independent Insurance Agents | HarborIQ Markets",
  description:
    "Carrier Ask answers appetite and underwriting questions from carrier documents with cited, dated sources. Profiles, reps, login vault, Carrier News, and a knowledge base that builds itself. $199/month at any size.",
  alternates: { canonical: "/features/carriers" },
  openGraph: {
    title: "Carrier Intelligence for Independent Agents | HarborIQ Markets",
    description:
      "Ask any carrier question, get a cited answer with a date on it. Every carrier relationship in one place. $199/month, any size, no migration.",
    url: "/features/carriers",
  },
};

export default function CarriersPage() {
  return (
    <FeaturePageLayout
      eyebrow="HarborIQ Markets"
      headline="Never guess appetite&nbsp;again."
      description="Markets runs every carrier relationship in one place. Ask any appetite or underwriting question and get a cited answer, with the source and its date attached. No system of record, no migration; your whole team is live the same day."
      heroImage="/images/harboriq-ai-tools-features.webp"
      heroImageAlt="HarborIQ Markets showing Carrier Ask answering an appetite question with a cited source"
      benefits={[
        {
          title: "Carrier Ask: cited answers in seconds",
          description:
            "Will this carrier write a 1978 roof? Ask, and the answer comes from the carrier's own documents, with the page and the date it was last updated. Your team stops quoting carriers that will decline the risk.",
        },
        {
          title: "A knowledge base that builds itself",
          description:
            "When an answer is worth keeping, one click promotes it to your agency's knowledge base, categorized and credited. The next person never has to ask. When a veteran retires, what they knew stays.",
        },
        {
          title: "Carrier News, summarized overnight",
          description:
            "Appetite shifts, bulletins, and guideline changes, read for you and summarized before coffee. No more inbox archaeology.",
        },
        {
          title: "Login vault and carrier profiles",
          description:
            "Every portal login, rep, and function-specific contact in one place. The daily portal-and-password shuffle ends.",
        },
        {
          title: "Document library per carrier",
          description:
            "Rate sheets, appetite guides, commission schedules, and bulletins, filed by carrier and feeding Carrier Ask. Everything your agents need is where they expect it.",
        },
      ]}
      howItWorks={[
        {
          step: 1,
          title: "Add your carrier appointments",
          description:
            "Enter your appointed carriers and drop in the documents you have. Markets starts answering from them the same day.",
        },
        {
          step: 2,
          title: "Your team asks instead of digging",
          description:
            "Before every quote, agents ask Carrier Ask instead of calling a rep, digging a PDF, or guessing. Every answer is cited and dated.",
        },
        {
          step: 3,
          title: "Your agency's knowledge compounds",
          description:
            "Good answers get promoted to your knowledge base with one click. Month one, Carrier Ask does the work. Month twelve, your own knowledge base answers most questions instantly.",
        },
      ]}
      comparisonIntro="Most agencies track carrier knowledge in spreadsheets, inboxes, and people's heads. Nobody else sells a carrier intelligence layer flat, for the whole team, with no migration."
      comparisonRows={[
        {
          feature: "Appetite questions",
          harboriq: "Cited, dated answers from carrier documents",
          competitors: "Call the rep, dig the PDF, or guess",
        },
        {
          feature: "Institutional knowledge",
          harboriq: "Promoted answers build an agency-owned knowledge base",
          competitors: "Walks out the door with the veteran",
        },
        {
          feature: "Carrier bulletins",
          harboriq: "Read and summarized overnight",
          competitors: "Unread in individual inboxes",
        },
        {
          feature: "Portal credentials",
          harboriq: "Centralized vault, whole team",
          competitors: "Sticky notes or shared spreadsheets",
        },
        {
          feature: "Price",
          harboriq: `$${PRICING.markets.monthly}/month flat, any size 1 to 15`,
          competitors: "Not sold anywhere as one layer",
        },
      ]}
    >
      <section className="bg-paper py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[13px] font-medium text-stone uppercase tracking-wider mb-3">
            Availability
          </p>
          <p className="text-[16px] text-charcoal leading-relaxed">
            Everything on this page is HarborIQ Markets: ${PRICING.markets.monthly}/month
            at any size from 1 to 15 people, one price for the whole team,
            self-serve, no migration. It is also included in every Agency plan.
          </p>
        </div>
      </section>
    </FeaturePageLayout>
  );
}
