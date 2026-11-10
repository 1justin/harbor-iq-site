import Link from "next/link";
import { SLICES, type SliceId } from "@/components/site/slices";
import { PlansPanel } from "@/components/site/PlansPanel";
import { INTELLIGENCE as I, OVERLAY_COSTS, LAUNCH, introActive } from "@/lib/constants";

/** Shared pieces for the site pages (built as mocks 2026-11-08, ported 2026-11-09). */

export const btn = {
  copper: "cta-primary btn-radius inline-flex items-center justify-center bg-copper px-6 py-3 text-[15px] font-semibold text-midnight hover:bg-copper-light",
  navy: "btn-radius inline-flex items-center justify-center bg-anchor px-6 py-3 text-[15px] font-semibold text-paper hover:bg-deep",
  ghost: "btn-radius inline-flex items-center justify-center border border-ash bg-paper px-6 py-3 text-[15px] font-medium text-ink hover:border-stone",
  light: "btn-radius inline-flex items-center justify-center border border-mist/60 px-6 py-3 text-[15px] font-medium text-paper hover:bg-deep",
};

export function H2({ children, sub, className = "" }: { children: React.ReactNode; sub?: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 className="text-[28px] font-medium leading-[1.12] tracking-tight text-ink md:text-[36px]">{children}</h2>
      {sub && <p className="mt-3 max-w-[62ch] text-[17px] leading-relaxed text-charcoal">{sub}</p>}
    </div>
  );
}

