import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — HarborIQ",
  description:
    "HarborIQ was built by sitting next to agents while they worked. Learn our story and what we believe about the future of independent insurance agencies.",
};

const beliefs = [
  "Small business owners are the backbone of the economy. We want to elevate them.",
  "Independent agents deserve tools as good as what captive carriers give their agents.",
  "AI should make agents smarter and faster, not replace them.",
  "Software should be built around how people actually work, not how process diagrams say they should.",
  "The best product is the one that disappears into the workflow.",
  'Domain expertise isn\'t optional. You can\'t build insurance software without understanding that "rental reimbursement" and "transportation expense" are the same thing.',
];

export default function AboutPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="bg-midnight pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-medium text-paper leading-tight tracking-tight">
            Built by someone who sat next to agents and watched them work.
          </h1>
          <p className="mt-6 text-lg text-mist leading-relaxed">
            HarborIQ started over lunch with a friend who runs an independent agency. He showed me what quoting actually looks like. I&rsquo;ve been building the solution ever since.
          </p>
        </div>
      </section>

      {/* ─── ORIGIN STORY ─── */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-5 text-[15px] text-charcoal leading-relaxed">
            <p>
              My friend Andy runs an independent insurance agency in the Chicago suburbs. Over lunch one day, he pulled out his laptop and walked me through his daily workflow: open Progressive, type in the customer&rsquo;s name, address, DOB, vehicle info. Get a quote. Now open Geico. Type it all again. Now Travelers. Same data, different forms, different terminology.
            </p>
            <p>
              Two hours later, he had three quotes for one customer.
            </p>
            <p>
              Then he told me about the prospect he quoted last month who said &ldquo;call me in six months.&rdquo; That person fell through the cracks because the agency&rsquo;s management system only tracks current clients, not prospects. There was no pipeline. No follow-up system. Just sticky notes and good intentions.
            </p>
            <p>
              Andy said: &ldquo;If someone built a tool that did pipeline tracking, quoting automation, and social media posts for me, I&rsquo;d pay for it today.&rdquo;
            </p>
            <p>
              I&rsquo;ve built products inside big companies where the budgets are enormous and the tools are world-class. I&rsquo;ve also been a founder building from zero, where every dollar and every feature has to earn its place. That combination is exactly what independent agencies need: enterprise-grade thinking without the enterprise price tag or the enterprise headache.
            </p>
            <p>
              When I saw the gap Andy was describing, not just quoting, not just CRM, but the whole operating system, I stopped looking for someone else to build it.
            </p>
            <p className="text-ink font-medium">
              Every feature in HarborIQ comes from watching agents work and listening to what they actually need. Not what we think they should need.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BELIEFS ─── */}
      <section className="bg-linen py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-medium text-ink tracking-tight mb-12">
            Our beliefs
          </h2>
          <div className="space-y-8">
            {beliefs.map((belief, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-1 shrink-0 bg-copper rounded-full" />
                <p className="text-lg text-ink leading-relaxed">{belief}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-medium text-ink tracking-tight mb-12">
            Team
          </h2>

          <div className="space-y-12">
            {/* Justin */}
            <div>
              <div className="w-16 h-16 rounded-full bg-ice flex items-center justify-center text-harbor text-xl font-medium">
                JM
              </div>
              <h3 className="mt-4 text-lg font-medium text-ink">Justin Mayer</h3>
              <p className="text-[13px] text-stone font-medium uppercase tracking-wider mt-1">Founder</p>
              <p className="mt-3 text-[15px] text-charcoal leading-relaxed">
                Product builder who&rsquo;s worked inside Fortune 500 companies and built from scratch as a founder. Knows what enterprise-grade looks like and builds it without the enterprise price tag. Started HarborIQ after watching a friend spend two hours doing what should take twenty minutes.
              </p>
            </div>

            {/* Design partner */}
            <div className="pt-8 border-t border-ash">
              <p className="text-[13px] text-copper font-medium uppercase tracking-wider mb-3">Design Partner</p>
              <h3 className="text-lg font-medium text-ink">Sertler &amp; Associates</h3>
              <p className="mt-3 text-[15px] text-charcoal leading-relaxed">
                Our founding design partner. Andy and Alex have shaped every feature in HarborIQ through real-world feedback from their agency in the Chicago suburbs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="bg-anchor py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-paper leading-tight tracking-tight">
            Ready to stop drowning in tabs?
          </h2>
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
        </div>
      </section>
    </>
  );
}
