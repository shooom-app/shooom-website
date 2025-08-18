"use client";
import { useState } from "react";

// paste YOUR Google Web App URL (must end with /exec)
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzAzOAHhHSL-W1hSHIFQpyvPD9eQCboER1Fz9HtkKmrMQkpakiFV6u6UVRA8Vu4hfKF/exec";

export default function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [role, setRole] = useState<"dj" | "bar">("dj");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setStatus("sending");
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ email, role })
      });
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("err");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 mx-auto max-w-xl flex justify-center">
      <div className="flex items-center gap-2 px-2 py-2 rounded-full glass backdrop-blur-xl border border-white/10 shadow-[0_0_24px_rgba(225,29,72,0.25)]">
        {/* Email */}
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none w-56"
        />

        {/* DJ / Bar toggle */}
        <div className="relative flex items-center w-28 h-9 bg-white/5 rounded-full border border-white/10 overflow-hidden toggle-pulse">
          <input
            type="radio"
            id="ea-role-dj"
            name="ea-role"
            className="hidden peer/eadj"
            checked={role === "dj"}
            onChange={() => setRole("dj")}
          />
          <label
            htmlFor="ea-role-dj"
            className="flex-1 text-center text-xs font-medium text-white/70 peer-checked/eadj:text-white relative z-10 cursor-pointer select-none"
          >
            DJ
          </label>

          <input
            type="radio"
            id="ea-role-bar"
            name="ea-role"
            className="hidden peer/eabar"
            checked={role === "bar"}
            onChange={() => setRole("bar")}
          />
          <label
            htmlFor="ea-role-bar"
            className="flex-1 text-center text-xs font-medium text-white/70 peer-checked/eabar:text-white relative z-10 cursor-pointer select-none"
          >
            Bar
          </label>

          <span
            aria-hidden
            className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-[color:var(--brand-red-2)] to-[color:var(--brand-red)] rounded-full transition-transform duration-300 ease-out peer-checked/eabar:translate-x-full"
          />
        </div>

        {/* CTA */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="ml-2 px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[color:var(--brand-red-2)] to-[color:var(--brand-red)] text-white shadow-[0_0_24px_rgba(225,29,72,0.6)] hover:opacity-90 transition disabled:opacity-60"
        >
          {status === "sending" ? "Joining…" : "Get Early Access"}
        </button>
      </div>

      {/* status messages (unchanged) */}
      {status === 'ok' && <span className="ml-2 text-green-400 text-sm">You're on the list!</span>}
      {status === 'err' && <span className="ml-2 text-red-400 text-sm">Try again.</span>}
    </form>
  );
}
