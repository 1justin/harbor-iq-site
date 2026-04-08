import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Why Your AMS Can't Track Prospects (and Why That's Costing You) — HarborIQ",
  description:
    "Every agency management system manages current clients. None of them manage the prospect who said 'call me in 6 months.' That gap is where revenue disappears.",
  alternates: { canonical: "/blog/why-your-ams-cant-track-prospects" },
  openGraph: {
    title: "Why Your AMS Can't Track Prospects (and Why That's Costing You)",
    description:
      "Every agency management system manages current clients. None of them manage the prospect who said 'call me in 6 months.' That gap is where revenue disappears.",
    type: "article",
    url: "/blog/why-your-ams-cant-track-prospects",
    publishedTime: "2026-04-01T00:00:00Z",
    authors: ["Justin Mayer"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Why Your AMS Can't Track Prospects (and Why That's Costing You)",
  description:
    "Every agency management system manages current clients. None of them manage the prospect who said 'call me in 6 months.' That gap is where revenue disappears.",
  datePublished: "2026-04-01",
  dateModified: "2026-04-01",
  author: {
    "@type": "Person",
    name: "Justin Mayer",
  },
  publisher: {
    "@type": "Organization",
    name: "HarborIQ",
    logo: {
      "@type": "ImageObject",
      url: "https://harboriq.com/images/harboriq-favicon-512.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://harboriq.com/blog/why-your-ams-cant-track-prospects",
  },
};

export default function PostPage() {
  return (
    <article className="bg-paper py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-2xl mx-auto px-6">
        <Link
          href="/blog"
          className="text-[13px] text-interactive hover:text-deep transition-colors"
        >
          &larr; Back to Blog
        </Link>

        <h1 className="mt-8 text-3xl md:text-4xl font-medium text-ink leading-tight tracking-tight">
          Why Your AMS Can&rsquo;t Track Prospects (and Why That&rsquo;s Costing&nbsp;You)
        </h1>
        <p className="mt-3 text-[13px] text-stone">
          April 2026 &middot; 4 min read
        </p>

        <div className="mt-10 space-y-6 text-[17px] text-charcoal leading-[1.75]">
          <p>
            Your agency management system tracks current clients. Policies, renewals, claims, documents.
            That&rsquo;s what it was built for. But the person who called last Tuesday and said &ldquo;I&rsquo;m
            shopping around, can you call me back in a few months?&rdquo; &mdash; where does that person&nbsp;live?
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">The sticky note&nbsp;problem</h2>
          <p>
            In most agencies, prospects live on sticky notes, in personal email inboxes, or in the
            agent&rsquo;s head. There&rsquo;s no system tracking who called, what they needed, when to follow up,
            or which agent owns the relationship. When renewal season hits and that prospect is ready
            to buy, nobody&nbsp;remembers.
          </p>
          <p>
            This isn&rsquo;t a discipline problem. It&rsquo;s a tooling problem. Your AMS literally
            doesn&rsquo;t have a place to put someone who isn&rsquo;t a client&nbsp;yet.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">What it actually&nbsp;costs</h2>
          <p>
            Consider a personal lines agency that gets 20 prospect inquiries per month. Industry data
            suggests independent agents close 15&ndash;25% of quoted prospects. If even 5 of those 20
            monthly prospects fall through the cracks due to missed follow-ups, and each represents
            $1,200/year in premium with a 15% commission, that&rsquo;s $10,800 in annual commission revenue
            walking out the&nbsp;door.
          </p>
          <p>
            Multiply that by years of compounding &mdash; because retained clients renew, and referred clients
            bring more clients &mdash; and the cost of a missing prospect pipeline isn&rsquo;t hundreds of dollars.
            It&rsquo;s tens of&nbsp;thousands.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">The bolt-on&nbsp;trap</h2>
          <p>
            Some agencies solve this by adding a separate CRM on top of their AMS. Now they have
            two systems: one for clients, one for prospects. Two logins. Two data models. When a
            prospect converts to a client, someone has to manually move their information from one
            system to the other. Data lives in two places, falls out of sync, and the &ldquo;solution&rdquo;
            creates its own set of&nbsp;problems.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">What a real pipeline looks&nbsp;like</h2>
          <p>
            A prospect pipeline built into your agency platform means every inquiry &mdash; phone call,
            web form, referral &mdash; enters the same system where your clients live. The pipeline tracks
            stage (new lead, quoted, follow-up scheduled, won, lost), the assigned agent, the next
            action, and the timeline. When a prospect converts, their data flows directly into the
            client profile. No re-entry. No&nbsp;gap.
          </p>
          <p>
            Follow-up reminders escalate automatically. The prospect who said &ldquo;call me in 6 months&rdquo;
            gets a reminder on exactly the right day. The agency owner can see pipeline value,
            conversion rates, and which agents are following up &mdash; and which&nbsp;aren&rsquo;t.
          </p>

          <div className="mt-12 p-6 bg-linen rounded-xl border border-ash">
            <p className="text-[16px] text-ink font-medium">
              HarborIQ includes a full prospect pipeline. No bolt-on&nbsp;required.
            </p>
            <p className="mt-2 text-[15px] text-charcoal">
              Every prospect tracked from first call to bound policy. Reminders that actually work.
              One system for prospects and&nbsp;clients.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.creem.io/payment/prod_1SDGs4JxhPJ0yQonbNfIHV"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary bg-copper text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors text-center"
              >
                Reserve Your Founding Spot
              </a>
              <a
                href="https://tidycal.com/cjmayer/harboriq-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary bg-interactive text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-deep transition-colors text-center"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
