"use client";
import { useRole } from "@/context/RoleContext";
import { roleContent } from "../data/roleContent";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { variantsFull, variantsReduced } from "./motion";
import SectionRenderer from "./SectionRenderer";

export default function ContentByRole() {
  const { role } = useRole();
  const cfg = roleContent[role];
  const prefersReduced = useReducedMotion();
  const variants: Variants = prefersReduced ? variantsReduced : variantsFull;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.section
        key={role}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative mx-auto max-w-6xl px-6 py-16 overflow-x-clip"
        aria-labelledby="role-section-title"
      >
        <div className="text-center mb-10">
          <h2 id="role-section-title" className="text-3xl sm:text-5xl font-bold">{cfg.title}</h2>
          {cfg.subtitle && <p className="text-white/70 mt-2">{cfg.subtitle}</p>}
        </div>

        <div className="mt-6 space-y-10">
          {cfg.sections.map((section, i) => (
            <SectionRenderer key={(section.id ?? section.type) + i} section={section} />
          ))}
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
