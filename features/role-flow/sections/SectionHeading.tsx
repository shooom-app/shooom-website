// features/role-flow/sections/SectionHeading.tsx
"use client";

import { motion } from "framer-motion";
import { popIn } from "../motion";
import type { HeadingSection } from "../types";

export default function SectionHeading({ section }: { section: HeadingSection }) {
  return (
    <motion.div
      variants={popIn}
      initial="hidden"
      animate="show"
      className="mt-8 flex w-full justify-center"
    >
      <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
        <span className="text-sm tracking-wide text-white/80">
          {section.text}
        </span>
      </div>
    </motion.div>
  );
}
