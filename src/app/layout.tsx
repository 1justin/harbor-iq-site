import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "HarborIQ — Close More Business. Keep More Clients. Zero Busywork.",
  description:
    "Your agents shouldn't spend two hours quoting what a captive agent quotes in twenty minutes. HarborIQ gives independent agencies the tools they deserve.",
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
    title: "HarborIQ — Close More Business. Keep More Clients. Zero Busywork.",
    description:
      "Your agents shouldn't spend two hours quoting what a captive agent quotes in twenty minutes. HarborIQ gives independent agencies the tools they deserve.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HarborIQ — Your Agents Deserve Better Tools",
    description:
      "Close more business. Keep more clients. Zero busywork. Built for independent insurance agencies.",
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
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
