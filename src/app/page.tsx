import { FaqAccordion } from "@/components/FaqAccordion";
import { Hero } from "@/components/Hero";
import { PatchworkCollapse } from "@/components/PatchworkCollapse";
import { NewCore } from "@/components/NewCore";
import { DayInLife } from "@/components/DayInLife";
import { TestimonialCards } from "@/components/TestimonialCards";
import { RoiCalculator } from "@/components/RoiCalculator";
import { FounderBlock } from "@/components/FounderBlock";
import { ResourcesGrid } from "@/components/ResourcesGrid";
import {
  DEMO_URL,
  FOUNDING_CLOSE_DATE,
  FOUNDING_SPOTS_TOTAL,
  PRICING,
} from "@/lib/constants";

const homeFaqs = [
  {
    q: "What is HarborIQ?",
    a: "HarborIQ is an AI-powered agency management system (AMS) built for independent insurance agencies with 1 to 15 employees. It combines pipeline CRM, client and policy management, renewal tracking, team performance analytics, carrier management, and AI-assisted quoting in one platform. Think of it as the operating system your agency runs on.",
  },
  {
    q: "How much does HarborIQ cost?",
    a: "Flat monthly pricing per agency. No per-user fees. Solo is $199/month for 1-person shops, Team is $379/month for 2 to 5 people, Operating System is $599/month for 6 to 15 people. Founding partners lock in 33% off for life. Solo at $119, Team at $229, Operating System at $399. No long-term contracts. Cancel anytime.",
  },
  {
    q: "Does HarborIQ replace my current AMS?",
    a: "Yes. HarborIQ is designed to replace tools like EZLynx, HawkSoft, Applied Epic, NowCerts, or EasyAgent. It handles everything from prospect pipeline to client management, renewals, quoting, and team performance, so you do not need separate tools bolted together.",
  },
  {
    q: "Does HarborIQ include comparative rating?",
    a: "HarborIQ takes a different approach than traditional comparative raters. Instead of rigid API integrations, our AI-assisted quoting uses semantic mapping to translate between carrier-specific terminology and pre-fill quoting forms. Enter client data once, and HarborIQ handles the carrier differences automatically.",
  },
  {
    q: "Is HarborIQ IVANS compatible?",
    a: "IVANS automated carrier downloads are on our roadmap. In the initial release, HarborIQ includes a comprehensive carrier directory with appetite tracking, underwriting guidelines, and portal credentials. We are transparent about what is available now and what is coming next.",
  },
  {
    q: "How do I switch from my current AMS to HarborIQ?",
    a: "Export a CSV from your current system. If you want our team to handle the migration, the setup fee equals one month of your plan (Solo $199, Team $379, Operating System $599) and includes data cleanup, import, and a hands-on walkthrough. If you prefer to import the data yourself with our CSV tool, there is no setup fee. Most agencies are live within a week.",
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
          <p className="mt-14 md:mt-20 mb-4 md:mb-8 text-center text-[22px] md:text-[28px] font-medium italic text-paper/90 tracking-tight max-w-3xl mx-auto leading-snug">
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
            <p className="text-[13px] font-medium text-ice uppercase tracking-wider mb-4">
              The new core
            </p>
            <h2 className="text-2xl md:text-[34px] font-medium text-paper leading-tight tracking-tight">
              A command center, not a collection of&nbsp;tools.
            </h2>
            <p className="mt-6 text-[16px] text-mist leading-relaxed">
              HarborIQ replaces the patchwork with one AI-native platform designed around how agencies actually run. Your pipeline, clients, quoting, renewals, carrier knowledge, and team performance all speak the same&nbsp;language. Inside a single&nbsp;login.
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
          <div className="mt-10 max-w-3xl mx-auto rounded-xl overflow-hidden border border-ash shadow-lg">
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
            Five real systems. Five agents on each. Same job. Different price, different speed, different amount of work left for your&nbsp;team.
          </p>

          {/* Desktop table */}
          <div className="hidden md:block mt-10 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-anchor">
                  <th className="py-4 pr-4 text-[13px] font-medium text-slate uppercase tracking-wider w-[220px]">&nbsp;</th>
                  <th className="py-4 px-3 text-[14px] font-medium text-mist">Applied Epic</th>
                  <th className="py-4 px-3 text-[14px] font-medium text-mist">EZLynx</th>
                  <th className="py-4 px-3 text-[14px] font-medium text-mist">HawkSoft</th>
                  <th className="py-4 px-3 text-[14px] font-medium text-mist">AgencyZoom</th>
                  <th className="py-4 px-3 text-[14px] font-medium text-success">HarborIQ Team</th>
                </tr>
              </thead>
              <tbody className="text-[15px]">
                <tr className="border-b border-anchor/40">
                  <td className="py-4 pr-4 text-mist font-medium">What 5 agents pay annually</td>
                  <td className="py-4 px-3 text-mist">$21,600</td>
                  <td className="py-4 px-3 text-mist">$6,900</td>
                  <td className="py-4 px-3 text-mist">$7,500</td>
                  <td className="py-4 px-3 text-mist">$9,900</td>
                  <td className="py-4 px-3 text-success font-medium">$4,548</td>
                </tr>
                <tr className="border-b border-anchor/40">
                  <td className="py-4 pr-4 text-mist font-medium">What you pay to start</td>
                  <td className="py-4 px-3 text-mist">$24,000</td>
                  <td className="py-4 px-3 text-mist">$1,500</td>
                  <td className="py-4 px-3 text-mist">$3,500</td>
                  <td className="py-4 px-3 text-mist">$0</td>
                  <td className="py-4 px-3 text-success font-medium">$379</td>
                </tr>
                <tr className="border-b border-anchor/40">
                  <td className="py-4 pr-4 text-mist font-medium">Days to first quote</td>
                  <td className="py-4 px-3 text-mist">90 to 120</td>
                  <td className="py-4 px-3 text-mist">30 to 60</td>
                  <td className="py-4 px-3 text-mist">45 to 90</td>
                  <td className="py-4 px-3 text-mist">14 to 30</td>
                  <td className="py-4 px-3 text-success font-medium">Within a week</td>
                </tr>
                <tr className="border-b border-anchor/40">
                  <td className="py-4 pr-4 text-mist font-medium">Tools your team logs into</td>
                  <td className="py-4 px-3 text-mist">2 or more</td>
                  <td className="py-4 px-3 text-mist">2 or more</td>
                  <td className="py-4 px-3 text-mist">2 or more</td>
                  <td className="py-4 px-3 text-mist">2 or more</td>
                  <td className="py-4 px-3 text-success font-medium">One</td>
                </tr>
                <tr className="border-b border-anchor/40">
                  <td className="py-4 pr-4 text-mist font-medium">Renewals surfaced before they slip</td>
                  <td className="py-4 px-3 text-mist">Manual reminders</td>
                  <td className="py-4 px-3 text-mist">Manual reminders</td>
                  <td className="py-4 px-3 text-mist">Manual reminders</td>
                  <td className="py-4 px-3 text-mist">Workflow rules</td>
                  <td className="py-4 px-3 text-success font-medium">Automatic, 60 days early</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 text-mist font-medium">Carrier appetite, answered in seconds</td>
                  <td className="py-4 px-3 text-mist">Not built in</td>
                  <td className="py-4 px-3 text-mist">Not built in</td>
                  <td className="py-4 px-3 text-mist">Not built in</td>
                  <td className="py-4 px-3 text-mist">Not built in</td>
                  <td className="py-4 px-3 text-success font-medium">Built in</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="md:hidden mt-10 space-y-4">
            {[
              {
                name: "HarborIQ Team",
                highlight: true,
                rows: [
                  ["What 5 agents pay annually", "$4,548"],
                  ["What you pay to start", "$379"],
                  ["Days to first quote", "Within a week"],
                  ["Tools your team logs into", "One"],
                  ["Renewals surfaced before they slip", "Automatic, 60 days early"],
                  ["Carrier appetite, answered in seconds", "Built in"],
                ],
              },
              {
                name: "Applied Epic",
                rows: [
                  ["What 5 agents pay annually", "$21,600"],
                  ["What you pay to start", "$24,000"],
                  ["Days to first quote", "90 to 120"],
                  ["Tools your team logs into", "2 or more"],
                  ["Renewals surfaced before they slip", "Manual reminders"],
                  ["Carrier appetite, answered in seconds", "Not built in"],
                ],
              },
              {
                name: "EZLynx",
                rows: [
                  ["What 5 agents pay annually", "$6,900"],
                  ["What you pay to start", "$1,500"],
                  ["Days to first quote", "30 to 60"],
                  ["Tools your team logs into", "2 or more"],
                  ["Renewals surfaced before they slip", "Manual reminders"],
                  ["Carrier appetite, answered in seconds", "Not built in"],
                ],
              },
              {
                name: "HawkSoft",
                rows: [
                  ["What 5 agents pay annually", "$7,500"],
                  ["What you pay to start", "$3,500"],
                  ["Days to first quote", "45 to 90"],
                  ["Tools your team logs into", "2 or more"],
                  ["Renewals surfaced before they slip", "Manual reminders"],
                  ["Carrier appetite, answered in seconds", "Not built in"],
                ],
              },
              {
                name: "AgencyZoom",
                rows: [
                  ["What 5 agents pay annually", "$9,900"],
                  ["What you pay to start", "$0"],
                  ["Days to first quote", "14 to 30"],
                  ["Tools your team logs into", "2 or more"],
                  ["Renewals surfaced before they slip", "Workflow rules"],
                  ["Carrier appetite, answered in seconds", "Not built in"],
                ],
              },
            ].map((col) => (
              <div
                key={col.name}
                className={`rounded-xl border px-5 py-4 ${
                  col.highlight
                    ? "bg-anchor border-interactive"
                    : "bg-midnight border-anchor/60"
                }`}
              >
                <p
                  className={`text-[14px] font-medium ${
                    col.highlight ? "text-success" : "text-mist"
                  }`}
                >
                  {col.name}
                </p>
                <div className="mt-3 space-y-2 text-[14px]">
                  {col.rows.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between gap-4 border-b border-anchor/40 pb-2 last:border-0 last:pb-0"
                    >
                      <span className="text-slate">{label}</span>
                      <span
                        className={
                          col.highlight
                            ? "text-success font-medium text-right"
                            : "text-mist text-right"
                        }
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[13px] text-slate leading-relaxed text-center max-w-3xl mx-auto">
            Sources: documented public pricing and quotes shared with us by agencies that evaluated these systems before choosing HarborIQ. The Applied Epic figures come from a 2026 quote a 5-person agency received. Edit any row in the ROI calculator just&nbsp;below to match your&nbsp;numbers.
          </p>
        </div>
      </section>

      {/* ─── ROI CALCULATOR ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4 text-center">
            Your numbers, not ours
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center max-w-3xl mx-auto">
            What HarborIQ would recover in your first year.
          </h2>
          <p className="mt-3 text-[16px] text-charcoal leading-relaxed text-center max-w-2xl mx-auto">
            Pick what you use today. Edit anything that does not match your situation. Sources are listed under the calculator.
          </p>

          <div className="mt-10">
            <RoiCalculator />
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-8 text-center">
            What people are saying after seeing HarborIQ
          </p>

          <TestimonialCards />

          {/* Trust bar */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-ice flex items-center justify-center mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E75B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <p className="text-[14px] text-ink leading-snug max-w-[220px]">
                Built from 100+ hours embedded with real agencies
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-ice flex items-center justify-center mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E75B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <p className="text-[14px] text-ink leading-snug max-w-[220px]">
                Designed with named founding partners, not focus groups
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-ice flex items-center justify-center mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E75B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <p className="text-[14px] text-ink leading-snug max-w-[220px]">
                Every feature shipped in response to a real agent&rsquo;s day
              </p>
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

      {/* ─── RESOURCES ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4 text-center">
            Worth your time
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center max-w-3xl mx-auto">
            Read the thinking behind the&nbsp;product.
          </h2>
          <div className="mt-10">
            <ResourcesGrid />
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-paper py-14 md:py-20">
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

      {/* ─── FOUNDER BLOCK ─── */}
      <FounderBlock />

      {/* ─── BOTTOM CTA ─── */}
      <section className="bg-anchor py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-paper leading-tight tracking-tight">
            Founding partners get 33% off. For&nbsp;life.
          </h2>
          <p className="mt-3 text-[16px] text-mist leading-relaxed">
            Solo ${PRICING.solo.founding}/mo, Team ${PRICING.team.founding}/mo, Operating System ${PRICING.os.founding}/mo. Locked forever. Standard pricing starts at ${PRICING.solo.monthly}/mo.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary bg-copper text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors"
            >
              Book a 15 minute demo
            </a>
            <a
              href="/pricing"
              className="cta-secondary bg-interactive text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-deep transition-colors"
            >
              See pricing
            </a>
          </div>
          <p className="mt-5 text-mist text-[13px]">
            Founding partner pricing locks 33% off for life. Offer closes {FOUNDING_CLOSE_DATE}. Limited to {FOUNDING_SPOTS_TOTAL} agencies.
          </p>

          {/* Email capture for not-ready visitors */}
          <div className="mt-10 pt-8 border-t border-deep/40">
            <p className="text-[15px] text-mist mb-4">
              Not ready for a demo? Get updates as we&nbsp;launch.
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
