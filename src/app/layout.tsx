import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { EngagementTracker } from "@/components/EngagementTracker";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RouteChrome } from "@/components/RouteChrome";

// GA4 measurement ID, set in Vercel project env vars. When unset, no GA code renders.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://harboriq.co"),
  title: "HarborIQ | Carrier answers and agency management for independent insurance agencies",
  description:
    "Find carriers that might write a risk, with the guidance behind every answer. Free agency workspace, Intelligence at $29 per agency per month, or the full Agency OS priced by agency size.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/harboriq-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/harboriq-favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/harboriq-favicon-180.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    title: "Who else might write this risk? | HarborIQ",
    description:
      "Carrier answers with the source attached. Free agency workspace, Intelligence at $29 per agency per month, Agency OS from $199/month. Never per person.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Who else might write this risk? HarborIQ, for independent insurance agencies.",
      },
    ],
  },
  // X and Slack fall back to og:* when twitter-specific tags are absent, so
  // only the card type is declared. Keeps every surface in sync with one card.
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HarborIQ",
              url: "https://harboriq.co",
              logo: "https://harboriq.co/images/harboriq-favicon-512.png",
              description:
                "Carrier answers and agency management for independent insurance agencies: source-backed carrier appetite research, a free agency workspace, and Agency OS for the book, pipeline, and renewals.",
              sameAs: [
                "https://www.linkedin.com/company/harboriqsoftware",
                "https://x.com/haraboriq",
              ],
              foundingDate: "2026",
              founder: {
                "@type": "Person",
                name: "Justin Mayer",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "HarborIQ",
              url: "https://harboriq.co",
            }),
          }}
        />
        <RouteChrome>
          <Nav />
        </RouteChrome>
        <main>{children}</main>
        <RouteChrome>
          <Footer />
        </RouteChrome>
        <Analytics />
        <EngagementTracker />
        {/* GA4 — renders nothing until NEXT_PUBLIC_GA_MEASUREMENT_ID is set (client-side only; static export). */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        {/* Meta pixel: add the same way (env-gated next/script) once the pixel ID exists in Meta Business Suite. */}
      </body>
    </html>
  );
}
