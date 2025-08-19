"use client";
import { motion } from "framer-motion";
import { useMemo, useRef, useState, useEffect } from "react";
import RoleStepCard from "@/components/role/RoleStepCard";
import type { StepItem } from "@/features/role/roleSteps";

export default function RoleCardStack({
  items, index, role, onChangeIndex,
}:{
  items: StepItem[];
  index: number;
  role: "dj" | "venue";
  onChangeIndex: (i: number) => void;
}){
  // Derive lastIndex & visible slice each render
  const lastIndex = items.length > 0 ? items.length - 1 : 0;
  const visible = useMemo(() => items.slice(index, Math.min(index + 3, items.length)), [items, index]);

  // Simple animation lock to prevent rapid double-advance
  const [locked, setLocked] = useState(false);
  const lockT = useRef<number | null>(null);
  useEffect(() => () => { if (lockT.current) { window.clearTimeout(lockT.current); } }, []);

  function go(delta: -1 | 1) {
    if (locked) return;
    setLocked(true);
    // duration should roughly match the spring settle
    lockT.current = window.setTimeout(() => setLocked(false), 320);

    onChangeIndex((prev: any) => {
      // Support functional updates in parent (RoleSection)
      const next = typeof prev === "number" ? prev + delta : (index + delta);
      return Math.max(0, Math.min(lastIndex, next));
    });
  }

  const canPrev = index > 0 && !locked;
  const canNext = index < lastIndex && !locked;

  const scaleFor = (i: number) => 1 - i * 0.045; // peeks smaller

  return (
    <div className="relative w-full max-w-xl mx-auto" aria-live="polite">
      {/* Cards */}
      <div className="relative h-[420px]">
        {visible.map((item, i) => (
          <motion.div
            key={`${role}-${index+i}-${item.title}`}
            initial={false}
            animate={{ y: i * 12, scale: scaleFor(i) }}
            transition={{ type: "spring", stiffness: 210, damping: 24, mass: 0.8 }}
            className={`absolute inset-0 ${i === 0 ? "" : "pointer-events-none select-none"}`}
            style={{
              zIndex: 30 - i,                 // ensure front is on top
              filter: "none", WebkitFilter: "none",
              // @ts-expect-error vendor
              backdropFilter: "none", WebkitBackdropFilter: "none",
              opacity: 1,
              contain: "layout style paint size",
              willChange: "transform",
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
            }}
          >
            <RoleStepCard
              index={index + i}
              total={items.length}
              step={item}
              compact={i > 0}
            />
          </motion.div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={!canPrev}
          className="rounded-xl px-3 py-2 panel-solid neon-outline disabled:opacity-50 active:scale-95 transition-transform"
          aria-label="Previous step"
        >
          ← Prev
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={!canNext}
          className="rounded-xl px-3 py-2 panel-solid neon-outline disabled:opacity-50 active:scale-95 transition-transform"
          aria-label={index < lastIndex ? `Next: ${items[index+1].title}` : "Next step"}
          title={index < lastIndex ? `Next: ${items[index+1].title}` : ""}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
