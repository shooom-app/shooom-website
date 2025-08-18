"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function WarmupPhase() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="warmup"
      className="mx-auto max-w-5xl px-4 py-16"
      aria-labelledby="warmup-title"
    >
      {/* Bubble wrapper (centered) */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-center">
        <div className="relative mt-10 sm:mt-0">
          {/* Neon orb */}
          <motion.div
            className="bubble"
            aria-hidden="true"
            initial={{ scale: 0.98, opacity: 0.9, y: 0 }}
            animate={
              prefersReduced
                ? { scale: 1, opacity: 0.9 }
                : {
                    scale: [0.98, 1.02, 0.98],
                    opacity: 0.95,
                    y: [0, -6, 0, 4, 0],
                    rotate: [0, 2, 0, -2, 0],
                  }
            }
            transition={
              prefersReduced
                ? { duration: 0 }
                : { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }
          />
          {/* Soft vignette to improve legibility */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              maskImage:
                "radial-gradient(55% 55% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.0) 85%)",
              WebkitMaskImage:
                "radial-gradient(55% 55% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.0) 85%)",
              background:
                "radial-gradient(closest-side, rgba(0,0,0,0.0), rgba(0,0,0,0.55))",
            }}
          />
        </div>
      </div>

      {/* Content card */}
      <div className="relative mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black/55 p-6 sm:p-8 backdrop-blur-md shadow-[0_0_80px_rgba(255,46,95,0.15)]">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1 text-xs font-medium tracking-wide text-red-300">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-red-400" />
          Warm-Up Phase
        </div>

        <h2
          id="warmup-title"
          className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          We’re launching with a Warm-Up Phase
        </h2>

        <p className="mt-3 text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
          Sign up during Warm-Up and get{" "}
          <span className="font-semibold text-white">6 months of Premium free</span>{" "}
          when your city opens. Lock your spot now—early access helps shape the
          first wave of features for DJs and venues.
        </p>

        <ul className="mt-6 grid list-disc gap-2 pl-5 text-sm text-white/75 sm:text-base">
          <li>No credit card required to reserve</li>
          <li>Early feature flags and feedback channels</li>
          <li>City-by-city rollout (Denver first)</li>
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#early-access"
            className="rounded-xl bg-red-500/90 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400/60"
          >
            Reserve Early Access
          </a>
          <a
            href="#how-it-works"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            How it works
          </a>
        </div>
      </div>
    </section>
  );
}
