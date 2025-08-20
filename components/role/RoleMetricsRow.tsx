"use client";
import type { MetricItem } from "@/features/role/roleMetrics";
import HandshakeIcon from "@/components/icons/HandshakeIcon";
import MartiniIcon from "@/components/icons/MartiniIcon";
import StarBadgeIcon from "@/components/icons/StarBadgeIcon";
import GlobeIcon from "@/components/icons/GlobeIcon";
import UsersIcon from "@/components/icons/UsersIcon";

function MetricIcon({ name, className="h-6 w-6" }:{ name: MetricItem["icon"]; className?: string }) {
  switch (name) {
    case "handshake": return <HandshakeIcon className={className} />;
    case "martini": return <MartiniIcon className={className} />;
    case "star": return <StarBadgeIcon className={className} />;
    case "globe": return <GlobeIcon className={className} />;
    case "users": return <UsersIcon className={className} />;
    default: return <StarBadgeIcon className={className} />;
  }
}

function animFor(name: MetricItem["icon"]){
  if (name === "handshake") return "ri-anim--clasp";
  if (name === "martini") return "ri-anim--ripple";
  if (name === "star") return "ri-anim--twinkle";
  if (name === "globe") return "ri-anim--rotate";
  if (name === "users") return "ri-anim--users";
  return "ri-anim--glow";
}

export default function RoleMetricsRow({ metrics }:{ metrics: MetricItem[] }) {
  return (
    <div className="grid gap-4 md:gap-5 lg:gap-6 md:grid-cols-3">
      {metrics.map((m, i) => (
        <div key={i} className="kpi">
          <div className="flex items-start gap-4">
            {/* Icon with KPI styling */}
            <div className="kpi-icon shrink-0">
              <span className={`ri-wrap ${animFor(m.icon)}`} aria-hidden="true">
                <MetricIcon name={m.icon} className="h-[18px] w-[18px]" />
                {m.icon === "globe" && <span className="ri-radar-ring" />}
              </span>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="kpi-title text-white/95 leading-tight">
                {m.value}
              </div>
              <div className="kpi-sub text-white/75">
                {m.label}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
