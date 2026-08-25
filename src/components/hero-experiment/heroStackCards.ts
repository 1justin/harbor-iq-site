import { STACK_COLORS } from "./stack";

// Copy grounded in the canonical product description
// (assets/harboriq/brand-assets/creatify-brand-kit.md) rather than invented
// specifics — same discipline as the AskDemo.tsx data policy: no numbers
// or claims that aren't already sourced somewhere real. First pass, not
// reviewed against the full voice guide yet.
export const AI_CARD = {
  color: STACK_COLORS.interactive,
  eyebrow: "AI at work",
  headline: "The system flags what needs you",
  subhead:
    "Renewal risk and carrier changes surface on their own, before you go looking.",
};

export const STACK_VALUE_CARDS = [
  {
    color: STACK_COLORS.anchor,
    eyebrow: "Team",
    headline: "License and CE tracking, without the spreadsheet",
    subhead: "Know who's expiring before it becomes a compliance problem.",
  },
  {
    color: STACK_COLORS.deep,
    eyebrow: "Reporting",
    headline: "See how the team is actually performing",
    subhead: "Production by producer, without exporting to a spreadsheet first.",
  },
  {
    color: STACK_COLORS.midnight,
    eyebrow: "Clients",
    headline: "Every client, one record",
    subhead:
      "Policy history, notes, and the next renewal, in one place instead of three tabs.",
  },
  {
    color: STACK_COLORS.anchor,
    eyebrow: "Directory",
    headline: "Every carrier and every client, one directory",
    subhead: "Reps and logins on one side. Contacts and policies on the other.",
  },
] as const;
