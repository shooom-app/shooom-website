'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Role = "dj" | "venue";

export default function Hero() {
  const [role, setRole] = useState<Role>("dj");
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const content = {
    dj: {
      title: <>Book more nights. Build <span className="text-rose-600">mini-tours</span>.</>,
      sub: <>Shooom matches DJs and venues by <span className="text-rose-600">vibe</span>, <span className="text-rose-600">city</span>, and <span className="text-rose-600">date</span> — no middlemen.</>,
      bullets: [
        "Host multi-city availability",
        "Earn credits with great reviews",
      ],
      primary: { label: "Join DJ Waitlist", href: "#early-access" },
      secondary: { label: "How it works", href: "#how" },
    },
    venue: {
      title: <>Book <span className="text-rose-600">verified DJs</span> in <span className="text-rose-600">minutes</span>.</>,
      sub: <>Shooom matches venues with DJs by <span className="text-rose-600">vibe</span>, <span className="text-rose-600">city</span>, and <span className="text-rose-600">date</span> — no middlemen.</>,
      bullets: [
        "Book in minutes",
        "Vibe & genre filters",
      ],
      primary: { label: "Get Venue Access", href: "#early-access" },
      secondary: { label: "See cities", href: "#how" },
    },
  } as const;

  // Tiny parallax on the background blobs
  useEffect(() => {
    const el = sectionRef.current;
    const bg = bgRef.current;
    if (!el || !bg) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const MAX = 6; // px
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
      const tx = Math.max(Math.min(dx * MAX, MAX), -MAX);
      const ty = Math.max(Math.min(dy * MAX, MAX), -MAX);
      bg.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    };

    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  const c = content[role];

  return (
    <section ref={sectionRef} className="relative isolate overflow-clip">
      {/* Animated background */}
      <div ref={bgRef} className="hero-bg">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="scrim" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:text-left">
        {/* Role toggle */}
        <div className="inline-flex gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
          <button
            className={`role-chip ${role === "dj" ? "active" : ""}`}
            onClick={() => setRole("dj")}
            aria-pressed={role === "dj"}
          >
            I’m a DJ
          </button>
          <button
            className={`role-chip ${role === "venue" ? "active" : ""}`}
            onClick={() => setRole("venue")}
            aria-pressed={role === "venue"}
          >
            I’m a Venue
          </button>
        </div>

        {/* Headline */}
        <h1 className="mt-6 text-4xl sm:text-6xl font-bold leading-tight">
          {c.title}
        </h1>

        {/* One-liner */}
        <p className="mt-4 text-white/70 max-w-2xl">
          {c.sub}
        </p>

        {/* Bullets */}
        <ul className="mt-6 space-y-1 text-white/80">
          {c.bullets.map((b) => (
            <li key={b}><span className="text-rose-600">•</span> {b}</li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={c.primary.href} className="btn-primary">
            {c.primary.label}
          </Link>
          <Link href={c.secondary.href} className="btn-secondary">
            {c.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
