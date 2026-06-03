import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insurance Agency Technology Blog | HarborIQ",
  description:
    "Insights for independent insurance agencies on technology, operations, and growth. From the team building the AI-native agency management system.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Insurance Agency Technology Blog | HarborIQ",
    description:
      "Insights for independent insurance agencies on technology, operations, and growth.",
    url: "/blog",
  },
};

const posts = [
  {
    slug: "how-to-choose-insurance-agency-software",
    title: "How to Choose Insurance Agency Management Software: A 2026 Buyer's Guide",
    excerpt:
      "Most buyer's guides list features. This one gives you the questions that actually separate a tool you'll outgrow in a year from the system your whole agency runs on. Seven things to weigh before you sign.",
    date: "June 2026",
    readTime: "7 min read",
  },
  {
    slug: "real-cost-of-per-user-pricing",
    title: "The Real Cost of Per-User Pricing for Insurance Agencies",
    excerpt:
      "A 5-person agency paying $94/user/month spends $720/month on their AMS alone. Here's how per-seat pricing quietly becomes your biggest software expense, and what to do about it.",
    date: "April 2026",
    readTime: "5 min read",
  },
  {
    slug: "why-your-ams-cant-track-prospects",
    title: "Why Your AMS Can't Track Prospects (and Why That's Costing You)",
    excerpt:
      "Every agency management system manages current clients. None of them manage the prospect who said \"call me in 6 months.\" That gap is where revenue disappears.",
    date: "April 2026",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-paper pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-medium text-ink leading-tight tracking-tight">
            Blog
          </h1>
          <p className="mt-3 text-[17px] text-charcoal leading-relaxed max-w-2xl">
            Insights for independent agencies on technology, operations, and growth.
          </p>
        </div>
      </section>

      <section className="bg-paper py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl space-y-10">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <p className="text-[13px] text-stone mb-2">
                    {post.date} &middot; {post.readTime}
                  </p>
                  <h2 className="text-xl md:text-2xl font-medium text-ink leading-tight tracking-tight group-hover:text-interactive transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-[16px] text-charcoal leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
