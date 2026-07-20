"use client";

import { useMemo, useState } from "react";
import {
  ROI_PRESETS,
  ROI_OVERLAYS,
  computeRoi,
  defaultInputsFor,
  formatHours,
  formatUsd,
} from "@/lib/roi";

const inputBase =
  "w-full rounded-md border border-anchor/40 bg-paper px-3 py-2 text-[15px] text-ink focus:border-interactive focus:outline-none";
const labelBase =
  "block text-[13px] font-medium text-stone uppercase tracking-wider mb-2";

export function RoiCalculator() {
  const [inputs, setInputs] = useState(() => defaultInputsFor("applied-epic"));

  const outputs = useMemo(() => computeRoi(inputs), [inputs]);
  const activePreset =
    ROI_PRESETS.find((p) => p.id === inputs.presetId) ?? ROI_PRESETS[0];
  const activeOverlay =
    ROI_OVERLAYS.find((o) => o.id === inputs.overlayId) ?? ROI_OVERLAYS[0];

  function setPreset(presetId: string) {
    setInputs((prev) => defaultInputsFor(presetId, prev.overlayId));
  }

  function setOverlay(overlayId: (typeof ROI_OVERLAYS)[number]["id"]) {
    const overlay =
      ROI_OVERLAYS.find((o) => o.id === overlayId) ?? ROI_OVERLAYS[0];
    setInputs((prev) => ({
      ...prev,
      overlayId: overlay.id,
      overlayMonthly: overlay.monthly,
    }));
  }

  function setField<K extends keyof typeof inputs>(
    key: K,
    value: (typeof inputs)[K],
  ) {
    setInputs((prev) => ({ ...prev, [key]: value }));
  }

  function numberOrZero(raw: string): number {
    const parsed = Number(raw);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  return (
    <div className="rounded-2xl border border-ash bg-paper p-6 md:p-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1px_1fr]">
        {/* INPUTS */}
        <div>
          <h3 className="text-[18px] font-medium text-ink mb-6">
            Your numbers
          </h3>

          <div className="space-y-5">
            <div>
              <label htmlFor="roi-preset" className={labelBase}>
                What are you using today
              </label>
              <select
                id="roi-preset"
                className={inputBase}
                value={inputs.presetId}
                onChange={(e) => setPreset(e.target.value)}
              >
                {ROI_PRESETS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="roi-overlay" className={labelBase}>
                CRM overlay on top of it
              </label>
              <select
                id="roi-overlay"
                className={inputBase}
                value={inputs.overlayId}
                onChange={(e) =>
                  setOverlay(
                    e.target.value as (typeof ROI_OVERLAYS)[number]["id"],
                  )
                }
              >
                {ROI_OVERLAYS.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="roi-agents" className={labelBase}>
                  Agents
                </label>
                <input
                  id="roi-agents"
                  type="number"
                  min={1}
                  max={50}
                  step={1}
                  className={inputBase}
                  value={inputs.agents}
                  onChange={(e) =>
                    setField("agents", Math.max(1, numberOrZero(e.target.value)))
                  }
                />
              </div>
              <div>
                <label htmlFor="roi-hours" className={labelBase}>
                  Hours per agent per week
                </label>
                <input
                  id="roi-hours"
                  type="number"
                  min={0}
                  max={40}
                  step={0.5}
                  className={inputBase}
                  value={inputs.hoursPerAgentPerWeek}
                  onChange={(e) =>
                    setField(
                      "hoursPerAgentPerWeek",
                      Math.max(0, numberOrZero(e.target.value)),
                    )
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="roi-monthly" className={labelBase}>
                  Monthly cost per user
                </label>
                <input
                  id="roi-monthly"
                  type="number"
                  min={0}
                  step={5}
                  className={inputBase}
                  value={inputs.currentMonthlyPerUser}
                  onChange={(e) =>
                    setField(
                      "currentMonthlyPerUser",
                      Math.max(0, numberOrZero(e.target.value)),
                    )
                  }
                />
              </div>
              <div>
                <label htmlFor="roi-onboarding" className={labelBase}>
                  Onboarding cost
                </label>
                <input
                  id="roi-onboarding"
                  type="number"
                  min={0}
                  step={100}
                  className={inputBase}
                  value={inputs.currentOnboarding}
                  onChange={(e) =>
                    setField(
                      "currentOnboarding",
                      Math.max(0, numberOrZero(e.target.value)),
                    )
                  }
                />
              </div>
            </div>

            <div>
              <label htmlFor="roi-rate" className={labelBase}>
                Your team&rsquo;s blended hourly cost
              </label>
              <input
                id="roi-rate"
                type="number"
                min={0}
                step={5}
                className={inputBase}
                value={inputs.blendedHourlyRate}
                onChange={(e) =>
                  setField(
                    "blendedHourlyRate",
                    Math.max(0, numberOrZero(e.target.value)),
                  )
                }
              />
            </div>
          </div>
        </div>

        {/* DIVIDER (desktop only) */}
        <div aria-hidden="true" className="hidden md:block bg-ash" />

        {/* OUTPUTS */}
        <div>
          <h3 className="text-[18px] font-medium text-ink mb-6">
            Estimated first year recovery
          </h3>

          <div className="rounded-xl bg-anchor p-6 text-paper">
            <p className="text-[13px] font-medium uppercase tracking-wider text-ice">
              First year, switching to HarborIQ Agency
            </p>
            <p className="mt-2 text-[40px] md:text-[48px] font-medium leading-none tracking-tight">
              {formatUsd(outputs.firstYearRecovery)}
            </p>
            <p className="mt-3 text-[13px] text-mist leading-relaxed">
              At your size, HarborIQ Agency is {formatUsd(outputs.harborMonthly)}{" "}
              per month, flat. Never per person. Your current stack:{" "}
              {formatUsd(outputs.currentMonthly)} per month.
            </p>
          </div>

          <dl className="mt-6 space-y-4">
            <div className="flex justify-between gap-4 border-b border-ash pb-3">
              <dt className="text-[14px] text-charcoal">
                Annual software cost difference
              </dt>
              <dd className="text-[14px] font-medium text-ink">
                {formatUsd(outputs.annualSoftwareDelta)}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-ash pb-3">
              <dt className="text-[14px] text-charcoal">
                Onboarding cost avoided
              </dt>
              <dd className="text-[14px] font-medium text-ink">
                {formatUsd(outputs.onboardingAvoided)}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-ash pb-3">
              <dt className="text-[14px] text-charcoal">
                Annual hours recovered
              </dt>
              <dd className="text-[14px] font-medium text-ink">
                {formatHours(outputs.annualHoursRecovered)}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-[14px] text-charcoal">
                Annual time recovered, at your hourly rate
              </dt>
              <dd className="text-[14px] font-medium text-ink">
                {formatUsd(outputs.annualTimeRecoveredDollars)}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <p className="mt-8 text-[13px] text-stone leading-relaxed">
        {activePreset.source} {activeOverlay.source} Defaults come from
        published pricing and what agencies have told us they are paying. Edit
        any input above to model your own numbers.
      </p>
    </div>
  );
}
