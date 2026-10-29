import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export retired 2026-08-26: the demo concierge (/api/concierge)
  // needs server routes. Pages without dynamic APIs are still prerendered
  // static by default, so the marketing pages ship exactly as before.
  images: {
    unoptimized: true,
  },
  // Markets ($199) was retired 2026-10-28; Intelligence replaced it.
  async redirects() {
    return [
      { source: "/markets", destination: "/pricing#intelligence", permanent: true },
      // Product pages consolidated 2026-10-29: Free workspace, Intelligence, Agency OS.
      { source: "/features/carriers", destination: "/intelligence", permanent: true },
      { source: "/features/pipeline", destination: "/agency#pipeline", permanent: true },
      { source: "/features/renewals", destination: "/agency#renewals", permanent: true },
      { source: "/features/ai-quoting", destination: "/agency#quoting", permanent: true },
      { source: "/features/team", destination: "/agency#team", permanent: true },
    ];
  },
};

export default nextConfig;
