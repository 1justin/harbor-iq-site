import { CREEM_RESERVE, DEMO_URL, FOUNDING_CLOSE_DATE, FOUNDING_SPOTS_TOTAL } from "@/lib/constants";

export function CtaSection({
  headline = "Founding partners get 33% off. For life.",
  description = "Solo $119/mo. Team $229/mo. Operating System $399/mo. One flat price per agency. No per-user fees. Priority support and direct product team access included.",
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
            href={CREEM_RESERVE}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary bg-copper text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors"
          >
            Reserve Your Founding Spot
          </a>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary bg-interactive text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-deep transition-colors"
          >
            Book a demo first
          </a>
        </div>
        <p className="mt-5 text-mist text-[13px]">
          $100 fully refundable deposit. Offer closes {FOUNDING_CLOSE_DATE}. Limited to {FOUNDING_SPOTS_TOTAL}&nbsp;agencies.
        </p>
      </div>
    </section>
  );
}
