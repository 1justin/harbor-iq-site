import {
  DollarIcon,
  DocumentIcon,
  ShieldIcon,
  TargetIcon,
  StatTile,
} from "./StatTile";

// Real figures from Justin's Executive Dashboard screenshot (demo agency),
// not invented -- same discipline as everything else in this deck.
export const StatGrid: React.FC = () => (
  <div className="grid grid-cols-2 gap-3">
    <StatTile icon={DollarIcon} label="In-force premium" value="$8.3M" />
    <StatTile icon={DocumentIcon} label="Active policies" value="223" />
    <StatTile icon={ShieldIcon} label="Retention" value="95%" />
    <StatTile icon={TargetIcon} label="Close rate" value="53%" />
  </div>
);
