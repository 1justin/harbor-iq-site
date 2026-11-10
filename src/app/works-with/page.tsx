import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HarborLoop } from "@/components/site/HarborLoop";
import { H2, TrustStrip, btn } from "@/components/site/Bits";
import { DEMO_PAGE, INTELLIGENCE as I, START_INTELLIGENCE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Works with | HarborIQ beside your AMS, your inbox and your files",
  description: `Keep the AMS, the inbox and the spreadsheets you like. HarborIQ reads from them and answers beside them: Applied Epic, EZLynx, HawkSoft, NowCerts, AMS360, Gmail, Excel, Google Sheets. Replaces the generic CRM for $${I.monthly} a month.`,
  alternates: { canonical: "/works-with" },
  openGraph: {
    title: "Works with what your agency already uses | HarborIQ",
    description: "Keep the AMS. Keep the inbox. HarborIQ reads from them and answers beside them.",
    url: "/works-with",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "HarborIQ works with what your agency already uses." }],
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Works with HarborIQ",
  url: "https://harboriq.co/works-with",
  description: "What HarborIQ works with, is compatible with, and replaces, for independent insurance agencies.",
  isPartOf: { "@type": "WebSite", name: "HarborIQ", url: "https://harboriq.co" },
  hasPart: ["applied-epic", "ezlynx", "hawksoft", "nowcerts", "ams360", "gohighlevel", "agencyzoom"].map((slug) => ({ "@type": "WebPage", url: `https://harboriq.co/works-with/${slug}` })),
};

/**
 * "Works with" replaces the compare hub (2026-11-09). Modeled on Cooper's
 * integrations directory. Only shipped behavior is stated as present tense;
 * Outlook is the one "coming soon", authorized by Justin.
 *
 * Logos under /public/logos: Google and Dropbox marks from Simple Icons,
 * Microsoft Office icons from Wikimedia Commons, AMS vendors as site favicons
 * until official press-kit files replace them before publishing.
 */

type Cell = { name: string; line: string; logo?: string; soon?: boolean } | null;
type FamilyRow = { label: string; cells: Cell[] };

const FAMILIES: FamilyRow[] = [
  {
    label: "Mail",
    cells: [
      { name: "Outlook", logo: "/logos/outlook.svg", line: "Same inbox on the client record, for Microsoft shops.", soon: true },
      { name: "Gmail", logo: "/logos/gmail.svg", line: "Connected. Your inbox on the client record." },
      null,
    ],
  },
  {
    label: "Spreadsheets",
    cells: [
      { name: "Excel", logo: "/logos/excel.svg", line: "Your book as XLSX or CSV. Columns mapped for you." },
      { name: "Google Sheets", logo: "/logos/googlesheets.svg", line: "Export any list as CSV and drop it in." },
      null,
    ],
  },
  {
    label: "Documents",
    cells: [
      { name: "Word", logo: "/logos/word.svg", line: "Cheat sheets and notes. Save as PDF, drop it in." },
      { name: "Google Docs", logo: "/logos/googledocs.svg", line: "Same. Download as PDF, drop it in." },
      null,
    ],
  },
  {
    label: "Files",
    cells: [
      { name: "OneDrive", logo: "/logos/onedrive.svg", line: "Download and drop in. Nothing to connect." },
      { name: "Google Drive", logo: "/logos/googledrive.svg", line: "Download and drop in. Nothing to connect." },
      { name: "Dropbox", logo: "/logos/dropbox.svg", line: "Download and drop in. Nothing to connect." },
    ],
  },
];

const KNOWLEDGE = [
  { name: "PDF guides and bulletins", line: "Appetite guides, underwriting guidelines, bulletins, forms. Read and cited to the page." },
  { name: "Every carrier you write", line: "Any carrier, any state, any line of business, from the guides you load. No carrier list to wait on." },
];

type Tile = { name: string; line: string; href?: string; logo?: string };

const AMS: Tile[] = [
  { name: "Applied Epic", logo: "/logos/applied.png", line: "System of record, downloads, accounting. HarborIQ beside it.", href: "/works-with/applied-epic" },
  { name: "EZLynx", logo: "/logos/ezlynx.png", line: "Export the book once. Re-export when it changes.", href: "/works-with/ezlynx" },
  { name: "HawkSoft", logo: "/logos/fav-hawksoft.png", line: "Same export, same mapping, same day.", href: "/works-with/hawksoft" },
  { name: "NowCerts", logo: "/logos/fav-nowcerts.png", line: "Keep it for what it does. Ask HarborIQ the rest.", href: "/works-with/nowcerts" },
  { name: "AMS360", logo: "/logos/fav-vertafore.png", line: "Standard export in. Renewals and answers out.", href: "/works-with/ams360" },
];

