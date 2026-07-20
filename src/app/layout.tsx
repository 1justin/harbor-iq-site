import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

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
        alt: "HarborIQ Command Center, the AI-native operating system for independent insurance agencies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HarborIQ | Your Agents Deserve Better Tools",
    description:
      "Close more business. Keep more clients. Zero busywork. Built for independent insurance agencies.",
    images: ["/images/harboriq-command-center-hero-no-shadow.png"],
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
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
