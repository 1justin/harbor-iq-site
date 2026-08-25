import { createElement } from "react";
import { AvatarList } from "./visuals/AvatarRow";
import { StatGrid } from "./visuals/StatGrid";
import { FocusBanner } from "./visuals/FocusBanner";

// Copy grounded in the canonical product description
// (assets/harboriq/brand-assets/creatify-brand-kit.md). Reporting figures
// and team-roster names come from Justin's actual Command Center/Executive
// Dashboard screenshots (demo agency) rather than being invented -- same
// discipline as AskDemo.tsx. First pass, not reviewed against the full
// voice guide yet.

export const AI_CARD = {
  label: "AI at work",
  headline: "The system flags what needs you",
  subhead:
    "Renewal risk and carrier changes surface on their own, before you go looking.",
  visual: createElement(FocusBanner),
};

export const STACK_VALUE_CARDS = [
  {
    label: "Team",
    headline: "License and CE tracking, without the spreadsheet",
    subhead: "Know who's expiring before it becomes a compliance problem.",
    visual: createElement(AvatarList, {
      rows: [
        {
          initials: "LK",
          avatarClassName: "bg-interactive",
          name: "Leslie Knope",
          meta: "P&C license",
          detail: "Expires Jun 2027",
          tone: "success",
        },
        {
          initials: "RS",
          avatarClassName: "bg-success",
          name: "Ron Swanson",
          meta: "P&C + Life",
          detail: "Current",
          tone: "success",
        },
        {
          initials: "TH",
          avatarClassName: "bg-warning",
          name: "Tom Haverford",
          meta: "P&C license",
          detail: "Renew by Sep",
          tone: "warning",
        },
      ],
    }),
  },
  {
    label: "Reporting",
    headline: "See the whole book at a glance",
    subhead: "In-force premium, retention, and close rate, without a spreadsheet.",
    visual: createElement(StatGrid),
  },
  {
    label: "Clients",
    headline: "Every client, one record",
    subhead:
      "Policy history, notes, and the next renewal, in one place instead of three tabs.",
    visual: createElement(AvatarList, {
      rows: [
        {
          initials: "DW",
          avatarClassName: "bg-interactive",
          name: "Dana Whitfield",
          meta: "Homeowners",
          detail: "Renews Mar 12",
          tone: "warning",
        },
        {
          initials: "MO",
          avatarClassName: "bg-success",
          name: "Marcus Oyelaran",
          meta: "Home + Auto",
          detail: "Current",
          tone: "success",
        },
        {
          initials: "TK",
          avatarClassName: "bg-anchor",
          name: "The Kowalski Group",
          meta: "Commercial",
          detail: "Current",
          tone: "success",
        },
      ],
    }),
  },
  {
    label: "Directory",
    headline: "Every carrier and every client, one directory",
    subhead: "Reps and logins on one side. Contacts and policies on the other.",
    visual: createElement(AvatarList, {
      rows: [
        {
          initials: "MM",
          avatarClassName: "bg-anchor",
          name: "Meridian Mutual",
          meta: "Alex Rivera, rep",
          detail: "Login on file",
          tone: "success",
        },
        {
          initials: "LP",
          avatarClassName: "bg-interactive",
          name: "Lakeshore P&C",
          meta: "Login on file",
          detail: "Current",
          tone: "success",
        },
        {
          initials: "GS",
          avatarClassName: "bg-warning",
          name: "Granite Shore",
          meta: "3 open submissions",
          detail: "Review",
          tone: "warning",
        },
      ],
    }),
  },
] as const;
