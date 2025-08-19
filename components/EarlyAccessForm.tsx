"use client";
import { useState } from "react";

// paste YOUR Google Web App URL (must end with /exec)
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzAzOAHhHSL-W1hSHIFQpyvPD9eQCboER1Fz9HtkKmrMQkpakiFV6u6UVRA8Vu4hfKF/exec";

type Role = "dj" | "venue";
type EarlyAccessFormProps = {
  id?: string;
  className?: string;
  submitLabel?: string;
  successLabel?: string;
  errorLabel?: string;
  roleLabels?: { dj?: string; venue?: string };
};

export default function EarlyAccessForm(props: EarlyAccessFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [role, setRole] = useState<Role>("dj");

  const labels = {
    dj: props.roleLabels?.dj ?? "DJ",
    venue: props.roleLabels?.venue ?? "Venue",
  } as const;

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
    <form onSubmit={onSubmit} id={props.id} className={props.className ?? "mt-8 mx-auto max-w-xl flex justify-center"}>
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

        {/* DJ / Venue toggle */}
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
            {labels.dj}
          </label>

          <input
            type="radio"
            id="ea-role-venue"
            name="ea-role"
            className="hidden peer/eavenue"
            checked={role === "venue"}
            onChange={() => setRole("venue")}
          />
          <label
            htmlFor="ea-role-venue"
            className="flex-1 text-center text-xs font-medium text-white/70 peer-checked/eavenue:text-white relative z-10 cursor-pointer select-none"
          >
            {labels.venue}
          </label>

          <span
            aria-hidden
            className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-[color:var(--brand-red-2)] to-[color:var(--brand-red)] rounded-full transition-transform duration-300 ease-out peer-checked/eavenue:translate-x-full"
          />
        </div>

        {/* CTA */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="ml-2 px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[color:var(--brand-red-2)] to-[color:var(--brand-red)] text-white shadow-[0_0_24px_rgba(225,29,72,0.6)] hover:opacity-90 transition disabled:opacity-60"
        >
          {status === "sending" ? (props.submitLabel ?? "Joining…") : (props.submitLabel ?? "Get Early Access")}
        </button>
      </div>

      {/* status messages (unchanged) */}
      {status === 'ok' && <span className="ml-2 text-green-400 text-sm">{props.successLabel ?? "You're on the list!"}</span>}
      {status === 'err' && <span className="ml-2 text-red-400 text-sm">{props.errorLabel ?? "Try again."}</span>}
    </form>
  );
}
