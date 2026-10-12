"use client";

import { useMemo, useState } from "react";
import {
  LOADED_COST_MULTIPLIER,
  MAINTAINERS,
  computeBuildCost,
  defaultBuildCostInputs,
  type Maintainer,
} from "@/lib/buildCost";
import { DEMO_PAGE } from "@/lib/constants";
import { formatUsd } from "@/lib/roi";

const inputBase =
  "w-full rounded-md border border-anchor/40 bg-paper px-3 py-2 text-[15px] text-ink focus:border-interactive focus:outline-none";
const labelBase =
  "block text-[13px] font-medium text-stone uppercase tracking-wider mb-2";

/** What people leave out when they estimate upkeep. */
const WHAT_COUNTS = [
  "Fixing what broke",
  "Changes the staff ask for",
  "Showing a new hire how it works",
  "Redoing an import that went wrong",
  "Checking it still works after an update",
];

function numberOrZero(raw: string): number {
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : 0;
}

/** One decimal when it matters ("1.5"), none when it does not ("3"). */
function formatCount(value: number): string {
  return (Math.round(value * 10) / 10).toLocaleString("en-US");
}

/**
 * Dollar field that shows commas (150,000, not 150000). A number input
 * cannot display separators, so this is a text field that keeps only digits
 * and still brings up the number pad on phones.
 */
function MoneyInput({
  id,
  value,
  onChange,
}: {
  id: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[15px] text-stone"
      >
        $
      </span>
      <input
        id={id}
        type="text"
        inputMode="numeric"
        autoComplete="off"
        className={`${inputBase} pl-7`}
        value={value.toLocaleString("en-US")}
        onChange={(e) =>
          onChange(numberOrZero(e.target.value.replace(/\D/g, "").slice(0, 9)))
        }
      />
    </div>
  );
}

