import { createElement } from "react";
import { AvatarList } from "./visuals/AvatarRow";
import { AIExtra } from "./visuals/AIExtra";
import { ReportingExtra } from "./visuals/ReportingExtra";

// Copy grounded in the canonical product description
// (assets/harboriq/brand-assets/creatify-brand-kit.md). Reporting figures
// and the team roster come from Justin's actual Command Center/Executive
// Dashboard/Agent Performance screenshots (demo agency), not invented --
// same discipline as AskDemo.tsx. First pass, not reviewed against the
// full voice guide yet.

export const AI_CARD = {
  label: "AI at work",
  headline: "The system flags what needs you",
  subhead:
    "Renewal risk and carrier changes surface on their own, before you go looking.",
  visual: createElement(AIExtra),
};

export const STACK_VALUE_CARDS = [
  {
    label: "Team",
    headline: "License and CE tracking, without the spreadsheet",
    subhead: "Know who's expiring before it becomes a compliance problem.",
    visual: createElement(AvatarList, {
      rows: [
        { initials: "LK", avatarClassName: "bg-interactive", name: "Leslie Knope", meta: "P&C license", detail: "Expires Jun 2027", tone: "success" },
        { initials: "RS", avatarClassName: "bg-success", name: "Ron Swanson", meta: "P&C + Life", detail: "Current", tone: "success" },
        { initials: "TH", avatarClassName: "bg-warning", name: "Tom Haverford", meta: "P&C license", detail: "Renew by Sep", tone: "warning" },
        { initials: "CT", avatarClassName: "bg-danger", name: "Chris Traeger", meta: "P&C license", detail: "Current", tone: "success" },
        { initials: "DM", avatarClassName: "bg-anchor", name: "Donna Meagle", meta: "P&C + Life", detail: "Expires Nov 2026", tone: "success" },
        { initials: "BW", avatarClassName: "bg-midnight", name: "Ben Wyatt", meta: "P&C license", detail: "Current", tone: "success" },
        { initials: "AL", avatarClassName: "bg-interactive", name: "April Ludgate", meta: "P&C license", detail: "Renew by Oct", tone: "warning" },
      ],
    }),
  },
  {
    label: "Reporting",
    headline: "See the whole book at a glance",
    subhead: "In-force premium, retention, and close rate, without a spreadsheet.",
    visual: createElement(ReportingExtra),
  },
  {
    label: "Clients",
    headline: "Every client, one record",
    subhead:
      "Policy history, notes, and the next renewal, in one place instead of three tabs.",
    visual: createElement(AvatarList, {
      rows: [
        { initials: "DW", avatarClassName: "bg-interactive", name: "Dana Whitfield", meta: "Homeowners", detail: "Renews Mar 12", tone: "warning" },
        { initials: "MO", avatarClassName: "bg-success", name: "Marcus Oyelaran", meta: "Home + Auto", detail: "Current", tone: "success" },
        { initials: "TK", avatarClassName: "bg-anchor", name: "The Kowalski Group", meta: "Commercial", detail: "Current", tone: "success" },
        { initials: "PR", avatarClassName: "bg-warning", name: "Priya Ramachandran", meta: "Auto", detail: "Renews Apr 2", tone: "warning" },
        { initials: "HB", avatarClassName: "bg-danger", name: "Harold Beasley", meta: "Homeowners", detail: "Past due", tone: "warning" },
        { initials: "NF", avatarClassName: "bg-midnight", name: "Nadia Farouk", meta: "Commercial", detail: "Current", tone: "success" },
        { initials: "OS", avatarClassName: "bg-interactive", name: "The Ostrowski Family", meta: "Home + Auto", detail: "Current", tone: "success" },
        { initials: "JV", avatarClassName: "bg-warning", name: "Javier Vidal", meta: "Auto", detail: "Renews May 8", tone: "warning" },
        { initials: "EC", avatarClassName: "bg-success", name: "Ellen Choi", meta: "Homeowners", detail: "Current", tone: "success" },
      ],
    }),
  },
  {
    label: "Directory",
    headline: "Every carrier and every client, one directory",
    subhead: "Reps and logins on one side. Contacts and policies on the other.",
    visual: createElement(AvatarList, {
      rows: [
        { initials: "MM", avatarClassName: "bg-anchor", name: "Meridian Mutual", meta: "Alex Rivera, rep", detail: "Login on file", tone: "success" },
        { initials: "LP", avatarClassName: "bg-interactive", name: "Lakeshore P&C", meta: "Login on file", detail: "Current", tone: "success" },
        { initials: "GS", avatarClassName: "bg-warning", name: "Granite Shore", meta: "3 open submissions", detail: "Review", tone: "warning" },
        { initials: "NC", avatarClassName: "bg-success", name: "Northbridge Casualty", meta: "Login on file", detail: "Current", tone: "success" },
        { initials: "CP", avatarClassName: "bg-midnight", name: "Cardinal Point Insurance", meta: "Jordan Lee, rep", detail: "Current", tone: "success" },
        { initials: "SM", avatarClassName: "bg-danger", name: "Silverwood Mutual", meta: "Login expired", detail: "Update", tone: "warning" },
        { initials: "BL", avatarClassName: "bg-anchor", name: "Bayline P&C", meta: "Login on file", detail: "Current", tone: "success" },
        { initials: "HR", avatarClassName: "bg-interactive", name: "Harborline Reciprocal", meta: "Sam Okafor, rep", detail: "Current", tone: "success" },
        { initials: "PC", avatarClassName: "bg-warning", name: "Pinecrest Casualty", meta: "Login on file", detail: "Review", tone: "warning" },
      ],
    }),
  },
] as const;
