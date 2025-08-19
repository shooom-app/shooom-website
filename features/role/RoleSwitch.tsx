"use client";
import { useRole } from "@/features/role/RoleContext";

export default function RoleSwitch() {
  const { role, setRole } = useRole();
  return (
    <div className="role-toggle inline-flex gap-2 rounded-full p-1 panel-solid neon-outline">
      <button
        type="button"
        aria-pressed={role === "dj"}
        onClick={() => setRole("dj")}
        className={`toggle-seg px-4 py-2 rounded-full ${role === "dj" ? "active" : ""}`}
      >
        I’m a DJ
      </button>
      <button
        type="button"
        aria-pressed={role === "venue"}
        onClick={() => setRole("venue")}
        className={`toggle-seg px-4 py-2 rounded-full ${role === "venue" ? "active" : ""}`}
      >
        I’m a Venue
      </button>
    </div>
  );
}


