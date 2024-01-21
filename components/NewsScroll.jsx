'use client'

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex items-center gap-2">
      <span className="bg-primary px-2 py-1 -skew-x-3">FlashNews</span>
      <div className="parallax -skew-x-3 border-2 border-gray-700 p-2">
        <motion.div className="scroller" style={{ x }}>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
        </motion.div>
      </div>
    </div>
  );
}

export default function NewsScroll() {
  return (
    <section className="mt-40">
      <ParallaxText baseVelocity={1}>Wicketkeeper-batter Irfan Sukkur made a decisive 24 off 16 balls before getting out in the final over. Chaturanga de Silva hit an over boundaryLorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rerum cumque doloremque atque architecto.</ParallaxText>
    </section>
  );
}
