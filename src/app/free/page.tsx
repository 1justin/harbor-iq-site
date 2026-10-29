import type { Metadata } from "next";
import Link from "next/link";
import { FirstStepPicker } from "./FirstStepPicker";
import { Film } from "@/components/iq/Film";
import { Arrow, FaqSection, FinalCta, SectionHead, TextCta, type Faq } from "@/components/iq/Blocks";
import { INTELLIGENCE as I, LAUNCH } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Agency Workspace | Carrier contacts and deadlines in one place | HarborIQ",
  description:
    "A free workspace for independent insurance agencies: private carrier contacts and portal links, license and CE reminders for the dates you enter, and limited carrier discovery with sources.",
  alternates: { canonical: "/free" },
  // Held out of search until free signup is live (LAUNCH in constants).
  robots: LAUNCH.freeWorkspaceIndexed ? undefined : { index: false, follow: true },
  openGraph: {
    title: "Your carrier contacts and important deadlines. In one free workspace. | HarborIQ",
    url: "/free",
    images: [{ url: "/og/free.png", width: 1200, height: 630 }],
  },
};

const included = [
  {
    t: "Carrier relationships, organized",
    d: "Underwriter contacts, portal links, appointment details, and access notes. Private to your agency and kept by your team. Keep passwords out of notes.",
  },
  {
    t: "License and CE reminders",
    d: "Reminders for the dates you enter, sent to the person you choose on the schedule you set. You stay responsible for confirming requirements and deadlines.",
  },
  {
    t: "Limited carrier discovery",
    d: "Potential markets with sources, dates, and key conditions, plus a small private guide upload so you can try your own information.",
  },
  {
    t: "A shareable specialty profile",
    d: "Describe what you insure and where you work. Publish only what you approve.",
    link: { href: "/find-an-agency", label: "See the agency marketplace" },
  },
];

const freeFaqs: Faq[] = [
  {
    q: "Do I have to move my AMS or CRM?",
    a: "No. Use the free tools on their own. Keep your AMS or CRM, or move more work into HarborIQ later.",
  },
  {
    q: "Will HarborIQ tell us our official CE requirements?",
    a: "No. You enter the dates and choose the reminders. The free workspace is not a state CE calculator, a license verification service, or a guarantee of compliance.",
  },
  {
    q: "Is free carrier research unlimited?",
    a: `No. The free workspace includes a limited number of carrier checks and a small guide upload. Results show their sources and the conditions to confirm. Intelligence includes ${I.checksPerMonth} checks each month, with optional packs when you need more.`,
  },
  {
    q: "Does creating a workspace publish my agency information?",
    a: "No. Your agency details are private by default. You choose and review the public fields before approving a marketplace profile. Private carrier contacts, guides, and client records never publish on their own.",
  },
  {
    q: "Will I have to fill out a long setup form?",
    a: "No. Start with your name, work email, agency, and the task you want help with. Add carrier, deadline, specialty, or team details only when they help that task. No team roster or book upload required.",
  },
];

