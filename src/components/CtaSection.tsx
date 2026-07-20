import Link from "next/link";
import { DEMO_URL, IMPORT_TERMS, MARKETS_START_URL, PRICING } from "@/lib/constants";

export function CtaSection({
  headline = "Start today. Move the book when you're ready.",
  description = `Markets is $${PRICING.markets.monthly}/mo at any size, live the same day. Agency runs the whole operation at $${PRICING.agency.solo.monthly} solo, $${PRICING.agency.team.monthly} for 2 to 5, and $${PRICING.agency.os.monthly} for 6 to 15. Published, month to month, never per person.`,
}: {
  headline?: string;
  description?: string;
}) {
  return (
    <section className="bg-anchor py-14 md:py-20">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-paper leading-tight tracking-tight">
          {headline}
        </h2>
        <p className="mt-3 text-[16px] text-mist leading-relaxed">
          {description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={MARKETS_START_URL}
            className="cta-primary bg-copper text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors"
          >
            Start with Markets
          </a>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary bg-interactive text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-deep transition-colors"
          >
            Book an Agency demo
          </a>
        </div>
        <p className="mt-5 text-mist text-[13px]">
          {IMPORT_TERMS.annual}. {IMPORT_TERMS.monthly}.{" "}
          <Link href="/pricing" className="underline underline-offset-2 hover:text-paper">
            See pricing
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
