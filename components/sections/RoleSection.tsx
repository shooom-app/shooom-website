"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const total = steps.length;

  return (
    <section id="role" className="relative mx-auto rs-container w-full px-4 md:px-6 lg:px-8 rs-pad rs-vstack">
      {/* Title / subtitle block (unchanged content) */}
      <header className="text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-sm mb-6">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-white/60 to-white/40" />
          <span className="text-xs font-medium text-white/70 tracking-wider uppercase">
            {role === "dj" ? "Artist Flow" : "Venue Flow"}
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-6">
          {title}
        </h2>
        <p className="text-lg sm:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </header>

      {/* Immediately after subtitle, mark the gap class for toggle */}
      <div className="rs-gap-toggle flex justify-center">
        <RoleSwitch />
      </div>

      {/* Card stack with tighter top gap */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={role}
          initial={{ opacity: 0, y: 8, scale: 0.995, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, scale: 0.995, filter: "blur(4px)" }}
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
        >
          <div id="role-stack-wrap" className="relative overflow-visible rs-gap-stack">
            <RoleCardStack
              id="role-stack"
              items={steps}
              index={index}
              onChangeIndex={(updater:any) => {
                // Functional-safe update
                setIndex((prev) => {
                  if (typeof updater === "function") return updater(prev);
                  return updater;
                });
              }}
              onIndexChange={(newIndex: number) => {
                setIndex(newIndex);
              }}
            />
          </div>

          {/* Step Rail */}
          <div className="mt-3 flex justify-center">
            <div className="step-rail" role="tablist" aria-label="Steps">
              {Array.from({ length: total }).map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === index}
                  aria-current={i === index ? "step" : undefined}
                  aria-controls="role-stack"
                  onClick={() => window.dispatchEvent(new CustomEvent("role:jump", { detail: i }))}
                  className={`step-pill ${i === index ? 'active' : ''}`}
                >
                  {i+1}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls + rail closer to the card */}
      <div className="relative z-20 rs-gap-controls flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          {/* Prev / Rail / Next — keep your existing markup */}
        </div>
        {/* Predictions chip */}
        <div className="rs-gap-chip">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.04] border border-white/[0.15] backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-white/60 to-white/40 animate-pulse" />
            <span className="text-sm font-semibold text-white/90 tracking-wide">
              {METRICS_CHIP}
            </span>
          </div>
        </div>
      </div>

      {/* Metrics a bit closer but still breathing */}
      <div className="rs-gap-metrics">
        <RoleMetricsRow metrics={metrics} />
      </div>
    </section>
  );
}


