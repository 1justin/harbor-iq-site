"use client";

import Link from "next/link";
import { useState } from "react";
import { EXCHANGES } from "@/components/AskDemo";
import {
  AGENCY_OS_DEMO_URL,
  INTELLIGENCE,
  SIGNUP_PAGE,
  START_INTELLIGENCE_URL,
} from "@/lib/constants";

/**
 * Homepage section 2 (2026-10-29): "What would help your agency today?"
 * Four everyday questions, each tagged with the plan that answers it, so the
 * Free / Intelligence / Agency OS ladder shows without a pricing table.
 * Visitor-controlled tabs, no auto-rotation (the hero already moves).
 * Every name, carrier, and date is a fictional example.
 */

type Tier = "free" | "intelligence" | "agency";

const TIER: Record<Tier, { label: string; className: string }> = {
  free: { label: "Free", className: "bg-success/10 text-success" },
  intelligence: {
    label: `Intelligence · $${INTELLIGENCE.monthly}/mo`,
    className: "bg-ice text-interactive",
  },
  agency: { label: "Agency OS", className: "bg-anchor text-paper" },
};

type Tab = {
  id: string;
  q: string;
  line: string;
  tier: Tier;
  window: string;
  cta: { label: string; href: string };
};

const TABS: Tab[] = [
  {
    id: "ask",
    q: "Who will write this risk?",
    line: "Ask in plain English. Get the carrier's answer with its guideline attached.",
    tier: "intelligence",
    window: "Carrier Ask",
    cta: { label: "Start Intelligence", href: START_INTELLIGENCE_URL },
  },
  {
    id: "contacts",
    q: "Who's our underwriter at Lakeshore?",
    line: "Contacts and portal links the whole team can find, not buried in one inbox.",
    tier: "free",
    window: "Carrier contacts",
    cta: { label: "Start free", href: `${SIGNUP_PAGE}?goal=contacts` },
  },
  {
    id: "licensing",
    q: "Is everyone on the team licensed?",
    line: "License and CE dates for the whole team, with a reminder before each one is due.",
    tier: "free",
    window: "Team licensing",
    cta: { label: "Start free", href: `${SIGNUP_PAGE}?goal=deadlines` },
  },
  {
    id: "growth",
    q: "What should we work on this week?",
    line: "Use it as your CRM or connect the one you have. It ranks what to work on today, this week, and this quarter.",
    tier: "agency",
    window: "This week",
    cta: { label: "Book an Agency OS demo", href: AGENCY_OS_DEMO_URL },
  },
];

function TierTag({ tier }: { tier: Tier }) {
  const t = TIER[tier];
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-[12px] font-medium ${t.className}`}
    >
      {t.label}
    </span>
  );
}

function AskPanel() {
  const ex = EXCHANGES[1];
  return (
    <>
      <p className="ml-auto max-w-[88%] rounded-lg bg-ice px-4 py-2.5 text-[15px] text-ink">
        {ex.question}
      </p>
      <p className="mt-4 text-[15px] leading-relaxed text-charcoal">
        {ex.answer}
      </p>
      <p className="mt-3 inline-flex items-center gap-2 rounded-md border border-ash bg-linen px-3 py-1.5 text-[13px] text-charcoal">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2E75B6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
        </svg>
        <span>
          <span className="font-medium text-ink">Source:</span> {ex.citation}
        </span>
      </p>
    </>
  );
}

const CONTACTS = [
  {
    carrier: "Lakeshore P&C",
    who: "Marcus Bell",
    role: "Small commercial underwriter",
    note: "Restaurants and retail. Prefers email.",
  },
  {
    carrier: "Meridian Mutual",
    who: "Dana Ruiz",
    role: "Personal lines underwriter",
    note: "Homeowners referrals go to Dana first.",
  },
  {
    carrier: "Granite Shore",
    who: "Priya Shah",
    role: "Agency service rep",
    note: "Portal access and billing questions.",
  },
];

function ContactsPanel() {
  return (
    <ul className="space-y-3">
      {CONTACTS.map((c, i) => (
        <li
          key={c.carrier}
          className={`rounded-lg border px-4 py-3 ${i === 0 ? "border-interactive/50 bg-ice/50" : "border-ash"}`}
        >
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-[15px] font-medium text-ink">
              {c.carrier}
            </span>
            <span className="text-[13px] text-interactive">Portal link</span>
          </div>
          <p className="mt-0.5 text-[14px] text-charcoal">
            {c.who} · {c.role}
          </p>
          <p className="mt-1 text-[13px] text-stone">{c.note}</p>
        </li>
      ))}
    </ul>
  );
}

const TEAM = [
  {
    initials: "LK",
    color: "bg-interactive",
    name: "Leslie Knope",
    meta: "P&C license · CE complete",
    detail: "Current",
    ok: true,
  },
  {
    initials: "TH",
    color: "bg-warning",
    name: "Tom Haverford",
    meta: "P&C license · 6 of 24 CE hours",
    detail: "Due Sep 30",
    ok: false,
  },
  {
    initials: "RS",
    color: "bg-success",
    name: "Ron Swanson",
    meta: "P&C + Life · CE complete",
    detail: "Current",
    ok: true,
  },
  {
    initials: "AL",
    color: "bg-midnight",
    name: "April Ludgate",
    meta: "P&C license · 18 of 24 CE hours",
    detail: "Due Oct 31",
    ok: false,
  },
];

function LicensingPanel() {
  return (
    <>
      <ul className="space-y-2.5">
        {TEAM.map((p) => (
          <li
            key={p.name}
            className="flex items-center gap-3 rounded-lg border border-ash px-4 py-2.5"
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold text-white ${p.color}`}
            >
              {p.initials}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[15px] font-medium text-ink">
                {p.name}
              </span>
              <span className="block truncate text-[13px] text-stone">
                {p.meta}
              </span>
            </span>
            <span
              className={`shrink-0 text-[13px] font-medium ${p.ok ? "text-success" : "text-warning"}`}
            >
              {p.detail}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 rounded-md bg-linen px-3 py-2 text-[13px] text-charcoal">
        Tom gets a reminder 60, 30, and 7 days before his renewal.
      </p>
    </>
  );
}

