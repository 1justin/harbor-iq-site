import Link from "next/link";
import { INTELLIGENCE, START_FREE_URL } from "@/lib/constants";

/**
 * The no-switch band for compare pages. Everything above it compares
 * features both products have; this section names what nobody else sells
 * (carrier answers with the source attached) and offers it without asking the
 * visitor to leave the competitor. Was MarketsWedge until Markets was
 * retired for Intelligence (2026-10-28).
 */
export function IntelligenceWedge({ competitor }: { competitor: string }) {
  return (
    <section className="bg-linen py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 text-[13px] font-medium uppercase tracking-wider text-interactive">
          The part with no comparison row
        </p>
        <h2 className="text-2xl font-medium leading-tight tracking-tight text-ink md:text-3xl">
          Nobody answers carrier questions like this. Including&nbsp;{competitor}.
        </h2>
        <div className="mt-6 space-y-4 text-left text-[16px] leading-relaxed text-charcoal md:text-center">
          <p>
            Everything above compares things both products do. Here is the gap with no row: ask who might write a
            risk, and get the carrier&rsquo;s own guideline back, with the source and its date. Search your agency&rsquo;s
            own carrier guides the same way.
          </p>
          <p className="font-medium text-ink">No AMS has it. No overlay has it. No rater has it.</p>
          <p>
            And you do not have to switch to get it. Start with a free workspace, or add Intelligence at $
            {INTELLIGENCE.monthly} per agency a month. It runs alongside {competitor}. Keep your AMS. Move the book
            when you are ready, or never.
          </p>
        </div>
        <Link
          href={START_FREE_URL}
          className="cta-primary btn-radius mt-8 inline-block bg-copper px-7 py-3 text-[15px] font-medium text-white transition-colors hover:bg-bronze"
        >
          Start free
        </Link>
        <p className="mt-3 text-[13px] text-stone">Free for your agency. Nothing to migrate. Never per person.</p>
      </div>
    </section>
  );
}
