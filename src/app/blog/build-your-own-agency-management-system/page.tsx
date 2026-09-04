import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isPublished } from "../posts";
import { DEMO_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Should You Build Your Own Agency Management System? | HarborIQ",
  description:
    "More independent agencies are building their own AMS with Airtable, Claude Code, or Cursor instead of buying one. Here's what's genuinely easy, what isn't, and what to weigh before you commit.",
  alternates: { canonical: "/blog/build-your-own-agency-management-system" },
  openGraph: {
    title: "Should you build your own agency management system?",
    description:
      "More independent agencies are building their own AMS with Airtable, Claude Code, or Cursor instead of buying one. Here's what's genuinely easy, what isn't, and what to weigh before you commit.",
    type: "article",
    url: "/blog/build-your-own-agency-management-system",
    publishedTime: "2026-09-04T00:00:00Z",
    authors: ["Justin Mayer"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Should you build your own agency management system?",
  description:
    "More independent agencies are building their own AMS with Airtable, Claude Code, or Cursor instead of buying one. Here's what's genuinely easy, what isn't, and what to weigh before you commit.",
  datePublished: "2026-09-04",
  dateModified: "2026-09-04",
  author: {
    "@type": "Person",
    name: "Justin Mayer",
  },
  publisher: {
    "@type": "Organization",
    name: "HarborIQ",
    logo: {
      "@type": "ImageObject",
      url: "https://harboriq.co/images/harboriq-favicon-512.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://harboriq.co/blog/build-your-own-agency-management-system",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should I build my own insurance agency management system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For the client-facing screens, the book of business, and basic workflows, yes, it is a realistic option with today's AI coding tools. It gets harder once you need carrier data, security controls, and someone to maintain it for as long as the agency exists.",
      },
    },
    {
      "@type": "Question",
      name: "What is hardest to build yourself when creating agency software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carrier connections. Automated downloads, live appetite data, and quoting feeds depend on ongoing data relationships, not just good code.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use HarborIQ if I already built my own system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. HarborIQ Markets is built to sit alongside a homegrown system rather than replace it, adding the carrier and market intelligence layer most DIY builds do not have.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to a homegrown agency system if the agency is sold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is worth thinking through before a sale is on the table. A system that lives in one person's head, undocumented, tends to come up in buyer diligence. Flagging it early beats having it be a surprise.",
      },
    },
  ],
};

