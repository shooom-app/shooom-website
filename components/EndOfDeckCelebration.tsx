"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = { show: boolean; onDone?: () => void; durationMs?: number };

export default function EndOfDeckCelebration({ show, onDone, durationMs = 1800 }: Props) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-none celebrate-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onAnimationComplete={() => {
            // auto-dismiss after duration
            setTimeout(() => onDone?.(), durationMs);
          }}
        >
          {/* Radial neon wash */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background:
                "radial-gradient(1200px 1200px at 50% 60%, rgba(251,113,133,0.24), rgba(10,7,9,0.0) 60%)",
              mixBlendMode: "screen",
            }}
          />
          {/* Expanding neon ring */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2"
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{ width: 900, height: 900, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              borderColor: "rgba(225,29,72,0.6)",
              boxShadow: "0 0 40px 10px rgba(225,29,72,0.25)",
            }}
          />
          {/* Soft stars */}
          {[...Array(28)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute block rounded-full"
              initial={{
                x: "50%",
                y: "60%",
                scale: 0,
                opacity: 0.9,
              }}
              animate={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: [0, 1, 0],
                opacity: [0.9, 0.9, 0],
              }}
              transition={{
                duration: 1.4 + Math.random() * 0.6,
                delay: Math.random() * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                width: 6 + Math.random() * 10,
                height: 6 + Math.random() * 10,
                background:
                  "radial-gradient(circle, rgba(251,113,133,0.9), rgba(251,113,133,0.0) 70%)",
                filter: "blur(0.5px)",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
