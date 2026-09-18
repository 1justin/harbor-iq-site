import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isPublished } from "../posts";
import { DEMO_PAGE } from "@/lib/constants";
import QuestionSorter from "./QuestionSorter";

const SLUG = "two-kinds-of-questions";
const TITLE = "The two kinds of questions your agency asks all day";
const DESCRIPTION =
  "An insurance agency asks questions about its book and questions about its carriers. Software has answered the first kind for years. The second kind still lives in PDFs, portals, and one person's memory, and it is where the day goes.";

export const metadata: Metadata = {
  title: `${TITLE} | HarborIQ`,
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: `/blog/${SLUG}`,
    publishedTime: "2026-09-18T00:00:00Z",
    authors: ["Justin Mayer"],
    images: [{ url: "/images/blog/two-kinds-of-questions.png", width: 1600, height: 900 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-09-18",
  dateModified: "2026-09-18",
  image: "https://harboriq.co/images/blog/two-kinds-of-questions.png",
  author: { "@type": "Person", name: "Justin Mayer" },
  publisher: {
    "@type": "Organization",
    name: "HarborIQ",
    logo: { "@type": "ImageObject", url: "https://harboriq.co/images/harboriq-favicon-512.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": `https://harboriq.co/blog/${SLUG}` },
};

const FAQ = [
  {
    q: "What is the difference between book-of-business AI and carrier AI for an insurance agency?",
    a: "Book-of-business AI answers questions about your own data: producers, retention, renewals, revenue. Carrier AI answers questions about the companies you place business with: appetite, underwriting guidelines, eligibility, coverage forms, and who to call. They read different sources, so a tool built for one does not answer the other.",
  },
  {
    q: "How can an independent agent find out which carrier has appetite for a risk?",
    a: "Today it usually means opening carrier portals, searching appetite guide PDFs, or emailing an underwriter and waiting. A carrier knowledge tool indexes the guides and emails your agency already has, limits answers to the markets you are appointed with, and returns the answer with the page it came from.",
  },
  {
    q: "Can I trust an AI answer about carrier appetite?",
    a: "Only if it shows its source and date, and only if it is willing to say it does not know. An answer about appetite becomes a submission, so a confident guess is worse than no answer. Look for citations you can click and an explicit statement when the documentation is not there.",
  },
  {
    q: "Do I have to replace my agency management system to use HarborIQ Markets?",
    a: "No. Markets runs next to the system you already have. There is nothing to migrate. Setup is a shared folder: you drop in appetite guides, underwriting PDFs, and useful carrier emails, unorganized, and it takes about 30 minutes.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function PostPage() {
  if (!isPublished(SLUG)) notFound();

  return (
    <article className="bg-paper py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-2xl mx-auto px-6">
        <Link href="/blog" className="text-[13px] text-interactive hover:text-deep transition-colors">
          &larr; Back to Blog
        </Link>

        <h1 className="mt-8 text-3xl md:text-4xl font-medium text-ink leading-tight tracking-tight">
          The two kinds of questions your agency asks all&nbsp;day
        </h1>
        <p className="mt-3 text-[13px] text-stone">September 2026 &middot; 6 min read</p>

        <div className="mt-10 p-6 bg-linen rounded-xl border border-ash">
          <p className="text-[12px] uppercase tracking-wider text-stone font-medium">The short version</p>
          <p className="mt-2 text-[17px] text-ink font-medium leading-snug">
            Every question in an agency is either about your book or about your carriers. Software has
            answered the first kind for twenty years. The second kind still lives in PDFs, portals, old
            emails, and one person&rsquo;s memory. That is where the day&nbsp;goes.
          </p>
        </div>

        <div className="mt-10 space-y-6 text-[17px] text-charcoal leading-[1.75]">
          <p>
            Sort a few yourself. These are real questions from agency floors. Tap where each one&nbsp;belongs.
          </p>

          <QuestionSorter />

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">
            What are the questions about your&nbsp;book?
          </h2>
          <p>
            Who is my top producer. Which clients renew in sixty days. What is retention on commercial
            lines. These are questions about data you already own, and your management system has had a
            report for each of them for years. A newer wave of AI tools lets you ask them in plain English
            instead of building the report, which is useful, and most of those tools are built and priced
            for large brokerages with an analyst to run&nbsp;them.
          </p>
          <p>
            This kind of question has one more thing going for it. It is rarely urgent. Nobody is on hold
            while you look up your retention&nbsp;rate.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">
            What are the questions about your&nbsp;carriers?
          </h2>
          <p>
            Will they write a roofer with a prior claim. What is the roof age limit. Which of my markets
            takes a vacant property. Did their coastal appetite change. Who is the underwriter, and what
            is the direct line. None of that is in your book. It is in an appetite guide from last spring,
            a portal behind a password, an email thread from an underwriter, or the head of the person who
            has been at the agency&nbsp;longest.
          </p>
          <p>
            These questions are almost always urgent, because a client is usually waiting on the other end
            of them. One agency owner put it to us plainly on a call last week: &ldquo;We have so many
            MGAs. Who&rsquo;s got that appetite?&rdquo; She was not describing a software gap. She was
            describing her&nbsp;Tuesday.
          </p>

          <figure className="my-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/blog/two-kinds-of-questions.png"
              alt="Two chat threads. About your book: who is my top producer this quarter, answered with there is a report for that. About your carriers: will this carrier write a roofer with a prior claim, answered with yes, up to three stories, citing the contractors guide, page 14."
              width={1600}
              height={900}
              className="w-full h-auto rounded-xl border border-ash"
            />
            <figcaption className="mt-2 text-[13px] text-stone">
              The first answer has existed for years. The second usually costs a portal login, a PDF search,
              and an email to an&nbsp;underwriter.
            </figcaption>
          </figure>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">
            Why has nobody solved the second&nbsp;kind?
          </h2>
          <p>
            Because the knowledge was never data. A book of business is rows and columns, so software can
            count it. Carrier knowledge is prose: guides, bulletins, forms, and replies from people. Until
            recently nothing could read prose and answer a question about it, so agencies solved the
            problem with a person. Every agency has one. When they are out for the day, the agency gets
            slower. When they leave, the knowledge leaves with&nbsp;them.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">
            What does a good answer to a carrier question&nbsp;need?
          </h2>
          <p>
            Three things. A source you can click, because an answer about appetite turns into a submission
            and you should be able to check it first. A date, because appetite moves. And the willingness to
            say &ldquo;I don&rsquo;t&nbsp;know.&rdquo;
          </p>
          <p>
            That last one came up on the same call. The owner asked our product whether a carrier writes
            trucking. We had not loaded that carrier&rsquo;s trucking guidelines, and the answer came back
            saying so: no indexed documentation, no guess. It was the least impressive moment of the demo
            and the most important one. A confident wrong answer becomes a declined submission and an
            awkward call to a client. &ldquo;I don&rsquo;t know&rdquo; becomes a phone call to
            the&nbsp;underwriter.
          </p>
          <p>
            A fourth, which her technical cofounder raised: answers should come only from the markets you
            are appointed with. A directory of every carrier in the country is not an answer. The six you
            can actually place with&nbsp;is.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">
            Do you have to replace your system to fix&nbsp;this?
          </h2>
          <p>
            No, and this is the part legacy workflows get wrong. The carrier question does not belong to
            your management system, so fixing it does not require leaving your management system. HarborIQ
            Markets runs beside whatever you use. Setup is a shared folder. You drop in appetite guides,
            underwriting PDFs, and the carrier emails worth keeping, unorganized, and it takes about thirty
            minutes. Then anyone on the team can ask, from wherever they are&nbsp;working.
          </p>
          <p>
            The point is not the software. It is the hour it gives back. The agencies that win the next ten
            years will be the ones whose people have time: to call the client back, to look at the renewal
            before it is a problem, to sell. Be the agency that has&nbsp;time.
          </p>

          <div className="mt-12 p-6 bg-linen rounded-xl border border-ash">
            <p className="text-[16px] text-ink font-medium">
              Ask your carriers a question. Get the page it came&nbsp;from.
            </p>
            <p className="mt-2 text-[15px] text-charcoal">
              HarborIQ Markets is $199 a month for 1 to 15 people, self-serve, with a 14-day free trial. It
              runs next to the system you already&nbsp;have.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="/pricing"
                className="cta-primary bg-copper text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors text-center"
              >
                See Markets pricing
              </a>
              <a
                href={DEMO_PAGE}
                className="cta-secondary bg-interactive text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-deep transition-colors text-center"
              >
                Book a 20 minute demo
              </a>
            </div>
          </div>

          <h2 className="text-xl font-medium text-ink mt-12 mb-4">Common questions</h2>
          {FAQ.map((f) => (
            <div key={f.q}>
              <h3 className="text-[17px] font-medium text-ink mb-2">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
