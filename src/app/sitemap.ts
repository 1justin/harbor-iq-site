import type { MetadataRoute } from "next";
import { publishedPosts } from "@/app/blog/posts";
import { FITS } from "@/lib/works-with";
import { LAUNCH } from "@/lib/constants";

/**
 * Generated sitemap (2026-11-09), replacing the hand-written public/sitemap.xml,
 * which had drifted: eight of ten blog posts were missing and nothing carried a
 * last-modified date. Blog posts take their publish date from posts.ts. Static
 * pages carry the date in LAST_CHANGED below: bump a page's date when its copy
 * changes, so crawlers see a real signal rather than the build time.
 */

const BASE = "https://harboriq.co";

type Entry = { path: string; changed: string; freq: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number };

const LAST_CHANGED: Entry[] = [
  { path: "/", changed: "2026-11-10", freq: "weekly", priority: 1.0 },
  { path: "/pricing", changed: "2026-11-10", freq: "monthly", priority: 0.9 },
  { path: "/works-with", changed: "2026-11-09", freq: "monthly", priority: 0.9 },
  { path: "/works-with/applied-epic", changed: "2026-11-09", freq: "monthly", priority: 0.8 },
  { path: "/intelligence", changed: "2026-11-10", freq: "monthly", priority: 0.8 },
  { path: "/agency", changed: "2026-11-09", freq: "monthly", priority: 0.6 },
  { path: "/about", changed: "2026-11-10", freq: "monthly", priority: 0.6 },
  { path: "/manifesto", changed: "2026-11-10", freq: "yearly", priority: 0.5 },
  { path: "/blog", changed: "2026-11-03", freq: "weekly", priority: 0.7 },
  { path: "/newsroom", changed: "2026-11-03", freq: "monthly", priority: 0.6 },
  { path: "/privacy", changed: "2026-04-22", freq: "yearly", priority: 0.3 },
  { path: "/terms", changed: "2026-11-03", freq: "yearly", priority: 0.3 },
];

const NEWSROOM: { slug: string; changed: string }[] = [
  { slug: "the-coming-compression-of-independent-agency-software", changed: "2026-08-09" },
  { slug: "sync-was-never-the-answer", changed: "2026-08-09" },
  { slug: "the-most-underestimated-number-isnt-the-price", changed: "2026-05-28" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const statics: MetadataRoute.Sitemap = LAST_CHANGED.map((e) => ({
    url: `${BASE}${e.path}`,
    lastModified: new Date(e.changed),
    changeFrequency: e.freq,
    priority: e.priority,
  }));

  const vendors: MetadataRoute.Sitemap = FITS.map((f) => ({
    url: `${BASE}/works-with/${f.slug}`,
    lastModified: new Date("2026-11-09"),
    changeFrequency: "monthly",
    priority: f.mode === "with" ? 0.8 : 0.7,
  }));

  const posts: MetadataRoute.Sitemap = publishedPosts().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.publishAt),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const newsroom: MetadataRoute.Sitemap = NEWSROOM.map((n) => ({
    url: `${BASE}/newsroom/${n.slug}`,
    lastModified: new Date(n.changed),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  // Gated pages join the sitemap only once their product paths exist (see LAUNCH).
  const gated: MetadataRoute.Sitemap = [
    ...(LAUNCH.freeWorkspaceIndexed ? [{ url: `${BASE}/free`, lastModified: new Date("2026-11-10"), changeFrequency: "monthly" as const, priority: 0.8 },
      { url: `${BASE}/start`, lastModified: new Date("2026-11-10"), changeFrequency: "monthly" as const, priority: 0.5 }] : []),
    ...(LAUNCH.marketplaceIndexed ? [{ url: `${BASE}/find-an-agency`, lastModified: new Date("2026-11-03"), changeFrequency: "weekly" as const, priority: 0.6 }] : []),
  ];

  return [...statics, ...vendors, ...posts, ...newsroom, ...gated];
}
