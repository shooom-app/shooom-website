"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Role = "dj" | "venue";
type Ctx = { role: Role; setRole: (r: Role) => void };
const RoleCtx = createContext<Ctx | null>(null);

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<Role>("dj");

  useEffect(() => {
    const url = new URL(window.location.href);
    const q = (url.searchParams.get("role") || "").toLowerCase();
    const stored = (localStorage.getItem("role") || "").toLowerCase();
    const initial =
      q === "dj" || q === "venue" ? (q as Role)
      : stored === "dj" || stored === "venue" ? (stored as Role)
      : "dj";
    setRoleState(initial);
    if (q !== initial) { url.searchParams.set("role", initial); history.replaceState({}, "", url); }
  }, []);

  const setRole = (r: Role) => {
    const url = new URL(window.location.href);
    url.searchParams.set("role", r);
    history.pushState({}, "", url);
    localStorage.setItem("role", r);
    setRoleState(r);
  };

  // Set CSS variable for role aura
  useEffect(() => {
    const auraColor = role === "dj" ? "var(--accent-dj)" : "var(--accent-venue)";
    document.documentElement.style.setProperty("--aura-color", auraColor);
  }, [role]);

  const value = useMemo(() => ({ role, setRole }), [role]);
  return <RoleCtx.Provider value={value}>{children}</RoleCtx.Provider>;
}

export function useRole() {
  const ctx = useContext(RoleCtx);
  if (!ctx) throw new Error("useRole must be used within RoleProvider");
  return ctx;
}