const REPLACES: Tile[] = [
  { name: "GoHighLevel", line: "$97 to $297 a month for a CRM that cannot tell a policy from a deal.", href: "/works-with/gohighlevel" },
  { name: "AgencyZoom", line: "A sales funnel is not a client record.", href: "/works-with/agencyzoom" },
  { name: "The renewal spreadsheet", line: "On one desktop, sorted by hand, wrong by March." },
  { name: "Sticky notes", line: "Where underwriter phone numbers go to die." },
  { name: "The person who knows", line: "Dana is great. Dana also takes vacations." },
];

const COSTS = [
  { tool: "GoHighLevel", price: "$97 to $297", who: "Per account, plus usage fees for texts, email and AI", knows: "No. A policy is a deal and a carrier is a vendor." },
  { tool: "AgencyZoom", price: "$99 to $349", who: "Seven seats included. An eighth person means a call to sales.", knows: "As a sales pipeline. Not your carriers." },
  { tool: "HarborIQ Intelligence", price: `$${I.monthly}`, who: "The whole agency, up to 30 people. No seat count.", knows: "Your carriers, your book, your renewals.", us: true },
];

function Logo({ src, name }: { src?: string; name: string }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-ash bg-paper" aria-hidden="true">
      {src ? <Image src={src} alt="" width={26} height={26} className="h-[26px] w-[26px] object-contain" /> : <span className="text-[12px] font-semibold text-charcoal">{name.slice(0, 2)}</span>}
    </span>
  );
}