/** One slice of the loop: outcome, one number, the screen, the diagram pinned to that path. */
export function FeatureSlice({
  slice,
  heading,
  body,
  stat,
  statLabel,
  screen,
  flip = false,
  linen = false,
}: {
  slice: SliceId;
  heading: string;
  body: string;
  stat: string;
  statLabel: string;
  screen: React.ReactNode;
  flip?: boolean;
  linen?: boolean;
}) {
  return (
    <section className={`${linen ? "bg-linen" : "bg-paper"} py-16 md:py-24`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className={`grid items-center gap-10 md:grid-cols-12 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
          <div className="md:col-span-5">
            <h2 className="text-[28px] font-medium leading-[1.12] tracking-tight text-ink md:text-[34px]">{heading}</h2>
            <p className="mt-4 max-w-[56ch] text-[17px] leading-relaxed text-charcoal">{body}</p>
            <p className="mt-6 text-[13px] text-stone">{SLICES.find((s) => s.id === slice)!.input} in. {SLICES.find((s) => s.id === slice)!.output} out.</p>
            <div className="mt-5 flex items-baseline gap-3 border-l-2 border-interactive pl-4">
              <span className="text-[34px] font-medium leading-none tracking-tight text-ink">{stat}</span>
              <span className="text-[15px] text-charcoal">{statLabel}</span>
            </div>
          </div>
          <div className="md:col-span-7">{screen}</div>
        </div>
      </div>
    </section>
  );
}

export function Villains() {
  const ghl = OVERLAY_COSTS.gohighlevel.monthly;
  const items = [
    {
      name: "The spreadsheet and the sticky notes",
      what: "The renewal list on someone's desktop. The carrier cheat sheet taped to a monitor. Both wrong by March.",
      instead: "The renewal list builds itself from your book. The carrier answer comes from the carrier's own guide, with the page.",
    },
    {
      name: "Memory",
      what: "\"Ask Dana, she knows who writes roofers.\" Dana is on vacation, or Dana left.",
      instead: "Everyone on the team asks the same question and gets the same cited answer. Dana's knowledge stays when Dana doesn't.",
    },
    {
      name: `A generic CRM at $${ghl} a month`,
      what: "GoHighLevel and its cousins were built for gyms and dentists. They do not know what a policy is, or a carrier, or a renewal.",
      instead: `HarborIQ knows all three and costs $${I.monthly} for the whole agency.`,
    },
  ];
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <H2 sub="Your AMS stays. HarborIQ sits beside it and takes over the jobs it was never built for.">Keep your AMS. Retire the rest.</H2>
        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-3">
          {items.map((v) => (
            <div key={v.name} className="border-t border-ink pt-5">
              <h3 className="text-[19px] font-medium leading-snug text-ink">{v.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-stone">{v.what}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">{v.instead}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Integrations() {
  const imports = ["Applied Epic", "EZLynx", "HawkSoft", "NowCerts", "AMS360", "Excel or any CSV"];
  return (
    <section className="bg-linen py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <H2 sub="Export your book from the system you already pay for. HarborIQ reads it, keeps it current when you re-export, and gives everything back the day you ask.">Works beside what you have.</H2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-[15px] font-medium text-ink">Bring your book from</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {imports.map((n) => (
                <li key={n} className="rounded-md border border-ash bg-paper px-3 py-1.5 text-[14px] text-ink">{n}</li>
              ))}
            </ul>
            <p className="mt-3 text-[13px] text-stone">A standard export. We map the columns with you.</p>
          </div>
          <div>
            <p className="text-[15px] font-medium text-ink">Connected</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              <li className="rounded-md border border-ash bg-paper px-3 py-1.5 text-[14px] text-ink">Gmail</li>
              <li className="rounded-md border border-dashed border-ash px-3 py-1.5 text-[14px] text-charcoal">Outlook <span className="text-stone">· coming soon</span></li>
              <li className="rounded-md border border-ash bg-paper px-3 py-1.5 text-[14px] text-ink">Every carrier you write</li>
            </ul>
            <p className="mt-3 text-[13px] text-stone">Gmail today, Outlook next. Carrier knowledge comes from the guides you load: any carrier, any state, any line.</p>
          </div>
          <div>
            <p className="text-[15px] font-medium text-ink">Leave with everything</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              <li className="rounded-md border border-ash bg-paper px-3 py-1.5 text-[14px] text-ink">Full export, any time</li>
            </ul>
            <p className="mt-3 text-[13px] text-stone">Clients, policies, notes and documents, in files any system can read. Yours, not ours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhoWins() {
  const people = [
    ["Owner", "Sees the whole book and every renewal without asking anyone."],
    ["Producer", "Knows which accounts are coming up and which carriers want them."],
    ["CSR", "Answers the carrier question on the first call, with the page to prove it."],
    ["Client", "Hears back in minutes, not after someone digs through a portal."],
    ["Carrier", "Gets submissions that fit its appetite, because the agency read the guide."],
  ];
  return (
    <section className="bg-anchor py-16 text-paper md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-[28px] font-medium leading-[1.12] tracking-tight md:text-[36px]">Five people win on every question.</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-mist">Including the carrier. When an agency reads the appetite guide before it submits, the underwriter sees risks it can actually write.</p>
        </div>
        <dl className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-5">
          {people.map(([who, what]) => (
            <div key={who} className="border-t border-slate/50 pt-4">
              <dt className="text-[17px] font-medium">{who}</dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-mist">{what}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-[15px] text-mist">
          Carrier? <Link href="/watch/ask" className="underline hover:text-paper">See what your agencies see</Link>.
        </p>
      </div>
    </section>
  );
}

export function TrustStrip({ light = false }: { light?: boolean }) {
  const items = [
    "Your documents and data are never used to train AI models",
    "Every answer shows the carrier page it came from",
    "Encrypted in transit and at rest",
    "One price for the whole agency, never per seat",
    "Export everything, any month, and cancel any month",
    "Built and run by an agency operator, not a software vendor",
  ];
  return (
    <section className={`${light ? "bg-paper" : "bg-linen"} py-12`}>
      <ul className="mx-auto grid max-w-6xl gap-x-10 gap-y-4 px-6 text-[15px] text-ink sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <li key={t} className="flex gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E8B57" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * Plans with Intelligence first, Free as the quiet door. Layout and copy live in
 * PlansPanel (a client component, for the billing toggle). The introductory
 * offer and the free-CRM wording are decided here, on the server: introActive()
 * ends the offer after December 31, 2026, and LAUNCH.freeCrm keeps CRM and
 * reporting claims off the page until the app delivers them. Pages that render
 * this must set `export const revalidate = 3600` so the offer lapses by itself.
 * Agency OS is not a purchasing option here (2026-11-10).
 */
export function Plans({ copperCta = false, heading = "Start free. Add Intelligence when the team starts asking." }: { detailed?: boolean; copperCta?: boolean; heading?: string }) {
  return (
    <section id="plans" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <H2 sub="One price for the whole agency, up to 30 people. Never a fee per person.">{heading}</H2>
        <PlansPanel intro={introActive()} crm={LAUNCH.freeCrm} copperCta={copperCta} />
      </div>
    </section>
  );
}

/**
 * Testimonials, restrained (mocked 2026-11-10): quote and attribution lead, a
 * small headshot (44px, so the source photos are never enlarged), no cards and
 * no invented callouts. Both are Sertler & Associates, who approved reasonable
 * testimonial language; every claim must stay true of the product.
 */
export function Quotes() {
  const q = [
    {
      name: "Andy Sertler",
      role: "Owner and President, Sertler & Associates",
      photo: "/testimonials/andy-sertler.jpg",
      quote: "When our go-to carrier says no, my team used to come find me. Now they ask HarborIQ, read the carrier's own guideline, and know who to call next. One price covers all of us.",
    },
    {
      name: "Alex Ricketts",
      role: "Office Manager, Sertler & Associates",
      photo: "/testimonials/alex-ricketts.jpg",
      quote: "Finding the right carrier is now as easy as a Google search. Our team spends its time binding policies, not clicking through portals.",
    },
  ];
  return (
    <section className="bg-linen py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-[13px] text-stone">From the agency that helped build it</p>
        <div className="mt-7 grid gap-12 md:grid-cols-2 md:gap-16">
          {q.map((t) => (
            <figure key={t.name} className="border-t border-ink pt-6">
              <blockquote className="max-w-[34ch] text-[21px] leading-[1.45] tracking-[-0.005em] text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.photo} alt={t.name} width={44} height={44} loading="lazy" className="h-11 w-11 rounded-full bg-paper object-cover object-[center_22%]" />
                <span><span className="block text-[15px] font-medium text-ink">{t.name}</span><span className="text-[13.5px] text-stone">{t.role}</span></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


const IN_ICONS: Record<SliceId, React.ReactNode> = {
  ask: <path d="M7 3h7l5 5v13H7z M14 3v5h5 M10 13h6 M10 17h6" />,
  book: <path d="M4 5h16v14H4z M4 10h16 M10 5v14" />,
  inbox: <path d="M4 6h16v12H4z M4 7l8 6 8-6" />,
  appetite: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 20a8 8 0 0 1 16 0" />,
};

/** What goes in, what comes out: four rows, one line each. Quiet stand-in for the loop on the homepage. */
export function InOut({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid grid-cols-[1fr_44px_1fr] text-[13px] text-stone">
        <span>What goes in</span>
        <span aria-hidden="true" />
        <span>What comes out</span>
      </div>
      <ol className="mt-3 divide-y divide-ash border-y border-ash">
        {SLICES.map((x) => (
          <li key={x.id} className="grid grid-cols-[1fr_44px_1fr] items-center py-3.5">
            <span className="flex items-center gap-3 text-[16px] text-ink">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" className="shrink-0 text-interactive" aria-hidden="true">{IN_ICONS[x.id]}</svg>
              {x.input}
            </span>
            <span className="relative mx-2 h-px bg-ash" aria-hidden="true">
              <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-interactive" />
            </span>
            <span className="text-[16px] font-medium text-ink">{x.output}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
