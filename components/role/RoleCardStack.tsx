"use client";
import React from "react";
import { motion } from "framer-motion";
import { useMeasure } from "@/hooks/useMeasure";
import { useRole } from "@/features/role/RoleContext";
import RoleStepCard from "@/components/role/RoleStepCard";
import type { StepItem } from "@/features/role/roleSteps";

export default function RoleCardStack({
  items, index, onChangeIndex, onIndexChange,
}:{
  items: StepItem[];
  index: number;
  onChangeIndex: (i: number | ((prev:number)=>number)) => void;
  onIndexChange?: (i:number)=>void;
}){
  const total = 6;
  const outerRef = React.useRef<HTMLDivElement>(null);
  const frontRef = React.useRef<HTMLDivElement>(null);
  const { height } = useMeasure(frontRef); // measure only the front face
  const { role } = useRole();

  // *** IMPORTANT: clamp + report index changes
  const clamp = (v: number) => Math.max(0, Math.min(total - 1, v));
  const goTo = (i: number) => onChangeIndex(clamp(i));

  React.useEffect(() => { onIndexChange?.(index); }, [index, onIndexChange]);

  // Reset to first face on role change + allow remeasure
  React.useEffect(() => {
    goTo(0);
    const t = setTimeout(() => {}, 50);
    return () => clearTimeout(t);
  }, [role]);

  // KEYBOARD nav (if you have)
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goTo(index - 1);
    if (e.key === "ArrowRight") goTo(index + 1);
    if (/^[1-6]$/.test(e.key)) goTo(Number(e.key) - 1);
  };

  // *** Listen for rail jumps
  React.useEffect(() => {
    const h = (e: any) => goTo(Number(e.detail));
    window.addEventListener("role:jump", h as any);
    return () => window.removeEventListener("role:jump", h as any);
  }, []);

  // Animation variants for smooth transitions
  const faceVariants = {
    enter: (d: 1 | -1) => ({
      opacity: 0,
      y: d * 6,
      scale: 0.992,
      filter: "blur(3px)",
    }),
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (d: 1 | -1) => ({
      opacity: 0,
      y: -d * 6,
      scale: 0.992,
      filter: "blur(3px)",
    }),
  };
  const faceTransition = { type: "spring", stiffness: 380, damping: 38, mass: 0.7 };

  // ===== RENDER =====
  return (
    <div
      id="role-stack"
      ref={outerRef}
      className="relative overflow-visible mb-4"
      style={{ height: height ? `${height}px` : undefined }}
      onKeyDown={onKeyDown}
      role="region"
      aria-live="polite"
      aria-label={`Step ${index + 1} of ${total}`}
      tabIndex={0}
    >
      {/* (TEMP) Disable peeks until front card is stable */}
      {/* If you want peeks later, re-enable with style={{height}} and z-0 */}

      {/* FRONT CARD */}
      <motion.div
        key={index}               // forces proper re-render when index changes
        ref={frontRef}
        className="hiw-card will-change-auto relative z-10"
      >
        {/* Invisible hit areas */}
        <button
          aria-label="Previous step"
          className="absolute left-0 top-0 h-full w-1/2 cursor-pointer"
          style={{ background: "transparent", border: "0" }}
          onClick={() => window.dispatchEvent(new CustomEvent("role:jump", { detail: Math.max(0, index - 1) }))}
        />
        <button
          aria-label="Next step"
          className="absolute right-0 top-0 h-full w-1/2 cursor-pointer"
          style={{ background: "transparent", border: "0" }}
          onClick={() => window.dispatchEvent(new CustomEvent("role:jump", { detail: Math.min(total - 1, index + 1) }))}
        />

        {/* Actual face content sits above click zones */}
        <div className="relative pointer-events-none">
          <RoleStepCard step={items[index]} index={index} total={items.length} />
        </div>
      </motion.div>
    </div>
  );
}