"use client";
import type { PointerEvent as ReactPointerEvent } from "react";
import { RoleIcon } from "@/components/role/RoleIcon";
import type { StepItem } from "@/features/role/roleSteps";

export default function RoleStepCard({
  index, total, step, compact=false, onDragHandlePointerDown,
}:{
  index: number; total: number; step: StepItem; compact?: boolean;
  onDragHandlePointerDown?: (e: ReactPointerEvent<HTMLDivElement>) => void;
}) {
  return (
    <div className={`relative overflow-hidden ${compact ? "p-4" : "p-6"} bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-sm border border-white/[0.12] rounded-2xl shadow-2xl shadow-black/20`}>
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl" />
      
      {/* Neon outline effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header row is the drag handle */}
        <div
          className="flex items-start gap-4 cursor-grab active:cursor-grabbing transition-transform duration-200 active:scale-[0.98]"
          onPointerDown={onDragHandlePointerDown}
        >
          {/* Icon with enhanced glow */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.15] to-transparent rounded-full blur-sm scale-110" />
            <RoleIcon
              name={step.icon}
              anim={step.anim}
              className="h-8 w-8 ri-wrap shrink-0"
            />
          </div>
          
          {/* Text content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <div className="text-xs font-medium tracking-wider text-white/60 uppercase">
                Step {index + 1} of {total}
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            </div>
            <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-white/95 mb-2">
              {step.title}
            </h3>
          </div>
        </div>
        
        {/* Body text - not draggable */}
        {!compact && (
          <div className="mt-4 pl-12">
            <p className="mt-1 text-[14.5px] leading-6 opacity-[0.82] text-white/75">
              {step.blurb}
            </p>
          </div>
        )}
      </div>
      
      {/* Subtle bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
    </div>
  );
}
