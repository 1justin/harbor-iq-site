type Row = { primary: string; secondary: string };

export const ListVisual: React.FC<{ rows: Row[] }> = ({ rows }) => (
  <div className="space-y-3">
    {rows.map((r) => (
      <div
        key={r.primary}
        className="flex items-center justify-between rounded-lg border border-ash/60 bg-linen/40 px-4 py-3.5"
      >
        <span className="text-[16px] text-ink">{r.primary}</span>
        <span className="text-[13px] text-stone">{r.secondary}</span>
      </div>
    ))}
  </div>
);
