import { interpolate, spring, useCurrentFrame } from "remotion";

type ValueCardProps = {
  headline: string;
  subhead: string;
  durationInFrames: number;
  fps: number;
};

const FADE_OUT = 18;

export const ValueCard: React.FC<ValueCardProps> = ({
  headline,
  subhead,
  durationInFrames,
  fps,
}) => {
  const frame = useCurrentFrame();

  const inProgress = spring({ fps, frame, config: { damping: 200 } });
  const opacityIn = inProgress;
  const translateY = interpolate(inProgress, [0, 1], [10, 0]);

  const opacityOut = interpolate(
    frame,
    [durationInFrames - FADE_OUT, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <div className="flex h-full w-full items-center justify-center p-[1.5%]">
      <div
        className="w-full max-w-[900px] rounded-xl bg-paper px-10 py-9 shadow-[0_1px_2px_rgba(26,26,24,0.04),0_24px_60px_-20px_rgba(27,58,92,0.35)]"
        style={{
          opacity: Math.min(opacityIn, opacityOut),
          transform: `translateY(${translateY}px)`,
        }}
      >
        <div className="h-[3px] w-[70px] rounded-full bg-copper" />
        <p className="mt-6 text-[38px] font-bold leading-[1.15] tracking-tight text-ink">
          {headline}
        </p>
        <p className="mt-3 text-[21px] leading-snug text-charcoal">
          {subhead}
        </p>
      </div>
    </div>
  );
};
