import Image from "next/image";
import Link from "next/link";

/**
 * Homepage founder block. Lives above the bottom CTA.
 * Companion to the testimonial section: testimonials are the user voice,
 * this is the founder voice.
 *
 * Copy is in draft state. Edit the strings directly to refine.
 */
export function FounderBlock() {
  return (
    <section className="bg-linen py-14 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-6 text-center md:text-left">
          A note from the founder
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[260px_1fr] md:gap-12 items-start">
          <div className="relative w-full max-w-[260px] mx-auto md:mx-0 aspect-square rounded-2xl overflow-hidden bg-linen ring-1 ring-ash">
            <Image
              src="/newsroom/justin-mayer-portrait.jpg"
              alt="Justin Mayer, founder of HarborIQ"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 260px, 260px"
            />
          </div>

          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight">
              Why I am building this.
            </h2>
            <div className="mt-5 space-y-4 text-[16px] md:text-[17px] text-charcoal leading-relaxed">
              <p>
                I spent more than 100 hours sitting next to independent agents. Watching them retype the same client info into three carrier portals. Hunting through email for a renewal that already slipped. Reading sticky notes that should have been alerts. The category was built around the system, not around the&nbsp;agent.
              </p>
              <p>
                HarborIQ is the platform I would want if I ran a 5 agent shop. One login. Renewals that surface before they slip. Carrier knowledge that is findable in seconds. Flat pricing that does not punish you for growing. We are shipping it with named founding partners, not focus groups, and every feature is in response to a real agent&rsquo;s&nbsp;day.
              </p>
            </div>
            <p className="mt-6 text-[15px] text-charcoal">
              <span className="font-medium text-ink">Justin Mayer</span>
              <span className="text-stone">, Founder, HarborIQ</span>
            </p>
            <p className="mt-2 text-[14px]">
              <Link
                href="/newsroom"
                className="text-interactive font-medium hover:text-deep transition-colors"
              >
                Read more on the Newsroom &rarr;
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
