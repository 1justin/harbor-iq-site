import Image from "next/image";
import Link from "next/link";

const CREEM_PRO = "https://www.creem.io/test/payment/prod_1zF9yBXpb0b3E7UT9aFfIU";

const features = [
  {
    title: "Command Center",
    description:
      "Your daily directive. Open HarborIQ each morning and know exactly what to do first: follow-ups that are due, quotes expiring this week, carrier rate changes you can act on. One screen, no guessing.",
    image: "/images/harboriq-command-center-screen.png",
  },
  {
    title: "Pipeline CRM",
    description:
      "Track every prospect from first call to bound policy. See where every lead stands, what the next action is, and who\u2019s been waiting too long. The prospects who used to fall through the cracks now have a home.",
    image: "/images/harboriq-pipeline-screen.png",
  },
  {
    title: "Client Renewals",
    description:
      "Stay ahead of every renewal cycle. HarborIQ surfaces upcoming renewals with enough lead time to re-shop, re-quote, and retain. Never lose a client to a missed deadline.",
    image: "/images/harboriq-renewals-screen-focused.png",
  },
  {
    title: "AI-Assisted Quoting",
    description:
      "Enter client data once. HarborIQ understands carrier-specific form differences and maps your answers across portals, no manual translation required.",
    image: "/images/harboriq-ai-tools-features.png",
  },
  {
    title: "Team Performance",
    description:
      "See who\u2019s quoting, who\u2019s closing, and where the bottlenecks are. For the first time, agency owners get real visibility into their team\u2019s engine without asking for a report.",
    image: "/images/harboriq-team-performance-management-screens.png",
  },
  {
    title: "Client Engagement",
    description:
      "Automated renewal reminders, policy update notifications, birthday and holiday messages, and re-engagement campaigns. Keep your clients close without your team doing the work manually. Connect to your existing email tools or use built-in templates.",
    image: "/images/harboriq-marketing-automations-tab.png",
  },
];

const differentiators = [
  {
    title: "Speaks your language.",
    description:
      "Every carrier has its own vocabulary for the same coverages. HarborIQ translates between them automatically, so your agents never have to wonder if two fields are asking the same question.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4935A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 9h2m-1-1v6m4-5c.6 0 1 .4 1 1v0c0 .6-.4 1-1 1h-1m1 0c.6 0 1 .4 1 1v0c0 .6-.4 1-1 1h-1" />
      </svg>
    ),
  },
  {
    title: "Tracks prospects, not just clients.",
    description:
      "Most agency management systems only manage your current book. HarborIQ tracks the full pipeline, from first inquiry to bound policy, with follow-up reminders that actually work.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4935A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Designed for generalists.",
    description:
      "Your agents sell, quote, service, and follow up. HarborIQ is built for people who wear every hat, not specialists who only do one thing.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4935A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO: Full-width bg with gradient overlay ─── */}
      <section className="relative w-full min-h-[520px] md:min-h-[600px] overflow-hidden flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/harboriq-command-center-screen-chrome-tab.png"
            alt="HarborIQ Command Center dashboard in browser"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient overlay: solid left, transparent right */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, #0F2440 0%, rgba(15,36,64,0.97) 25%, rgba(15,36,64,0.88) 42%, rgba(15,36,64,0.5) 65%, rgba(15,36,64,0.15) 85%, transparent 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-16 md:py-24">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-[56px] lg:text-[64px] font-medium text-paper leading-[1.08] tracking-tight">
              One platform.<br />Every carrier.<br />
              <span className="text-copper">Zero&nbsp;busywork.</span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[17px] text-mist leading-relaxed">
              The AI-powered operating system built for independent insurance agencies. Pipeline, clients, quoting, team performance, and client engagement in one&nbsp;place.
            </p>
            <div className="mt-8 flex flex-row gap-3">
              <a
                href={CREEM_PRO}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary bg-copper text-white rounded-lg px-5 py-2.5 text-[14px] md:text-[15px] font-medium hover:bg-bronze transition-colors text-center"
              >
                Claim your founding spot
              </a>
              <a
                href="https://tidycal.com/cjmayer/harboriq-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary border border-slate text-mist rounded-lg px-5 py-2.5 text-[14px] md:text-[15px] font-medium hover:border-paper hover:text-paper transition-colors text-center"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[13px] font-medium text-copper uppercase tracking-wider mb-4">
              The reality
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight">
              Your agents spend more time re-typing than&nbsp;selling.
            </h2>
            <div className="mt-6 space-y-4 text-[16px] text-charcoal leading-relaxed">
              <p>
                Every quote means opening Progressive in one tab, Geico in another, Travelers in a third. Same name, same address, same vehicle, typed three times. Each carrier asks the same questions with different words. &ldquo;Rental reimbursement&rdquo; here. &ldquo;Loss of use&rdquo; there. &ldquo;Transportation expense&rdquo; somewhere else.
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

      {/* ─── THE VILLAIN: THE PATCHWORK ─── */}
      <section className="bg-midnight py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[13px] font-medium text-copper uppercase tracking-wider mb-4">
              The real problem
            </p>
            <h2 className="text-2xl md:text-[34px] font-medium text-paper leading-tight tracking-tight">
              Independent agents deserve better than the&nbsp;patchwork.
            </h2>
            <div className="mt-6 space-y-4 text-[16px] text-mist leading-relaxed">
              <p>
                Captive agents at State Farm and Allstate get a single, purpose-built system handed to them on day one. One login. One workflow. One&nbsp;screen.
              </p>
              <p>
                Independent agents? They get a 15-year-old management system that only tracks current clients, a handful of carrier portals that each speak a different language, sticky notes for follow-ups, and a prayer that nothing falls through the&nbsp;cracks.
              </p>
              <p>
                This isn&rsquo;t a technology gap. It&rsquo;s an injustice. The agents who offer more choice, more advocacy, and better service are stuck with the worst tools in the&nbsp;industry.
              </p>
              <p className="text-paper font-medium text-lg">
                HarborIQ exists to end the patchwork. One platform that does what independent agencies have been duct-taping together for&nbsp;decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES: Alternating rows ─── */}
      <section id="features" className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-copper uppercase tracking-wider mb-4">
            What HarborIQ replaces
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight max-w-2xl">
            One system instead of a dozen&nbsp;tabs.
          </h2>
          <p className="mt-3 text-[16px] text-charcoal leading-relaxed max-w-2xl">
            HarborIQ brings your pipeline, clients, quoting workflow, team performance, and client engagement into a single platform designed for how independent agencies actually&nbsp;work.
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
                    <div className="feature-image rounded-xl overflow-hidden shadow-md shadow-ink/5">
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
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[13px] font-medium text-copper uppercase tracking-wider mb-4">
            See the IQ in action
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink tracking-tight">
            Ask anything. Get answers&nbsp;instantly.
          </h2>
          <p className="mt-3 text-[16px] text-charcoal leading-relaxed max-w-2xl mx-auto">
            HarborIQ&rsquo;s built-in intelligence lets your team search across clients, carriers, policies, and tasks in natural language. No digging through tabs. Just&nbsp;ask.
          </p>
          <div className="mt-10 max-w-xl mx-auto rounded-xl overflow-hidden border border-ash shadow-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full object-cover"
            >
              <source src="/videos/ai-demo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ─── DIFFERENTIATION ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
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
                <div className="w-12 h-12 rounded-lg bg-glow flex items-center justify-center mb-4">
                  {d.icon}
                </div>
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
              href="https://tidycal.com/cjmayer/harboriq-demo"
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
