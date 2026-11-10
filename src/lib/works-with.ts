import { INTELLIGENCE as I, LAUNCH } from "@/lib/constants";
import type { SliceId } from "@/components/site/slices";
import type { Faq } from "@/components/iq/Blocks";

/**
 * Content for the "HarborIQ with <AMS>" and "HarborIQ instead of <CRM>" pages
 * (2026-11-09, replacing the six "vs" compare pages). Applied Epic has its own
 * page; the rest share FitPage. Vendor facts are stated as the vendors
 * publish them, and HarborIQ claims only shipped behavior.
 */

export type FitConfig = {
  slug: string;
  vendor: string;
  short: string;
  mode: "with" | "instead of";
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** [job, vendor column, HarborIQ column]; an empty string renders as a dash. */
  rows: [string, string, string][];
  rowsNote: string;
  loopSlice: SliceId;
  loopHeading: string;
  loopSub: string;
  faqs: Faq[];
  /** Optional page-specific Open Graph image under /public/og. */
  ogImage?: string;
};

const price = `$${I.monthly} a month, whole agency`;

const withRows = (vendor: string, keeps: string, extra?: [string, string, string]): [string, string, string][] => {
  const rows: [string, string, string][] = [
    [keeps, vendor, ""],
    ["Carrier appetite answers from your own guides, page cited", "", "HarborIQ"],
    ["Renewal list with owner and days out, same for owner and producer", "", "HarborIQ"],
    ["One client record with tasks and inbox beside it", "", "HarborIQ"],
    ["Underwriter contacts and portal links, private to the agency", "", "HarborIQ"],
  ];
  if (extra) rows.splice(1, 0, extra);
  rows.push(["Price", "Per user", price]);
  return rows;
};

const importFaq = (vendor: string): Faq => ({
  q: "How does the book get into HarborIQ?",
  a: `A standard ${vendor} export, CSV or XLSX. HarborIQ maps the columns and we check the first import with you. Re-export whenever you want the book refreshed.`,
});
const syncFaq = (vendor: string): Faq => ({
  q: `Is there a live sync with ${vendor} today?`,
  a: `Not today. HarborIQ works from exports. You own the data in both places and can export everything from HarborIQ at any time.`,
});

