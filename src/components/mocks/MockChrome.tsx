import type { ReactNode } from "react";

type MockChromeProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

/**
 * Shared "browser chrome" wrapper for Day-in-the-Life UI mocks.
 * Three faux traffic-light dots + a context label, then the mock content.
 */
export function MockChrome({ label, children, className = "" }: MockChromeProps) {
  return (
    <div
      className={`dl-mock relative overflow-hidden rounded-xl border border-ash/70 bg-paper shadow-[0_1px_2px_rgba(26,26,24,0.04),0_8px_24px_-12px_rgba(26,26,24,0.08)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-ash/50 px-4 py-2.5">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-ash" />
          <span className="h-2 w-2 rounded-full bg-ash" />
          <span className="h-2 w-2 rounded-full bg-ash" />
        </span>
        <span className="ml-1 text-[11px] font-medium uppercase tracking-[0.08em] text-stone">
          {label}
        </span>
      </div>
      <div className="p-4 md:p-5">{children}</div>
    </div>
  );
}
