// features/role-flow/SectionRenderer.tsx
"use client";

import { motion } from "framer-motion";
import StepsGrid  from "./sections/StepsGrid";
import CTAButtons from "./sections/CTAButtons";
import StatsStrip from "@/components/StatsStrip";
import { popIn } from "./motion";

import type {
  AnySection,
  StepsSection,
  CTAsSection,
  StatsSection,
} from "./types";

/** Tiny inline component for a centered chip heading */
function ChipHeading({ text }: { text: string }) {
  return (
    <motion.div
      variants={popIn}
      initial="hidden"
      animate="show"
      className="mt-8 flex w-full justify-center"
    >
      <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
        <span className="text-sm tracking-wide text-white/80">{text}</span>
      </div>
    </motion.div>
  );
}

export default function SectionRenderer({ section }: { section: AnySection }) {
  if (section.type === "heading") return <ChipHeading text={section.text} />;

  if (section.type === "steps")  return <StepsGrid section={section as StepsSection} />;
  if (section.type === "ctas")   return <CTAButtons section={section as CTAsSection} />;
  if (section.type === "stats")  return <StatsStrip items={(section as StatsSection).items} />;

  return null;
}
