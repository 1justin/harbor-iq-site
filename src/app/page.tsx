import Image from "next/image";
import Link from "next/link";

const CREEM_PRO = "https://www.creem.io/test/payment/prod_1zF9yBXpb0b3E7UT9aFfIU";

const features = [
  {
    title: "Command Center",
    description:
      "Your daily directive. Open HarborIQ each morning and know exactly what to do first: follow-ups that are due, quotes expiring this week, carrier rate changes you can act on. One screen, no guessing.",
    image: "/images/harboriq-screen-example-command-center.png",
  },
  {
    title: "Pipeline CRM",
    description:
      "Track every prospect from first call to bound policy. See where every lead stands, what the next action is, and who's been waiting too long. The prospects who used to fall through the cracks now have a home.",
    image: "/images/harboriq-screen-example-new-business-pipeline-cropped.png",
  },
  {
    title: "Client Renewals",
    description:
      "Stay ahead of every renewal cycle. HarborIQ surfaces upcoming renewals with enough lead time to re-shop, re-quote, and retain. Never lose a client to a missed deadline.",
    image: "/images/harboriq-screen-example-client-renewals-cropped.png",
  },
  {
    title: "AI-Assisted Quoting",
    description:
      "Enter client data once. HarborIQ knows that Progressive calls it \u2018rental reimbursement\u2019 and Travelers calls it \u2018loss of use.\u2019 It maps carrier differences automatically so your agents stop re-typing and start closing.",
    image: "/images/harboriq-quote-results-screen-carrier-recommendations-cropped.png",
  },
  {
    title: "Team Performance",
    description:
      "See who\u2019s quoting, who\u2019s closing, and where the bottlenecks are. For the first time, agency owners get real visibility into their team\u2019s engine without asking for a report.",
    image: "/images/harboriq-team-member-performance-cropped.png",
  },
  {
    title: "Marketing Automation",
    description:
      "AI-generated social media posts, carrier rate change alerts, and client re-engagement campaigns. Work that used to take 10 hours a month now takes minutes. Your agency stays visible without anyone staying late.",
    image: "/images/harboriq-screen-example-marketing-automations-cropped.png",
  },
];

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
      {/* ─── HERO: Full-width bg with gradient overlay ─── */}
      <section className="relative w-full min-h-[520px] md:min-h-[560px] overflow-hidden flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/harboriq-screen-example-command-center.png"
            alt="HarborIQ Command Center dashboard"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient overlay: solid left, transparent right */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(15,36,64,0.92) 0%, rgba(15,36,64,0.78) 40%, rgba(15,36,64,0.4) 65%, rgba(15,36,64,0.15) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-paper leading-[1.15] tracking-tight">
              One platform. Every carrier.{" "}
              <span className="text-copper">Zero&nbsp;busywork.</span>
            </h1>
            <p className="mt-5 text-[17px] md:text-lg text-mist leading-relaxed">
              HarborIQ is the AI-powered operating system built for independent insurance agencies. Pipeline, clients, quoting, team performance, and marketing in one&nbsp;place.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
        </div>
      </section>

      {/* ─── THE PROBLEM ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="text-[13px] font-medium text-copper uppercase tracking-wider mb-4">
              The reality
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight">
              Your agents spend more time re-typing than&nbsp;selling.
            </h2>
            <div className="mt-6 space-y-4 text-[16px] text-charcoal leading-relaxed">
              <p>
                Every quote means opening Progressive in one tab, Geico in another, Travelers in a third. Same name, same address, same vehicle, typed three times. Each carrier asks the same questions with different words.
              </p>
              <p>
                Meanwhile, the prospect you quoted last month who said &ldquo;call me in six months&rdquo;? They fell through the cracks. Your agency management system only tracks current clients, not the ones who haven&rsquo;t signed&nbsp;yet.
              </p>
              <p className="text-ink font-medium text-lg">
                Your team isn&rsquo;t slow. Your tools&nbsp;are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES: Alternating rows ─── */}
      <section id="features" className="bg-paper py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-[13px] font-medium text-copper uppercase tracking-wider mb-4">
            What HarborIQ replaces
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight max-w-2xl">
            One system instead of a dozen&nbsp;tabs.
          </h2>
          <p className="mt-3 text-[16px] text-charcoal leading-relaxed max-w-2xl">
            HarborIQ brings your pipeline, clients, quoting workflow, team performance, and marketing into a single platform designed for how independent agencies actually&nbsp;work.
          </p>

          <div className="mt-12 space-y-4">
            {features.map((f, i) => {
              const isEven = i % 2 === 1;
              return (
                <div
                  key={f.title}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 py-10 md:py-12 px-6 md:px-10 rounded-2xl ${
                    isEven ? "md:flex-row-reverse bg-linen" : ""
                  }`}
                >
                  {/* Text */}
                  <div className="flex-1 min-w-[280px]">
                    <h3 className="text-xl md:text-2xl font-medium text-ink mb-3">{f.title}</h3>
                    <p className="text-[16px] text-charcoal leading-relaxed">{f.description}</p>
                  </div>
                  {/* Image */}
                  <div className="flex-[1.3] min-w-0">
                    <div className="feature-image rounded-xl overflow-hidden shadow-md shadow-ink/5 border border-ash/60">
                      <Image
                        src={f.image}
                        alt={`HarborIQ ${f.title}`}
                        width={700}
                        height={450}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SEE THE IQ IN ACTION ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[13px] font-medium text-copper uppercase tracking-wider mb-4">
            See the IQ in action
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink tracking-tight">
            Ask anything. Get answers&nbsp;instantly.
          </h2>
          <p className="mt-3 text-[16px] text-charcoal leading-relaxed max-w-2xl mx-auto">
            HarborIQ&rsquo;s built-in intelligence lets your team search across clients, carriers, policies, and tasks in natural language. No digging through tabs. Just&nbsp;ask.
          </p>
          <div className="mt-10 max-w-3xl mx-auto rounded-xl overflow-hidden border border-ash shadow-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            >
              <source src="/videos/ai-demo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ─── DIFFERENTIATION ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-[13px] font-medium text-copper uppercase tracking-wider mb-4">
            Not another generic CRM
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight max-w-3xl">
            We built this by sitting next to agents while they&nbsp;worked.
          </h2>
          <p className="mt-3 text-[16px] text-charcoal leading-relaxed max-w-2xl">
            HarborIQ isn&rsquo;t a CRM with an insurance skin. It&rsquo;s built from the ground up around the way independent agencies actually&nbsp;operate.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
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
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="text-[13px] font-medium text-copper uppercase tracking-wider mb-8 text-center">
            From the people who helped build it
          </p>
          <div className="pl-6 border-l-[3px] border-copper">
            <blockquote className="text-xl md:text-2xl font-medium text-ink leading-snug tracking-tight">
              We&rsquo;ve tried other tools. They all do one thing. This is the first platform that actually works the way our agency&nbsp;works.
            </blockquote>
            <p className="mt-5 text-[15px]">
              <span className="font-medium text-ink">Andy Sertler</span>
              <span className="text-stone">, Principal, Sertler &amp;&nbsp;Associates</span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="bg-anchor py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-paper leading-tight tracking-tight">
            Founding agencies: $299/month for your whole team, locked for&nbsp;life.
          </h2>
          <p className="mt-3 text-[16px] text-mist leading-relaxed">
            Standard pricing will be $499/month. Shape the product. Get priority support. Never pay&nbsp;more.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
          <p className="mt-5 text-slate text-[13px]">
            Monthly billing. Cancel&nbsp;anytime.
          </p>
        </div>
      </section>
    </>
  );
}
