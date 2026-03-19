import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-midnight text-mist">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/harboriq-logo-white.svg"
                alt="HarborIQ"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-3 text-slate text-[15px] leading-relaxed">
              One platform. Every carrier. Zero&nbsp;busywork.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-paper text-[13px] font-medium uppercase tracking-wider mb-4">Product</h4>
            <div className="space-y-3">
              <Link href="/#features" className="block text-slate hover:text-paper text-[15px] transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="block text-slate hover:text-paper text-[15px] transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="block text-slate hover:text-paper text-[15px] transition-colors">
                About
              </Link>
              <a
                href="https://tidycal.com/cjmayer/15-minute-intro"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate hover:text-paper text-[15px] transition-colors"
              >
                Book a demo
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-paper text-[13px] font-medium uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/harboriqsoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone hover:text-harbor transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/cabornjustinmayer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone hover:text-harbor transition-colors"
                aria-label="Justin Mayer on LinkedIn"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://x.com/harboriq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone hover:text-harbor transition-colors"
                aria-label="X (Twitter)"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-anchor/40 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-slate">
          <span>Built by WRKSTREAM</span>
          <span>&copy; {new Date().getFullYear()} WRKSTREAM LLC. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
