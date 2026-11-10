import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DEMO_PAGE, LAUNCH, START_FREE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About HarborIQ | Built for Independent Insurance Agencies",
  description:
    "HarborIQ was built by sitting next to agents while they worked. Learn our story and what we believe about the future of independent insurance agencies.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About HarborIQ | Built for Independent Insurance Agencies",
    description:
      "HarborIQ was built by sitting next to agents while they worked. Learn our story and what we believe about the future of independent insurance agencies.",
    url: "/about",
  },
};

const originChapters = [
  {
    icon: "/images/story-icon-lunch.svg",
    title: "The conversation",
    text: "Andy Sertler runs an independent insurance agency in the Chicago suburbs. Over lunch one day, he pulled out his laptop and showed what quoting actually looks like.",
  },
  {
    icon: "/images/story-icon-problem.svg",
    title: "The problem",
    text: "Open Progressive. Type in the customer\u2019s name, address, DOB, vehicle info. Get a quote. Now open Geico. Type it all again. Now Travelers. Same data, different forms, different terminology. Two hours later, three quotes for one customer. Then there\u2019s the prospect from last month who said \u201Ccall me in six months.\u201D They fell through the cracks. No pipeline. No follow-up system. Just sticky notes and good intentions.",
  },
  {
    icon: "/images/story-icon-idea.svg",
    title: "The insight",
    text: "Andy said: \u201CIf someone built a tool that did pipeline tracking, quoting automation, and social media posts for me, I\u2019d pay for it today.\u201D That conversation is where HarborIQ started. The gap was clear: every tool in the market did one piece. Nobody was building the full operating system.",
  },
  {
    icon: "/images/story-icon-solution.svg",
    title: "The solution",
    text: "It needed someone who\u2019d seen Fortune 500 tooling up close but knew how to build for a 5-person office where every dollar has to earn its place. Every feature in HarborIQ comes from watching agents work and listening to what they actually need. Not what a software company thinks they should need.",
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
    text: "Intelligence is built into the foundation, not bolted on as a feature. HarborIQ doesn\u2019t \u201Cuse AI.\u201D It thinks. It knows which fields map to each other across carriers, even when the terminology doesn\u2019t match. It knows which prospects are going stale and which quotes are about to expire. That\u2019s the IQ: real intelligence woven into every workflow so your team is always one step ahead.",
  },
];

/**
 * The line that connects Andy's original wish list to what HarborIQ is today
 * (added 2026-11-10). It names only what ships: the CRM sentence appears only
 * when the free CRM does (LAUNCH.freeCrm). No roadmap claims.
 */
const todayChapter = {
  title: "Today",
  text: LAUNCH.freeCrm
    ? "Andy\u2019s list was long, so we began with the two pieces an agency touches every day: one place for clients, pipeline and renewals, which is the free CRM, and answers from the carriers you write, which is Intelligence."
    : "Andy\u2019s list was long, so we began with the piece that costs an agency the most time: answers from the carriers you write, with the page cited. That is Intelligence, and it comes with a free workspace for carrier contacts and deadlines.",
};

/** Teasers of manifesto principles. Titles match /manifesto; the full 18 live there. */
const principles = [
  { t: "We publish our price.", d: "It is on the website. You do not need a call to learn the number." },
  { t: "We do not charge per seat.", d: "Hiring a producer should be a growth decision, not a budget conversation with your vendor." },
  { t: "We do not sell your own data back to you.", d: "See every record and export all of them, free, on any plan. Intelligence adds reporting on top. It is never the price of your own data." },
  { t: "Renewal is not a trap.", d: "We email you before it renews, and cancelling takes a click, not a sixty-day notice." },
];

/* Static data serialized with JSON.stringify: no user input reaches it. */
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About HarborIQ",
  url: "https://harboriq.co/about",
  mainEntity: {
    "@type": "Organization",
    name: "HarborIQ",
    url: "https://harboriq.co",
    description: "Software for independent insurance agencies, built with a working agency: carrier answers with the page cited, and a free CRM beside the AMS.",
    founder: { "@type": "Person", name: "Justin Mayer", jobTitle: "Founder and CEO", sameAs: ["https://www.linkedin.com/in/cjustinmayer"] },
  },
};

