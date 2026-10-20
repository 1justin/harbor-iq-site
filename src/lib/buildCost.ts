/**
 * Cost-to-keep calculator for /compare/build-your-own.
 *
 * Compares the yearly cost of keeping a homegrown system running against
 * HarborIQ Agency at the same team size. The build itself is left out on
 * purpose: for an owner who already built, that cost is behind them.
 *
 * Nobody thinks about their pay by the hour, so the page asks for yearly
 * take-home and hours worked and derives the hourly figure. For an owner it
 * also asks what they want the take-home to be, and prices the same upkeep
 * hours a second time at that goal. For someone on the team, the hour is
 * priced at what it costs the agency (pay plus benefits and payroll taxes),
 * and a second time at what an hour in the agency brings in.
 *
 * Every default below is a starting assumption, not first-party data, and
 * every one is editable on the page. As call notes give us real upkeep
 * hours, update the values here.
 */

import { agencyBandFor } from "@/lib/constants";

export type Maintainer = {
  id: "owner" | "team";
  label: string;
  /** Label for the yearly pay input, so it reads right for each case. */
  payLabel: string;
  hoursLabel: string;
  yearlyPay: number;
  hoursWorkedPerWeek: number;
};

/** Who looks after the build. Sets labels and default pay only. */
export const MAINTAINERS: Maintainer[] = [
  {
    id: "owner",
    label: "The owner",
    payLabel: "Yearly take-home now",
    hoursLabel: "Hours worked a week",
    yearlyPay: 150000,
    hoursWorkedPerWeek: 50,
  },
  {
    id: "team",
    label: "Someone on the team",
    payLabel: "Their yearly pay",
    hoursLabel: "Hours they work a week",
    yearlyPay: 60000,
    hoursWorkedPerWeek: 40,
  },
];

export const DEFAULT_GOAL_TAKE_HOME = 250000;
/** AI coding subscription plus a database and hosting, per month. */
export const DEFAULT_TOOLS_MONTHLY = 150;
export const DEFAULT_HOURS_ON_SYSTEM = 4;
export const DEFAULT_AGENCY_REVENUE = 1000000;

/**
 * What an employee costs beyond their pay: benefits and payroll taxes.
 * BLS Employer Costs for Employee Compensation (June 2026) has wages at
 * 70.0% of total cost for private industry, which is about 1.43x pay. Small
 * agencies tend to carry lighter benefits, so this stays under that.
 */
export const LOADED_COST_MULTIPLIER = 1.3;

/** Inside this many dollars a year, the two are called roughly even. */
export const ROUGHLY_EVEN_WITHIN = 500;

const WEEKS_PER_YEAR = 50;
const HOURS_PER_WORK_WEEK = 40;

export type BuildCostInputs = {
  maintainerId: Maintainer["id"];
  teamSize: number;
  yearlyPay: number;
  /** Owner only: the take-home they are working toward. */
  goalTakeHome: number;
  hoursWorkedPerWeek: number;
  hoursOnSystemPerWeek: number;
  toolsMonthly: number;
  /** Team only: yearly agency revenue, for what an hour brings in. */
  agencyRevenue: number;
};

export type BuildCostOutputs = {
  /** The HarborIQ Agency band price for the team size. */
  harborMonthly: number;
  harborAnnual: number;
  toolsAnnual: number;
  /**
   * What an hour of the maintainer's time is worth. Owner: take-home over
   * hours worked. Team: pay plus benefits and taxes, over hours worked.
   */
  hourlyValue: number;
  /** Same, at the goal take-home. Null unless the owner maintains it. */
  goalHourlyValue: number | null;
  hoursPerYear: number;
  /** hoursPerYear expressed as 40-hour work weeks. */
  workWeeksPerYear: number;
  /** Share of the working week that goes to the system, 0 to 1. */
  shareOfWeek: number;
  /** Upkeep hours priced at today's pay. */
  timeAnnual: number;
  /** Upkeep hours priced at the goal take-home. Null unless owner. */
  timeAnnualAtGoal: number | null;
  /**
   * Agency revenue per person, per hour worked. Null unless someone on the
   * team maintains it. An average, not what this one hour would have sold.
   */
  revenueHourlyValue: number | null;
  /** Upkeep hours priced at what an agency hour brings in. Null unless team. */
  timeAnnualAtRevenue: number | null;
  /** Tools plus time, at today's pay. */
  buildAnnual: number;
  /** Build minus HarborIQ. Negative means the build costs less. */
  annualDifference: number;
  /** True when the difference is too small to call either way. */
  roughlyEven: boolean;
  /**
   * Upkeep hours per month at which the two cost the same, at today's
   * hourly value. Null when that value is zero (no break-even exists).
   */
  breakEvenHoursPerMonth: number | null;
};

