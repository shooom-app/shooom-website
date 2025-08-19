"use client";
import { RoleIcon } from "@/components/role/RoleIcon";
import type { StepItem } from "@/features/role/roleSteps";

export default function RoleStepCard({
  index, total, step, compact=false,
}:{
  index: number; total: number; step: StepItem; compact?: boolean;
}) {
  return (
    <div className={`panel-solid neon-outline rounded-2xl ${compact ? "p-4" : "p-5"}`}>
      <div className="flex items-start gap-3">
        <RoleIcon name={step.icon} anim={step.anim} />
        <div>
          <div className="text-xs uppercase tracking-wide opacity-75 mb-1">
            Step {index + 1} of {total}
          </div>
          <h3 className="text-[18px] font-semibold leading-snug mb-1">{step.title}</h3>
          {!compact && <p className="text-[14.5px] opacity-90">{step.blurb}</p>}
        </div>
      </div>
    </div>
  );
}
