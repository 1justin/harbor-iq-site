"use client";

import { useEffect, useState } from "react";
import { Player } from "@remotion/player";
import {
  HeroCardRotation,
  PROOF_CARD_FRAMES,
  TOTAL_FRAMES,
} from "./HeroCardRotation";

const FPS = 30;
// Steady state within the first (proof) card: question and answer both
// settled and fully visible.
const REDUCED_MOTION_FRAME = Math.round(PROOF_CARD_FRAMES * 0.7);

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
      component={HeroCardRotation}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      compositionWidth={1280}
      compositionHeight={800}
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
