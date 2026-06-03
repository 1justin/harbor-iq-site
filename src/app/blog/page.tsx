import type { Metadata } from "next";
import Link from "next/link";
import { publishedPosts } from "./posts";

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

export default function BlogPage() {
  const posts = publishedPosts();

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
