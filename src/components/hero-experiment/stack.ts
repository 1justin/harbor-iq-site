import { interpolate, spring } from "remotion";

// Portrait composition with margin built in on every side so the peeking
// cards behind the front one have room to render without being clipped by
// Remotion's own frame bounds (Player clips to compositionWidth/Height
// regardless of the outer DOM wrapper's overflow setting).
export const COMPOSITION_WIDTH = 820;
export const COMPOSITION_HEIGHT = 1400;
export const CARD_WIDTH = 680;
export const CARD_HEIGHT = 1050;

export const CYCLE_LENGTH = 130;

export const frontIndexFloat = (frame: number, fps: number) => {
  const step = Math.floor(frame / CYCLE_LENGTH);
  const localFrame = frame - step * CYCLE_LENGTH;
  const progress = spring({ fps, frame: localFrame, config: { damping: 200 } });
  return step + progress;
};

export const depthOf = (cardIndex: number, front: number, count: number) => {
  const raw = (cardIndex - front) % count;
  return raw < 0 ? raw + count : raw;
};

// Continuous depth -> visual treatment. depth 0 is front and solid. Cards
// behind recede DOWN (not up) and fan out with a slight alternating
// rotation, like a loose pile of photos rather than a rigid vertical
// stack -- deliberately different from the earlier top-back version.
// Culled entirely past ~3 layers so the pile doesn't get visually noisy.
export const stackStyle = (depth: number) => {
  const scale = interpolate(depth, [0, 3], [1, 0.85], { extrapolateRight: "clamp" });
  const translateY = interpolate(depth, [0, 3], [0, 110], { extrapolateRight: "clamp" });
  const rotate = interpolate(depth, [0, 1, 2, 3], [0, -4, 3, -3], {
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(depth, [0, 1, 2.4, 3.2], [1, 0.75, 0.35, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return {
    transform: `translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
    opacity,
    zIndex: Math.round(1000 - depth * 10),
  };
};
