"use client";

import { useEffect, useState } from "react";
import { Player } from "@remotion/player";
import { HeroCardStack, TOTAL_FRAMES } from "./HeroCardStack";
import { COMPOSITION_HEIGHT, COMPOSITION_WIDTH, CYCLE_LENGTH } from "./stack";

const FPS = 30;
// Steady state: front card fully settled, mid-hold.
const REDUCED_MOTION_FRAME = Math.round(CYCLE_LENGTH * 0.6);

export function HeroAnimation() {
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <Player
      component={HeroCardStack}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      compositionWidth={COMPOSITION_WIDTH}
      compositionHeight={COMPOSITION_HEIGHT}
      style={{ width: "100%", height: "100%" }}
      autoPlay={!reducedMotion}
      loop={!reducedMotion}
      initialFrame={reducedMotion ? REDUCED_MOTION_FRAME : 0}
      controls={false}
      clickToPlay={false}
      showVolumeControls={false}
      spaceKeyToPlayOrPause={false}
    />
  );
}
