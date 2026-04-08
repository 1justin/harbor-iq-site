import Image from "next/image";
import Link from "next/link";

const CREEM_RESERVE = "https://www.creem.io/payment/prod_1SDGs4JxhPJ0yQonbNfIHV";

const features = [
  {
    title: "Command Center",
    description:
      "Know exactly what to do when you open the app each morning. Follow-ups due, quotes expiring, carrier changes you can act on. No more guessing what's most important.",
    image: "/images/harboriq-command-center-hero-no-shadow.png",
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2E75B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2E75B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2E75B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      {/* ─── HERO ─── */}
      <section className="bg-anchor py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          {/* Stat punch — centered */}
          <div className="hero-stat text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-3 md:gap-4">
              <span className="text-[42px] md:text-[64px] font-medium text-slate/60 leading-none tracking-tight line-through decoration-danger/60 decoration-2">2&nbsp;hrs</span>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C4935A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
              </svg>
              <span className="text-[42px] md:text-[64px] font-medium text-copper leading-none tracking-tight">20&nbsp;min</span>
            </div>
            <p className="mt-2 text-[13px] text-slate tracking-wide uppercase">Average quoting time per&nbsp;customer</p>
          </div>

          {/* Split: copy left, video right */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            {/* Copy */}
            <div className="flex-1 md:max-w-[480px] text-center md:text-left">
              <h1 className="hero-h1 text-[36px] md:text-[56px] font-medium text-paper leading-[1.08] tracking-[-0.02em]">
                Your agents are great.<br />
                <span className="text-interactive">Their tools&nbsp;aren&rsquo;t.</span>
              </h1>
              <p className="hero-sub mt-5 text-[17px] md:text-[19px] text-mist leading-relaxed">
                One AI-powered platform for pipeline, clients, quoting, and team performance. Built for independent agencies. Not a patchwork of tools from&nbsp;2008.
              </p>
              <div className="hero-ctas mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href={CREEM_RESERVE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary bg-copper text-white btn-radius px-7 py-3.5 text-[16px] font-medium hover:bg-bronze transition-colors text-center"
                >
                  Reserve Your Founding Spot
                </a>
                <a
                  href="https://tidycal.com/cjmayer/harboriq-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-secondary bg-interactive text-white btn-radius px-7 py-3.5 text-[16px] font-medium hover:bg-deep transition-colors text-center"
                >
                  Book a demo
                </a>
              </div>
              <p className="hero-ctas mt-3 text-[13px] text-mist text-center md:text-left">
                $100 refundable deposit &middot; Founding price: $299/mo locked for&nbsp;life
              </p>
            </div>

            {/* Video */}
            <div className="hero-video flex-1 md:max-w-[580px]">
              <div className="rounded-xl overflow-hidden shadow-2xl shadow-midnight/50 ring-1 ring-white/10 bg-anchor">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                  poster="/images/harboriq-command-center-hero-no-shadow.png"
                >
                  <source src="/videos/harboriq-command-center-hero-no-shadow-blue-background.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
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
            <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
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
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
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
                  {/* Image or Video */}
                  <div className="flex-[1.3] min-w-0">
                    <div className="feature-image rounded-xl overflow-hidden shadow-md shadow-ink/5">
                      {f.image.endsWith('.webm') || f.image.endsWith('.mp4') ? (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-auto"
                        >
                          <source src={f.image} type={f.image.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
                        </video>
                      ) : (
                        <Image
                          src={f.image}
                          alt={`HarborIQ ${f.title}`}
                          width={700}
                          height={450}
                          className="w-full h-auto"
                        />
                      )}
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
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
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
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
            Not another generic CRM
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight max-w-3xl">
            Built by watching agents work. Not by reading about insurance on the&nbsp;internet.
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((d) => (
              <div key={d.title}>
                <div className="w-12 h-12 rounded-lg bg-ice flex items-center justify-center mb-4">
                  {d.icon}
                </div>
                <h3 className="text-lg font-medium text-ink mb-2">{d.title}</h3>
                <p className="text-[15px] text-charcoal leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW HARBORIQ COMPARES ─── */}
      <section className="bg-midnight py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4 text-center">
            The real math
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-paper leading-tight tracking-tight text-center max-w-3xl mx-auto">
            Stop paying more for&nbsp;less.
          </h2>
          <p className="mt-3 text-[16px] text-mist leading-relaxed text-center max-w-2xl mx-auto">
            Most agencies piece together 3&ndash;4 tools and still have gaps. Here&rsquo;s what that actually costs for a 5-person&nbsp;team.
          </p>

          {/* Comparison table */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-anchor">
                  <th className="py-4 pr-4 text-[13px] font-medium text-slate uppercase tracking-wider w-[200px]">&nbsp;</th>
                  <th className="py-4 px-4 text-[14px] font-medium text-success">HarborIQ</th>
                  <th className="py-4 px-4 text-[14px] font-medium text-copper">Per-Seat AMS</th>
                  <th className="py-4 px-4 text-[14px] font-medium text-copper">AMS + CRM Bolt-On</th>
                  <th className="py-4 px-4 text-[14px] font-medium text-copper">AI Quoting Tool</th>
                </tr>
              </thead>
              <tbody className="text-[15px]">
                <tr className="border-b border-anchor/40">
                  <td className="py-4 pr-4 text-mist font-medium">Monthly cost (5 users)</td>
                  <td className="py-4 px-4 text-success font-medium">$499</td>
                  <td className="py-4 px-4 text-copper">$720+</td>
                  <td className="py-4 px-4 text-copper">$800+</td>
                  <td className="py-4 px-4 text-copper">~$300</td>
                </tr>
                <tr className="border-b border-anchor/40">
                  <td className="py-4 pr-4 text-mist font-medium">Per-user fees</td>
                  <td className="py-4 px-4 text-success font-medium">None</td>
                  <td className="py-4 px-4 text-copper">$94+/user</td>
                  <td className="py-4 px-4 text-copper">$94+/user</td>
                  <td className="py-4 px-4 text-copper">Varies</td>
                </tr>
                <tr className="border-b border-anchor/40">
                  <td className="py-4 pr-4 text-mist font-medium">Prospect pipeline</td>
                  <td className="py-4 px-4 text-success font-medium">Included</td>
                  <td className="py-4 px-4 text-danger">Not included</td>
                  <td className="py-4 px-4 text-copper">Separate tool</td>
                  <td className="py-4 px-4 text-danger">Not included</td>
                </tr>
                <tr className="border-b border-anchor/40">
                  <td className="py-4 pr-4 text-mist font-medium">AI-assisted quoting</td>
                  <td className="py-4 px-4 text-success font-medium">Built in</td>
                  <td className="py-4 px-4 text-danger">Not available</td>
                  <td className="py-4 px-4 text-danger">Not available</td>
                  <td className="py-4 px-4 text-copper">Yes (only)</td>
                </tr>
                <tr className="border-b border-anchor/40">
                  <td className="py-4 pr-4 text-mist font-medium">Client management</td>
                  <td className="py-4 px-4 text-success font-medium">Included</td>
                  <td className="py-4 px-4 text-copper">Included</td>
                  <td className="py-4 px-4 text-copper">AMS only</td>
                  <td className="py-4 px-4 text-danger">Not included</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 text-mist font-medium">Number of logins</td>
                  <td className="py-4 px-4 text-success font-medium">1</td>
                  <td className="py-4 px-4 text-copper">1</td>
                  <td className="py-4 px-4 text-copper">2&ndash;3</td>
                  <td className="py-4 px-4 text-copper">2+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-8 text-center">
            From the people who helped build it
          </p>

          <div className="space-y-10">
            <div className="pl-6 border-l-[3px] border-interactive">
              <blockquote className="text-xl md:text-2xl font-medium text-ink leading-snug tracking-tight">
                We&rsquo;ve tried other tools. They all do one thing. This is the first platform that actually works the way our agency&nbsp;works.
              </blockquote>
              <p className="mt-5 text-[15px]">
                <span className="font-medium text-ink">Andy Sertler</span>
                <span className="text-stone">, Principal, Sertler &amp;&nbsp;Associates</span>
              </p>
            </div>

            <div className="pl-6 border-l-[3px] border-copper">
              <blockquote className="text-lg md:text-xl font-medium text-ink leading-snug tracking-tight">
                I spend more time re-typing the same client info into carrier portals than actually talking to customers. Anything that fixes that changes&nbsp;everything.
              </blockquote>
              <p className="mt-5 text-[15px]">
                <span className="font-medium text-ink">Alex</span>
                <span className="text-stone">, Office Manager, Sertler &amp;&nbsp;Associates</span>
              </p>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12 text-center">
            <div>
              <p className="text-2xl font-medium text-ink">100+</p>
              <p className="text-[13px] text-stone mt-1">Hours embedded in agencies</p>
            </div>
            <div>
              <p className="text-2xl font-medium text-ink">3</p>
              <p className="text-[13px] text-stone mt-1">Discovery sessions</p>
            </div>
            <div>
              <p className="text-2xl font-medium text-ink">0</p>
              <p className="text-[13px] text-stone mt-1">Features guessed at</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SWITCH IN DAYS ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4 text-center">
            No 6-week migration
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center">
            Switch in days, not&nbsp;months.
          </h2>
          <p className="mt-3 text-[16px] text-charcoal leading-relaxed text-center max-w-2xl mx-auto">
            We know switching AMS feels risky. We designed onboarding so it&nbsp;isn&rsquo;t.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-ice flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-medium text-interactive">1</span>
              </div>
              <h3 className="text-lg font-medium text-ink mb-2">Export your data</h3>
              <p className="text-[15px] text-charcoal leading-relaxed">
                CSV from your current system. We&rsquo;ll tell you exactly what to&nbsp;pull.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-ice flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-medium text-interactive">2</span>
              </div>
              <h3 className="text-lg font-medium text-ink mb-2">We import &amp; clean</h3>
              <p className="text-[15px] text-charcoal leading-relaxed">
                Our team handles the data migration, deduplication, and&nbsp;setup.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-ice flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-medium text-interactive">3</span>
              </div>
              <h3 className="text-lg font-medium text-ink mb-2">Your team is running</h3>
              <p className="text-[15px] text-charcoal leading-relaxed">
                Hands-on walkthrough. Your agents are productive from day&nbsp;one.
              </p>
            </div>
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
              className="cta-primary bg-copper text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors"
            >
              Reserve Your Founding Spot
            </a>
            <a
              href="https://tidycal.com/cjmayer/harboriq-demo"
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

          {/* Email capture for not-ready visitors */}
          <div className="mt-10 pt-8 border-t border-deep/40">
            <p className="text-[15px] text-mist mb-4">
              Not ready to reserve? Get updates as we&nbsp;launch.
            </p>
            <form
              action="https://buttondown.com/api/emails/embed-subscribe/harboriq"
              method="post"
              target="_blank"
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                name="email"
                placeholder="you@youragency.com"
                required
                className="flex-1 px-4 py-3 btn-radius bg-deep/60 border border-deep text-paper placeholder:text-slate text-[15px] focus:outline-none focus:border-interactive"
              />
              <button
                type="submit"
                className="cta-secondary bg-interactive text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-harbor transition-colors whitespace-nowrap"
              >
                Keep me posted
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
