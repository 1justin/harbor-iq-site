import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/iq/HomeHero";
import { Arrow, CtaLink, FaqSection, FinalCta, SectionHead, TextCta, type Faq } from "@/components/iq/Blocks";
import { PlanCards } from "@/components/iq/PlanCards";
import { testimonials } from "@/lib/testimonials";
import { FAQ_CARRIER_CHECK, FAQ_KEEP_AMS, FAQ_SETUP } from "@/lib/faqs";
import { HelpToday } from "@/components/iq/HelpToday";
import { AGENCY_OS_DEMO_URL, INTELLIGENCE, PRICING, START_FREE_URL } from "@/lib/constants";

const I = INTELLIGENCE;
const andy = testimonials.find((t) => t.slug === "andy-sertler")!;
const alex = testimonials.find((t) => t.slug === "alex-ricketts")!;

export const metadata: Metadata = {
  title: "HarborIQ | Who else might write this risk? Carrier answers for independent agencies",
  description: `Ask a carrier appetite question and see the guidance behind the answer. Free agency workspace, Intelligence at $${I.monthly} per agency per month with ${I.checksPerMonth} carrier checks, or the full Agency OS from $${PRICING.agency.solo.monthly}/month.`,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Who else might write this risk? | HarborIQ",
    description: `Carrier answers with the source attached. Free to start. Intelligence is $${I.monthly} per agency per month.`,
    url: "/",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "Who else might write this risk? HarborIQ, for independent insurance agencies." }],
  },
};

const homeFaqs: Faq[] = [
  {
    q: "What is HarborIQ?",
    a: `HarborIQ helps independent insurance agencies find carriers that might write a risk, with the carrier guidance behind every answer. Start with a free agency workspace, add Intelligence for $${I.monthly} per agency per month, or run the whole agency on Agency OS from $${PRICING.agency.solo.monthly} a month.`,
  },
  {
    q: "We're busy. Why set this up now?",
    a: `Because waiting costs you clients. While someone digs through carrier PDFs, the client on hold sometimes calls another agency. Say one homeowners policy pays you $200 a year in commission. Keep one of those a month and that's $2,400 a year. Intelligence is $${I.monthly} a month for your whole agency.`,
  },
  FAQ_SETUP,
  FAQ_KEEP_AMS,
  FAQ_CARRIER_CHECK,
  {
    q: "Do I have to book a demo to start?",
    a: "No. Start the free workspace or Intelligence on your own. A walkthrough is there for Agency OS, because moving your book is a bigger decision.",
  },
  {
    q: "How much does HarborIQ cost?",
    a: `The free workspace is $0 per agency. Intelligence is $${I.monthly} per agency per month, or $${I.annual} a year, with ${I.checksPerMonth} carrier checks each month and optional $${I.pack.price} packs of ${I.pack.checks} more. Agency OS is priced by agency size: $${PRICING.agency.solo.monthly} solo, $${PRICING.agency.team.monthly} for 2 to 5 people, $${PRICING.agency.os.monthly} for 6 to 15. Never a fee per person.`,
  },
]

