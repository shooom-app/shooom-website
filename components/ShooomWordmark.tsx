"use client";

import { motion, cubicBezier } from "framer-motion";

const TEXT = "shooom.app";

export default function ShooomWordmark({ className = "" }: { className?: string }) {
  const letters = TEXT.split("");

  const container = {
    hidden: { opacity: 0.001 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,   // was 0.045 → slightly slower
        delayChildren: 0.2,      // start a bit later for smoother feel
      },
    },
  };

  const char = {
    hidden: {
      opacity: 0,
      y: 6,
      scale: 0.985,
      filter: "blur(0.6px)",
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.55,           // was ~0.38 → slower, more fluid
        ease: cubicBezier(0.22, 0.61, 0.36, 1), // Apple-like cubic bezier
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={`signature-neon font-[var(--font-apple-script)] ${className}`}
      aria-label="shooom dot app"
    >
      {letters.map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          variants={char}
          className="inline-block will-change-transform"
          style={{ transformOrigin: "50% 70%" }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </motion.div>
  );
}
