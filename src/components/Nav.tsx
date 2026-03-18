"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-ash/60">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/harboriq-logo-primary.svg"
            alt="HarborIQ"
            width={140}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-charcoal hover:text-harbor text-[15px] transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-charcoal hover:text-harbor text-[15px] transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-charcoal hover:text-harbor text-[15px] transition-colors">
            About
          </Link>
          <a
            href="https://tidycal.com/cjmayer/15-minute-intro"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary text-harbor border border-harbor rounded-lg px-4 py-2 text-[15px] font-medium hover:bg-harbor hover:text-white transition-colors"
          >
            Book a demo
          </a>
          <Link
            href="/pricing"
            className="cta-primary bg-copper text-white rounded-lg px-4 py-2 text-[15px] font-medium hover:bg-bronze transition-colors"
          >
            Get started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-charcoal"
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
        <div className="md:hidden border-t border-ash bg-paper px-6 py-4 space-y-4">
          <Link href="/#features" onClick={() => setMobileOpen(false)} className="block text-charcoal text-[15px]">
            Features
          </Link>
          <Link href="/pricing" onClick={() => setMobileOpen(false)} className="block text-charcoal text-[15px]">
            Pricing
          </Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-charcoal text-[15px]">
            About
          </Link>
          <a
            href="https://tidycal.com/cjmayer/15-minute-intro"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-harbor text-[15px] font-medium"
          >
            Book a demo
          </a>
          <Link
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="block bg-copper text-white rounded-lg px-4 py-2 text-[15px] font-medium text-center"
          >
            Get started
          </Link>
        </div>
      )}
    </header>
  );
}