/** Mail, spreadsheets, documents, files: Microsoft on the left, Google beside it, so the eye reads down a column. */
function Families() {
  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-ash bg-paper">
      <div className="hidden grid-cols-[130px_repeat(3,1fr)] border-b border-ash bg-linen/60 px-5 py-2.5 text-[13px] text-stone md:grid">
        <span />
        <span>Microsoft</span>
        <span>Google</span>
        <span>Also</span>
      </div>
      {FAMILIES.map((row) => (
        <div key={row.label} className="grid gap-y-4 border-b border-ash px-5 py-5 last:border-b-0 md:grid-cols-[130px_repeat(3,1fr)] md:gap-y-0">
          <p className="text-[13px] text-stone md:pt-2.5">{row.label}</p>
          {row.cells.map((c, i) =>
            c ? (
              <div key={c.name} className="flex gap-3 pr-6">
                <Logo src={c.logo} name={c.name} />
                <div>
                  <p className="flex items-baseline gap-2 text-[16px] font-medium text-ink">
                    {c.name}
                    {c.soon && <span className="rounded-full bg-linen px-2 py-0.5 text-[11px] font-medium text-charcoal">Coming soon</span>}
                  </p>
                  <p className="mt-0.5 text-[14px] leading-relaxed text-charcoal">{c.line}</p>
                </div>
              </div>
            ) : (
              <span key={i} className="hidden md:block" aria-hidden="true" />
            ),
          )}
        </div>
      ))}
      <div className="grid gap-y-4 border-t border-ash bg-linen/40 px-5 py-5 md:grid-cols-[130px_repeat(2,1fr)] md:gap-y-0">
        <p className="text-[13px] text-stone md:pt-2.5">Carrier knowledge</p>
        {KNOWLEDGE.map((k) => (
          <div key={k.name} className="flex gap-3 pr-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-ash bg-paper text-interactive" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round"><path d="M7 3h7l5 5v13H7z M14 3v5h5 M10 13h6 M10 17h6" /></svg>
            </span>
            <div>
              <p className="text-[16px] font-medium text-ink">{k.name}</p>
              <p className="mt-0.5 text-[14px] leading-relaxed text-charcoal">{k.line}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Tiles({ items, verb }: { items: Tile[]; verb: "with" | "instead of" }) {
  const cols = items.length % 4 === 0 ? "lg:grid-cols-4" : items.length % 5 === 0 ? "lg:grid-cols-5" : "lg:grid-cols-3";
  return (
    <ul className={`mt-8 grid gap-px overflow-hidden rounded-xl border border-ash bg-ash sm:grid-cols-2 ${cols}`}>
      {items.map((t) => {
        const inner = (
          <>
            {t.logo && <span className="mb-4 block"><Logo src={t.logo} name={t.name} /></span>}
            <p className="text-[17px] font-medium text-ink">{t.name}</p>
            <p className="mt-1.5 text-[14px] leading-relaxed text-charcoal">{t.line}</p>
          </>
        );
        return (
          <li key={t.name} className="bg-paper">
            {t.href ? (
              <Link href={t.href} className="block h-full p-5 transition-colors hover:bg-linen/60">
                {inner}
                <p className="mt-3 text-[13px] font-medium text-interactive">HarborIQ {verb} {t.name}</p>
              </Link>
            ) : (
              <div className="h-full p-5">{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function WorksWithPage() {
  return (
    <>
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
        <section className="bg-paper pb-12 pt-14 md:pb-16 md:pt-20">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="max-w-3xl text-[40px] font-medium leading-[1.04] tracking-[-0.02em] text-ink md:text-[56px]">Works with what your agency already uses.</h1>
            <p className="mt-5 max-w-[58ch] text-[18px] leading-relaxed text-charcoal">Keep the AMS. Keep the inbox. Keep the spreadsheets you like. HarborIQ reads from them and answers beside them, and the only thing it asks you to retire is the stuff that never worked.</p>
          </div>
        </section>

        <section className="bg-paper pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <H2 sub="Mail, spreadsheets, documents and files your team already has. Drop them in and they become answers, renewals and records.">Works with</H2>
            <Families />
          </div>
        </section>

        <section className="bg-linen py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <H2 sub="Your management system stays your system of record. Export the book, and HarborIQ keeps a working copy your team actually opens.">Compatible with your AMS</H2>
            <Tiles items={AMS} verb="with" />
            <p className="mt-4 text-[13px] text-stone">A standard export, mapped with you on the first call. Re-export when the book changes.</p>
          </div>
        </section>

        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <H2 sub={`Not your AMS, and not your carriers. The generic CRM, the spreadsheet that is the real renewal list, and the memory that walks out the door. HarborIQ takes those jobs for $${I.monthly} a month, agency-wide.`}>Replaces</H2>
            <Tiles items={REPLACES} verb="instead of" />

            <h3 className="mt-14 text-[22px] font-medium tracking-tight text-ink">What a 5 to 10 person agency pays each month</h3>
            <div className="mt-5 overflow-hidden rounded-xl border border-ash">
              <table className="w-full text-left text-[15px]">
                <thead className="bg-linen/70 text-[13px] text-stone">
                  <tr>
                    <th className="px-5 py-3 font-normal">Tool</th>
                    <th className="px-5 py-3 font-normal">A month</th>
                    <th className="hidden px-5 py-3 font-normal sm:table-cell">Priced for</th>
                    <th className="hidden px-5 py-3 font-normal md:table-cell">Knows insurance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ash">
                  {COSTS.map((r) => (
                    <tr key={r.tool} className={r.us ? "bg-ice/40" : ""}>
                      <td className="px-5 py-3.5 font-medium text-ink">{r.tool}</td>
                      <td className="px-5 py-3.5 text-ink">{r.price}<span className="block text-[13px] text-stone sm:hidden">{r.who}</span></td>
                      <td className="hidden px-5 py-3.5 text-charcoal sm:table-cell">{r.who}</td>
                      <td className="hidden px-5 py-3.5 text-charcoal md:table-cell">{r.knows}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[13px] text-stone">Prices as published on each vendor&rsquo;s pricing page, November 2026. Agencies larger than 30 people ask us for a quote; it stays nominal next to these.</p>
          </div>
        </section>

        <section id="how-it-works" className="bg-linen py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <H2 sub="Four things go in. Four things come out. Nothing is retyped, and every answer points back to where it came from.">How it works</H2>
            <HarborLoop className="mt-10 md:mt-12" />
          </div>
        </section>

        <TrustStrip />

        <section className="bg-anchor py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-[28px] font-medium leading-tight tracking-tight text-paper md:text-[34px]">Bring one carrier guide and one export.</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-mist">That is the whole setup. Ask the first question the same afternoon.</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={START_INTELLIGENCE_URL} className={btn.light}>Start Intelligence</Link>
              <Link href={DEMO_PAGE} className="inline-flex items-center justify-center text-[15px] font-medium text-mist underline-offset-4 hover:underline">Or book a walkthrough</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
