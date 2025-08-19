"use client";

import { motion, MotionProps } from "framer-motion";
import React, { ReactNode } from "react";
import clsx from "clsx";

/**
 * Opaque, glow-panel card with paint containment.
 * Never uses backdrop-filter. Prevents flicker on initial mount.
 */
type DeckCardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean; // front card only
} & MotionProps;

const DeckCard = React.forwardRef<HTMLDivElement, DeckCardProps>(
  ({ children, className, interactive = false, ...motionProps }, ref) => {
    return (
      <motion.div
        ref={ref}
        {...motionProps}
        initial={false} // ✅ no initial animation flicker
        className={clsx(
          "absolute inset-0 rounded-2xl p-5 panel-solid neon-outline",
          // Ensure opaque paint (no transparency bleed)
          "shadow-[0_0_0_1px_rgba(225,29,72,0.25)]",
          // Contain paints/transforms; fix iGPU compositing glitches
          "[contain:paint_layout_style_size]",
          "will-change-transform",
          "isolate", // make its own stacking context
          // Never allow interaction unless front
          interactive ? "pointer-events-auto" : "pointer-events-none select-none",
          className
        )}
        style={{
          // ✅ Absolutely no backdrop filter; also nuke inherited filters
          filter: "none",
          WebkitFilter: "none",
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          // ✅ Force into its own layer; avoid subpixel blur
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          // Ensure full opacity always; animation drives only y/scale
          opacity: 1,
        }}
      >
        {children}
      </motion.div>
    );
  }
);

DeckCard.displayName = "DeckCard";

export default DeckCard;