export default function AboutPage() {
  const story = [...originChapters, todayChapter];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      {/* ─── HEADER ─── */}
      <section className="bg-midnight pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-medium text-paper leading-tight tracking-tight max-w-3xl">
            Built by someone who sat next to agents and watched them&nbsp;work.
          </h1>
          <p className="mt-5 text-[17px] text-mist leading-relaxed max-w-2xl">
            HarborIQ started over lunch with an independent agency&rsquo;s leadership team. They showed us what quoting actually looks like. We&rsquo;ve been building the solution ever&nbsp;since.
          </p>
        </div>
      </section>

      {/* ─── HOW IT STARTED ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-[13px] text-stone">How it started</p>
            <h2 className="mt-2 text-[28px] font-medium leading-[1.12] tracking-tight text-ink">One lunch, one laptop, two hours of quoting.</h2>
          </div>
          <div className="md:col-span-8">
            {story.map((c, i) => (
              <div key={c.title} className={`grid gap-1.5 py-5 md:grid-cols-[130px_1fr] md:gap-5 ${i === 0 ? "border-t border-ink" : "border-t border-ash"}`}>
                <h3 className="pt-0.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-interactive">{c.title}</h3>
                <p className="text-[17px] leading-[1.6] text-charcoal">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE NAME ─── */}
      <section className="bg-linen py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-[13px] text-stone">The name</p>
          <div className="mt-6 grid gap-10 md:grid-cols-2 md:gap-16">
            {nameChapters.map((c) => (
              <div key={c.title} className="border-t border-ink pt-5">
                <h3 className="text-lg font-medium text-ink">{c.title}</h3>
                <p className="mt-2 text-[16px] leading-[1.65] text-charcoal">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE PEOPLE ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-[13px] text-stone">The people</p>
          <div className="mt-6 grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="grid grid-cols-[56px_1fr] gap-[18px] border-t border-ink pt-5">
              <Image src="/images/justin-mayer-casual-portrait.jpg" alt="Justin Mayer" width={56} height={56} className="h-14 w-14 rounded-full object-cover object-[center_20%]" />
              <div>
                <h3 className="text-lg font-medium text-ink">Justin Mayer</h3>
                <p className="text-[13px] text-stone">Founder and CEO</p>
                <p className="mt-2.5 max-w-[50ch] text-[15.5px] leading-relaxed text-charcoal">
                  A mechanical engineer with an MBA and nine patents. Justin led product at Honeywell and Life Fitness and co-founded an AI company that was acquired. He started HarborIQ after watching an agency spend two hours on one quote.
                </p>
                <a href="https://www.linkedin.com/in/cjustinmayer" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-[14px] font-medium text-interactive underline-offset-4 hover:underline">Justin on LinkedIn</a>
              </div>
            </div>
            <div className="grid grid-cols-[72px_1fr] gap-[18px] border-t border-ink pt-5">
              <div className="flex">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/testimonials/andy-sertler.jpg" alt="Andy Sertler" width={40} height={40} loading="lazy" className="h-10 w-10 rounded-full border-2 border-paper object-cover object-[center_22%]" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/testimonials/alex-ricketts.jpg" alt="Alex Ricketts" width={40} height={40} loading="lazy" className="-ml-2.5 h-10 w-10 rounded-full border-2 border-paper object-cover object-[center_22%]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-ink">Sertler &amp; Associates</h3>
                <p className="text-[13px] text-stone">Founding design partner, Illinois</p>
                <p className="mt-2.5 max-w-[50ch] text-[15.5px] leading-relaxed text-charcoal">
                  Andy Sertler and Alex Ricketts have shaped HarborIQ through weekly feedback from a working agency, since the first conversation.
                </p>
                <a href="https://sdabrokers.com" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-[14px] font-medium text-interactive underline-offset-4 hover:underline">sdabrokers.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW WE OPERATE ─── */}
      <section className="bg-anchor py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-[13px] text-mist">How we operate</p>
          <h2 className="mt-2 max-w-[22ch] text-[30px] font-medium leading-[1.12] tracking-tight text-paper md:text-[34px]">Not how software vendors usually do it.</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-4 md:gap-0">
            {principles.map((x, i) => (
              <div key={x.t} className={`md:pr-7 ${i ? "md:border-l md:border-paper/20 md:pl-7" : ""}`}>
                <p className="text-[13px] tracking-[0.06em] text-mist">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2.5 text-[20px] font-medium leading-[1.2] tracking-tight text-paper">{x.t}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-mist">{x.d}</p>
              </div>
            ))}
          </div>
          <Link href="/manifesto" className="mt-9 inline-block text-[15px] font-medium text-paper underline-offset-4 hover:underline">
            Read all 18 principles in the manifesto &rarr;
          </Link>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="bg-midnight py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-paper leading-tight tracking-tight">
            See whether it beats what you do&nbsp;today.
          </h2>
          <p className="mt-3 text-[16px] text-mist leading-relaxed">
            Start free in a few minutes, or book 20 minutes to talk it through.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={START_FREE_URL}
              className="cta-primary bg-copper text-midnight btn-radius px-6 py-3 text-[15px] font-medium hover:bg-copper-light transition-colors"
            >
              Start free
            </Link>
            <Link
              href={DEMO_PAGE}
              className="cta-secondary border border-slate text-mist btn-radius px-6 py-3 text-[15px] font-medium hover:border-paper hover:text-paper transition-colors"
            >
              Book a 20 minute demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
