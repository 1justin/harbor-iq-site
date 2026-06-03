// Single source of truth for blog posts and their scheduled publish dates.
//
// Each post is date-gated: it stays hidden from the index and returns a 404 at
// its URL until `publishAt` has passed. The site is a static export, so gating
// is evaluated at BUILD time. A build that runs on or after a post's `publishAt`
// includes it; earlier builds exclude it. Pair this with a scheduled daily
// rebuild to publish posts automatically on their dates. Absent that, a post
// goes live on the next deploy after its date.
//
// To schedule a new post: add it here with a future `publishAt`, then add the
// matching `isPublished()` gate to its page.

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Human-readable label shown on the card and post, e.g. "June 2026". */
  date: string;
  readTime: string;
  /** ISO date (UTC) the post becomes visible. */
  publishAt: string;
};

export const POSTS: BlogPost[] = [
  {
    slug: "automate-policy-renewals-spreadsheet-cost",
    title:
      "The Renewal You Forgot to Run: Why Spreadsheet Renewal Tracking Costs You Clients",
    excerpt:
      "New business gets all the attention. Renewals get a spreadsheet nobody opened this week. That's backwards, because the cheapest premium you'll ever write is the one you already have.",
    date: "June 2026",
    readTime: "5 min read",
    publishAt: "2026-06-19",
  },
  {
    slug: "migrating-off-legacy-desktop-ams",
    title: "Migrating Off a Legacy Desktop AMS Without Losing Your Mind",
    excerpt:
      "The reason most agencies stay on a desktop AMS they openly dislike is not loyalty. It's the fear of migration. Here's a practical checklist that makes switching far less scary than the status quo.",
    date: "June 2026",
    readTime: "6 min read",
    publishAt: "2026-06-17",
  },
  {
    slug: "two-hour-quote-multi-carrier-quoting-cost",
    title:
      "The Two-Hour Quote: What Multi-Carrier Quoting Really Costs Your Agency",
    excerpt:
      "A single multi-carrier quote can eat two hours, and most of that is re-typing the same client into a different form for the seventh time. Here's what that actually costs, and why the carriers make it so hard.",
    date: "June 2026",
    readTime: "6 min read",
    publishAt: "2026-06-12",
  },
  {
    slug: "what-is-ai-native-agency-management-system",
    title: "What Is an AI-Native Agency Management System?",
    excerpt:
      'Nearly every insurance software product now says "AI-powered." Most of it is a chatbot stapled to a system designed in 1999. Here\'s the difference between AI as a sticker and AI built to understand how insurance works.',
    date: "June 2026",
    readTime: "6 min read",
    publishAt: "2026-06-10",
  },
  {
    slug: "best-insurance-agency-software-small-agencies",
    title: "The Best Insurance Agency Software for Small Independent Agencies",
    excerpt:
      'Search "best insurance agency software" and you get tools built for hundred-seat brokerages or single-purpose apps that solve one slice. Neither fits a small independent agency. Here\'s the honest version.',
    date: "June 2026",
    readTime: "6 min read",
    publishAt: "2026-06-05",
  },
  {
    slug: "how-to-choose-insurance-agency-software",
    title:
      "How to Choose Insurance Agency Management Software: A 2026 Buyer's Guide",
    excerpt:
      "Most buyer's guides list features. This one gives you the questions that actually separate a tool you'll outgrow in a year from the system your whole agency runs on. Seven things to weigh before you sign.",
    date: "June 2026",
    readTime: "7 min read",
    publishAt: "2026-06-03",
  },
  {
    slug: "real-cost-of-per-user-pricing",
    title: "The Real Cost of Per-User Pricing for Insurance Agencies",
    excerpt:
      "A 5-person agency paying $94/user/month spends $720/month on their AMS alone. Here's how per-seat pricing quietly becomes your biggest software expense, and what to do about it.",
    date: "April 2026",
    readTime: "5 min read",
    publishAt: "2026-04-01",
  },
  {
    slug: "why-your-ams-cant-track-prospects",
    title: "Why Your AMS Can't Track Prospects (and Why That's Costing You)",
    excerpt:
      'Every agency management system manages current clients. None of them manage the prospect who said "call me in 6 months." That gap is where revenue disappears.',
    date: "April 2026",
    readTime: "4 min read",
    publishAt: "2026-04-01",
  },
];

/** Posts whose publish date has passed, newest first. */
export function publishedPosts(now: Date = new Date()): BlogPost[] {
  return POSTS.filter(
    (p) => new Date(p.publishAt).getTime() <= now.getTime(),
  ).sort(
    (a, b) => new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime(),
  );
}

/** Whether a given post slug is live yet. */
export function isPublished(slug: string, now: Date = new Date()): boolean {
  const post = POSTS.find((p) => p.slug === slug);
  return !!post && new Date(post.publishAt).getTime() <= now.getTime();
}
