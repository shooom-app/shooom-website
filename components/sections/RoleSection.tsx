"use client";
import { useRole } from "@/features/role/RoleContext";
import RoleSwitch from "@/features/role/RoleSwitch";
import RoleMetricsRow from "@/components/role/RoleMetricsRow";
import { DJ_METRICS, VENUE_METRICS, METRICS_CHIP } from "@/features/role/roleMetrics";

export default function RoleSection() {
  const { role } = useRole();
  const title = role === "dj" ? "For DJs" : "For Venues";
  const subtitle =
    role === "dj"
      ? "Hello, DJ, let me introduce you how your flow works:"
      : "Hey, Boss, let me explain how your flow works.";
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

      <div className="panel-solid neon-outline rounded-2xl h-[420px] grid place-items-center text-center">
        <div className="text-white/80">Card stack placeholder</div>
      </div>

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


