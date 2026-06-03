/**
 * ROI calculator presets and math.
 * All defaults are auditable here. Visitors can edit any input on the
 * page, so these are honest starting points, not assertions.
 *
 * The Applied Epic preset reflects a 2026 quote received directly by
 * HarborIQ. Other presets reflect published pricing and what agencies
 * have told us they pay. As we collect more first-party data, update
 * the values here.
 */

import { PRICING } from "@/lib/constants";

export type RoiPreset = {
  id: string;
  label: string;
  monthlyPerUser: number;
  onboarding: number;
  timeToValueDays: number;
  hoursPerAgentPerWeek: number;
  /** Plain-language sourcing note. Surfaced under the calculator. */
  source: string;
};

export const ROI_PRESETS: RoiPreset[] = [
  {
    id: "applied-epic",
    label: "Applied Epic",
    monthlyPerUser: 360,
    onboarding: 24000,
    timeToValueDays: 105,
    hoursPerAgentPerWeek: 8,
    source:
      "From a 2026 quote a 5-person agency received before choosing HarborIQ. $24,000 onboarding, $1,800 per month for 5 users, 90 to 120 days to execute.",
  },
  {
    id: "ezlynx",
    label: "EZLynx",
    monthlyPerUser: 115,
    onboarding: 1500,
    timeToValueDays: 45,
    hoursPerAgentPerWeek: 7,
    source:
      "Public per-seat AMS pricing plus reported setup fees. Adjust to match your quote.",
  },
  {
    id: "hawksoft",
    label: "HawkSoft",
    monthlyPerUser: 125,
    onboarding: 3500,
    timeToValueDays: 60,
    hoursPerAgentPerWeek: 7,
    source:
      "Public per-seat AMS pricing plus reported setup fees. Adjust to match your quote.",
  },
  {
    id: "agencyzoom",
    label: "AgencyZoom",
    monthlyPerUser: 165,
    onboarding: 0,
    timeToValueDays: 21,
    hoursPerAgentPerWeek: 8,
    source: "Published per-user pricing. No documented onboarding fee.",
  },
  {
    id: "other",
    label: "Other or unsure",
    monthlyPerUser: 94,
    onboarding: 500,
    timeToValueDays: 30,
    hoursPerAgentPerWeek: 8,
    source:
      "Honest midpoint defaults from published per-seat AMS pricing. Edit to match your situation.",
  },
];

export const HARBORIQ_TEAM_MONTHLY = PRICING.team.monthly;
/** Hands-on onboarding equals one month of plan, $0 with self-serve CSV import. */
export const HARBORIQ_ONBOARDING_DEFAULT = PRICING.team.monthly;
/** Working assumption for a single quote workflow after switch to HarborIQ. */
export const HARBORIQ_HOURS_PER_AGENT_PER_WEEK = 1;

export type RoiInputs = {
  presetId: string;
  agents: number;
  hoursPerAgentPerWeek: number;
  currentMonthlyPerUser: number;
  currentOnboarding: number;
  blendedHourlyRate: number;
};

export type RoiOutputs = {
  /** Difference in monthly software cost, current minus HarborIQ flat. */
  monthlySoftwareDelta: number;
  /** Same delta annualized. */
  annualSoftwareDelta: number;
  /** Onboarding avoided when switching now. */
  onboardingAvoided: number;
  /** Hours recovered across the team each year. */
  annualHoursRecovered: number;
  /** Annual hours recovered valued at the user's blended rate. */
  annualTimeRecoveredDollars: number;
  /** Single first-year recovery headline. */
  firstYearRecovery: number;
};

const WEEKS_PER_YEAR = 50;

export function defaultInputsFor(presetId: string): RoiInputs {
  const preset = ROI_PRESETS.find((p) => p.id === presetId) ?? ROI_PRESETS[0];
  return {
    presetId: preset.id,
    agents: 5,
    hoursPerAgentPerWeek: preset.hoursPerAgentPerWeek,
    currentMonthlyPerUser: preset.monthlyPerUser,
    currentOnboarding: preset.onboarding,
    blendedHourlyRate: 60,
  };
}

export function computeRoi(inputs: RoiInputs): RoiOutputs {
  const currentMonthlySoftware = inputs.agents * inputs.currentMonthlyPerUser;
  const monthlySoftwareDelta = currentMonthlySoftware - HARBORIQ_TEAM_MONTHLY;
  const annualSoftwareDelta = monthlySoftwareDelta * 12;

  const onboardingAvoided = Math.max(0, inputs.currentOnboarding);

  const hoursRecoveredPerAgentPerWeek = Math.max(
    0,
    inputs.hoursPerAgentPerWeek - HARBORIQ_HOURS_PER_AGENT_PER_WEEK,
  );
  const annualHoursRecovered =
    hoursRecoveredPerAgentPerWeek * WEEKS_PER_YEAR * inputs.agents;
  const annualTimeRecoveredDollars =
    annualHoursRecovered * inputs.blendedHourlyRate;

  const firstYearRecovery =
    annualSoftwareDelta + onboardingAvoided + annualTimeRecoveredDollars;

  return {
    monthlySoftwareDelta,
    annualSoftwareDelta,
    onboardingAvoided,
    annualHoursRecovered,
    annualTimeRecoveredDollars,
    firstYearRecovery,
  };
}

export function formatUsd(value: number): string {
  const sign = value < 0 ? "-" : "";
  const abs = Math.abs(Math.round(value));
  return `${sign}$${abs.toLocaleString("en-US")}`;
}

export function formatHours(value: number): string {
  return `${Math.round(value).toLocaleString("en-US")} hrs`;
}
