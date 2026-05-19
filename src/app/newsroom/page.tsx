import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newsroom | HarborIQ",
  description:
    "Press, contributed pieces, and on-record commentary from HarborIQ. Founder Justin Mayer is available for editorial inquiries on independent-agency operations, AI in regulated SMB software, and insurtech category dynamics.",
  alternates: { canonical: "/newsroom" },
  openGraph: {
    title: "Newsroom | HarborIQ",
    description:
      "Press, contributed pieces, and on-record commentary from HarborIQ. Founder Justin Mayer is available for editorial inquiries.",
    url: "/newsroom",
    type: "website",
  },
};

const newsroomSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "HarborIQ Newsroom",
  url: "https://harboriq.com/newsroom",
  description:
    "Press, contributed pieces, and on-record commentary from HarborIQ.",
  isPartOf: {
    "@type": "WebSite",
    name: "HarborIQ",
    url: "https://harboriq.com",
  },
};

const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Justin Mayer",
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "HarborIQ",
    url: "https://harboriq.com",
  },
  url: "https://harboriq.com/newsroom",
  image: "https://harboriq.com/newsroom/justin-mayer-headshot.jpg",
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Wisconsin–Milwaukee",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Wisconsin School of Business, University of Wisconsin–Madison",
    },
  ],
  knowsAbout: [
    "AI in regulated small-business software",
    "Independent insurance agency operations",
    "Operating-system category design",
    "Bootstrapped founder economics",
    "Carrier integration and IVANS",
    "Independent-agency software market structure",
  ],
  sameAs: [
    "https://www.linkedin.com/in/cjustinmayer",
  ],
};

const quotes = [
  {
    body:
      "AI bolted onto a 2008 AMS screen is a feature press release. AI-native is an architectural posture. Independent agencies are about to feel the difference between the two.",
    topic: "On AI in agency software",
  },
  {
    body:
      "Per-seat pricing for agency software is structurally aligned against agency growth. Every new hire makes the bill heavier. The flat-tier alternative is not exotic, it is overdue.",
    topic: "On pricing models",
  },
  {
    body:
      "The independent-agency software market looks crowded today. By 2030 it will be concentrated into two or three operating systems. The compression is already underway.",
    topic: "On market structure",
  },
  {
    body:
      "The agency software stack of 2026 does not need a better AMS. It needs to stop being a stack.",
    topic: "On category design",
  },
];

const commentaryPosts = [
  {
    href: "/newsroom/the-coming-compression-of-independent-agency-software",
    title: "The Coming Compression of Independent-Agency Software",
    summary:
      "Four macro forces are collapsing a five-vendor stack into a two- or three-platform market by 2030. Most incumbents have already lost. Most operators do not yet know it.",
    date: "May 2026",
  },
  {
    href: "/newsroom/sync-was-never-the-answer",
    title: "Sync Was Never the Answer",
    summary:
      "A note to agency CIOs on the coming architecture shift. Every overnight sync is interest payment on a decision made in 2008. The post-AI stack is single-model.",
    date: "May 2026",
  },
  {
    href: "/newsroom/the-most-underestimated-number-isnt-the-price",
    title: "The Most Underestimated Number in an Agency Software Decision Isn't the Price",
    summary:
      "Time-to-value belongs on the executive scoreboard. A five-line procurement framework for senior leaders evaluating any agency platform.",
    date: "May 2026",
  },
];

const commentaryTopics = [
  "AI in regulated small-business software (architecture, adoption, governance)",
  "Independent-agency operations and modernization",
  "Operating-system vs. point-solution category design",
  "The economics of bootstrapped founders in capital-intensive verticals",
  "Carrier integration, IVANS modernization, and three-way reconciliation",
  "The coming compression of independent-agency software",
];

const atGlance: Array<[string, string]> = [
  ["Founded", "2026"],
  ["Headquarters", "Glen Ellyn, IL"],
  ["Founder", "Justin Mayer"],
  ["Funding", "Bootstrapped, early revenue"],
  ["Customers", "Independent insurance agencies, 1–15 people"],
  ["Coverage", "Personal lines P&C; commercial"],
  ["Press contact", "justin@wrkstream.com"],
];