/* Feather-style line icons, matching the rest of the site. */
const icon = {
  veteran: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </>
  ),
  newAgent: (
    <>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </>
  ),
  owner: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
};

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-ice">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E75B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {children}
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* ─── Proof strip ─── */}
      <section className="border-b border-ash bg-linen" aria-label="What agency staff say about HarborIQ">
        <figure className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-6 text-center md:flex-row md:gap-5 md:text-left">
          <Image src={alex.headshot!} alt="" width={96} height={96} className="h-12 w-12 shrink-0 rounded-full object-cover" />
          <blockquote className="text-[16px] leading-snug text-ink md:text-[17px]">
            &ldquo;{alex.quote}&rdquo;
          </blockquote>
          <figcaption className="shrink-0 text-[14px] text-charcoal md:ml-auto md:text-right">
            <span className="block font-medium text-ink">{alex.name}</span>
            {alex.role}, {alex.agency}
          </figcaption>
        </figure>
      </section>

      {/* ─── What would help today ─── */}
      <section className="bg-paper py-14 md:py-20" id="see-it-work" aria-labelledby="help-heading">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead
            id="help-heading"
            eyebrow="Start where it hurts"
            heading="What would help your agency&nbsp;today?"
            sub="Pick one. Most agencies start with a carrier question."
          />
          <HelpToday />
          <p className="mt-10 text-center">
            <TextCta href="/watch/ask">
              Watch Carrier Ask &middot; 1:13 <Arrow />
            </TextCta>
          </p>
        </div>
      </section>

      {/* ─── Who it's for ─── */}
      <section className="bg-linen py-14 md:py-20" id="who-its-for" aria-labelledby="audience-heading">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead
            id="audience-heading"
            eyebrow="Who it's for"
            heading="Your first day or your thirtieth year. It helps either&nbsp;way."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <AudienceCard
              role="Been in the business for years"
              icon={icon.veteran}
              h="Your go-to carriers said no. Who else?"
              p="Ask which other carriers might write it, and read the guideline before you call the underwriter."
              action={<TextCta href="/intelligence">See Intelligence <Arrow /></TextCta>}
            />
            <AudienceCard
              role="New to insurance"
              icon={icon.newAgent}
              h="Don't know who writes what yet? Ask."
              p="Ask in plain words, the way you'd ask Google. Every answer shows the carrier guideline it came from, so you learn the market while you work."
              action={<TextCta href={START_FREE_URL}>Start free <Arrow /></TextCta>}
            />
            <AudienceCard
              role="Owners and managers"
              icon={icon.owner}
              h="Give the whole team the same answers."
              p="One price for the agency, never per person. Carrier contacts, portal links, and license dates live in one place your team can find."
              action={<TextCta href="/free">See the free workspace <Arrow /></TextCta>}
            />
          </div>
        </div>
      </section>

      {/* ─── Free workspace: the on-ramp ─── */}
      <section className="bg-paper py-14 md:py-20" id="free-workspace" aria-labelledby="free-heading">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[0.95fr_1.05fr] md:gap-14">
          <div>
            <p className="iq-eyebrow mb-4">Free workspace</p>
            <h2 id="free-heading" className="text-2xl font-medium leading-tight tracking-tight text-ink md:text-3xl">
              Everything you set up free makes Intelligence&nbsp;smarter.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-charcoal">
              Your carrier knowledge is scattered across portals, inboxes, and one person&rsquo;s head. Have someone spend
              an hour dragging it in, and every answer your team gets after that draws on your agency&rsquo;s own
              documents too.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Underwriter contacts and portal links your whole team can find",
                "License and CE reminders for the dates you enter",
                "Appetite guides and bulletins from your portals, searchable by everyone",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[16px] leading-relaxed text-charcoal">
                  <span className="font-medium text-success" aria-hidden="true">✓</span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CtaLink href={START_FREE_URL}>Start free</CtaLink>
              <TextCta href="/free">See what&rsquo;s included <Arrow /></TextCta>
            </div>
          </div>
          <LibraryDemo />
        </div>
      </section>

      {/* ─── Plans ─── */}
      <section className="bg-linen py-14 md:py-20" id="plans" aria-labelledby="plan-heading">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead
            id="plan-heading"
            eyebrow="Pricing"
            heading="Start free. Add Intelligence for your whole&nbsp;agency."
            sub="Published, per agency, never per person."
          />
          <PlanCards className="mt-12" />
          <p className="mt-6 text-center text-[14px] text-charcoal">
            <Link href="/pricing" className="cta-secondary text-interactive underline underline-offset-4 hover:text-deep">
              See full pricing
            </Link>
          </p>
        </div>
      </section>

      {/* ─── Proof ─── */}
      <section className="bg-anchor py-14 md:py-20" aria-label="What an agency owner says about HarborIQ">
        <figure className="mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-[280px_1fr] md:gap-14">
          <div className="relative mx-auto w-full max-w-[260px] md:max-w-none">
            <Image
              src={andy.headshot!}
              alt={`${andy.name}, ${andy.role} of ${andy.agency}`}
              width={640}
              height={800}
              className="aspect-[4/5] w-full rounded-xl object-cover shadow-2xl"
            />
            <Image
              src={andy.logo!}
              alt={andy.agency}
              width={375}
              height={375}
              className="absolute -bottom-5 -right-5 h-20 w-20 rounded-xl border-4 border-anchor shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <svg width="40" height="32" viewBox="0 0 40 32" fill="currentColor" className="mx-auto text-copper md:mx-0" aria-hidden="true">
              <path d="M0 32V19.2C0 8.6 5.4 2.2 16 0l2 4.4C11.6 6.2 8.8 10 8.6 15.2H16V32H0zm24 0V19.2C24 8.6 29.4 2.2 40 0l2 4.4c-6.4 1.8-9.2 5.6-9.4 10.8H40V32H24z" />
            </svg>
            <blockquote className="mt-5 text-[24px] font-medium leading-snug tracking-tight text-paper md:text-[30px]">
              {andy.quote}
            </blockquote>
            <figcaption className="mt-7">
              <p className="text-[18px] font-medium text-paper">{andy.name}</p>
              <p className="mt-1 text-[15px] text-mist">
                {andy.role}, {andy.agency}
              </p>
              <p className="mt-1 text-[14px] text-slate">Independent agency, Chicago suburbs</p>
            </figcaption>
          </div>
        </figure>
      </section>

      <FaqSection items={homeFaqs} />

      <FinalCta
        heading="See one answer. Decide for yourself."
        body={`Start with a free workspace for your agency. Add Intelligence for $${I.monthly} a month, and everyone on your team can use it.`}
        action={<CtaLink href={START_FREE_URL}>Start free</CtaLink>}
        secondary={<CtaLink href={AGENCY_OS_DEMO_URL} variant="navy">Book an Agency OS walkthrough</CtaLink>}
        note={`Intelligence: $${I.monthly}/month or $${I.annual}/year, ${I.checksPerMonth} checks a month, optional $${I.pack.price} top-ups.`}
      />
    </>
  );
}