export const FITS: FitConfig[] = [
  {
    slug: "ezlynx",
    vendor: "EZLynx",
    short: "EZLynx",
    mode: "with",
    title: "HarborIQ with EZLynx | Keep the rater, add carrier answers",
    description: `EZLynx rates and manages the book. HarborIQ answers the questions it was never asked: who writes this risk, what renews next, who owns the client. $${I.monthly} a month for the whole agency.`,
    h1: "HarborIQ with EZLynx.",
    intro: "EZLynx started as a comparative rater and grew an AMS around it. Keep both. HarborIQ reads an export of the book and gives your team the carrier answer with the page cited, a renewal list that builds itself, and one record per client.",
    rows: withRows("EZLynx", "Comparative rating, management system, downloads"),
    rowsNote: "EZLynx's own features are described as Applied publishes them. HarborIQ does not replace them.",
    loopSlice: "book",
    loopHeading: "How the two fit",
    loopSub: "Your EZLynx export is one of the inputs. Everything that comes out is for the people the rater does not serve all day.",
    faqs: [
      { q: "Do I have to leave EZLynx?", a: "No. EZLynx stays your rater and your system of record. HarborIQ reads an export and adds the carrier answers, renewal list and client record your team uses all day." },
      importFaq("EZLynx"),
      syncFaq("EZLynx"),
      { q: "Does HarborIQ rate?", a: "No. Rating stays in EZLynx. HarborIQ tells you which carriers to rate with, from their own appetite guides, before you start." },
    ],
  },
  {
    slug: "hawksoft",
    vendor: "HawkSoft",
    short: "HawkSoft",
    mode: "with",
    title: "HarborIQ with HawkSoft | Keep HawkSoft, add carrier answers",
    description: `HawkSoft keeps the clients and the downloads. HarborIQ answers who writes it, what renews next and who owns it, from your own carrier guides. $${I.monthly} a month for the whole agency.`,
    h1: "HarborIQ with HawkSoft.",
    intro: "HawkSoft agencies tend to like HawkSoft, and its support has a reputation for a reason. Keep it. HarborIQ sits beside it with the carrier answers, the renewal list and the client record your CSRs and producers open all day.",
    rows: withRows("HawkSoft", "Client management, downloads, batch email"),
    rowsNote: "HawkSoft's own features are described as HawkSoft publishes them. HarborIQ does not replace them.",
    loopSlice: "book",
    loopHeading: "How the two fit",
    loopSub: "Your HawkSoft export is one of the inputs. Everything that comes out is for the questions HawkSoft does not answer.",
    faqs: [
      { q: "Do I have to leave HawkSoft?", a: "No. HawkSoft stays your system of record. HarborIQ reads an export and adds carrier answers with the page cited, a renewal list with owners and one client record with tasks and inbox beside it." },
      importFaq("HawkSoft"),
      syncFaq("HawkSoft"),
      { q: "Who is this for?", a: "Agencies that are happy with HawkSoft but have CSRs digging through carrier PDFs and producers keeping the real renewal list in a spreadsheet." },
    ],
  },
  {
    slug: "nowcerts",
    ogImage: "/og/nowcerts.png",
    vendor: "NowCerts",
    short: "NowCerts",
    mode: "with",
    title: "HarborIQ with NowCerts | Keep NowCerts, add carrier answers",
    description: `NowCerts handles certificates, downloads and the record. HarborIQ answers who writes it, what renews next and who owns it, from your own carrier guides. $${I.monthly} a month for the whole agency.`,
    h1: "HarborIQ with NowCerts.",
    intro: "NowCerts, now part of Momentum, does certificates and downloads well. Keep it for that. HarborIQ reads an export of the book and gives your team the carrier answer with the page cited, a renewal list with owners and one record per client.",
    rows: withRows("NowCerts", "Certificates, downloads, system of record"),
    rowsNote: "NowCerts's own features are described as Momentum publishes them. HarborIQ does not replace them.",
    loopSlice: "book",
    loopHeading: "How the two fit",
    loopSub: "Your NowCerts export is one of the inputs. Everything that comes out is for the questions NowCerts does not answer.",
    faqs: [
      { q: "Do I have to leave NowCerts?", a: "No. NowCerts stays your system of record. HarborIQ reads an export and adds the carrier answers, renewal list and client record your team uses all day." },
      importFaq("NowCerts"),
      syncFaq("NowCerts"),
      { q: "Who is this for?", a: "Agencies that like NowCerts for certificates and downloads but have CSRs hunting through carrier portals for appetite." },
    ],
  },
  {
    slug: "ams360",
    vendor: "AMS360",
    short: "AMS360",
    mode: "with",
    title: "HarborIQ with AMS360 | Keep AMS360, add carrier answers",
    description: `AMS360 runs accounting, downloads and the record. HarborIQ answers who writes it, what renews next and who owns it, from your own carrier guides. $${I.monthly} a month for the whole agency.`,
    h1: "HarborIQ with AMS360.",
    intro: "AMS360 is Vertafore's system of record for mid-size agencies, and it stays that. HarborIQ reads an export of the book and adds the part your team asks each other about all day: who writes this, what renews next, who owns it.",
    rows: withRows("AMS360", "System of record, accounting, downloads"),
    rowsNote: "AMS360's own features are described as Vertafore publishes them. HarborIQ does not replace them.",
    loopSlice: "book",
    loopHeading: "How the two fit",
    loopSub: "Your AMS360 export is one of the inputs. Everything that comes out is for the people AMS360 does not serve all day.",
    faqs: [
      { q: "Do I have to leave AMS360?", a: "No. AMS360 stays your system of record. HarborIQ reads an export and adds the carrier answers, renewal list and client record your team uses all day." },
      importFaq("AMS360"),
      syncFaq("AMS360"),
      { q: "Who is this for?", a: "Agencies on AMS360 whose CSRs still open five carrier portals to answer one appetite question." },
    ],
  },
  {
    slug: "gohighlevel",
    ogImage: "/og/gohighlevel.png",
    vendor: "GoHighLevel",
    short: "GoHighLevel",
    mode: "instead of",
    title: "HarborIQ instead of GoHighLevel | The GoHighLevel alternative for insurance agencies",
    description: `GoHighLevel is a marketing funnel for every business at $97 to $297 a month plus usage. HarborIQ knows carriers, policies and renewals, for $${I.monthly} a month for the whole agency.`,
    h1: "HarborIQ instead of GoHighLevel.",
    intro: "GoHighLevel is good at what it was built for: funnels, texting campaigns and landing pages for any business. It cannot tell a policy from a deal or a carrier from a vendor. If your agency uses it as the client record, HarborIQ is the record that knows insurance, and it costs less than the plan you are on.",
    rows: [
      ["Funnels, landing pages, text and email campaigns", "GoHighLevel", ""],
      ["Client record with policies, renewals, tasks and inbox", "A generic contact", "HarborIQ"],
      ["Carrier appetite answers from your own guides, page cited", "", "HarborIQ"],
      ["Renewal list built from expiration dates, with owners", "", "HarborIQ"],
      ["Underwriter contacts and portal links", "", "HarborIQ"],
      ["Price", "$97 to $297 a month, plus usage fees", price],
    ],
    rowsNote: "GoHighLevel's plans and prices as published on its pricing page, November 2026. Keep it for marketing if that is why you bought it.",
    loopSlice: "inbox",
    loopHeading: "What the record looks like when it knows insurance",
    loopSub: "The inbox, the tasks and the client sit on one record, and the carrier answers sit beside it.",
    faqs: [
      { q: "Can I keep GoHighLevel for marketing?", a: "Yes. If you run funnels and campaigns in it, keep doing that. HarborIQ is the record your team works from: clients, policies, renewals, tasks, and the carrier answers." },
      { q: "How do I move contacts over?", a: "Export them as a CSV and drop it in. HarborIQ maps the columns and we check the first import with you." },
      { q: "Does HarborIQ do text campaigns?", a: "No. It does the agency record and carrier answers. The follow-up gets sent from the inbox on the client record." },
    ],
  },
  {
    slug: "agencyzoom",
    vendor: "AgencyZoom",
    short: "AgencyZoom",
    mode: "instead of",
    title: "HarborIQ instead of AgencyZoom | The AgencyZoom alternative without the overlay",
    description: `AgencyZoom is a sales pipeline on top of your AMS, $99 to $349 a month with seven seats. HarborIQ is the record and the carrier answers for $${I.monthly} a month, whole agency.`,
    h1: "HarborIQ instead of AgencyZoom.",
    intro: "AgencyZoom is a well-built sales pipeline that sits on top of your AMS and syncs with it. HarborIQ is a different shape: one record per client with policies, renewals, tasks and inbox, plus carrier answers from your own guides. One price for the whole agency, no seat count.",
    rows: [
      ["Sales pipeline, Google review requests", "AgencyZoom", ""],
      ["Client record with policies, renewals, tasks and inbox", "Synced from the AMS", "HarborIQ"],
      ["Carrier appetite answers from your own guides, page cited", "", "HarborIQ"],
      ["Renewal list built from expiration dates, with owners", "Reminders as automations", "HarborIQ"],
      ["Underwriter contacts and portal links", "", "HarborIQ"],
      ["Price", "$99 to $349 a month, seven seats included", price],
    ],
    rowsNote: "AgencyZoom's plans and prices as published on its pricing page, November 2026. AgencyZoom has been part of Vertafore since 2022.",
    loopSlice: "book",
    loopHeading: "What the record looks like without the sync",
    loopSub: "Your book comes in from the AMS export. Renewals, tasks and the inbox live on the record, and the carrier answers sit beside it.",
    faqs: [
      { q: "Does HarborIQ have a sales pipeline?", a: LAUNCH.freeCrm
        ? "Yes. The free CRM includes a sales pipeline with stages and follow-ups, and Intelligence adds the carrier answers beside it. If the pipeline is the only thing you use AgencyZoom for, start free and see whether it covers you."
        : "Not in the free workspace or Intelligence today. HarborIQ gives you the carrier answers and a place for your carrier contacts and deadlines. If the pipeline is the only thing you use AgencyZoom for, keep AgencyZoom for it." },
      { q: "Does HarborIQ request Google reviews?", a: "No. If that automation matters to you, keep AgencyZoom for it." },
      { q: "How do I move over?", a: "Export your book from the AMS and your contacts from AgencyZoom as CSV. HarborIQ maps the columns and we check the first import with you." },
    ],
  },
];

export const fitBySlug = (slug: string) => FITS.find((f) => f.slug === slug);