export function defaultBuildCostInputs(
  maintainerId: Maintainer["id"] = "owner",
): BuildCostInputs {
  const maintainer =
    MAINTAINERS.find((m) => m.id === maintainerId) ?? MAINTAINERS[0];
  return {
    maintainerId: maintainer.id,
    teamSize: 5,
    yearlyPay: maintainer.yearlyPay,
    goalTakeHome: DEFAULT_GOAL_TAKE_HOME,
    hoursWorkedPerWeek: maintainer.hoursWorkedPerWeek,
    hoursOnSystemPerWeek: DEFAULT_HOURS_ON_SYSTEM,
    toolsMonthly: DEFAULT_TOOLS_MONTHLY,
    agencyRevenue: DEFAULT_AGENCY_REVENUE,
  };
}

export function computeBuildCost(inputs: BuildCostInputs): BuildCostOutputs {
  const teamSize = Math.min(Math.max(1, inputs.teamSize), 15);
  const harborMonthly = agencyBandFor(teamSize).monthly;
  const harborAnnual = harborMonthly * 12;

  const hoursWorkedPerYear = inputs.hoursWorkedPerWeek * WEEKS_PER_YEAR;
  const perHour = (yearly: number) =>
    hoursWorkedPerYear > 0 ? yearly / hoursWorkedPerYear : 0;

  const isOwner = inputs.maintainerId === "owner";
  const hourlyValue = isOwner
    ? perHour(inputs.yearlyPay)
    : perHour(inputs.yearlyPay * LOADED_COST_MULTIPLIER);
  const goalHourlyValue = isOwner ? perHour(inputs.goalTakeHome) : null;
  const revenueHourlyValue = isOwner
    ? null
    : perHour(inputs.agencyRevenue / teamSize);

  const toolsAnnual = inputs.toolsMonthly * 12;
  const hoursPerYear = inputs.hoursOnSystemPerWeek * WEEKS_PER_YEAR;
  const timeAnnual = hoursPerYear * hourlyValue;
  const buildAnnual = toolsAnnual + timeAnnual;
  const annualDifference = buildAnnual - harborAnnual;

  return {
    harborMonthly,
    harborAnnual,
    toolsAnnual,
    hourlyValue,
    goalHourlyValue,
    hoursPerYear,
    workWeeksPerYear: hoursPerYear / HOURS_PER_WORK_WEEK,
    shareOfWeek:
      inputs.hoursWorkedPerWeek > 0
        ? Math.min(1, inputs.hoursOnSystemPerWeek / inputs.hoursWorkedPerWeek)
        : 0,
    timeAnnual,
    timeAnnualAtGoal:
      goalHourlyValue === null ? null : hoursPerYear * goalHourlyValue,
    revenueHourlyValue,
    timeAnnualAtRevenue:
      revenueHourlyValue === null ? null : hoursPerYear * revenueHourlyValue,
    buildAnnual,
    annualDifference,
    roughlyEven: Math.abs(annualDifference) <= ROUGHLY_EVEN_WITHIN,
    breakEvenHoursPerMonth:
      hourlyValue > 0
        ? Math.max(0, (harborMonthly - inputs.toolsMonthly) / hourlyValue)
        : null,
  };
}