function AudienceCard({
  role,
  icon,
  h,
  p,
  action,
}: {
  role: string;
  icon: React.ReactNode;
  h: string;
  p: string;
  action: React.ReactNode;
}) {
  return (
    <article className="iq-card flex flex-col p-7">
      <IconCircle>{icon}</IconCircle>
      <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-interactive">{role}</p>
      <h3 className="mt-2 text-[20px] font-medium leading-snug tracking-tight text-ink">{h}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-charcoal">{p}</p>
      <div className="mt-5">{action}</div>
    </article>
  );
}

/* Free-section illustration: an hour of drag-and-drop becomes the agency's
   own library. File names are fictional examples. */
const LIBRARY = [
  { name: "Lakeshore commercial appetite bulletin.pdf", from: "Lakeshore portal" },
  { name: "Meridian homeowners underwriting guide.pdf", from: "Meridian portal" },
  { name: "Granite Shore auto program changes.pdf", from: "Email from your rep" },
  { name: "Underwriter contacts.csv", from: "Your spreadsheet" },
];

function LibraryDemo() {
  return (
    <div className="overflow-hidden rounded-xl border border-ash bg-paper shadow-xl">
      <div className="flex items-center gap-2 bg-anchor px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-harbor/60" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-harbor/60" aria-hidden="true" />
        <span className="ml-1 text-[13px] font-medium text-paper">HarborIQ · Your agency library</span>
      </div>
      <div className="px-5 py-5 md:px-6">
        <div className="rounded-lg border-2 border-dashed border-interactive/40 bg-ice/40 px-4 py-5 text-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E75B6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="mx-auto" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="m17 8-5-5-5 5" />
            <path d="M12 3v12" />
          </svg>
          <p className="mt-2 text-[14px] font-medium text-ink">Drop files from your carrier portals</p>
          <p className="text-[13px] text-stone">PDFs, bulletins, contact lists</p>
        </div>
        <ul className="mt-4 space-y-2">
          {LIBRARY.map((f) => (
            <li key={f.name} className="flex items-center gap-3 rounded-lg border border-ash px-4 py-2.5">
              <span className="font-medium text-success" aria-hidden="true">✓</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[14px] font-medium text-ink">{f.name}</span>
                <span className="block text-[12px] text-stone">{f.from}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 rounded-md bg-linen px-3 py-2 text-[13px] text-charcoal">
          Your team&rsquo;s carrier questions now check these too.
        </p>
      </div>
    </div>
  );
}
