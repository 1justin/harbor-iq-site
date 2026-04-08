"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const featureLinks = [
  { href: "/features/pipeline", label: "Pipeline CRM" },
  { href: "/features/renewals", label: "Renewals" },
  { href: "/features/carriers", label: "Carrier Management" },
  { href: "/features/team", label: "Team Performance" },
  { href: "/features/ai-quoting", label: "AI-Assisted Quoting" },
];

const compareLinks = [
  { href: "/compare/ezlynx", label: "vs EZLynx" },
  { href: "/compare/hawksoft", label: "vs HawkSoft" },
  { href: "/compare/applied-epic", label: "vs Applied Epic" },
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
        <div className="hidden md:flex items-center gap-8">
          {/* Features dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === "features" ? null : "features")}
              className="text-paper hover:text-mist text-[15px] transition-colors flex items-center gap-1"
            >
              Features
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={`transition-transform duration-150 ${openDropdown === "features" ? "rotate-180" : ""}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {openDropdown === "features" && (
              <div className="absolute top-full left-0 mt-2 bg-paper rounded-lg shadow-xl border border-ash py-2 min-w-[220px]">
                <Link
                  href="/#features"
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
          <Link href="/about" className="text-paper hover:text-mist text-[15px] transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-paper hover:text-mist text-[15px] transition-colors">
            Blog
          </Link>
          <a
            href="https://tidycal.com/cjmayer/harboriq-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary bg-interactive text-white btn-radius px-4 py-2 text-[15px] font-medium hover:bg-deep transition-colors"
          >
            Book a demo
          </a>
          <a
            href="https://www.creem.io/payment/prod_1SDGs4JxhPJ0yQonbNfIHV"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary bg-copper text-white btn-radius px-4 py-2 text-[15px] font-medium hover:bg-bronze transition-colors"
          >
            Reserve Your Spot
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-paper"
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
        <div className="md:hidden border-t border-midnight bg-anchor px-6 py-4 space-y-4">
          {/* Features section */}
          <div>
            <button
              onClick={() => setOpenDropdown(openDropdown === "m-features" ? null : "m-features")}
              className="flex items-center justify-between w-full text-paper text-[15px]"
            >
              Features
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={`transition-transform duration-150 ${openDropdown === "m-features" ? "rotate-180" : ""}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {openDropdown === "m-features" && (
              <div className="mt-2 ml-4 space-y-2">
                <Link href="/#features" onClick={() => setMobileOpen(false)} className="block text-mist text-[14px]">Overview</Link>
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
          <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-paper text-[15px]">
            About
          </Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="block text-paper text-[15px]">
            Blog
          </Link>
          <div className="pt-2 mt-2 border-t border-midnight space-y-3">
            <a
              href="https://tidycal.com/cjmayer/harboriq-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-interactive text-white btn-radius px-4 py-2 text-[15px] font-medium text-center"
            >
              Book a demo
            </a>
            <a
              href="https://www.creem.io/payment/prod_1SDGs4JxhPJ0yQonbNfIHV"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block bg-copper text-white btn-radius px-4 py-2 text-[15px] font-medium text-center"
            >
              Reserve Your Spot
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
