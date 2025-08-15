"use client";
import { useState } from "react";

// paste YOUR Google Web App URL (must end with /exec)
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzAzOAHhHSL-W1hSHIFQpyvPD9eQCboER1Fz9HtkKmrMQkpakiFV6u6UVRA8Vu4hfKF/exec";

export default function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setStatus("sending");
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ email })
      });
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("err");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 mx-auto max-w-md flex gap-3">
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-xl px-4 py-3 bg-white/5 border border-white/15 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-xl px-5 py-3 bg-red-500 text-white font-medium hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Joining…" : "Get Early Access"}
      </button>
      {status === "ok" && <span className="ml-2 text-green-400 text-sm">You’re on the list!</span>}
      {status === "err" && <span className="ml-2 text-red-400 text-sm">Try again.</span>}
    </form>
  );
}
