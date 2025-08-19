"use client";
import type { MetricItem } from "@/features/role/roleMetrics";
import HandshakeIcon from "@/components/icons/HandshakeIcon";
import MartiniIcon   from "@/components/icons/MartiniIcon";
import StarBadgeIcon from "@/components/icons/StarBadgeIcon";
import { Users, Globe } from "lucide-react";

function MetricIcon({ name, className = "h-5 w-5" }:{ name: MetricItem["icon"]; className?: string }) {
  switch (name) {
    case "handshake": return <HandshakeIcon className={className} />;
    case "martini":   return <MartiniIcon   className={className} />;
    case "star":      return <StarBadgeIcon className={className} />;
    case "globe":     return <Globe className={className} />;
    case "users":     return <Users className={className} />;
    default:          return <StarBadgeIcon className={className} />;
  }
}

export default function RoleMetricsRow({ metrics }:{ metrics: MetricItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {metrics.map((m, i) => (
        <div key={i} className="panel-solid neon-outline rounded-2xl p-5 flex items-center gap-3 justify-center sm:justify-start text-center sm:text-left">
          <span className="inline-grid place-items-center w-9 h-9 text-[var(--brand-red)] drop-shadow-[0_0_10px_rgba(225,29,72,.45)]">
            <MetricIcon name={m.icon} />
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
