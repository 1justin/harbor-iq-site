/**
 * Demo film catalog for /watch (2026-10-14). Source files live in the
 * workspace at assets/harboriq/demo-films/finished and are served from the
 * Vercel Blob store (see VIDEO_BASE). Durations are measured from the files,
 * not promised. Titles are the pain, not the feature name, and the order
 * inside a theme is the order on the page.
 */

export type ThemeId = "overview" | "book" | "grow" | "team";

export type Clip = {
  slug: string;
  theme: ThemeId;
  title: string;
  blurb: string;
  /** Seconds, measured with ffprobe. */
  seconds: number;
  /** Basename of the mp4 in the blob store; the poster shares the stem. */
  file: string;
};

export const THEMES: { id: ThemeId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "book", label: "Managing your book" },
  { id: "grow", label: "Growing your business" },
  { id: "team", label: "Running your team" },
];

export const CLIPS: Clip[] = [
  { slug: "meet-harboriq", theme: "overview", title: "Meet HarborIQ", blurb: "One place to run an independent agency: the book, the renewals, the carriers, and the answers, without the four logins.", seconds: 66, file: "harboriq_demo_d02_meet-harboriq_v01_16x9" },
  { slug: "command-center", theme: "overview", title: "Your day on one screen", blurb: "What needs attention today, who is waiting on you, and what is due this week, before you open a single file.", seconds: 69, file: "harboriq_demo_d03_command-center_v01_16x9" },
  { slug: "ask", theme: "book", title: "Find out which carrier will write it", blurb: "A risk comes in that does not fit. Ask in plain English and get the answer out of the carrier's own guidelines, in seconds.", seconds: 73, file: "harboriq_demo_d01_ask_v01_16x9" },
  { slug: "renewals", theme: "book", title: "See every renewal due this month", blurb: "The renewals list builds itself from the book, so nothing lives in a spreadsheet or in someone's memory.", seconds: 59, file: "harboriq_demo_d06_renewals_v01_16x9" },
  { slug: "client-record", theme: "book", title: "One client record, answered in seconds", blurb: "Policies, documents, notes, and carrier contacts on one record, so a client question gets answered while they are still on the phone.", seconds: 66, file: "harboriq_demo_d05_client-record_v01_16x9" },
  { slug: "keep-your-ams", theme: "book", title: "Keep your AMS, add this beside it", blurb: "HarborIQ runs alongside whatever you use today. Nobody has to rip anything out to get the carrier answers.", seconds: 65, file: "harboriq_demo_d09_keep-your-ams_v01_16x9" },
  { slug: "pipeline", theme: "grow", title: "A pipeline for new business", blurb: "Prospects, quotes in progress, and the follow-ups that usually fall through, tracked in the same place as the book.", seconds: 64, file: "harboriq_demo_d17_new-business-pipeline_v01_16x9" },
  { slug: "cross-sell", theme: "grow", title: "Cross-sell inside the book you have", blurb: "Which clients have the home but not the auto, the business but not the umbrella. The list is already there.", seconds: 58, file: "harboriq_demo_d10_cross-sell-in-your-book_v01_16x9" },
  { slug: "quote-comparison", theme: "grow", title: "Compare quotes side by side", blurb: "Carrier quotes lined up on one screen so the conversation with the client is about coverage, not retyping.", seconds: 77, file: "harboriq_demo_d04_quote-comparison_v01_16x9" },
  { slug: "messages", theme: "team", title: "Messages, attached to the client", blurb: "Team conversations live on the client record, so the next person to pick up the file already knows the story.", seconds: 48, file: "harboriq_demo_d13_messages_v01_16x9" },
  { slug: "alerts", theme: "team", title: "Alerts that find the right person", blurb: "Renewals, documents, and carrier changes reach whoever owns them, not the whole office.", seconds: 48, file: "harboriq_demo_d14_alerts_v01_16x9" },
  { slug: "licensing", theme: "team", title: "Licenses and compliance, tracked", blurb: "Producer licenses, appointments, and CE dates in one view, with the expirations flagged before they bite.", seconds: 48, file: "harboriq_demo_d18_licensing-and-compliance_v01_16x9" },
  { slug: "getting-your-data-in", theme: "team", title: "Getting your book in, done for you", blurb: "The import is done with you, not handed to you. Days, not months, and nothing retyped.", seconds: 67, file: "harboriq_demo_d16_getting-your-data-in_v01_16x9" },
];

export const FULL_TOUR: Clip = {
  slug: "full-tour",
  theme: "overview",
  title: "The full tour",
  blurb: "Everything above in one sitting.",
  seconds: 518,
  file: "harboriq_tour_l1_the-full-tour_v01_16x9",
};

export const DEFAULT_CLIP = "meet-harboriq";

export function findClip(slug: string | undefined): Clip | null {
  if (!slug) return null;
  if (slug === FULL_TOUR.slug) return FULL_TOUR;
  return CLIPS.find((c) => c.slug === slug) ?? null;
}

export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/**
 * Public base URL for the films. NEXT_PUBLIC_WATCH_VIDEO_BASE is the Vercel
 * Blob store origin plus folder; the fallback only exists so local dev
 * renders a page (the files are not in the repo).
 */
export const VIDEO_BASE =
  process.env.NEXT_PUBLIC_WATCH_VIDEO_BASE ?? "/videos/demo-films";

export function videoUrl(clip: Clip): string {
  return `${VIDEO_BASE}/${clip.file}.mp4`;
}

export function posterUrl(clip: Clip): string {
  return `${VIDEO_BASE}/${clip.file.replace("_v01_16x9", "_poster_16x9")}.png`;
}
