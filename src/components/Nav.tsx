"use client";

import Link from "next/link";
import Image from "next/image";
import { DEMO_PAGE, START_FREE_URL } from "@/lib/constants";
import { useState, useEffect, useRef } from "react";

const featureLinks = [
  { href: "/free", label: "Free workspace" },
  { href: "/pricing#intelligence", label: "Intelligence" },
  { href: "/pricing#agency-os", label: "Agency OS" },
  { href: "/features/pipeline", label: "Pipeline CRM" },
  { href: "/features/renewals", label: "Renewals" },
  { href: "/features/carriers", label: "Carrier intelligence" },
  { href: "/features/team", label: "Team Performance" },
  { href: "/features/ai-quoting", label: "Smarter Quoting" },
];

const compareLinks = [
  { href: "/compare/applied-epic", label: "vs Applied Epic" },
  { href: "/compare/agencyzoom", label: "vs AgencyZoom" },
  { href: "/compare/ezlynx", label: "vs EZLynx" },
  { href: "/compare/hawksoft", label: "vs HawkSoft" },
  { href: "/compare/nowcerts", label: "vs NowCerts" },
  { href: "/compare/gohighlevel", label: "vs GoHighLevel" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenDropdown(null);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header ref={navRef} className="sticky top-0 z-50 bg-anchor backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/harboriq-logo-white.svg"
            alt="HarborIQ"
            width={140}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {/* Features dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === "features" ? null : "features")}
              className="text-paper hover:text-mist text-[15px] transition-colors flex items-center gap-1"
            >
              Product
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={`transition-transform duration-150 ${openDropdown === "features" ? "rotate-180" : ""}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {openDropdown === "features" && (
              <div className="absolute top-full left-0 mt-2 bg-paper rounded-lg shadow-xl border border-ash py-2 min-w-[220px]">
                <Link
                  href="/#see-it-work"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-2 text-[15px] text-charcoal hover:bg-linen hover:text-ink transition-colors"
                >
                  Overview
                </Link>
                <div className="border-t border-ash my-1" />
                {featureLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 text-[15px] text-charcoal hover:bg-linen hover:text-ink transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Compare dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === "compare" ? null : "compare")}
              className="text-paper hover:text-mist text-[15px] transition-colors flex items-center gap-1"
            >
              Compare
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={`transition-transform duration-150 ${openDropdown === "compare" ? "rotate-180" : ""}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {openDropdown === "compare" && (
              <div className="absolute top-full left-0 mt-2 bg-paper rounded-lg shadow-xl border border-ash py-2 min-w-[200px]">
                <Link
                  href="/compare"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-2 text-[15px] text-charcoal hover:bg-linen hover:text-ink transition-colors"
                >
                  Overview
                </Link>
                <div className="border-t border-ash my-1" />
                {compareLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 text-[15px] text-charcoal hover:bg-linen hover:text-ink transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/pricing" className="text-paper hover:text-mist text-[15px] transition-colors">
            Pricing
          </Link>
          <Link href="/find-an-agency" className="whitespace-nowrap text-paper hover:text-mist text-[15px] transition-colors">
            Find an agency
          </Link>
          <Link href="/about" className="text-paper hover:text-mist text-[15px] transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-paper hover:text-mist text-[15px] transition-colors">
            Blog
          </Link>
          <a
            href={DEMO_PAGE}
            className="cta-secondary whitespace-nowrap text-paper hover:text-mist text-[15px] transition-colors"
          >
            Book a demo
          </a>
          <a
            href={START_FREE_URL}
            className="cta-primary whitespace-nowrap bg-copper text-white btn-radius px-4 py-2 text-[15px] font-medium hover:bg-bronze transition-colors"
          >
            Start free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-paper"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-midnight bg-anchor px-6 py-4 space-y-4">
          {/* Features section */}
          <div>
            <button
              onClick={() => setOpenDropdown(openDropdown === "m-features" ? null : "m-features")}
              className="flex items-center justify-between w-full text-paper text-[15px]"
            >
              Product
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={`transition-transform duration-150 ${openDropdown === "m-features" ? "rotate-180" : ""}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {openDropdown === "m-features" && (
              <div className="mt-2 ml-4 space-y-2">
                <Link href="/#see-it-work" onClick={() => setMobileOpen(false)} className="block text-mist text-[14px]">Overview</Link>
                {featureLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block text-mist text-[14px]">
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Compare section */}
          <div>
            <button
              onClick={() => setOpenDropdown(openDropdown === "m-compare" ? null : "m-compare")}
              className="flex items-center justify-between w-full text-paper text-[15px]"
            >
              Compare
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={`transition-transform duration-150 ${openDropdown === "m-compare" ? "rotate-180" : ""}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {openDropdown === "m-compare" && (
              <div className="mt-2 ml-4 space-y-2">
                <Link href="/compare" onClick={() => setMobileOpen(false)} className="block text-mist text-[14px]">
                  Overview
                </Link>
                {compareLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block text-mist text-[14px]">
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/pricing" onClick={() => setMobileOpen(false)} className="block text-paper text-[15px]">
            Pricing
          </Link>
          <Link href="/find-an-agency" onClick={() => setMobileOpen(false)} className="block text-paper text-[15px]">
            Find an agency
          </Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-paper text-[15px]">
            About
          </Link>
          <Link href="/manifesto" onClick={() => setMobileOpen(false)} className="block text-paper text-[15px]">
            Manifesto
          </Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="block text-paper text-[15px]">
            Blog
          </Link>
          <Link href="/newsroom" onClick={() => setMobileOpen(false)} className="block text-paper text-[15px]">
            Newsroom
          </Link>
          <div className="pt-2 mt-2 border-t border-midnight space-y-3">
            <a
              href={START_FREE_URL}
              onClick={() => setMobileOpen(false)}
              className="cta-primary block bg-copper text-white btn-radius px-4 py-2 text-[15px] font-medium text-center"
            >
              Start free
            </a>
            <a
              href={DEMO_PAGE}
              onClick={() => setMobileOpen(false)}
              className="cta-secondary block text-center text-mist text-[15px]"
            >
              Book a demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
