import { useCurrentFrame } from "remotion";
import { CARD_AREA_HEIGHT, CARD_AREA_WIDTH, cardMotion } from "./cardMotion";

type ValueCardProps = {
  headline: string;
  subhead: string;
  durationInFrames: number;
  fps: number;
};

export const ValueCard: React.FC<ValueCardProps> = ({
  headline,
  subhead,
  durationInFrames,
  fps,
}) => {
  const frame = useCurrentFrame();
  const motion = cardMotion(frame, fps, durationInFrames);

  return (
    <div
      className="flex items-center justify-center"
      style={{ width: CARD_AREA_WIDTH, height: CARD_AREA_HEIGHT }}
    >
      <div
        className="flex w-full flex-col justify-center rounded-2xl bg-paper px-16 shadow-[0_1px_2px_rgba(26,26,24,0.04),0_32px_70px_-20px_rgba(27,58,92,0.4)]"
        style={{ ...motion, height: CARD_AREA_HEIGHT }}
      >
        <div className="h-[4px] w-[90px] rounded-full bg-copper" />
        <p className="mt-8 text-[54px] font-bold leading-[1.12] tracking-tight text-ink">
          {headline}
        </p>
        <p className="mt-5 text-[27px] leading-snug text-charcoal">
          {subhead}
        </p>
      </div>
    </div>
  );
};
