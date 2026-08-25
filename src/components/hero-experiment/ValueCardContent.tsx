import { CardShell } from "./CardShell";

type ValueCardContentProps = {
  label: string;
  headline: string;
  subhead: string;
  visual: React.ReactNode;
};

export const ValueCardContent: React.FC<ValueCardContentProps> = ({
  label,
  headline,
  subhead,
  visual,
}) => (
  <CardShell label={label} headline={headline} subhead={subhead}>
    {visual}
  </CardShell>
);
