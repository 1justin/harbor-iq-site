import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RouteChrome } from "@/components/RouteChrome";

// GA4 measurement ID, set in Vercel project env vars. When unset, no GA code renders.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://harboriq.co"),
  title: "HarborIQ | Agency Management System for Independent Insurance Agencies",
  description:
    "AI-powered agency management system (AMS) for independent insurance agencies. Pipeline CRM, renewals, team tracking, AI-assisted quoting. Flat monthly pricing, no per-user fees.",
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
    title: "HarborIQ | Agency Management System for Independent Insurance Agencies",
    description:
      "One product, two ways in. Markets: carrier intelligence at $199/mo for any size. Agency: the whole operation in one login, from $199/mo. Never per person.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "You built this agency. Your software should act like it. HarborIQ, for independent insurance agencies.",
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
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap"
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
                "AI-powered agency management system for independent insurance agencies. Pipeline CRM, renewals, team tracking, AI-assisted quoting.",
              sameAs: [
                "https://www.linkedin.com/company/harboriq",
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
