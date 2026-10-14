import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findClip, CLIPS, FULL_TOUR } from "@/lib/watch/clips";
import { resolveToken } from "@/lib/watch/db";
import { WatchView } from "../WatchView";

export const metadata: Metadata = {
  title: "Watch the demos | HarborIQ",
  description: "Short walkthroughs of HarborIQ, organized by what you are trying to do.",
  robots: { index: false, follow: false },
};

const SOURCE = /^[a-z0-9-]{1,40}$/;

export function generateStaticParams() {
  return [...CLIPS, FULL_TOUR].map((c) => ({ clip: c.slug }));
}

/**
 * Self-serve demo page (2026-10-14). The link in a cold email carries an
 * opaque token (?v=) that resolves to a first name and agency for the
 * greeting and attributes every view to that person. Links from social carry
 * ?s=linkedin and so on instead. Unlisted and noindex: it is for people we
 * sent here. Chromeless (see RouteChrome) so the only exit is the one ask.
 */
export default async function WatchClipPage({
  params,
  searchParams,
}: {
  params: Promise<{ clip: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { clip: slug } = await params;
  const clip = findClip(slug);
  if (!clip) notFound();

  const query = await searchParams;
  const token = typeof query.v === "string" ? query.v : undefined;
  const rawSource = typeof query.s === "string" ? query.s.toLowerCase() : undefined;
  const campaignParam = typeof query.c === "string" ? query.c.slice(0, 80) : undefined;

  const greeting = await resolveToken(token);
  const source =
    greeting?.source ?? (rawSource && SOURCE.test(rawSource) ? rawSource : token ? "email" : "direct");
  const campaign = greeting?.campaign ?? campaignParam;

  return (
    <WatchView
      initialSlug={clip.slug}
      token={greeting ? token : undefined}
      firstName={greeting?.first_name ?? undefined}
      company={greeting?.company ?? undefined}
      source={source}
      campaign={campaign}
    />
  );
}
