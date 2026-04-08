import { CREEM_RESERVE, DEMO_URL } from "@/lib/constants";

export function CtaSection({
  headline = "$299/month for your whole team. Not per seat. Locked for\u00a0life.",
  description = "Founding agencies get first access, priority support, and a price that never goes up. Standard pricing will be\u00a0$499/month.",
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
          Fully refundable. Only 10 spots&nbsp;available.
        </p>
      </div>
    </section>
  );
}
