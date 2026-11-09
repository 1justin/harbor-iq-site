/** Loop content shared by the server pages and the client diagram (plain module, no "use client"). */

export type SliceId = "ask" | "book" | "inbox" | "appetite";

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

