import { FocusBanner } from "./FocusBanner";
import { ListVisual } from "./ListVisual";

const ALSO_FLAGGED = [
  { primary: "Lakeshore P&C appetite bulletin updated", secondary: "This week", tone: "interactive" as const },
  { primary: "3 renewals need a rate check before Friday", secondary: "Due soon", tone: "warning" as const },
  { primary: "Granite Shore submission missing loss runs", secondary: "Blocked", tone: "warning" as const },
];

export const AIExtra: React.FC = () => (
  <div>
    <FocusBanner />
    <div className="mt-6">
      <p className="mb-3 text-[15px] font-medium uppercase tracking-wider text-stone">
        Also flagged this week
      </p>
      <ListVisual rows={ALSO_FLAGGED} />
    </div>
  </div>
);
