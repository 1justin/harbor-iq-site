"use client";

import { useState } from "react";
import Link from "next/link";
import { SIGNUP_PAGE } from "@/lib/constants";

type Goal = {
  id: string;
  label: string;
  h: string;
  p: string;
  steps: [string, string];
  receipt: string;
};

const GOALS: Goal[] = [
  {
    id: "markets",
    label: "Find a potential market",
    h: "Bring one carrier question.",
    p: "Start with a real placement question. Inspect the supporting source and the conditions to confirm before you decide what to do next.",
    steps: [
      "Try an answer from public or permitted sample guidance, clearly labeled.",
      "Save the result to your free workspace. Add one private guide when you are ready.",
    ],
    receipt: "You get: potential markets, the guidance behind them, its dates, and the conditions to confirm.",
  },
  {
    id: "contacts",
    label: "Organize my carrier contacts",
    h: "Find the right underwriter without hunting through email.",
    p: "Keep the contact, portal link, and access route for one carrier in a private place your team can find.",
    steps: [
      "Add one carrier and the contact or portal link you already use.",
      "Keep appointment details or access notes alongside it. Invite a colleague only when it helps.",
    ],
    receipt: "You get: one useful carrier record. No complete carrier list required.",
  },
  {
    id: "deadlines",
    label: "Remember license or CE dates",
    h: "Put one important deadline somewhere it will be remembered.",
    p: "Enter a license or CE deadline, choose who owns it, and see when the reminder arrives.",
    steps: [
      "Enter the deadline you want to track and choose who gets the reminder.",
      "Review the reminder schedule. Change the date or the person when something changes.",
    ],
    receipt: "You get: a visible reminder schedule based on the date you enter.",
  },
  {
    id: "profile",
    label: "Share what my agency insures",
    h: "Give people a clear picture of the work you want.",
    p: "Describe your specialties and service area in a profile you can review, share, and choose to publish to the agency marketplace.",
    steps: [
      "Confirm what you insure, where you serve clients, and how people should reach you.",
      "Review the public details before you approve publishing. Your private information stays separate.",
    ],
    receipt: "You get: a specialty profile you approved. Publishing is optional, and leads are not guaranteed.",
  },
];

export function FirstStepPicker() {
  const [active, setActive] = useState(GOALS[0].id);
  const goal = GOALS.find((g) => g.id === active) ?? GOALS[0];

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:gap-12">
      <fieldset className="flex flex-col gap-2.5">
        <legend className="sr-only">Choose your first workspace task</legend>
        {GOALS.map((g) => (
          <label
            key={g.id}
            className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3.5 text-[16px] transition-colors ${
              g.id === active ? "border-interactive bg-ice text-ink" : "border-ash bg-paper text-charcoal hover:border-interactive"
            }`}
          >
            <input
              type="radio"
              name="workspace-goal"
              value={g.id}
              checked={g.id === active}
              onChange={() => setActive(g.id)}
              className="accent-[#2E75B6]"
            />
            {g.label}
          </label>
        ))}
      </fieldset>

      <div className="iq-card p-6 shadow-lg md:p-8" aria-live="polite">
        <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-stone">Your first useful step</p>
        <h3 className="mt-2 text-[22px] font-medium leading-snug tracking-tight text-ink">{goal.h}</h3>
        <p className="mt-3 text-[16px] leading-relaxed text-charcoal">{goal.p}</p>
        <ol className="mt-5 space-y-3 border-t border-ash pt-5">
          {goal.steps.map((s, i) => (
            <li key={s} className="flex gap-3 text-[15px] leading-relaxed text-charcoal">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ice text-[13px] font-medium text-interactive">
                {i + 1}
              </span>
              <span className="pt-0.5">{s}</span>
            </li>
          ))}
        </ol>
        <p className="mt-5 rounded-lg border border-ash bg-linen px-4 py-3 text-[14px] leading-relaxed text-ink">{goal.receipt}</p>
        <Link href={`${SIGNUP_PAGE}?goal=${goal.id}`} className="cta-primary iq-btn iq-btn-copper mt-6">
          Start with this step
        </Link>
      </div>
    </div>
  );
}
