import { MARKETS_START_URL, PRICING } from "@/lib/constants";

/**
 * The blue-ocean band for compare pages. Everything above it compares
 * features both products have; this section names the layer nobody else
 * sells (Markets), and offers it without asking the visitor to switch
 * off the competitor at all. Zero-risk wedge for compare-shoppers who
 * are not ready to move an AMS.
 */
export function MarketsWedge({ competitor }: { competitor: string }) {
  return (
    <section className="bg-linen py-14 md:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
          The part with no comparison row
        </p>
        <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight">
          Nobody sells what Markets is. Including&nbsp;{competitor}.
        </h2>
        <div className="mt-6 space-y-4 text-[16px] text-charcoal leading-relaxed text-left md:text-center">
          <p>
            Everything above compares things both products do. Here is the gap
            with no row: a carrier intelligence layer. Cited appetite answers
            on every quote, with the source and its date. Carrier news read
            for you overnight. Every portal login in one vault. A knowledge
            base your agency owns, that gets smarter every time your team asks
            a question.
          </p>
          <p className="font-medium text-ink">
            No AMS has it. No overlay has it. No rater has it.
          </p>
          <p>
            And you do not have to switch to get it. Markets is ${PRICING.markets.monthly}{" "}
            a month at any size, runs alongside {competitor}, and is live the
            same day. Keep your AMS. Fix the carrier problem today. Move the
            book when you are ready, or never.
          </p>
        </div>
        <a
          href={MARKETS_START_URL}
          className="cta-primary mt-8 inline-block bg-copper text-white btn-radius px-7 py-3 text-[15px] font-medium hover:bg-bronze transition-colors"
        >
          Start with Markets
        </a>
        <p className="mt-3 text-[13px] text-stone">
          14-day free trial. Nothing to migrate. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
