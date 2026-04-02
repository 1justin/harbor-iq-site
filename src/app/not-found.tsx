import Link from "next/link";
import Image from "next/image";

const CREEM_RESERVE = "https://creem.io/pay/wrkstream/clxhpw58l003a4q2s0bj7z2e4";

export default function NotFound() {
  return (
    <div className="bg-anchor min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
      {/* Logo */}
      <Link href="/" className="mb-12">
        <Image
          src="/images/harboriq-logo-white.svg"
          alt="HarborIQ"
          width={160}
          height={36}
          className="h-9 w-auto"
        />
      </Link>

      {/* Error code */}
      <div className="text-[120px] md:text-[140px] font-medium text-harbor leading-none mb-4">
        404
      </div>

      {/* Headline */}
      <h1 className="text-2xl md:text-[28px] font-medium text-paper mb-2">
        This page fell through the&nbsp;cracks.
      </h1>

      {/* Subheadline */}
      <p className="text-lg md:text-[18px] text-mist mb-10">
        Unlike your prospects on&nbsp;HarborIQ.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="cta-primary bg-copper text-white btn-radius px-7 py-3.5 text-[16px] font-medium hover:bg-bronze transition-colors"
        >
          Back to homepage
        </Link>
        <a
          href="https://tidycal.com/cjmayer/harboriq-demo"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-secondary bg-interactive text-white btn-radius px-7 py-3.5 text-[16px] font-medium hover:bg-deep transition-colors"
        >
          Book a demo
        </a>
      </div>
    </div>
  );
}
