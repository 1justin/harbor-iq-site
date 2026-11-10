/** Loop content shared by the server pages and the client diagram (plain module, no "use client"). */

export type SliceId = "ask" | "book" | "inbox" | "appetite";

/** One path through the loop diagram: what goes in, what comes out, who wins. */
export type LoopItem = {
  id: string;
  input: string;
  inputSub: string;
  output: string;
  winners: string[];
  caption: string;
};

/**
 * The Intelligence version of the loop (2026-11-10): the same diagram, with
 * only what Intelligence adds on top of the free CRM. Carrier research with
 * cited answers, and reporting on the book. Keep input labels short: the
 * diagram boxes are 290 units wide.
 */
export const INTEL_SLICES: LoopItem[] = [
  {
    id: "appetite",
    input: "Appetite guides",
    inputSub: "The PDFs from your carrier portals",
    output: "Who writes it, page cited",
    winners: ["CSR", "Client"],
    caption: "A CSR types the risk the way the client described it. The answer names the carriers that want it, with the page of each guide beside it.",
  },
  {
    id: "rules",
    input: "Underwriting guidelines",
    inputSub: "Rules, exclusions and program limits",
    output: "What the carrier needs first",
    winners: ["Producer", "Carrier"],
    caption: "Minimum years in business, revenue limits, excluded counties. Your producer sees the conditions before the submission goes out, so the carrier gets risks it can write.",
  },
  {
    id: "bulletins",
    input: "Bulletins and updates",
    inputSub: "Each one dated, so you know what is current",
    output: "The same answer for everyone",
    winners: ["Owner", "New hires"],
    caption: "Your newest producer and your most experienced one get the same cited answer. What your veterans know stays with the agency.",
  },
  {
    id: "reporting",
    input: "Your book in the free CRM",
    inputSub: "Clients, pipeline and renewals",
    output: "What to work on this week",
    winners: ["Owner", "Producer"],
    caption: "Intelligence reads the clients, pipeline and renewals you already keep in the free CRM and shows your priorities, a summary of what happened, and how the team is closing.",
  },
];

export const SLICES: {
  id: SliceId;
  input: string;
  inputSub: string;
  output: string;
  winners: string[];
  caption: string;
}[] = [
  {
    id: "ask",
    input: "Carrier guides and PDFs",
    inputSub: "Drop them in as they are",
    output: "Answers cited to the page",
    winners: ["CSR", "Client", "Carrier"],
    caption: "A CSR asks who writes roofers in Florida. The answer comes back in seconds with the carrier's own page beside it.",
  },
  {
    id: "book",
    input: "Your book",
    inputSub: "Epic, EZLynx, HawkSoft, NowCerts or a spreadsheet",
    output: "Renewals in order",
    winners: ["Producer", "Owner"],
    caption: "Export the book once. Every policy with a date becomes a renewal with an owner and a days-out count.",
  },
  {
    id: "inbox",
    input: "Your inbox",
    inputSub: "Gmail, connected",
    output: "Follow-ups that get done",
    winners: ["CSR", "Client"],
    caption: "The email, the task and the client sit on one record, so the follow-up gets sent even when staff change.",
  },
  {
    id: "appetite",
    input: "Underwriter contacts and portals",
    inputSub: "Private to your agency",
    output: "Who writes what, by state",
    winners: ["Producer", "Carrier"],
    caption: "Appetite by carrier and state, ready when a producer asks. Carriers see the submissions they actually want.",
  },
];