const WEEK = [
  {
    tag: "Renewal",
    tone: "bg-warning/15 text-ink",
    text: "Call the Kowalski Group. Their BOP renews in 21 days and there's no umbrella on file.",
  },
  {
    tag: "Carrier promo",
    tone: "bg-ice text-interactive",
    text: "Meridian's homeowners push ends Nov 30. 14 clients in your book fit it.",
  },
  {
    tag: "Follow-up",
    tone: "bg-linen text-charcoal",
    text: "3 quotes from last week have no follow-up yet.",
  },
];

function GrowthPanel() {
  return (
    <>
      <ul className="space-y-2.5">
        {WEEK.map((w, i) => (
          <li
            key={w.tag}
            className="flex items-start gap-3 rounded-lg border border-ash px-4 py-3"
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-anchor text-[12px] font-semibold text-paper">
              {i + 1}
            </span>
            <span className="min-w-0">
              <span
                className={`inline-block rounded-full px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider ${w.tone}`}
              >
                {w.tag}
              </span>
              <span className="mt-1 block text-[14px] leading-snug text-ink">
                {w.text}
              </span>
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-lg border border-ash px-4 py-3">
        <div className="flex items-baseline justify-between text-[13px]">
          <span className="font-medium text-ink">Q4 new business</span>
          <span className="text-charcoal">$48K of $60K goal</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-ash">
          <div className="h-full w-[80%] rounded-full bg-interactive" />
        </div>
      </div>
    </>
  );
}

const PANELS: Record<string, () => React.ReactNode> = {
  ask: AskPanel,
  contacts: ContactsPanel,
  licensing: LicensingPanel,
  growth: GrowthPanel,
};

export function HelpToday() {
  const [active, setActive] = useState(TABS[0].id);
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
      <div
        role="tablist"
        aria-label="What would help your agency today"
        aria-orientation="vertical"
        className="flex flex-col gap-2.5"
      >
        {TABS.map((t) => {
          const on = t.id === active;
          return (
            <div key={t.id} className="flex flex-col gap-2.5">
              <button
                type="button"
                role="tab"
                id={`help-tab-${t.id}`}
                aria-selected={on}
                aria-controls="help-panel"
                onClick={() => setActive(t.id)}
                className={`rounded-xl border px-5 py-4 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-interactive ${
                  on
                    ? "border-interactive bg-ice/50 shadow-md ring-1 ring-interactive"
                    : "border-ash bg-paper hover:border-interactive/60"
                }`}
              >
                <span className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[17px] font-medium text-ink">
                    {t.q}
                  </span>
                  <TierTag tier={t.tier} />
                </span>
                <span
                  className={`mt-1 block text-[14px] leading-relaxed text-charcoal ${on ? "" : "hidden md:block"}`}
                >
                  {t.line}
                </span>
              </button>
              {on && (
                <div className="md:hidden">
                  <PanelCard tab={t} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div
        id="help-panel"
        role="tabpanel"
        aria-labelledby={`help-tab-${tab.id}`}
        className="hidden md:flex"
      >
        <PanelCard tab={tab} />
      </div>
    </div>
  );
}

function PanelCard({ tab }: { tab: Tab }) {
  const Panel = PANELS[tab.id];
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl border border-ash bg-paper shadow-xl">
      <div className="flex items-center gap-2 bg-anchor px-5 py-3">
        <span
          className="h-2.5 w-2.5 rounded-full bg-harbor/60"
          aria-hidden="true"
        />
        <span
          className="h-2.5 w-2.5 rounded-full bg-harbor/60"
          aria-hidden="true"
        />
        <span className="ml-1 text-[13px] font-medium text-paper">
          HarborIQ · {tab.window}
        </span>
      </div>
      <div className="flex-1 px-5 py-5 md:min-h-[300px] md:px-6">
        <Panel />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ash px-5 py-3.5">
        <span className="text-[12px] text-stone">Example data.</span>
        <Link href={tab.cta.href} className="cta-secondary iq-link text-[15px]">
          {tab.cta.label} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
