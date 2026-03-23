"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-anchor backdrop-blur-sm">
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
          <Link href="/#features" className="text-paper hover:text-mist text-[15px] transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-paper hover:text-mist text-[15px] transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-paper hover:text-mist text-[15px] transition-colors">
            About
          </Link>
          <a
            href="https://tidycal.com/cjmayer/harboriq-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary bg-harbor text-white rounded-lg px-4 py-2 text-[15px] font-medium hover:bg-deep transition-colors"
          >
            Book a demo
          </a>
          <a
            href="https://www.creem.io/payment/prod_1SDGs4JxhPJ0yQonbNfIHV"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary bg-copper text-white rounded-lg px-4 py-2 text-[15px] font-medium hover:bg-bronze transition-colors"
          >
            Get started
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
          <Link href="/#features" onClick={() => setMobileOpen(false)} className="block text-paper text-[15px]">
            Features
          </Link>
          <Link href="/pricing" onClick={() => setMobileOpen(false)} className="block text-paper text-[15px]">
            Pricing
          </Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-paper text-[15px]">
            About
          </Link>
          <a
            href="https://tidycal.com/cjmayer/harboriq-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-harbor text-white rounded-lg px-4 py-2 text-[15px] font-medium text-center"
          >
            Book a demo
          </a>
          <a
            href="https://www.creem.io/payment/prod_1SDGs4JxhPJ0yQonbNfIHV"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block bg-copper text-white rounded-lg px-4 py-2 text-[15px] font-medium text-center"
          >
            Get started
          </a>
        </div>
      )}
    </header>
  );
}
