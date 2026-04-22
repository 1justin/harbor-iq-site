import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Hero } from "@/components/Hero";
import { PatchworkCollapse } from "@/components/PatchworkCollapse";
import { NewCore } from "@/components/NewCore";
import { DayInLife } from "@/components/DayInLife";

const CREEM_RESERVE = "https://www.creem.io/payment/prod_1SDGs4JxhPJ0yQonbNfIHV";

const homeFaqs = [
  {
    q: "What is HarborIQ?",
    a: "HarborIQ is an AI-powered agency management system (AMS) built for independent insurance agencies with 1-15 employees. It combines pipeline CRM, client and policy management, renewal tracking, team performance analytics, carrier management, and AI-assisted quoting in one platform. Think of it as the operating system your agency runs on.",
  },
  {
    q: "How much does HarborIQ cost?",
    a: "Flat monthly pricing with no per-user fees. Core is $149/month (up to 5 users), Pro is $499/month (up to 15 users). Founding agencies lock in Pro at $299/month for life — a savings of $2,400/year. No long-term contracts. Cancel anytime.",
  },
  {
    q: "Does HarborIQ replace my current AMS?",
    a: "Yes. HarborIQ is designed to replace tools like EZLynx, HawkSoft, Applied Epic, NowCerts, or EasyAgent. It handles everything from prospect pipeline to client management, renewals, quoting, and team performance — so you don't need separate tools bolted together.",
  },
  {
    q: "Does HarborIQ include comparative rating?",
    a: "HarborIQ takes a different approach than traditional comparative raters. Instead of rigid API integrations, our AI-assisted quoting uses semantic mapping to translate between carrier-specific terminology and pre-fill quoting forms. Enter client data once, and HarborIQ handles the carrier differences automatically.",
  },
  {
    q: "Is HarborIQ IVANS compatible?",
    a: "IVANS automated carrier downloads are on our roadmap. In the initial release, HarborIQ includes a comprehensive carrier directory with appetite tracking, underwriting guidelines, and portal credentials. We're transparent about what's available now and what's coming next.",
  },
  {
    q: "How do I switch from my current AMS to HarborIQ?",
    a: "Export a CSV from your current system, and HarborIQ's onboarding team handles the migration — including data cleanup and formatting. Most agencies are live within a week. The onboarding fee is $499 one-time, and your legacy system stays accessible during the transition.",
  },
];

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

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
      <Hero />

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

      {/* ─── THE OLD CORE ─── */}
      <section className="bg-midnight py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4">
              The old core
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

          {/* Pull-quote bridging old core → new core */}
          <p className="mt-12 text-center text-[20px] md:text-[24px] font-medium italic text-paper/90 tracking-tight">
            &ldquo;What got you here won&rsquo;t get you&nbsp;there.&rdquo;
          </p>

          {/* Animated patchwork-collapse visual */}
          <PatchworkCollapse />
        </div>
      </section>

      {/* ─── THE NEW CORE ─── */}
      <section className="bg-anchor py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[13px] font-medium text-copper uppercase tracking-wider mb-4">
              The new core
            </p>
            <h2 className="text-2xl md:text-[34px] font-medium text-paper leading-tight tracking-tight">
              A command center, not a collection of&nbsp;tools.
            </h2>
            <p className="mt-6 text-[16px] text-mist leading-relaxed">
              HarborIQ replaces the patchwork with one AI-native platform designed around how agencies actually run. Your pipeline, clients, quoting, renewals, carrier knowledge, and team performance all speak the same&nbsp;language &mdash; inside a single&nbsp;login.
            </p>
          </div>

          <NewCore />
        </div>
      </section>

      {/* ─── A DAY IN THE LIFE (replaces Features) ─── */}
      <DayInLife />

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

      {/* ─── FAQ ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center mb-10">
            Frequently asked questions
          </h2>
          <FaqAccordion items={homeFaqs} />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
        />
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
