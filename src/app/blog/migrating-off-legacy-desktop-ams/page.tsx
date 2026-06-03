import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isPublished } from "../posts";

export const metadata: Metadata = {
  title: "Migrating Off a Legacy Desktop AMS | HarborIQ",
  description:
    "A practical guide to migrating your insurance agency off a legacy desktop AMS, covering data export, cleanup, carrier setup, and running in parallel.",
  alternates: { canonical: "/blog/migrating-off-legacy-desktop-ams" },
  openGraph: {
    title: "Migrating Off a Legacy Desktop AMS Without Losing Your Mind",
    description:
      "A practical guide to migrating your insurance agency off a legacy desktop AMS, covering data export, cleanup, carrier setup, and running in parallel.",
    type: "article",
    url: "/blog/migrating-off-legacy-desktop-ams",
    publishedTime: "2026-06-17T00:00:00Z",
    authors: ["Justin Mayer"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Migrating Off a Legacy Desktop AMS Without Losing Your Mind",
  description:
    "A practical guide to migrating your insurance agency off a legacy desktop AMS, covering data export, cleanup, carrier setup, and running in parallel.",
  datePublished: "2026-06-17",
  dateModified: "2026-06-17",
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
    "@id": "https://harboriq.com/blog/migrating-off-legacy-desktop-ams",
  },
};

export default function PostPage() {
  if (!isPublished("migrating-off-legacy-desktop-ams")) notFound();

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
          Migrating Off a Legacy Desktop AMS Without Losing Your&nbsp;Mind
        </h1>
        <p className="mt-3 text-[13px] text-stone">
          June 2026 &middot; 6 min read
        </p>

        <div className="mt-10 space-y-6 text-[17px] text-charcoal leading-[1.75]">
          <p>
            Ask around and you will find a striking number of independent agencies running software they
            openly dislike. A Windows desktop program with a layout from another era. One shared login the
            whole office passes around. Duplicate client records nobody has time to clean up. A notification
            box the size of a postage stamp. Everyone agrees it is holding the agency back, and everyone
            stays&nbsp;anyway.
          </p>
          <p>
            The reason is not loyalty. It is fear of the migration. The thought of moving years of client
            data, policies, and carrier setup into something new is scary enough that &ldquo;the system we
            hate&rdquo; beats &ldquo;the unknown&rdquo; year after year. That fear is understandable, but it
            is also overstated, because a good migration follows a predictable path. Here is how to migrate
            insurance agency software without the part of your brain that handles dread taking&nbsp;over.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">Start by taking&nbsp;inventory</h2>
          <p>
            Before exporting anything, write down what you actually have. Your client and policy records,
            obviously, but also the things that live outside the system: the carrier login vault scattered
            across a spreadsheet and a few sticky notes, the renewal dates someone tracks by hand, the notes
            and history that exist only in the current program or in people&rsquo;s heads. Migration is not
            just moving the database. It is capturing the institutional knowledge the database never held in
            the first&nbsp;place.
          </p>
          <p>
            This inventory is also where you decide what not to bring. Every agency carries dead weight:
            inactive clients, policies that lapsed years ago, duplicate records of the same household. You do
            not have to carry it into the new system. A migration is a rare chance to start&nbsp;clean.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">Export, then clean it&nbsp;up</h2>
          <p>
            Most legacy systems can export to a CSV file, even the old desktop ones. That export is your
            starting material, and it will be messy. Expect duplicate records, because systems with one
            shared login and years of use accumulate them. Expect inconsistent formatting in names,
            addresses, and phone&nbsp;numbers.
          </p>
          <p>
            Clean it before it goes in, not after. Merge the duplicate households, standardize the obvious
            fields, and remove the inactive records you flagged in your inventory. An hour of cleanup on the
            export saves days of confusion later, because data problems you carry across the migration become
            data problems you live with in the new&nbsp;system.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">Rebuild the carrier setup&nbsp;deliberately</h2>
          <p>
            Your carrier relationships are the heart of the agency, and they rarely live cleanly in the old
            AMS. The logins, the lines each carrier writes, the quirks of each one&rsquo;s forms, the cost of
            running their reports: this knowledge is usually scattered. Migration is the moment to consolidate
            it into one place. A good new system gives you a structured carrier directory and a login vault,
            so the knowledge that used to live in a 38-page spreadsheet and three people&rsquo;s memory finally
            has a&nbsp;home.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">Run in parallel before you cut&nbsp;over</h2>
          <p>
            The single most important rule: do not flip a switch and pray. Run the new system alongside the
            old one for a short window. Quote in the new one while the old one is still there as a safety net.
            Confirm the data came across correctly, that renewals are showing up, that the team can find what
            they need. A parallel run turns migration from a single terrifying leap into a series of small,
            reversible steps, which is exactly what makes it&nbsp;survivable.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">Lean on a guided&nbsp;onboarding</h2>
          <p>
            The difference between a migration that takes a weekend and one that drags on for months is usually
            structure. A vendor that knows migration is hard will give you a guided process: import your data,
            select your carriers, invite your team, set up the basics, step by step. A vendor that hands you a
            blank system and wishes you luck is telling you something about how the rest of the relationship
            will&nbsp;go.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">How HarborIQ handles&nbsp;it</h2>
          <p>
            We built HarborIQ assuming you are coming from something older, because most agencies are.
            Onboarding is a guided, step-by-step wizard: import your existing clients from a CSV, choose your
            carriers, invite your team, and get the agency set up without a six-week consulting engagement.
            The carrier directory and login vault give your scattered carrier knowledge one home. And because
            the whole agency moves onto one platform with real logins for each team member, you leave behind
            the shared-login, duplicate-record world for&nbsp;good.
          </p>
          <p>
            The status quo feels safe because it is familiar. But a desktop system from another era is not
            actually safe. It is a slow, daily cost you have stopped noticing. Migration is a weekend of
            discomfort against years of&nbsp;relief.
          </p>
        </div>
      </div>
    </article>
  );
}
