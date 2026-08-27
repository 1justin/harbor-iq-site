import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DemoPrepView } from "../DemoPrepView";

export const metadata: Metadata = {
  title: "Prepare your demo | HarborIQ",
  description:
    "A couple of minutes of context so your 20-minute demo fits your agency.",
  robots: { index: false, follow: false },
};

/**
 * Clean channel paths, so shared links carry no query strings. The slug maps
 * to the internal source tag; only known channels resolve, everything else
 * 404s. Add a row here when a new channel launches (e.g. email outbound).
 */
const CHANNELS: Record<string, string> = {
  call: "whistle", // booked from a Whistle cold call
  test: "test", // internal and partner experimentation
};

export function generateStaticParams() {
  return Object.keys(CHANNELS).map((channel) => ({ channel }));
}

export default async function DemoPrepChannelPage({
  params,
}: {
  params: Promise<{ channel: string }>;
}) {
  const { channel } = await params;
  const source = CHANNELS[channel];
  if (!source) notFound();
  return <DemoPrepView source={source} />;
}
