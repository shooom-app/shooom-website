"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CTAsSection } from "../types";
import { variantsReduced } from "../motion";

export default function CTAButtons({ section }: { section: CTAsSection }) {
  return (
    <motion.div
      variants={variantsReduced}
      initial="initial"
      animate="animate"
      exit="exit"
      className="mt-10 flex justify-center gap-4"
    >
      {section.ctas.map((c) => {
        const isGhost = c.variant === "ghost";
        const cls = isGhost
          ? "chip-neon px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 transition"
          : "chip-neon px-5 py-2 rounded-full";
        return (
          <motion.div key={c.label} whileHover={!isGhost ? { scale: 1.04 } : {}}>
            <Link href={c.href} className={cls}>{c.label}</Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
