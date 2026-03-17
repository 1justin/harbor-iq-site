import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Command Center",
    description:
      "Your daily directive. What to do first, who to follow up with, what's expiring. One screen, no guessing.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Pipeline CRM",
    description:
      "Track every prospect from first call to bound policy. No more sticky notes. Know exactly who to call, when, and why.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Client Profiles",
    description:
      "Complete client history, policy details, endorsement tracking, and document storage in one view. Your whole book, organized.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "AI-Assisted Quoting",
    description:
      "Enter client data once. HarborIQ understands the differences between carriers, so you don't have to re-type or second-guess form fields.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: "Team Performance",
    description:
      "See who's quoting, who's closing, and where the bottlenecks are. Real visibility into your agency's engine.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Marketing Automation",
    description:
      "Auto-generated social posts, carrier rate change alerts, and re-engagement campaigns. 10 hours of marketing work done in minutes.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
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
      {/* ─── HERO ─── */}
      <section className="relative bg-midnight overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-paper leading-[1.15] tracking-tight">
              One platform. Every carrier.{" "}
              <span className="text-copper">Zero busywork.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-mist leading-relaxed max-w-2xl">
              HarborIQ is the AI-powered operating system built for independent insurance agencies. Pipeline, clients, quoting, team performance, and marketing in one place.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/pricing"
                className="bg-copper text-white rounded-lg px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors text-center"
              >
                Claim your founding spot
              </Link>
              <a
                href="https://tidycal.com/cjmayer/15-minute-intro"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate text-mist rounded-lg px-6 py-3 text-[15px] font-medium hover:border-paper hover:text-paper transition-colors text-center"
              >
                Book a 15-min demo
              </a>
            </div>
          </div>

          {/* Hero product screenshot */}
          <div className="mt-16 rounded-xl overflow-hidden border border-anchor/40 shadow-2xl shadow-black/30">
            <Image
              src="/images/harboriq-prototype-command-center.png"
              alt="HarborIQ Command Center dashboard showing daily directives, pipeline snapshot, and active quotes"
              width={1200}
              height={720}
              className="w-full h-auto"
              priority
            />
          </div>

          <p className="mt-6 text-center text-slate text-[13px]">
            Built with input from working agency owners and agents
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
            Your agents spend more time re-typing than selling.
          </h2>
          <div className="mt-8 space-y-5 text-[15px] text-charcoal leading-relaxed">
            <p>
              Every quote means opening Progressive in one tab, Geico in another, Travelers in a third. Same name, same address, same vehicle, typed three times. Each carrier asks the same questions with different words. &ldquo;Rental reimbursement&rdquo; here. &ldquo;Loss of use&rdquo; there. &ldquo;Transportation expense&rdquo; somewhere else.
            </p>
            <p>
              Meanwhile, the prospect you quoted last month who said &ldquo;call me in six months&rdquo;? They fell through the cracks. Your agency management system only tracks current clients, not the ones who haven&rsquo;t signed yet.
            </p>
            <p className="text-ink font-medium text-lg">
              Your team isn&rsquo;t slow. Your tools are.
            </p>
          </div>
        </div>
      </section>

      {/* ─── THE SOLUTION / FEATURES ─── */}
      <section id="features" className="bg-linen py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-copper uppercase tracking-wider mb-4">
            What HarborIQ replaces
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-ink leading-tight tracking-tight max-w-2xl">
            One system instead of a dozen tabs.
          </h2>
          <p className="mt-4 text-[15px] text-charcoal leading-relaxed max-w-2xl">
            HarborIQ brings your pipeline, clients, quoting workflow, team performance, and marketing into a single platform designed for how independent agencies actually work.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-pure rounded-xl border border-ash p-6 hover:border-fog transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-ice flex items-center justify-center text-harbor mb-4">
                  {f.icon}
                </div>
                <h3 className="text-lg font-medium text-ink mb-2">{f.title}</h3>
                <p className="text-[15px] text-charcoal leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>

          {/* Feature screenshots */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden border border-ash">
              <Image
                src="/images/harboriq-prototype-pipeline.png"
                alt="HarborIQ Pipeline view with kanban-style prospect tracking"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-ash">
              <Image
                src="/images/harboriq-prototype-ai-quoting-tool.png"
                alt="HarborIQ AI Multi-Carrier Quoting tool"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIFFERENTIATION ─── */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-copper uppercase tracking-wider mb-4">
            Not another generic CRM
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-ink leading-tight tracking-tight max-w-3xl">
            We built this by sitting next to agents while they worked.
          </h2>
          <p className="mt-4 text-[15px] text-charcoal leading-relaxed max-w-2xl">
            HarborIQ isn&rsquo;t a CRM with an insurance skin. It&rsquo;s built from the ground up around the way independent agencies actually operate.
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
      <section className="bg-linen py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[13px] font-medium text-copper uppercase tracking-wider mb-8">
            From the people who helped build it
          </p>
          <blockquote className="text-2xl md:text-3xl font-medium text-ink leading-snug tracking-tight">
            &ldquo;Every tool I&rsquo;ve tried does one piece. This is the first thing that actually feels like it was built for how we work.&rdquo;
          </blockquote>
          <p className="mt-6 text-stone text-[15px]">
            — Agency principal, Chicagoland area
          </p>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="bg-anchor py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-paper leading-tight tracking-tight">
            Founding agencies get locked-in pricing for life.
          </h2>
          <p className="mt-4 text-lg text-mist leading-relaxed">
            We&rsquo;re opening 10 founding agency spots at $299/month for your whole team, locked forever. Shape the product. Get priority support. Never pay more.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-copper text-white rounded-lg px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors"
            >
              Claim your founding spot
            </Link>
            <a
              href="https://tidycal.com/cjmayer/15-minute-intro"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate text-mist rounded-lg px-6 py-3 text-[15px] font-medium hover:border-paper hover:text-paper transition-colors"
            >
              Book a 15-min demo
            </a>
          </div>
          <p className="mt-6 text-slate text-[13px]">
            $100 refundable deposit to reserve your spot. Cancel anytime.
          </p>
        </div>
      </section>
    </>
  );
}
