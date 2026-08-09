import Link from "next/link";

export function ManifestoStrip() {
  return (
    <section className="bg-linen py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-3">
            The manifesto
          </p>
          <h2 className="text-xl md:text-2xl font-medium text-ink tracking-tight leading-snug">
            Eighteen promises we publish so you can hold us to them.
          </h2>
          <p className="mt-3 text-[16px] text-charcoal leading-relaxed">
            Published pricing. No per-seat fees. No implementation consultant.
            Cancelling takes a click, and you can export your entire book any
            time. Compare the ethos, not just the feature grid.
          </p>
          <Link
            href="/manifesto"
            className="inline-block mt-5 text-[15px] font-medium text-interactive hover:text-deep transition-colors"
          >
            Read how we build software &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
