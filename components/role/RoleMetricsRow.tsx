"use client";
import type { MetricItem } from "@/features/role/roleMetrics";
import HandshakeIcon from "@/components/icons/HandshakeIcon";
import MartiniIcon   from "@/components/icons/MartiniIcon";
import StarBadgeIcon from "@/components/icons/StarBadgeIcon";
import GlobeIcon     from "@/components/icons/GlobeIcon";
import UsersIcon     from "@/components/icons/UsersIcon";

function MetricIcon({ name, className="h-5 w-5" }:{ name: MetricItem["icon"]; className?: string }) {
  switch (name) {
    case "handshake": return <HandshakeIcon className={className} />;
    case "martini":   return <MartiniIcon   className={className} />;
    case "star":      return <StarBadgeIcon className={className} />;
    case "globe":     return <GlobeIcon     className={className} />;
    case "users":     return <UsersIcon     className={className} />;
    default:          return <StarBadgeIcon className={className} />;
  }
}

function animFor(name: MetricItem["icon"]){
  if (name === "handshake") return "ri-anim--clasp";
  if (name === "martini")   return "ri-anim--ripple";
  if (name === "star")      return "ri-anim--twinkle";
  if (name === "globe")     return "ri-anim--rotate";
  if (name === "users")     return "ri-anim--users";
  return "ri-anim--glow";
}

export default function RoleMetricsRow({ metrics }:{ metrics: MetricItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {metrics.map((m, i) => (
        <div key={i} className="panel-solid neon-outline rounded-2xl p-5 flex items-center gap-3 justify-center sm:justify-start text-center sm:text-left">
          <span className={`ri-wrap ${animFor(m.icon)}`} aria-hidden="true">
            <MetricIcon name={m.icon} />
            {m.icon === "globe" && <span className="ri-radar-ring" />} {/* harmless overlay */}
          </span>
          <div>
            <div className="text-xl font-semibold leading-tight">{m.value}</div>
            <div className="opacity-85">{m.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
