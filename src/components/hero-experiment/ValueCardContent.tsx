import { CardShell } from "./CardShell";

type ValueCardContentProps = {
  label: string;
  badge?: { text: string; className: string };
  headline: string;
  subhead: string;
  visual: React.ReactNode;
};

export const ValueCardContent: React.FC<ValueCardContentProps> = ({
  label,
  badge,
  headline,
  subhead,
  visual,
}) => (
  <CardShell label={label} badge={badge} headline={headline} subhead={subhead}>
    {visual}
  </CardShell>
);
