"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

/**
 * Reddit Pixel. The ID is public (it ships in the page), so it lives here with
 * an env override rather than being a required Vercel var.
 *
 * `init` plus the first PageVisit run in the loader snippet. Next.js
 * navigates client-side, so later route changes fire PageVisit from the
 * effect below; without it only the landing page would ever count.
 */
const REDDIT_PIXEL_ID = process.env.NEXT_PUBLIC_REDDIT_PIXEL_ID ?? "a2_jzrst17q4en3";

type Rdt = (...args: unknown[]) => void;

export function RedditPixel() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    // The loader snippet already sent PageVisit for the landing page.
    if (first.current) {
      first.current = false;
      return;
    }
    const rdt = (window as unknown as { rdt?: Rdt }).rdt;
    rdt?.("track", "PageVisit");
  }, [pathname]);

  return (
    <Script id="reddit-pixel" strategy="afterInteractive">
      {`!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','${REDDIT_PIXEL_ID}');rdt('track','PageVisit');`}
    </Script>
  );
}
