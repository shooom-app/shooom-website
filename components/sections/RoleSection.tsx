"use client";
import { useEffect, useState } from "react";
import { useRole } from "@/features/role/RoleContext";
import RoleSwitch from "@/features/role/RoleSwitch";
import RoleMetricsRow from "@/components/role/RoleMetricsRow";
import { DJ_METRICS, VENUE_METRICS, METRICS_CHIP } from "@/features/role/roleMetrics";
import { DJ_STEPS, VENUE_STEPS } from "@/features/role/roleSteps";
import RoleCardStack from "@/components/role/RoleCardStack";

export default function RoleSection() {
  const { role } = useRole();
  const [index, setIndex] = useState(0);

  // reset stack when role changes
  useEffect(() => { setIndex(0); }, [role]);

  const title = role === "dj" ? "For DJs" : "For Venues";
  const subtitle =
    role === "dj"
      ? "Hello, DJ, let me introduce you how your flow works:"
      : "Hey, Boss, let me explain how your flow works.";

  const steps   = role === "dj" ? DJ_STEPS   : VENUE_STEPS;
  const metrics = role === "dj" ? DJ_METRICS : VENUE_METRICS;

  return (
    <section id="role-flow" className="relative mx-auto max-w-6xl px-6 sm:px-8 py-20">
      <header className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-3 text-sm sm:text-base text-white/70">{subtitle}</p>
      </header>

      <div className="text-center mb-8">
        <RoleSwitch />
      </div>

      {/* NEW: card stack */}
      <RoleCardStack
        items={steps}
        index={index}
        role={role}
        onChangeIndex={(updater:any) => {
          // Functional-safe update
          setIndex((prev) => {
            if (typeof updater === "function") return updater(prev);
            return updater;
          });
        }}
      />

      {/* Neutral title (keep this chip) */}
      <div className="mt-8 mb-4 text-center">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-sm panel-solid neon-outline">
          {METRICS_CHIP}
        </span>
      </div>

      <RoleMetricsRow metrics={metrics} />
    </section>
  );
}


