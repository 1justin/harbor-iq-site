import Image from "next/image";
import Link from "next/link";
import { BentoGrid } from "@/components/BentoGrid";

const CREEM_PRO = "https://www.creem.io/test/payment/prod_1zF9yBXpb0b3E7UT9aFfIU";

const differentiators = [
  {
    title: "Speaks your language.",
    description:
      'HarborIQ knows that Progressive calls it "rental reimbursement" and Travelers calls it "loss of use." It understands carrier form differences so your team doesn\'t have to.',
  },
  {
    title: "Tracks prospects, not just clients.",
    description:
      "Most agency management systems only manage your current book. HarborIQ tracks the full pipeline, from first inquiry to bound policy, with follow-up reminders that actually work.",
  },
  {
    title: "Designed for generalists.",
    description:
      "Your agents sell, quote, service, and follow up. HarborIQ is built for people who wear every hat, not specialists who only do one thing.",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-midnight overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-paper leading-[1.15] tracking-tight">
              One platform. Every carrier.{" "}
              <span className="text-copper">Zero&nbsp;busywork.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-mist leading-relaxed max-w-2xl">
              HarborIQ is the AI-powered operating system built for independent insurance agencies. Pipeline, clients, quoting, team performance, and marketing in one&nbsp;place.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={CREEM_PRO}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary bg-copper text-white rounded-lg px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors text-center"
              >
                Claim your founding spot
              </a>
              <a
                href="https://tidycal.com/cjmayer/15-minute-intro"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary border border-slate text-mist rounded-lg px-6 py-3 text-[15px] font-medium hover:border-paper hover:text-paper transition-colors text-center"
              >
                Book a 15-min demo
              </a>
            </div>
          </div>

          {/* Hero product visual */}
          <div className="mt-16 hero-float rounded-xl overflow-hidden border border-anchor/40 shadow-2xl shadow-black/30">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/harboriq-screen-example-command-center.png"
              className="w-full h-auto"
            >
              <source src="/videos/hero-cascade.webm" type="video/webm" />
              <source src="/videos/hero-cascade.mp4" type="video/mp4" />
            </video>
          </div>

          <p className="mt-6 text-center text-slate text-[13px]">
            Built with input from working agency owners and&nbsp;agents
          </p>
        </div>
      </section>

      {/* ─── THE PROBLEM ─── */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[13px] font-medium text-copper uppercase tracking-wider mb-4">
            The reality
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-ink leading-tight tracking-tight">
            Your agents spend more time re-typing than&nbsp;selling.
          </h2>
          <div className="mt-8 space-y-5 text-[15px] text-charcoal leading-relaxed">
            <p>
              Every quote means opening Progressive in one tab, Geico in another, Travelers in a third. Same name, same address, same vehicle, typed three times. Each carrier asks the same questions with different words. &ldquo;Rental reimbursement&rdquo; here. &ldquo;Loss of use&rdquo; there. &ldquo;Transportation expense&rdquo; somewhere&nbsp;else.
            </p>
            <p>
              Meanwhile, the prospect you quoted last month who said &ldquo;call me in six months&rdquo;? They fell through the cracks. Your agency management system only tracks current clients, not the ones who haven&rsquo;t signed&nbsp;yet.
            </p>
            <p className="text-ink font-medium text-lg">
              Your team isn&rsquo;t slow. Your tools&nbsp;are.
            </p>
          </div>
        </div>
      </section>

      {/* ─── THE SOLUTION / BENTO FEATURES ─── */}
      <section id="features" className="bg-paper py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-copper uppercase tracking-wider mb-4">
            What HarborIQ replaces
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-ink leading-tight tracking-tight max-w-2xl">
            One system instead of a dozen&nbsp;tabs.
          </h2>
          <p className="mt-4 text-[15px] text-charcoal leading-relaxed max-w-2xl">
            HarborIQ brings your pipeline, clients, quoting workflow, team performance, and marketing into a single platform designed for how independent agencies actually&nbsp;work.
          </p>

          <BentoGrid />
        </div>
      </section>

      {/* ─── DIFFERENTIATION ─── */}
      <section className="bg-linen py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-copper uppercase tracking-wider mb-4">
            Not another generic CRM
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-ink leading-tight tracking-tight max-w-3xl">
            We built this by sitting next to agents while they&nbsp;worked.
          </h2>
          <p className="mt-4 text-[15px] text-charcoal leading-relaxed max-w-2xl">
            HarborIQ isn&rsquo;t a CRM with an insurance skin. It&rsquo;s built from the ground up around the way independent agencies actually&nbsp;operate.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((d) => (
              <div key={d.title}>
                <div className="w-1 h-8 bg-copper rounded-full mb-4" />
                <h3 className="text-lg font-medium text-ink mb-2">{d.title}</h3>
                <p className="text-[15px] text-charcoal leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─── */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[13px] font-medium text-copper uppercase tracking-wider mb-8 text-center">
            From the people who helped build it
          </p>
          <div className="relative pl-6 border-l-[3px] border-copper">
            {/* Decorative quotation mark */}
            <span className="absolute -top-4 -left-3 text-[120px] leading-none text-mist/60 font-medium select-none" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="relative text-xl md:text-2xl font-medium text-ink leading-snug tracking-tight">
              We&rsquo;ve tried other tools. They all do one thing. This is the first platform that actually works the way our agency&nbsp;works.
            </blockquote>
            <p className="mt-6 text-[15px]">
              <span className="font-medium text-ink">Andy Sertler</span>
              <span className="text-stone">, Principal, Sertler &amp;&nbsp;Associates</span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="bg-anchor py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-paper leading-tight tracking-tight">
            Founding agencies get locked-in pricing for&nbsp;life.
          </h2>
          <p className="mt-4 text-lg text-mist leading-relaxed">
            Founding agencies get Pro for $299/month (normally $499), locked forever. Use code <strong className="text-paper">FOUNDER</strong> at checkout to save $2,400/year. Shape the product. Get priority support. Never pay&nbsp;more.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CREEM_PRO}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary bg-copper text-white rounded-lg px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors"
            >
              Claim your founding spot
            </a>
            <a
              href="https://tidycal.com/cjmayer/15-minute-intro"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary border border-slate text-mist rounded-lg px-6 py-3 text-[15px] font-medium hover:border-paper hover:text-paper transition-colors"
            >
              Book a 15-min demo
            </a>
          </div>
          <p className="mt-6 text-slate text-[13px]">
            Monthly billing. Cancel&nbsp;anytime.
          </p>
        </div>
      </section>
    </>
  );
}
