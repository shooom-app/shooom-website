"use client";

import { useRole } from "@/context/RoleContext";

export default function RoleSwitch() {
  const { role, setRole } = useRole();

  return (
    <div className="inline-flex items-center rounded-full bg-white/5 p-1 ring-1 ring-white/10">
      <button
        type="button"
        onClick={() => setRole("dj")}
        className={`px-4 py-2 rounded-full transition relative overflow-hidden
          ${role === "dj"
            ? "bg-red-600 text-white shadow-[0_0_25px_rgba(220,38,38,0.7)] animate-neonPulse"
            : "text-white/70 hover:text-white"
        }`}
      >
        I’m a DJ
      </button>
      <button
        type="button"
        onClick={() => setRole("bar")}
        className={`px-4 py-2 rounded-full transition relative overflow-hidden
          ${role === "bar"
            ? "bg-red-600 text-white shadow-[0_0_25px_rgba(220,38,38,0.7)] animate-neonPulse"
            : "text-white/70 hover:text-white"
        }`}
      >
        I’m a Venue
      </button>
    </div>
  );
}