export default function FreeWorkspacePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-anchor">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-14 md:py-20">
          <div className="text-center md:text-left">
            <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-paper">
              Free agency workspace · $0 per agency
            </p>
            <h1 className="mt-4 text-[36px] font-medium leading-[1.08] tracking-[-0.02em] text-paper md:text-[52px]">
              Your carrier contacts and important deadlines.{" "}
              <span className="text-interactive">In one free&nbsp;workspace.</span>
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-mist md:text-[19px]">
              Keep underwriter contacts and portal links handy. Set reminders for license and CE dates. Try carrier
              discovery with the sources behind the answer.
            </p>
            <a
              href="#choose-first-step"
              className="cta-primary btn-radius mt-8 inline-block bg-copper px-7 py-3.5 text-[16px] font-medium text-white hover:bg-bronze"
            >
              Set up your free workspace
            </a>
            <p className="mt-3 text-[13px] text-mist">No subscription needed. Start with one task.</p>
          </div>
          <aside className="rounded-xl border border-harbor/40 bg-midnight/40 p-7">
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-slate">One place to begin</p>
            <h2 className="mt-2 text-[24px] font-medium leading-snug tracking-tight text-paper">
              You do not have to set up everything.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-mist">
              Add the carrier you called this morning. Or the license deadline you keep meaning to put on a calendar.
              Start there. Bring more into HarborIQ when it helps.
            </p>
          </aside>
        </div>
      </section>

      {/* ─── First step ─── */}
      <section className="scroll-mt-16 bg-paper py-14 md:py-20" id="choose-first-step" aria-labelledby="first-step-heading">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead
            id="first-step-heading"
            eyebrow="Choose your starting point"
            heading="What would help your agency today?"
            sub="Choose one. The next step follows your goal."
          />
          <div className="mx-auto max-w-5xl">
            <FirstStepPicker />
          </div>
        </div>
      </section>

      {/* ─── Included ─── */}
      <section className="bg-linen py-14 md:py-20" aria-labelledby="included-heading">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead id="included-heading" eyebrow="Included free" heading="Useful even if you never upgrade." />
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {included.map((x) => (
              <div key={x.t} className="iq-card p-7">
                <h3 className="text-lg font-medium text-ink">{x.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  {x.d}{" "}
                  {x.link && (
                    <Link href={x.link.href} className="text-interactive underline underline-offset-4 hover:text-deep">
                      {x.link.label}
                    </Link>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Setup film ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
          <div>
            <p className="iq-eyebrow mb-4">When you want more in one place</p>
            <h2 className="text-2xl font-medium leading-tight tracking-tight text-ink md:text-3xl">
              Bring in more when it helps.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-charcoal">
              Start with one carrier or one date. If you later move your book into Agency OS, the import is done with
              you, not handed to you.
            </p>
          </div>
          <Film slug="getting-your-data-in" label="Getting your data in" caption="How the Agency OS import works, with demo data." />
        </div>
      </section>

      {/* ─── Upgrade ─── */}
      <section className="bg-midnight py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-14">
          <div>
            <p className="iq-eyebrow mb-4 !text-slate">When you want more research</p>
            <h2 className="text-2xl font-medium leading-tight tracking-tight text-paper md:text-3xl">
              Intelligence makes your carrier information more useful.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-mist">
              Compare requirements against a risk, ask deeper follow-up questions across the information you authorize,
              and keep researching all month.
            </p>
            <TextCta href="/pricing#intelligence" light className="mt-6">See Intelligence pricing <Arrow /></TextCta>
          </div>
          <div className="rounded-xl border border-interactive/50 bg-anchor/60 p-7">
            <p className="text-[40px] font-medium leading-none tracking-tight text-paper">
              ${I.monthly}
              <span className="ml-2 text-[15px] font-normal tracking-normal text-mist">per agency / month</span>
            </p>
            <p className="mt-2 text-[14px] text-mist">Or ${I.annual} a year, billed upfront.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-mist">
              <span className="font-medium text-paper">{I.checksPerMonth} carrier checks each month,</span> shared
              across your agency. ${I.pack.price} adds {I.pack.checks} more, only when you choose.
            </p>
            <p className="mt-4 border-t border-white/10 pt-3 text-[13px] leading-relaxed text-slate">
              Free results keep their sources, dates, and limitations. You pay for more scope and ongoing research.
            </p>
          </div>
        </div>
      </section>

      <FaqSection items={freeFaqs} />

      <FinalCta
        heading="Make one part of your day easier."
        body="Choose the contact, deadline, or carrier question you want to start with. Your free workspace can grow from there."
        action={
          <a href="#choose-first-step" className="cta-primary iq-btn iq-btn-copper">
            Choose your first step
          </a>
        }
        note="Free for your agency. No Intelligence subscription required."
      />
    </>
  );
}
