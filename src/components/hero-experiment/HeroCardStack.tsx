import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { StackedCard } from "./StackedCard";
import { ProofCardContent } from "./ProofCardContent";
import { ValueCardContent } from "./ValueCardContent";
import { AI_CARD, STACK_VALUE_CARDS } from "./heroStackCards";
import { CYCLE_LENGTH, depthOf, frontIndexFloat } from "./stack";

const CARDS: React.ReactNode[] = [
  <ProofCardContent key="proof" />,
  <ValueCardContent key="ai" {...AI_CARD} />,
  ...STACK_VALUE_CARDS.map((card, i) => (
    <ValueCardContent key={`value-${i}`} {...card} />
  )),
];

export const CARD_COUNT = CARDS.length;
export const TOTAL_FRAMES = CARD_COUNT * CYCLE_LENGTH;

export const HeroCardStack: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const front = frontIndexFloat(frame, fps);

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      {CARDS.map((content, i) => (
        <StackedCard key={i} depth={depthOf(i, front, CARD_COUNT)}>
          {content}
        </StackedCard>
      ))}
    </AbsoluteFill>
  );
};
