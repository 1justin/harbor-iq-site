import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CREEM_PRO = "https://www.creem.io/test/payment/prod_1zF9yBXpb0b3E7UT9aFfIU";

export const metadata: Metadata = {
  title: "About — HarborIQ",
  description:
    "HarborIQ was built by sitting next to agents while they worked. Learn our story and what we believe about the future of independent insurance agencies.",
};

const originChapters = [
  {
    icon: "/images/story-icon-lunch.svg",
    title: "The conversation",
    text: 'My friend Andy runs an independent insurance agency in the Chicago suburbs. Over lunch one day, he pulled out his laptop and walked me through his daily workflow: open Progressive, type in the customer\u2019s name, address, DOB, vehicle info. Get a quote. Now open Geico. Type it all again. Now Travelers. Same data, different forms, different terminology.',
  },
  {
    icon: "/images/story-icon-problem.svg",
    title: "The problem",
    text: 'Two hours later, he had three quotes for one customer. Then he told me about the prospect he quoted last month who said \u201Ccall me in six months.\u201D That person fell through the cracks because the agency\u2019s management system only tracks current clients, not prospects. There was no pipeline. No follow-up system. Just sticky notes and good intentions.',
  },
  {
    icon: "/images/story-icon-idea.svg",
    title: "The insight",
    text: 'Andy said: \u201CIf someone built a tool that did pipeline tracking, quoting automation, and social media posts for me, I\u2019d pay for it today.\u201D I\u2019ve built products inside big companies where the budgets are enormous and the tools are world-class. I\u2019ve also been a founder building from zero, where every dollar and every feature has to earn its place.',
  },
  {
    icon: "/images/story-icon-solution.svg",
    title: "The solution",
    text: 'When I saw the gap Andy was describing, not just quoting, not just CRM, but the whole operating system, I stopped looking for someone else to build it. Every feature in HarborIQ comes from watching agents work and listening to what they actually need.',
  },
];

const nameChapters = [
  {
    icon: "/images/story-icon-harbor.svg",
    title: 'Why "Harbor"',
    text: "A harbor isn\u2019t just a place to park a boat. It\u2019s where ships come in from open water to find shelter, get resupplied, and set out again stronger. That\u2019s what an independent agency is for its clients: the safe port between life\u2019s risks. And it\u2019s what HarborIQ is for the agency itself: the protected, organized home base that keeps the chaos of the open market manageable. We didn\u2019t pick the name because it sounded nice. We picked it because it\u2019s the job.",
  },
  {
    icon: "/images/story-icon-iq.svg",
    title: 'Why "IQ"',
    text: "Every product in the WRKSTREAM portfolio carries the IQ suffix. It\u2019s a signal, not a slogan. Intelligence is built into the foundation, not bolted on as a feature. HarborIQ doesn\u2019t \u201Cuse AI.\u201D It thinks. It knows that Progressive calls it \u201Crental reimbursement\u201D and Travelers calls it \u201Closs of use.\u201D It knows which prospects are going stale and which quotes are about to expire. It knows what your team should do next. That\u2019s the IQ: not artificial intelligence as a buzzword, but real intelligence woven into every workflow so your team is always one step ahead.",
  },
];

const beliefs = [
  "Small business owners are the backbone of the economy. We want to elevate them.",
  "Independent agents deserve tools as good as what captive carriers give their agents.",
  "AI should make agents smarter and faster, not replace them.",
  "Software should be built around how people actually work, not how process diagrams say they should.",
  "The best product is the one that disappears into the workflow.",
  'Domain expertise isn\u2019t optional. You can\u2019t build insurance software without understanding that "rental reimbursement" and "transportation expense" are the same thing.',
];

