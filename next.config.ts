import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export retired 2026-08-26: the demo concierge (/api/concierge)
  // needs server routes. Pages without dynamic APIs are still prerendered
  // static by default, so the marketing pages ship exactly as before.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