export default function NewsroomPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsroomSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />

      {/* ─── HERO ─── */}
      <section className="bg-midnight pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-mist uppercase tracking-wider mb-4">
            Newsroom
          </p>
          <h1 className="text-3xl md:text-4xl font-medium text-paper leading-tight tracking-tight max-w-3xl">
            HarborIQ press, contributed pieces, and on-record commentary.
          </h1>
          <p className="mt-5 text-[17px] text-mist leading-relaxed max-w-2xl">
            For editorial inquiries on independent-agency operations, AI in regulated SMB software, and insurtech category dynamics.
          </p>
        </div>
      </section>

      {/* ─── PRESS CONTACT ─── */}
      <section className="bg-anchor py-10 md:py-12 border-t border-midnight">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-[13px] font-medium text-mist uppercase tracking-wider mb-2">
                For press, interviews, and on-record commentary
              </p>
              <p className="text-paper text-[17px] leading-relaxed">
                Justin Mayer, Founder · Reply within one business day.
              </p>
            </div>
            <a
              href="mailto:justin@wrkstream.com?subject=Press%20inquiry"
              className="bg-copper hover:bg-bronze text-white btn-radius px-6 py-3 text-[15px] font-medium transition-colors text-center whitespace-nowrap"
            >
              justin@wrkstream.com
            </a>
          </div>
        </div>
      </section>

      {/* ─── AT A GLANCE ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-6">
            At a glance
          </p>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl">
            {atGlance.map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between border-b border-ash py-3"
              >
                <dt className="text-stone text-[15px]">{label}</dt>
                <dd className="text-ink text-[15px] font-medium text-right">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── ABOUT HARBORIQ ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
              About HarborIQ
            </p>
            <p className="text-[17px] text-charcoal leading-relaxed">
              HarborIQ is an AI-native operating system that replaces the fragmented AMS, CRM, rater, and marketing stack independent insurance agencies have lived with for two decades. One client record. One pipeline. One renewals view. AI working in the background of every workflow.
            </p>
            <p className="text-[17px] text-charcoal leading-relaxed mt-5">
              The platform is built operator-first, with embedded research alongside working agencies and a flat pricing model that does not punish agencies for growing. HarborIQ is part of the WRKSTREAM portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ABOUT THE FOUNDER ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-6">
            About the founder
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 items-start">
            <div className="relative w-full aspect-square bg-linen rounded-lg overflow-hidden">
              <Image
                src="/newsroom/justin-mayer-headshot.jpg"
                alt="Justin Mayer, founder of HarborIQ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 260px"
                priority
              />
            </div>
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight">
                Justin Mayer, Founder
              </h2>
              <p className="mt-5 text-[17px] text-charcoal leading-relaxed">
                Justin Mayer is the founder of HarborIQ. He is a former Fortune 100 product executive whose prior AI SaaS company, Encube, was acquired by Hitch Works. At Life Fitness, a $1B durable-goods firm, he managed a $420M global category P&amp;L and is a named inventor on 9 patents from the team&rsquo;s product portfolio. Earlier roles include product and marketing leadership at Honeywell, where he grew a $50M residential life-safety category by 61% year over year through the launch of a connected-home product line.
              </p>
              <p className="mt-4 text-[17px] text-charcoal leading-relaxed">
                Justin holds a B.S. in Mechanical Engineering from the University of Wisconsin&ndash;Milwaukee and an MBA from the Wisconsin School of Business at the University of Wisconsin&ndash;Madison, where he was a Grainger Distinguished Graduate Fellow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMMENTARY TOPICS ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
            Available for commentary on
          </p>
          <p className="text-[17px] text-charcoal leading-relaxed max-w-3xl mb-8">
            Justin is available for editorial commentary, interviews, and contributed pieces on the following topics:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-4xl">
            {commentaryTopics.map((topic) => (
              <li
                key={topic}
                className="text-[15px] text-charcoal leading-relaxed pl-4 border-l-2 border-interactive"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── ON THE RECORD ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
            On the record
          </p>
          <p className="text-[17px] text-charcoal leading-relaxed max-w-3xl mb-10">
            The following statements are pre-approved for direct attribution and may be used verbatim by editors.
          </p>
          <div className="space-y-8 max-w-3xl">
            {quotes.map((q) => (
              <figure
                key={q.body}
                className="border-l-4 border-interactive pl-6 py-2"
              >
                <p className="text-[13px] font-medium text-stone uppercase tracking-wider mb-3">
                  {q.topic}
                </p>
                <blockquote
                  cite="https://harboriq.com/newsroom"
                  className="text-[17px] text-ink leading-[1.7] italic"
                >
                  &ldquo;{q.body}&rdquo;
                </blockquote>
                <figcaption className="text-[14px] text-stone mt-3">
                  Justin Mayer, Founder, HarborIQ
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IN THE NEWS (placeholder) ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
            In the news
          </p>
          <p className="text-[17px] text-charcoal leading-relaxed max-w-3xl">
            Recent coverage will appear here. To request an interview or submit a media inquiry, please email{" "}
            <a
              href="mailto:justin@wrkstream.com?subject=Press%20inquiry"
              className="text-interactive hover:text-deep underline-offset-4 hover:underline transition-colors"
            >
              justin@wrkstream.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* ─── FOUNDER COMMENTARY ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
            Founder commentary
          </p>
          <p className="text-[17px] text-charcoal leading-relaxed max-w-3xl mb-10">
            Long-form pieces written by Justin Mayer. Trade-publication versions take canonical priority when they run.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
            {commentaryPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="block bg-linen border border-ash p-6 hover:border-interactive transition-colors group"
              >
                <p className="text-[13px] text-stone mb-2">{post.date}</p>
                <h3 className="text-[18px] font-medium text-ink leading-tight tracking-tight group-hover:text-interactive transition-colors">
                  {post.title}
                </h3>
                <p className="text-[15px] text-charcoal leading-relaxed mt-3">
                  {post.summary}
                </p>
                <p className="text-[13px] text-interactive mt-4 font-medium">
                  Read &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEDIA ASSETS ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
            Media assets
          </p>
          <p className="text-[17px] text-charcoal leading-relaxed max-w-3xl mb-8">
            Press-ready assets. Direct download, no form gate.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            <li>
              <a
                href="/images/harboriq-logo-primary.svg"
                download
                className="block bg-paper border border-ash p-5 hover:border-interactive transition-colors"
              >
                <p className="text-[15px] font-medium text-ink">
                  HarborIQ wordmark (primary, SVG)
                </p>
                <p className="text-[13px] text-stone mt-1">Color, scalable</p>
              </a>
            </li>
            <li>
              <a
                href="/images/harboriq-logo-black.svg"
                download
                className="block bg-paper border border-ash p-5 hover:border-interactive transition-colors"
              >
                <p className="text-[15px] font-medium text-ink">
                  HarborIQ wordmark (black, SVG)
                </p>
                <p className="text-[13px] text-stone mt-1">For light backgrounds</p>
              </a>
            </li>
            <li>
              <a
                href="/images/harboriq-logo-white.svg"
                download
                className="block bg-paper border border-ash p-5 hover:border-interactive transition-colors"
              >
                <p className="text-[15px] font-medium text-ink">
                  HarborIQ wordmark (white, SVG)
                </p>
                <p className="text-[13px] text-stone mt-1">For dark backgrounds</p>
              </a>
            </li>
            <li>
              <a
                href="/newsroom/justin-mayer-headshot.jpg"
                download
                className="block bg-paper border border-ash p-5 hover:border-interactive transition-colors"
              >
                <p className="text-[15px] font-medium text-ink">
                  Justin Mayer headshot (primary)
                </p>
                <p className="text-[13px] text-stone mt-1">High resolution, JPG</p>
              </a>
            </li>
            <li>
              <a
                href="/newsroom/justin-mayer-portrait.jpg"
                download
                className="block bg-paper border border-ash p-5 hover:border-interactive transition-colors"
              >
                <p className="text-[15px] font-medium text-ink">
                  Justin Mayer portrait (alternate)
                </p>
                <p className="text-[13px] text-stone mt-1">High resolution, JPG</p>
              </a>
            </li>
            <li>
              <a
                href="/newsroom/harboriq-command-center.png"
                download
                className="block bg-paper border border-ash p-5 hover:border-interactive transition-colors"
              >
                <p className="text-[15px] font-medium text-ink">
                  Product screenshot: Command Center
                </p>
                <p className="text-[13px] text-stone mt-1">Desktop view, PNG</p>
              </a>
            </li>
            <li>
              <a
                href="/newsroom/harboriq-command-center-tablet.png"
                download
                className="block bg-paper border border-ash p-5 hover:border-interactive transition-colors"
              >
                <p className="text-[15px] font-medium text-ink">
                  Product screenshot: Command Center (tablet)
                </p>
                <p className="text-[13px] text-stone mt-1">Tablet view, PNG</p>
              </a>
            </li>
            <li className="md:col-span-2">
              <a
                href="/newsroom/harboriq-carrier-directory.png"
                download
                className="block bg-paper border border-ash p-5 hover:border-interactive transition-colors"
              >
                <p className="text-[15px] font-medium text-ink">
                  Product screenshot: Carrier Directory
                </p>
                <p className="text-[13px] text-stone mt-1">Multi-screen view, PNG</p>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-midnight py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-paper leading-tight tracking-tight">
            For press, interviews, and contributed pieces.
          </h2>
          <p className="mt-4 text-[17px] text-mist leading-relaxed max-w-2xl mx-auto">
            Email Justin directly. Mention the outlet in the subject line. Reply within one business day.
          </p>
          <a
            href="mailto:justin@wrkstream.com?subject=Press%20inquiry"
            className="inline-block mt-8 bg-copper hover:bg-bronze text-white btn-radius px-8 py-3 text-[15px] font-medium transition-colors"
          >
            justin@wrkstream.com
          </a>
        </div>
      </section>
    </>
  );
}
