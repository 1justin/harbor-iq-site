/**
 * ROI calculator presets and math.
 * All defaults are auditable here. Visitors can edit any input on the
 * page, so these are honest starting points, not assertions.
 *
 * The Applied Epic preset reflects a 2026 quote received directly by
 * HarborIQ. Other presets reflect published pricing and what agencies
 * have told us they pay. As we collect more first-party data, update
 * the values here.
 *
 * 2026-07-18: reworked for the two-rung ladder and the corrected ICP
 * stack: agencies run an AMS plus ONE CRM overlay (AgencyZoom or
 * GoHighLevel), so the overlay is its own line item, not a preset.
 * HarborIQ's own price is the honest Agency band for the team size.
 */

import { agencyBandFor, OVERLAY_COSTS } from "@/lib/constants";

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
    id: "nowcerts",
    label: "NowCerts (Momentum)",
    monthlyPerUser: 85,
    onboarding: 0,
    timeToValueDays: 30,
    hoursPerAgentPerWeek: 8,
    source:
      "Published 2026 tiers: Essentials $99/user, Professional $169 for 2, Business $349 for 5. The per-user default here approximates the Business tier. No documented onboarding fee.",
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

export type RoiOverlay = {
  id: keyof typeof OVERLAY_COSTS;
  label: string;
  monthly: number;
  source: string;
};

/** CRM overlays agencies pay for on top of the AMS. Pick one, not both. */
export const ROI_OVERLAYS: RoiOverlay[] = [
  {
    id: "none",
    label: OVERLAY_COSTS.none.label,
    monthly: OVERLAY_COSTS.none.monthly,
    source: "",
  },
  {
    id: "agencyzoom",
    label: `${OVERLAY_COSTS.agencyzoom.label} (from $${OVERLAY_COSTS.agencyzoom.monthly}/mo)`,
    monthly: OVERLAY_COSTS.agencyzoom.monthly,
    source: "AgencyZoom's published starting price is $79/mo.",
  },
  {
    id: "gohighlevel",
    label: `${OVERLAY_COSTS.gohighlevel.label} (~$${OVERLAY_COSTS.gohighlevel.monthly}/mo)`,
    monthly: OVERLAY_COSTS.gohighlevel.monthly,
    source:
      "GoHighLevel base plans are $97 to $297/mo plus usage fees for SMS, email, and AI; $197 is an honest midpoint before usage.",
  },
];

/** The honest HarborIQ Agency price for a given team size. */
export function harborMonthlyFor(agents: number): number {
  return agencyBandFor(Math.min(Math.max(1, agents), 15)).monthly;
}

/** Working assumption for a single quote workflow after switch to HarborIQ. */
export const HARBORIQ_HOURS_PER_AGENT_PER_WEEK = 1;

export type RoiInputs = {
  presetId: string;
  overlayId: RoiOverlay["id"];
  agents: number;
  hoursPerAgentPerWeek: number;
  currentMonthlyPerUser: number;
  overlayMonthly: number;
  currentOnboarding: number;
  blendedHourlyRate: number;
};

export type RoiOutputs = {
  /** The HarborIQ Agency band price used, from the team size. */
  harborMonthly: number;
  /** Current stack monthly: AMS per-seat total plus the overlay. */
  currentMonthly: number;
  /** Difference in monthly software cost, current stack minus HarborIQ flat. */
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

export function defaultInputsFor(
  presetId: string,
  overlayId: RoiOverlay["id"] = "none",
): RoiInputs {
  const preset = ROI_PRESETS.find((p) => p.id === presetId) ?? ROI_PRESETS[0];
  const overlay = ROI_OVERLAYS.find((o) => o.id === overlayId) ?? ROI_OVERLAYS[0];
  return {
    presetId: preset.id,
    overlayId: overlay.id,
    agents: 5,
    hoursPerAgentPerWeek: preset.hoursPerAgentPerWeek,
    currentMonthlyPerUser: preset.monthlyPerUser,
    overlayMonthly: overlay.monthly,
    currentOnboarding: preset.onboarding,
    blendedHourlyRate: 60,
  };
}

export function computeRoi(inputs: RoiInputs): RoiOutputs {
  const harborMonthly = harborMonthlyFor(inputs.agents);
  const currentMonthly =
    inputs.agents * inputs.currentMonthlyPerUser + inputs.overlayMonthly;
  const monthlySoftwareDelta = currentMonthly - harborMonthly;
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
    harborMonthly,
    currentMonthly,
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
