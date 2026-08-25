type StatTileProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

export const StatTile: React.FC<StatTileProps> = ({ icon, label, value }) => (
  <div className="rounded-xl bg-linen/70 px-5 py-4">
    <div className="flex items-center justify-between">
      <span className="text-[13px] font-medium uppercase tracking-wider text-stone">
        {label}
      </span>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ice text-interactive">
        {icon}
      </span>
    </div>
    <p className="mt-2 text-[28px] font-bold leading-none text-ink">{value}</p>
  </div>
);

export const DollarIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

export const DocumentIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
  </svg>
);

export const ShieldIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  </svg>
);

export const TargetIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);
