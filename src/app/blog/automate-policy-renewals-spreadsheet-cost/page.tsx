import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isPublished } from "../posts";

export const metadata: Metadata = {
  title: "Why Spreadsheet Renewal Tracking Costs You Clients | HarborIQ",
  description:
    "Tracking insurance renewals in a spreadsheet creates blind spots that cost clients. Here's why renewals slip and what automating policy renewals looks like.",
  alternates: {
    canonical: "/blog/automate-policy-renewals-spreadsheet-cost",
  },
  openGraph: {
    title:
      "The Renewal You Forgot to Run: Why Spreadsheet Renewal Tracking Costs You Clients",
    description:
      "Tracking insurance renewals in a spreadsheet creates blind spots that cost clients. Here's why renewals slip and what automating policy renewals looks like.",
    type: "article",
    url: "/blog/automate-policy-renewals-spreadsheet-cost",
    publishedTime: "2026-06-19T00:00:00Z",
    authors: ["Justin Mayer"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The Renewal You Forgot to Run: Why Spreadsheet Renewal Tracking Costs You Clients",
  description:
    "Tracking insurance renewals in a spreadsheet creates blind spots that cost clients. Here's why renewals slip and what automating policy renewals looks like.",
  datePublished: "2026-06-19",
  dateModified: "2026-06-19",
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
    "@id":
      "https://harboriq.com/blog/automate-policy-renewals-spreadsheet-cost",
  },
};

export default function PostPage() {
  if (!isPublished("automate-policy-renewals-spreadsheet-cost")) notFound();

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
          The Renewal You Forgot to Run: Why Spreadsheet Renewal Tracking Costs You&nbsp;Clients
        </h1>
        <p className="mt-3 text-[13px] text-stone">
          June 2026 &middot; 5 min read
        </p>

        <div className="mt-10 space-y-6 text-[17px] text-charcoal leading-[1.75]">
          <p>
            New business gets all the energy in an agency. The prospect calls, the quote goes out, the deal
            closes, and it feels like progress. Renewals get a spreadsheet someone updates when they remember.
            That is backwards, because the cheapest premium you will ever write is the one already sitting in
            your book, and the most expensive loss is the client who walked away at renewal because nobody ran
            the numbers in&nbsp;time.
          </p>
          <p>
            If your agency tracks renewals in a do-it-yourself spreadsheet, you already know the quiet anxiety
            of it. Did anyone check this month&rsquo;s renewals? Is the spreadsheet current? Did that policy
            reprice, and did anyone tell the client before they got the surprise in the mail? Automating policy
            renewals is not about adding a feature. It is about closing the blind spot where retention quietly
            leaks&nbsp;out.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">The thirty-day blind&nbsp;spot</h2>
          <p>
            A renewal is not an event that happens on the renewal date. It is a window that opens about thirty
            days earlier, and that window is where the work has to happen. If a policy is going to reprice, the
            client needs to hear it from you, not from the carrier&rsquo;s notice. If a better option exists,
            that is the moment to present&nbsp;it.
          </p>
          <p>
            A spreadsheet does not have a thirty-day window. It has a column of dates that someone has to look
            at, interpret, and act on, every single week, without fail, forever. The first week someone is out
            sick or buried in new business, the window closes on a few policies with no one watching. Those are
            the renewals you forgot to run, and you usually find out when the client calls to say they went
            somewhere&nbsp;else.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">Price changes are the silent&nbsp;killer</h2>
          <p>
            Renewals are not static. Carriers update their underwriting models, rates shift, and a policy that
            was competitive last year can come back materially more expensive this year. When that happens and
            the client is blindsided by a higher bill, two things follow. They lose a little trust in you,
            because it feels like something you should have caught. And they start shopping, because the increase
            gave them a reason&nbsp;to.
          </p>
          <p>
            The agency that sees the price change coming gets to control the conversation. You reach out first,
            you explain it, and you bring options. The agency tracking renewals by hand finds out the same time
            the client does, which is to say too late. Same book of business, completely different&nbsp;retention.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">What &ldquo;automated&rdquo; actually means&nbsp;here</h2>
          <p>
            Automating renewals does not mean a robot renews policies on its own. It means the system does the
            watching so a human does not have to remember to. Concretely, that looks&nbsp;like:
          </p>
          <ul className="space-y-3 list-disc pl-5">
            <li>
              <span className="font-medium text-ink">Advance notice.</span> Renewals surface roughly thirty days
              out, automatically, so nothing depends on someone opening a&nbsp;spreadsheet.
            </li>
            <li>
              <span className="font-medium text-ink">Price-change visibility.</span> When a renewal reprices, you
              see it and can reach the client before the carrier&rsquo;s notice&nbsp;does.
            </li>
            <li>
              <span className="font-medium text-ink">Outreach status.</span> A clear view of which renewals have
              been handled, which are in progress, and which still need a call, so nothing sits in&nbsp;limbo.
            </li>
            <li>
              <span className="font-medium text-ink">One place.</span> The renewal lives in the same system as the
              client&rsquo;s full history and policies, so the agent making the call has the whole picture, not just
              a row in a&nbsp;sheet.
            </li>
          </ul>
          <p>
            The goal is simple. No renewal should ever be a surprise, to you or to the&nbsp;client.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">Retention is the cheapest growth there&nbsp;is</h2>
          <p>
            It is worth saying plainly. Acquiring a new client costs far more than keeping an existing one, and
            a retained client renews year after year and refers others. A renewal that slips through the cracks
            is not a small administrative miss. It is the most efficient revenue in the agency walking out the
            door over a task a spreadsheet was never going to handle&nbsp;reliably.
          </p>
          <p>
            HarborIQ tracks renewals automatically: thirty-day advance notifications, price-change tracking, and
            outreach status, all in the same platform as the client&rsquo;s full profile and policy history. The
            back half of your book, the part that quietly funds everything else, finally gets watched as carefully
            as the new business you chase. Nothing falls through, because nothing depends on someone remembering
            to&nbsp;look.
          </p>
        </div>
      </div>
    </article>
  );
}