export default function AboutPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="bg-midnight pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-4xl mx-auto px-6 md:flex md:items-center md:gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-medium text-paper leading-tight tracking-tight">
              Built by someone who sat next to agents and watched them&nbsp;work.
            </h1>
            <p className="mt-6 text-lg text-mist leading-relaxed">
              HarborIQ started over lunch with a friend who runs an independent agency. He showed me what quoting actually looks like. I&rsquo;ve been building the solution ever&nbsp;since.
            </p>
          </div>
          <div className="hidden md:block shrink-0">
            <div className="w-48 h-48 rounded-xl overflow-hidden border border-anchor/40">
              <Image
                src="/images/harboriq-screen-example-command-center.png"
                alt="HarborIQ Command Center"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── ORIGIN STORY TIMELINE ─── */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative pl-[88px]">
            {/* Vertical timeline line */}
            <div className="absolute left-[31px] top-[80px] bottom-[80px] w-px bg-ash" />

            {originChapters.map((chapter, i) => (
              <div key={i} className="relative flex gap-6 items-start py-6">
                <div className="absolute left-[-88px] w-16 h-16 shrink-0">
                  <Image
                    src={chapter.icon}
                    alt={chapter.title}
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
                <div>
                  <h3 className="text-[13px] font-medium text-copper uppercase tracking-wider mb-2">
                    {chapter.title}
                  </h3>
                  <p className="text-[15px] text-charcoal leading-relaxed">{chapter.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY "HARBORIQ" ─── */}
      <section className="bg-linen py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[13px] font-medium text-copper uppercase tracking-wider mb-8">
            The name
          </p>

          <div className="relative pl-[88px]">
            <div className="absolute left-[31px] top-[80px] bottom-[80px] w-px bg-ash" />

            {nameChapters.map((chapter, i) => (
              <div key={i} className="relative flex gap-6 items-start py-6">
                <div className="absolute left-[-88px] w-16 h-16 shrink-0">
                  <Image
                    src={chapter.icon}
                    alt={chapter.title}
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-ink mb-2">{chapter.title}</h3>
                  <p className="text-[15px] text-charcoal leading-relaxed">{chapter.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BELIEFS ─── */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-medium text-ink tracking-tight mb-16">
            Our beliefs
          </h2>
          <div className="space-y-16">
            {beliefs.map((belief, i) => (
              <div key={i} className="relative pl-20">
                <span
                  className="absolute top-[-8px] left-0 text-[72px] font-medium text-mist/60 leading-none select-none"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-xl text-ink leading-relaxed">{belief}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="bg-linen py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-medium text-ink tracking-tight mb-12">
            Team
          </h2>

          <div className="space-y-12">
            {/* Justin */}
            <div>
              <div className="w-[120px] h-[120px] rounded-full bg-ice flex items-center justify-center text-harbor text-3xl font-medium border border-ash overflow-hidden">
                {/* Replace with headshot: <Image src="/images/justin-headshot.jpg" ... /> */}
                JM
              </div>
              <h3 className="mt-4 text-lg font-medium text-ink">Justin Mayer</h3>
              <p className="text-[13px] text-stone font-medium uppercase tracking-wider mt-1">Founder</p>
              <p className="mt-3 text-[15px] text-charcoal leading-relaxed max-w-xl">
                Product builder who&rsquo;s worked inside Fortune 500 companies and built from scratch as a founder. Knows what enterprise-grade looks like and builds it without the enterprise price tag. Started HarborIQ after watching a friend spend two hours doing what should take twenty&nbsp;minutes.
              </p>
              {/* Social links */}
              <div className="mt-4 flex gap-3">
                <a
                  href="https://www.linkedin.com/company/harboriqsoftware"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone hover:text-harbor transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/harboriq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone hover:text-harbor transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Design partner */}
            <div className="pt-8 border-t border-ash">
              <p className="text-[13px] text-copper font-medium uppercase tracking-wider mb-3">Design Partner</p>
              <h3 className="text-lg font-medium text-ink">Sertler &amp; Associates</h3>
              <p className="text-[13px] text-stone mt-1">Chicagoland, IL</p>
              <p className="mt-3 text-[15px] text-charcoal leading-relaxed">
                Our founding design partner. Andy and Alex have shaped every feature in HarborIQ through real-world feedback from their agency in the Chicago&nbsp;suburbs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="bg-anchor py-20 md:py-28" style={{ paddingBottom: "96px" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-paper leading-tight tracking-tight">
            Ready to stop drowning in&nbsp;tabs?
          </h2>
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
        </div>
      </section>
    </>
  );
}
