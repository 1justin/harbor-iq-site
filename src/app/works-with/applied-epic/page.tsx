import type { Metadata } from "next";
import Link from "next/link";
import { H2, TrustStrip, btn } from "@/components/site/Bits";
import { HarborLoop } from "@/components/site/HarborLoop";
import { FaqSection, type Faq } from "@/components/iq/Blocks";
import { INTELLIGENCE as I, START_INTELLIGENCE_URL, DEMO_PAGE, currentIntelligenceMonthly } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HarborIQ with Applied Epic | Keep Epic, add carrier answers",
  description: `Epic runs the books. HarborIQ answers the questions Epic was never asked: who writes this risk, what renews next, who owns the client. Export the book once and keep both. $${I.monthly} a month for the whole agency.`,
  alternates: { canonical: "/works-with/applied-epic" },
  openGraph: {
    title: "HarborIQ with Applied Epic",
    description: "Epic stays your system of record. HarborIQ sits beside it with carrier answers, renewals and one client record.",
    url: "/works-with/applied-epic",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "HarborIQ with Applied Epic." }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Works with", item: "https://harboriq.co/works-with" },
    { "@type": "ListItem", position: 2, name: "Applied Epic", item: "https://harboriq.co/works-with/applied-epic" },
  ],
};

const faqs: Faq[] = [
  { q: "Do I have to leave Epic?", a: "No. Epic stays your system of record. HarborIQ reads an export of your book and adds the carrier answers, renewal list and client record your team uses all day." },
  { q: "How does the book get into HarborIQ?", a: "A standard Epic export, CSV or XLSX. HarborIQ maps the columns and we check the first import with you. Re-export whenever you want the book refreshed." },
  { q: "Is there a live sync with Epic today?", a: "Not today. HarborIQ works from exports. You own the data in both places and can export everything from HarborIQ at any time." },
  { q: "Who is this for?", a: "Agencies that like Epic for accounting and downloads but have CSRs hunting through carrier portals and producers keeping renewal lists in a spreadsheet." },
];

const rows: [string, string, string][] = [
  ["System of record, downloads, accounting", "Epic", ""],
  ["Carrier appetite answers from your own guides, page cited", "", "HarborIQ"],
  ["Renewal list with owner and days out, same for owner and producer", "", "HarborIQ"],
  ["One client record with tasks and inbox beside it", "", "HarborIQ"],
  ["Underwriter contacts and portal links, private to the agency", "", "HarborIQ"],
  ["Price", "Per user", `$${I.monthly} a month, whole agency`],
];

export default function WithEpicPage() {
  return (
    <>
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <section className="bg-paper pb-10 pt-14 md:pt-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-[15px] text-stone"><Link href="/works-with" className="underline-offset-4 hover:underline">Works with</Link> / Applied Epic</p>
            <h1 className="mt-3 max-w-3xl text-[40px] font-medium leading-[1.04] tracking-[-0.02em] text-ink md:text-[56px]">HarborIQ with Applied Epic.</h1>
            <p className="mt-5 max-w-[62ch] text-[18px] leading-relaxed text-charcoal">Epic runs the agency&rsquo;s books. HarborIQ answers the questions Epic was never asked: who writes this risk, what renews next, who owns the client. Export the book once and keep both.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href={START_INTELLIGENCE_URL} className={btn.copper}>Start Intelligence, ${currentIntelligenceMonthly()} a month</Link>
              <Link href={DEMO_PAGE} className="text-[15px] font-medium text-interactive underline-offset-4 hover:underline">Book a 20-minute walkthrough</Link>
            </div>
          </div>
        </section>
        <section className="bg-paper pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="overflow-hidden rounded-xl border border-ash">
              <div className="grid grid-cols-[1.6fr_1fr_1fr] bg-linen/70 px-5 py-3 text-[14px] text-charcoal"><span>Job</span><span>Epic</span><span>HarborIQ</span></div>
              {rows.map(([j, e, h]) => (
                <div key={j} className="grid grid-cols-[1.6fr_1fr_1fr] border-t border-ash px-5 py-3.5 text-[15px]">
                  <span className="text-ink">{j}</span>
                  <span className="text-charcoal">{e || <span className="text-stone">—</span>}</span>
                  <span className="font-medium text-ink">{h || <span className="font-normal text-stone">—</span>}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[13px] text-stone">Epic&rsquo;s own features are described as Applied publishes them. HarborIQ does not replace them.</p>
          </div>
        </section>
        <section className="bg-linen py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <H2 sub="Your Epic export is one of the inputs. Everything that comes out is for the people Epic does not serve all day.">How the two fit</H2>
            <HarborLoop slice="book" className="mt-10" />
          </div>
        </section>
        <TrustStrip light />
        <FaqSection items={faqs} className="bg-paper py-16 md:py-24" />
      </main>
    </>
  );
}
