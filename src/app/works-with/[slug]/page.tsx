import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FitPage } from "@/components/site/FitPage";
import { FITS, fitBySlug } from "@/lib/works-with";

/** One route for the six "with" and "instead of" pages; Applied Epic has its own file beside this one. */

export const dynamicParams = false;
/** Hourly, so the introductory price on the button lapses on its own after December 31, 2026. */
export const revalidate = 3600;

export function generateStaticParams() {
  return FITS.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const fit = fitBySlug(slug);
  if (!fit) return {};
  return {
    title: fit.title,
    description: fit.description,
    alternates: { canonical: `/works-with/${fit.slug}` },
    openGraph: {
      title: fit.h1,
      description: fit.description,
      url: `/works-with/${fit.slug}`,
      images: [{ url: fit.ogImage ?? "/og/default.png", width: 1200, height: 630, alt: fit.h1 }],
    },
  };
}

export default async function WorksWithVendorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fit = fitBySlug(slug);
  if (!fit) notFound();
  return <FitPage fit={fit} />;
}