export default function PostPage() {
  if (!isPublished("build-your-own-agency-management-system")) notFound();

  return (
    <article className="bg-paper py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-2xl mx-auto px-6">
        <Link
          href="/blog"
          className="text-[13px] text-interactive hover:text-deep transition-colors"
        >
          &larr; Back to Blog
        </Link>

        <h1 className="mt-8 text-3xl md:text-4xl font-medium text-ink leading-tight tracking-tight">
          Should you build your own agency management&nbsp;system?
        </h1>
        <p className="mt-3 text-[13px] text-stone">
          September 2026 &middot; 7 min read
        </p>

        <div className="mt-10 space-y-6 text-[17px] text-charcoal leading-[1.75]">
          <p>
            We hear this a lot lately, on calls and in agent Facebook groups: someone asks what CRM or AMS
            they should use, and a few agency owners answer with some version of &ldquo;I just built my
            own.&rdquo; Airtable for the client list, Go High Level for pipeline and texting, or increasingly
            a real application built with Claude Code or&nbsp;Cursor.
          </p>
          <p>
            It is easy to hear that as a dead end for anyone selling agency software, but it is not one.
            It is a signal. An owner who built their own system looked at the options on the market and
            decided none of them fit. That is a stronger opinion about this software category than most
            agencies ever say out&nbsp;loud.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">
            Why are more agencies building their own systems&nbsp;now?
          </h2>
          <p>
            Two things changed at once. AI coding tools made it realistic for a non-developer to stand up a
            working system in a weekend, not a year. And the existing AMS options, built for a different
            era, kept asking small agencies to pay per seat for software that still did not fit how they
            actually&nbsp;work.
          </p>
          <p>
            So a founder or office manager with some technical curiosity built the thing themselves. That
            deserves real credit. Standing up a working system, fitting it to how the agency actually runs,
            and avoiding a bad per-seat contract in the process is a genuine achievement, not a shortcut
            worth&nbsp;dismissing.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">
            What is actually easy to build&nbsp;yourself?
          </h2>
          <p>
            The screens people use every day, forms, lists, dashboards, are genuinely easy now. AI coding
            tools are good at this part. Storing the book of business and client records is easy too, on
            Airtable or a well-organized spreadsheet. Most of the rules and workflows, renewals, tasks,
            reminders, can get partway built without too much&nbsp;trouble.
          </p>
          <p>
            If that is where an agency&rsquo;s needs stop, a homegrown system can genuinely be enough. The
            trouble starts one layer&nbsp;down.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">
            Where does a homegrown system usually stop&nbsp;working?
          </h2>
          <p>
            Carrier connections are the wall almost nobody gets past building it themselves. Automated
            carrier downloads, live appetite data, quoting feeds: none of that is a weekend project, because
            it depends on data relationships that take an ongoing operation to maintain, not a clever
            interface. Security and compliance sit right behind it. A system holding Social Security numbers,
            dates of birth, and property and vehicle data needs access control and an audit trail, and most
            homegrown systems were never built with that as a first&nbsp;requirement.
          </p>
          <p>
            Then there is the layer nobody budgets time for: keeping all of it alive. Forever, on top of
            actually running the&nbsp;agency.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">
            What does owning it forever actually&nbsp;cost?
          </h2>
          <p>
            It behaves a lot like deferred maintenance on a car. Skip one oil change and nothing happens.
            Skip a few more and it still drives fine. Eventually the oil breaks down, and a simple job means
            pulling more apart to reach it. Skip it long enough and it is an engine failure, the sixty dollars
            you saved turning into a six thousand dollar&nbsp;repair.
          </p>
          <p>
            A homegrown agency system ages the same way. One shortcut ships a fix and it works. A few more
            shortcuts and everything still runs fine. Then a small change starts touching five other things
            and takes a week instead of an hour. A car at least has a warning light on the dash. Software you
            built yourself usually does not, so you find out something is wrong when it stops working, and
            it is never at a convenient&nbsp;time.
          </p>
          <p>
            None of this is negligence. Nobody skips maintenance on purpose. They skip it because the thing
            is running fine and they have an agency to&nbsp;run.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">
            What happens if the system misses a&nbsp;renewal?
          </h2>
          <p>
            This is the question worth sitting with, because it is closer to home than it first sounds. If a
            homegrown system quietly drops a renewal and a client has an uninsured loss, that is not an IT
            problem. That is an E&amp;O claim against the agency&rsquo;s own errors and omissions
            coverage. A carrier feed that breaks silently, with no alert, is not a minor bug in a system like
            that. It is a claim waiting to&nbsp;happen.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">
            So, should you build your own agency management&nbsp;system?
          </h2>
          <p>
            For the parts that are genuinely easy, forms, client storage, basic workflows, building it
            yourself is a reasonable call, and a lot of agencies will be well served by exactly that. Where
            it gets riskier is carrier data, security, and the open-ended job of keeping a system alive that
            nobody signed up to maintain&nbsp;forever.
          </p>
          <p>
            The good news is that this is not a decision you have to make all at once, or reverse if you
            already built something. Whatever you built for your book of business and workflow can stay
            exactly as it is. What most homegrown systems are missing sits alongside it, not underneath
            it: live carrier appetite, the market intelligence layer nobody builds themselves, without
            touching what already&nbsp;works.
          </p>

          <div className="mt-12 p-6 bg-linen rounded-xl border border-ash">
            <p className="text-[16px] text-ink font-medium">
              Keep what you built. Add the part almost nobody builds&nbsp;themselves.
            </p>
            <p className="mt-2 text-[15px] text-charcoal">
              HarborIQ Markets is $199/mo at any size, self-serve, and sits alongside whatever your agency
              already runs. Priced by agency size, never per&nbsp;person.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary bg-copper text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors text-center"
              >
                Book a 20 minute demo
              </a>
              <a
                href="/pricing"
                className="cta-secondary bg-interactive text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-deep transition-colors text-center"
              >
                See pricing
              </a>
            </div>
          </div>

          <h2 className="text-xl font-medium text-ink mt-12 mb-4">Common questions</h2>

          <div>
            <h3 className="text-[17px] font-medium text-ink mb-2">
              Should I build my own insurance agency management system?
            </h3>
            <p>
              For the client-facing screens, the book of business, and basic workflows, yes, it is a
              realistic option with today&rsquo;s AI coding tools. It gets harder once you need carrier
              data, security controls, and someone to maintain it for as long as the agency&nbsp;exists.
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-ink mb-2">
              What is hardest to build yourself when creating agency software?
            </h3>
            <p>
              Carrier connections. Automated downloads, live appetite data, and quoting feeds depend on
              ongoing data relationships, not just good&nbsp;code.
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-ink mb-2">
              Can I use HarborIQ if I already built my own system?
            </h3>
            <p>
              Yes. HarborIQ Markets is built to sit alongside a homegrown system rather than replace it,
              adding the carrier and market intelligence layer most DIY builds do not&nbsp;have.
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-ink mb-2">
              What happens to a homegrown agency system if the agency is&nbsp;sold?
            </h3>
            <p>
              It is worth thinking through before a sale is on the table. A system that lives in one
              person&rsquo;s head, undocumented, tends to come up in buyer diligence. Flagging it early
              beats having it be a&nbsp;surprise.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
