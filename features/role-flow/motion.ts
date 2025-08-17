import type { Variants } from "framer-motion";

export const DURATION_IN = 0.35;
export const DURATION_OUT = 0.28;

// 👇 make these tuple literals (not plain number[])
export const EASE_IN = [0.22, 1, 0.36, 1] as const;
export const EASE_OUT = [0.4, 0, 1, 1] as const;

export const variantsFull: Variants = {
  initial: { opacity: 0, y: 12, filter: "blur(4px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION_IN, ease: EASE_IN },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(4px)",
    transition: { duration: DURATION_OUT, ease: EASE_OUT },
  },
};

export const variantsReduced: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: DURATION_IN } },
  exit: { opacity: 0, transition: { duration: DURATION_OUT } },
};


// features/role-flow/motion.ts (ADD BELOW YOUR EXISTING VARIANTS)
export const neonPulse = {
  rest: { boxShadow: "0 0 0px rgba(220,38,38,0.0)" },
  glow: {
    boxShadow: [
      "0 0 10px rgba(220,38,38,0.35)",
      "0 0 22px rgba(220,38,38,0.55)",
      "0 0 10px rgba(220,38,38,0.35)",
    ],
    transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
  },
};

export const popIn = {
  hidden: { opacity: 0, y: 16, scale: 0.98, filter: "blur(6px)" },
  show:   { opacity: 1, y: 0,  scale: 1,    filter: "blur(0px)" , transition: { duration: 0.35 } },
};