export function BuildCostCalculator() {
  const [inputs, setInputs] = useState(() => defaultBuildCostInputs());

  const outputs = useMemo(() => computeBuildCost(inputs), [inputs]);
  const maintainer =
    MAINTAINERS.find((m) => m.id === inputs.maintainerId) ?? MAINTAINERS[0];
  const isOwner = maintainer.id === "owner";
  const whose = isOwner ? "the owner's" : "their";

  function setMaintainer(id: Maintainer["id"]) {
    const next = MAINTAINERS.find((m) => m.id === id) ?? MAINTAINERS[0];
    setInputs((prev) => ({
      ...prev,
      maintainerId: next.id,
      yearlyPay: next.yearlyPay,
      hoursWorkedPerWeek: next.hoursWorkedPerWeek,
    }));
  }

  function setField<K extends keyof typeof inputs>(
    key: K,
    value: (typeof inputs)[K],
  ) {
    setInputs((prev) => ({ ...prev, [key]: value }));
  }

  const buildCostsMore = outputs.annualDifference > 0;
  const scale = Math.max(outputs.buildAnnual, outputs.harborAnnual, 1);
  const pct = (value: number) => `${(value / scale) * 100}%`;

  // Step 3: the same hours, priced at what they could be worth instead.
  const couldBe = isOwner ? outputs.timeAnnualAtGoal : outputs.timeAnnualAtRevenue;
  const showCouldBe =
    couldBe !== null &&
    couldBe > 0 &&
    (isOwner ? inputs.goalTakeHome > inputs.yearlyPay : true);

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
              <label htmlFor="build-maintainer" className={labelBase}>
                Who keeps your system running
              </label>
              <select
                id="build-maintainer"
                className={inputBase}
                value={inputs.maintainerId}
                onChange={(e) =>
                  setMaintainer(e.target.value as Maintainer["id"])
                }
              >
                {MAINTAINERS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="build-pay" className={labelBase}>
                {maintainer.payLabel}
              </label>
              <MoneyInput
                id="build-pay"
                value={inputs.yearlyPay}
                onChange={(v) => setField("yearlyPay", v)}
              />
            </div>

            {isOwner ? (
              <div>
                <label htmlFor="build-goal" className={labelBase}>
                  Take-home you want
                </label>
                <MoneyInput
                  id="build-goal"
                  value={inputs.goalTakeHome}
                  onChange={(v) => setField("goalTakeHome", v)}
                />
              </div>
            ) : (
              <div>
                <label htmlFor="build-revenue" className={labelBase}>
                  Agency revenue a year
                </label>
                <MoneyInput
                  id="build-revenue"
                  value={inputs.agencyRevenue}
                  onChange={(v) => setField("agencyRevenue", v)}
                />
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="build-worked" className={labelBase}>
                  {maintainer.hoursLabel}
                </label>
                <input
                  id="build-worked"
                  type="number"
                  min={1}
                  max={100}
                  step={1}
                  className={inputBase}
                  value={inputs.hoursWorkedPerWeek}
                  onChange={(e) =>
                    setField(
                      "hoursWorkedPerWeek",
                      Math.max(0, numberOrZero(e.target.value)),
                    )
                  }
                />
              </div>
              <div>
                <label htmlFor="build-hours" className={labelBase}>
                  Hours a week on the system
                </label>
                <input
                  id="build-hours"
                  type="number"
                  min={0}
                  max={60}
                  step={0.5}
                  className={inputBase}
                  value={inputs.hoursOnSystemPerWeek}
                  onChange={(e) =>
                    setField(
                      "hoursOnSystemPerWeek",
                      Math.max(0, numberOrZero(e.target.value)),
                    )
                  }
                />
              </div>
            </div>

            <div className="rounded-md bg-linen px-4 py-3">
              <p className="text-[13px] font-medium text-charcoal">
                Most people guess low. Hours on the system include:
              </p>
              <ul className="mt-1.5 space-y-0.5 text-[13px] text-stone leading-relaxed">
                {WHAT_COUNTS.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true">&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="build-tools" className={labelBase}>
                  Monthly tool bill
                </label>
                <MoneyInput
                  id="build-tools"
                  value={inputs.toolsMonthly}
                  onChange={(v) => setField("toolsMonthly", v)}
                />
              </div>
              <div>
                <label htmlFor="build-team" className={labelBase}>
                  People in the agency
                </label>
                <input
                  id="build-team"
                  type="number"
                  min={1}
                  max={15}
                  step={1}
                  className={inputBase}
                  value={inputs.teamSize}
                  onChange={(e) =>
                    setField(
                      "teamSize",
                      Math.min(15, Math.max(1, numberOrZero(e.target.value))),
                    )
                  }
                />
              </div>
            </div>
            <p className="text-[13px] text-stone leading-relaxed">
              The tool bill is your AI coding subscription, plus a database and
              hosting.
            </p>
          </div>
        </div>

        {/* DIVIDER (desktop only) */}
        <div aria-hidden="true" className="hidden md:block bg-ash" />

        {/* OUTPUTS: three steps, one big number each */}
        <div aria-live="polite">
          <h3 className="text-[18px] font-medium text-ink mb-6">
            What your own system costs you each year
          </h3>

          {/* 1. The time */}
          <div className="rounded-xl bg-anchor p-6 text-paper">
            <p className="text-[13px] font-medium uppercase tracking-wider text-ice">
              1. The time it takes
            </p>
            <p className="mt-2 text-[36px] md:text-[44px] font-medium leading-none tracking-tight">
              {Math.round(outputs.hoursPerYear).toLocaleString("en-US")} hours
              a year
            </p>
            <p className="mt-3 text-[14px] text-mist leading-relaxed">
              That is {formatCount(outputs.workWeeksPerYear)} full work weeks
              of {whose} time, every year, spent keeping the system you built
              working.
            </p>
          </div>

          {/* 2. The cost, against HarborIQ */}
          <div className="mt-6">
            <p className="text-[13px] font-medium uppercase tracking-wider text-stone">
              2. What that costs
            </p>

            <div className="mt-3 space-y-4">
              <div>
                <div className="flex justify-between gap-4 text-[14px]">
                  <span className="text-charcoal">Your own system</span>
                  <span className="font-medium text-ink">
                    {formatUsd(outputs.buildAnnual)}
                  </span>
                </div>
                <div className="mt-2 flex h-4 w-full overflow-hidden rounded-full bg-linen">
                  <div
                    className="h-full bg-fog transition-[width] duration-300"
                    style={{ width: pct(outputs.toolsAnnual) }}
                  />
                  <div
                    className="h-full bg-copper transition-[width] duration-300"
                    style={{ width: pct(outputs.timeAnnual) }}
                  />
                </div>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-stone">
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block h-2 w-2 rounded-full bg-fog" />
                    Tools {formatUsd(outputs.toolsAnnual)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block h-2 w-2 rounded-full bg-copper" />
                    Time {formatUsd(outputs.timeAnnual)}
                  </span>
                </div>
              </div>

              <div>
                <div className="flex justify-between gap-4 text-[14px]">
                  <span className="text-charcoal">HarborIQ Agency</span>
                  <span className="font-medium text-ink">
                    {formatUsd(outputs.harborAnnual)}
                  </span>
                </div>
                <div className="mt-2 flex h-4 w-full overflow-hidden rounded-full bg-linen">
                  <div
                    className="h-full bg-interactive transition-[width] duration-300"
                    style={{ width: pct(outputs.harborAnnual) }}
                  />
                </div>
                <p className="mt-2 text-[12px] text-stone">
                  {formatUsd(outputs.harborMonthly)} a month at your size,
                  flat. Never per person.
                </p>
              </div>
            </div>

            <p className="mt-4 text-[16px] font-medium text-ink leading-snug">
              {outputs.roughlyEven
                ? `On cost alone, the two are roughly even: within ${formatUsd(Math.abs(outputs.annualDifference))} a year. The bill does not decide it. The risks further down do.`
                : buildCostsMore
                  ? `Your own system costs ${formatUsd(outputs.annualDifference)} a year more than HarborIQ.`
                  : `Your own system costs ${formatUsd(Math.abs(outputs.annualDifference))} a year less than HarborIQ. If the hours stay this low, keeping it is the cheaper call.`}
            </p>
            <p className="mt-1 text-[13px] text-stone leading-relaxed">
              {isOwner
                ? `The owner's time is counted at ${formatUsd(outputs.hourlyValue)} an hour, from the take-home above.`
                : `Their time is counted at ${formatUsd(outputs.hourlyValue)} an hour: pay, plus benefits and payroll taxes.`}
              {outputs.breakEvenHoursPerMonth !== null &&
                ` The two cost the same at ${formatCount(outputs.breakEvenHoursPerMonth)} hours of upkeep a month.`}
            </p>
          </div>

          {/* 3. What the same hours could be worth instead */}
          {showCouldBe && couldBe !== null && (
            <div className="mt-6 rounded-xl border border-ash bg-linen p-6">
              <p className="text-[13px] font-medium uppercase tracking-wider text-stone">
                3. What those hours could be worth instead
              </p>
              <p className="mt-2 text-[36px] md:text-[44px] font-medium text-copper leading-none tracking-tight">
                {formatUsd(couldBe)} a year
              </p>
              <p className="mt-3 text-[14px] text-charcoal leading-relaxed">
                {isOwner
                  ? `At the take-home you want, an hour of the owner's time is worth ${formatUsd(outputs.goalHourlyValue ?? 0)}. Those hours are ${formatCount(outputs.shareOfWeek * 100)}% of the week, and right now they are going to software.`
                  : `The agency brings in about ${formatUsd(outputs.revenueHourlyValue ?? 0)} for every hour one person works. That is what those hours could go toward. It is an average across everyone, not a promise about any one hour.`}
              </p>
            </div>
          )}

          <a
            href={DEMO_PAGE}
            className="cta-secondary mt-6 block bg-interactive text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-deep transition-colors text-center"
          >
            See how to get those hours back
          </a>
          <p className="mt-2 text-[13px] text-stone text-center">
            A 20 minute demo. Bring what you built.
          </p>
        </div>
      </div>

      <p className="mt-8 text-[13px] text-stone leading-relaxed">
        The starting numbers are examples, not data about your agency. Change
        any of them. An hour is yearly pay divided by hours worked, over 50
        weeks. For someone on the team, pay is multiplied by{" "}
        {LOADED_COST_MULTIPLIER} for benefits and payroll taxes; the national
        average for private employers is closer to 1.4 (Bureau of Labor
        Statistics, June 2026). Not counted: the time already spent building
        it, and the risks further down this page. HarborIQ is shown at 12
        months of the published monthly price.
      </p>
    </div>
  );
}
