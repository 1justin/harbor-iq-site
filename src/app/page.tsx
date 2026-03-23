import Image from "next/image";
import Link from "next/link";

const CREEM_PRO = "https://www.creem.io/test/payment/prod_1zF9yBXpb0b3E7UT9aFfIU";
const CREEM_RESERVE = "https://www.creem.io/payment/prod_1SDGs4JxhPJ0yQonbNfIHV";

const features = [
  {
    title: "Command Center",
    description:
      "Know exactly what to do when you open the app each morning. Follow-ups due, quotes expiring, carrier changes you can act on. No more guessing what's most important.",
    image: "/images/harboriq-command-center-screen.png",
  },
  {
    title: "Pipeline CRM",
    description:
      "Every prospect tracked from first call to bound policy. The people who said \"call me in six months\" never fall through the cracks again.",
    image: "/images/harboriq-pipeline-screen.png",
  },
  {
    title: "Client Renewals",
    description:
      "Stay ahead of every renewal. Clients get re-quoted before the deadline, not after. Fewer lapses, more retention, more revenue.",
    image: "/images/harboriq-renewals-screen-focused.png",
  },
  {
    title: "AI-Assisted Quoting",
    description:
      "Enter client data once. The platform handles carrier-specific differences across portals so your agents stop re-typing and start closing.",
    image: "/images/harboriq-ai-tools-features.png",
  },
  {
    title: "Team Performance",
    description:
      "See who\u2019s quoting, who\u2019s closing, and where the bottlenecks are. Real numbers, not gut feel. Coach your team with data for the first time.",
    image: "/images/harboriq-team-performance-management-screens.png",
  },
  {
    title: "Client Engagement",
    description:
      "Automated renewal reminders, policy update notifications, birthday and holiday touches. Keep your clients close without your team doing the work manually.",
    image: "/images/harboriq-marketing-automations-tab.png",
  },
];

const differentiators = [
  {
    title: "No more translating between carriers.",
    description:
      "Every carrier has its own vocabulary for the same coverages. HarborIQ translates automatically so your team quotes faster and makes fewer errors.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4935A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 9h2m-1-1v6m4-5c.6 0 1 .4 1 1v0c0 .6-.4 1-1 1h-1m1 0c.6 0 1 .4 1 1v0c0 .6-.4 1-1 1h-1" />
      </svg>
    ),
  },
  {
    title: "No more lost prospects.",
    description:
      "Most agency software only tracks your current book. HarborIQ tracks every prospect from first inquiry to bound policy, with reminders that actually work.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4935A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Built for the way your team actually works.",
    description:
      "Your agents sell, quote, service, and follow up. HarborIQ is designed for generalists who wear every hat, not specialists who only do one thing.",
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
      {/* ─── HERO: Dark background with elegant product placement ─── */}
      <section className="bg-anchor py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Content (left side) */}
            <div className="flex-1 md:max-w-[520px] text-center md:text-left">
              <h1 className="text-[36px] md:text-[52px] font-medium text-paper leading-[1.1] tracking-tight">
                Your agents are great.<br />
                <span className="text-copper">Their tools&nbsp;aren't.</span>
              </h1>
              <p className="mt-5 text-[17px] md:text-[18px] text-mist leading-relaxed">
                HarborIQ gives independent insurance agencies the edge to close more business, keep more clients, and stop drowning in busywork. One platform for your whole team.&nbsp;<span className="text-paper font-medium">$299/month.</span>
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href={CREEM_RESERVE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary bg-copper text-white rounded-lg px-7 py-3.5 text-[16px] font-medium hover:bg-bronze transition-colors text-center"
                >
                  Reserve Your Founding Spot
                </a>
                <a
                  href="https://tidycal.com/cjmayer/harboriq-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-secondary bg-harbor text-white rounded-lg px-7 py-3.5 text-[16px] font-medium hover:bg-deep transition-colors text-center"
                >
                  Book a demo
                </a>
              </div>
            </div>

            {/* Product image (right side) */}
            <div className="flex-1 md:max-w-[640px]">
              <Image
                src="/images/harboriq-command-center-screen-tablet.png"
                alt="HarborIQ Command Center on tablet"
                width={640}
                height={920}
                className="w-full h-auto"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 32px 64px rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.15)'
                }}
                priority
              />
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
              Two hours to quote one customer.<br />That&rsquo;s not a people&nbsp;problem.
            </h2>
            <div className="mt-6 space-y-4 text-[16px] text-charcoal leading-relaxed">
              <p>
                Your agents open Progressive in one tab, Geico in another, Travelers in a third. Same client. Same address. Same vehicle. Typed three times. Each carrier uses different words for the same&nbsp;coverages.
              </p>
              <p>
                Then the prospect from last month who said &ldquo;call me in six months&rdquo;? Gone. Your management system tracks current clients, not the ones who haven&rsquo;t signed&nbsp;yet.
              </p>
              <p className="text-ink font-medium text-lg">
                Your team works hard. They deserve tools that work just as&nbsp;hard.
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
                Captive agents at State Farm and Allstate get a single, purpose-built system on day one. One login. One workflow. One&nbsp;screen.
              </p>
              <p>
                Independent agents? A 15-year-old management system for current clients. A handful of carrier portals that each speak a different language. Sticky notes for follow-ups. A prayer that nothing falls through the&nbsp;cracks.
              </p>
              <p>
                The agents who offer more choice, more advocacy, and better service are stuck with the worst tools in the&nbsp;industry.
              </p>
              <p className="text-paper font-medium text-lg">
                That ends&nbsp;now.
              </p>
            </div>
          </div>
          {/* Patchwork visual */}
          <div className="mt-10 flex justify-center">
            <Image
              src="/images/harboriq-before-patchwork.png"
              alt="The patchwork of disconnected tools"
              width={600}
              height={400}
              className="w-full max-w-[600px] h-auto opacity-90"
            />
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
            Everything your team needs. Nothing they&nbsp;don't.
          </h2>
          <p className="mt-3 text-[16px] text-charcoal leading-relaxed max-w-2xl">
            HarborIQ replaces the patchwork with one platform that handles your pipeline, clients, quoting, team performance, and client engagement. Built for how agencies actually work, not how software companies think they&nbsp;should.
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
              <source src="/videos/harboriq-ai-assistant-chat-demo.webm" type="video/webm" />
              <source src="/videos/harboriq-ai-assistant-chat-demo.mp4" type="video/mp4" />
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
            Built by watching agents work. Not by reading about insurance on the&nbsp;internet.
          </h2>

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
            $299/month for your whole team. Not per seat. Locked for&nbsp;life.
          </h2>
          <p className="mt-3 text-[16px] text-mist leading-relaxed">
            Founding agencies get first access, priority support, and a price that never goes up. Standard pricing will be&nbsp;$499/month.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CREEM_RESERVE}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary bg-copper text-white rounded-lg px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors"
            >
              Reserve Your Founding Spot
            </a>
            <a
              href="https://tidycal.com/cjmayer/harboriq-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary bg-harbor text-white rounded-lg px-6 py-3 text-[15px] font-medium hover:bg-deep transition-colors"
            >
              Book a demo first
            </a>
          </div>
          <p className="mt-5 text-slate text-[13px]">
            Fully refundable. Only 10 spots&nbsp;available.
          </p>
        </div>
      </section>
    </>
  );
}
