import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "HarborIQ — The AI-Powered Operating System for Independent Insurance Agencies",
  description:
    "Replace fragmented legacy tools with one platform. Pipeline CRM, AI-assisted quoting, team performance, and marketing automation built for independent agencies.",
  openGraph: {
    title: "HarborIQ — The AI-Powered Operating System for Independent Insurance Agencies",
    description:
      "Replace fragmented legacy tools with one platform. Pipeline CRM, AI-assisted quoting, team performance, and marketing automation built for independent agencies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HarborIQ — AI-Powered Agency OS",
    description:
      "One platform. Every carrier. Zero busywork. Built for independent insurance agencies.",
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
      </head>
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
