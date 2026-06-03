import Link from "next/link";

type Resource = {
  category: "BLOG" | "NEWSROOM";
  title: string;
  href: string;
  /** Solid-color tile background for the thumbnail strip. Uses design tokens. */
  tile: "anchor" | "midnight" | "ice" | "linen";
  /** Optional one-line summary shown on the card. */
  summary?: string;
};

const RESOURCES: Resource[] = [
  {
    category: "BLOG",
    title: "Why your AMS can't track prospects",
    href: "/blog/why-your-ams-cant-track-prospects",
    tile: "anchor",
    summary:
      "Every agency management system manages current clients. None of them manage the prospect who said call me in six months.",
  },
  {
    category: "BLOG",
    title: "The real cost of per user pricing",
    href: "/blog/real-cost-of-per-user-pricing",
    tile: "midnight",
    summary:
      "Per user fees punish you for growing. Flat agency pricing changes the math.",
  },
  {
    category: "NEWSROOM",
    title: "The coming compression of independent-agency software",
    href: "/newsroom/the-coming-compression-of-independent-agency-software",
    tile: "ice",
    summary:
      "Five disconnected tools is not a stack. It is a tax on your best people.",
  },
  {
    category: "NEWSROOM",
    title: "Sync was never the answer",
    href: "/newsroom/sync-was-never-the-answer",
    tile: "linen",
    summary:
      "Integrations move data between systems. A single source of truth removes the need.",
  },
];

const TILE_CLASSES: Record<Resource["tile"], string> = {
  anchor: "bg-anchor",
  midnight: "bg-midnight",
  ice: "bg-ice",
  linen: "bg-linen",
};

const TILE_TEXT: Record<Resource["tile"], string> = {
  anchor: "text-paper",
  midnight: "text-paper",
  ice: "text-interactive",
  linen: "text-interactive",
};

/**
 * Four-card grid linking to existing /blog and /newsroom posts.
 * Goes above the FAQ on the homepage. No new content is created; this
 * module surfaces what is already published.
 */
export function ResourcesGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
      {RESOURCES.map((r) => (
        <Link
          key={r.href}
          href={r.href}
          className="group block rounded-2xl border border-ash bg-paper overflow-hidden hover:border-interactive transition-colors"
        >
          <div
            className={`relative h-32 ${TILE_CLASSES[r.tile]} flex items-end p-5`}
          >
            <span
              className={`text-[11px] font-medium uppercase tracking-[0.14em] ${TILE_TEXT[r.tile]}`}
            >
              {r.category}
            </span>
          </div>
          <div className="p-5">
            <h3 className="text-[16px] font-medium text-ink leading-snug tracking-tight group-hover:text-interactive transition-colors">
              {r.title}
            </h3>
            {r.summary && (
              <p className="mt-2 text-[14px] text-charcoal leading-relaxed line-clamp-3">
                {r.summary}
              </p>
            )}
            <p className="mt-4 text-[13px] font-medium text-interactive">
              Read &rarr;
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
