"use client";

import { useEffect, useState } from "react";

/**
 * Free workspace illustration (2026-10-28): the admin side of HarborIQ, the
 * counterpart to the hero's answer card. Switches between carrier contacts and
 * license/CE reminders on its own; a click on a tab stops the rotation.
 * Every name, number, and date is fictional and labeled as an example.
 */

type Tab = "contacts" | "reminders";

const CONTACTS = [
  { carrier: "Meridian Mutual", who: "Dana Ruiz", role: "Personal lines underwriter", note: "Homeowners referrals go to Dana first." },
  { carrier: "Lakeshore P&C", who: "Marcus Bell", role: "Small commercial underwriter", note: "Restaurants and retail. Prefers email." },
  { carrier: "Granite Shore", who: "Priya Shah", role: "Agency service rep", note: "Portal access and billing questions." },
];

const REMINDERS = [
  { what: "Illinois producer license renewal", when: "Mar 31", who: "Pat", lead: "60, 30, and 7 days before" },
  { what: "CE deadline", when: "Mar 31", who: "Pat", lead: "90 and 30 days before" },
  { what: "Wisconsin nonresident license renewal", when: "Jul 15", who: "Jordan", lead: "60 and 14 days before" },
];

export function WorkspaceDemo() {
  const [tab, setTab] = useState<Tab>("contacts");
  const [auto, setAuto] = useState(true);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (!auto) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => setTab((x) => (x === "contacts" ? "reminders" : "contacts")), 6500);
    return () => window.clearTimeout(t);
  }, [tab, auto]);

  useEffect(() => {
    if (tab !== "reminders") return;
    const show = window.setTimeout(() => setToast(true), 1200);
    return () => {
      window.clearTimeout(show);
      setToast(false);
    };
  }, [tab]);

  const pick = (t: Tab) => {
    setAuto(false);
    setTab(t);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-ash bg-paper shadow-xl">
      <div className="flex items-center gap-2 bg-anchor px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-harbor/60" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-harbor/60" aria-hidden="true" />
        <span className="ml-1 text-[13px] font-medium text-paper">HarborIQ · Your workspace</span>
      </div>

      <div className="flex gap-1 border-b border-ash px-4 pt-3" role="tablist" aria-label="Workspace example">
        {(
          [
            ["contacts", "Carrier contacts"],
            ["reminders", "License and CE"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => pick(id)}
            className={`-mb-px border-b-2 px-3 pb-2.5 text-[14px] font-medium transition-colors ${
              tab === id ? "border-interactive text-ink" : "border-transparent text-stone hover:text-ink"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="relative min-h-[320px] px-4 pb-20 pt-4 md:px-5" role="tabpanel">
        {tab === "contacts" ? (
          <ul className="space-y-2.5">
            {CONTACTS.map((c, i) => (
              <li
                key={c.carrier}
                className={`animate-[iq-rise_0.45s_ease-out_both] rounded-lg border px-4 py-3 ${
                  i === 0 ? "border-interactive/40 bg-ice/60" : "border-ash"
                }`}
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-stone">{c.carrier}</p>
                    <p className="mt-0.5 text-[15px] font-medium text-ink">
                      {c.who} <span className="font-normal text-charcoal">· {c.role}</span>
                    </p>
                    <p className="mt-0.5 text-[13.5px] text-charcoal">{c.note}</p>
                  </div>
                  <span className="shrink-0 rounded-md border border-ash bg-paper px-2.5 py-1 text-[12.5px] font-medium text-interactive">
                    Portal ↗
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="space-y-2.5">
            {REMINDERS.map((r, i) => (
              <li
                key={r.what}
                className="flex animate-[iq-rise_0.45s_ease-out_both] items-center gap-4 rounded-lg border border-ash px-4 py-3"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-linen leading-none">
                  <span className="text-[11px] font-medium uppercase text-copper">{r.when.split(" ")[0]}</span>
                  <span className="mt-0.5 text-[18px] font-medium text-ink">{r.when.split(" ")[1]}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[15px] font-medium text-ink">{r.what}</p>
                  <p className="mt-0.5 text-[13.5px] text-charcoal">
                    Reminds {r.who}, {r.lead}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div
          className={`pointer-events-none absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-lg bg-anchor px-4 py-3 shadow-lg transition-all duration-500 md:inset-x-5 ${
            tab === "reminders" && toast ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
          aria-hidden="true"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-success text-[12px] text-white">✓</span>
          <span className="text-[13.5px] text-paper">Reminder sent to Pat: license renewal in 60 days</span>
        </div>
      </div>

      <p className="border-t border-ash px-5 py-3 text-[12px] text-stone">Example workspace. Names and dates are fictional.</p>
    </div>
  );
}
