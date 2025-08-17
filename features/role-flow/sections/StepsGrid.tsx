// features/role-flow/sections/StepsGrid.tsx
"use client";

import { motion } from "framer-motion";
import { StepsSection } from "../types";
import { NeonIcon } from "@/components/icons/registry";
import { variantsFull } from "../motion";

export default function StepsGrid({ section }: { section: StepsSection }) {
  return (
    <motion.section
      variants={variantsFull}
      initial="initial"
      animate="animate"
      exit="exit"
      className="mt-6"
    >
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {section.steps.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
            whileHover={{ y: -4, rotateX: 0.7, rotateY: -0.7 }}
            whileTap={{ scale: 0.995 }}
            className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 will-change-transform"
          >
            {/* subtle neon edge */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 style={{
                   background:
                     "radial-gradient(120% 100% at 0% 0%, rgba(255,0,0,0.18), transparent 55%), radial-gradient(120% 100% at 100% 100%, rgba(255,0,0,0.10), transparent 55%)",
                 }}
            />

            <NeonIcon
              name={s.icon}
              className="relative z-10 transition group-hover:drop-shadow-[0_0_18px_rgba(220,38,38,0.95)]"
              aria-hidden="true"
            />
            <h3 className="relative z-10 font-semibold mb-2">{s.title}</h3>
            <p className="relative z-10 text-white/80 text-sm">{s.blurb}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
