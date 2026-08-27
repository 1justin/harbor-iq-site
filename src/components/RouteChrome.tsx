"use client";

import { usePathname } from "next/navigation";

/**
 * Hides the global Nav/Footer on focused completion experiences where exits
 * hurt (e.g. /demo-prep: the prospect has already booked; a "Book a demo"
 * button in the header reads as "did my booking work?").
 */
const CHROMELESS_PREFIXES = ["/demo-prep"];

export function RouteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname && CHROMELESS_PREFIXES.some((p) => pathname.startsWith(p))) {
    return null;
  }
  return <>{children}</>;
}
