import { createElement } from "react";
import { ChartVisual } from "./visuals/ChartVisual";
import { ListVisual } from "./visuals/ListVisual";
import { AIFlagVisual } from "./visuals/AIFlagVisual";

// Copy grounded in the canonical product description
// (assets/harboriq/brand-assets/creatify-brand-kit.md) rather than invented
// specifics. First pass, not reviewed against the full voice guide yet.
// Illustrative row data follows the same convention as AskDemo.tsx and the
// existing mocks/ components: fictional names, styled as example UI.

export const AI_CARD = {
  label: "AI at work",
  badge: { text: "AI flagged", className: "bg-interactive" },
  headline: "The system flags what needs you",
  subhead:
    "Renewal risk and carrier changes surface on their own, before you go looking.",
  visual: createElement(AIFlagVisual),
};

export const STACK_VALUE_CARDS = [
  {
    label: "Team",
    headline: "License and CE tracking, without the spreadsheet",
    subhead: "Know who's expiring before it becomes a compliance problem.",
    visual: createElement(ListVisual, {
      rows: [
        { primary: "Sarah K. · P&C", secondary: "Expires Jun 2027" },
        { primary: "Mike T. · Life", secondary: "Renew by Sep" },
        { primary: "Dana R. · P&C", secondary: "Current" },
      ],
    }),
  },
  {
    label: "Reporting",
    headline: "See how the team is actually performing",
    subhead: "Production by producer, without exporting to a spreadsheet first.",
    visual: createElement(ChartVisual),
  },
  {
    label: "Clients",
    headline: "Every client, one record",
    subhead:
      "Policy history, notes, and the next renewal, in one place instead of three tabs.",
    visual: createElement(ListVisual, {
      rows: [
        { primary: "Dana Whitfield", secondary: "Renews Mar 12" },
        { primary: "Marcus Oyelaran", secondary: "Home + Auto" },
        { primary: "The Kowalski Group", secondary: "Commercial" },
      ],
    }),
  },
  {
    label: "Directory",
    headline: "Every carrier and every client, one directory",
    subhead: "Reps and logins on one side. Contacts and policies on the other.",
    visual: createElement(ListVisual, {
      rows: [
        { primary: "Meridian Mutual", secondary: "Alex Rivera, rep" },
        { primary: "Lakeshore P&C", secondary: "Login on file" },
        { primary: "Granite Shore", secondary: "3 open submissions" },
      ],
    }),
  },
] as const;
