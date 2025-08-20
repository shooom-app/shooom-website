"use client";
import React from "react";
import { useRole } from "./RoleContext";

export default function RoleSwitch() {
  const { role, setRole } = useRole();
  const isDJ = role === "dj";

  return (
    <div className="toggle-group" role="tablist" aria-label="Choose role">
      <button
        role="tab"
        aria-pressed={isDJ}
        aria-selected={isDJ}
        className="toggle-btn"
        type="button"
        onClick={() => setRole("dj")}
      >
        I'm a DJ
      </button>
      <button
        role="tab"
        aria-pressed={!isDJ}
        aria-selected={!isDJ}
        className="toggle-btn"
        type="button"
        onClick={() => setRole("venue")}
      >
        I'm a Venue
      </button>
    </div>
  );
}


