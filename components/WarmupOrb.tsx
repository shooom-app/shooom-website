"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  animate,
  useReducedMotion,
} from "framer-motion";

/** Final percentage the liquid settles at */
const TARGET = 78;

type Props = {
  /** kept for future customization; currently ignored for a stable 78% */
  progress?: number;
  ctaHref?: string;
  helper?: string;
};

export default function WarmupOrb({
  ctaHref = "#early-access",
  helper = "Sign up during Warm-Up to get 6 months of Premium free when your city opens.",
}: Props) {
  const prefersReduced = useReducedMotion();

  // Start animations only when the orb is visible
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { margin: "-30% 0px -30% 0px", once: true });

  // Motion values: p = liquid level (%), amp = wave activity (1 -> 0.25)
  const p = useMotionValue(prefersReduced ? TARGET : 0);
  const amp = useMotionValue(prefersReduced ? 0.25 : 1);

  // UI label value (animated during fill)
  const [displayPct, setDisplayPct] = useState(0);

  // SVG paths for the fill and the surface highlight
  const [fillD, setFillD] = useState<string>("");
  const [lineD, setLineD] = useState<string>("");

  // wave phase + RAF handle
  const phaseRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  /** Start the fill once visible, then idle with a subtle slosh */
  useEffect(() => {
    if (prefersReduced) {
      p.set(TARGET);
      amp.set(0);
      setDisplayPct(TARGET);
      return;
    }
    if (!inView) return;

    // No overshoot → prevents the 80 → 78 dip
    const fillAnim = animate(p, TARGET, {
      duration: 7.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplayPct(Math.min(TARGET, Math.round(v))), // clamp label
    });

    fillAnim.then(() => {
      setDisplayPct(TARGET); // lock the label at TARGET

      // keep a gentle ±0.6% oscillation forever
      animate(p, [TARGET - 0.6, TARGET + 0.6], {
        duration: 8.0,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      });

      // decay wave energy for calmer motion
      animate(amp, 0.25, { duration: 8, ease: [0.22, 1, 0.36, 1] });
    });

    return () => {
      fillAnim.stop();
    };
    // IMPORTANT: keep this dependency array *fixed* to avoid the Next.js warning
  }, [inView, prefersReduced]);

  /** Build a smooth wave that extends past the edges to avoid side gaps */
  const buildWave = (progPct: number, activity: number, phase: number) => {
    const width = 1000;
    const height = 1000;

    const fillHeight = (progPct / 100) * height;
    const yBase = height - fillHeight;

    // amplitude from "energy"
    const A = 10 + (30 - 10) * Math.min(1, Math.max(0, activity));
    const lambda = width * 0.9;
    const k = (2 * Math.PI) / lambda;

    const n = 24;
    const dx = width / n;

    const xs: number[] = [];
    const ys: number[] = [];
    for (let i = 0; i <= n; i++) {
      const x = i * dx;
      const y =
        yBase +
        A * Math.sin(k * x + phase) * 0.9 +
        (A * 0.33) * Math.sin(k * 2.2 * x + phase * 1.6);
      xs.push(x);
      ys.push(y);
    }

    const overflow = 80;

    // Filled shape
    let top = `M ${-overflow} ${height} L ${-overflow} ${ys[0]}`;
    for (let i = 1; i <= n; i++) {
      const xc = (xs[i - 1] + xs[i]) / 2;
      const yc = (ys[i - 1] + ys[i]) / 2;
      top += ` Q ${xs[i - 1]} ${ys[i - 1]} ${xc} ${yc}`;
    }
    top += ` Q ${xs[n]} ${ys[n]} ${width + overflow} ${ys[n]}`;
    top += ` L ${width + overflow} ${height} L ${-overflow} ${height} Z`;

    // Surface line
    let line = `M ${-overflow} ${ys[0]}`;
    for (let i = 1; i <= n; i++) {
      const xc = (xs[i - 1] + xs[i]) / 2;
      const yc = (ys[i - 1] + ys[i]) / 2;
      line += ` Q ${xs[i - 1]} ${ys[i - 1]} ${xc} ${yc}`;
    }
    line += ` Q ${xs[n]} ${ys[n]} ${width + overflow} ${ys[n]}`;

    setFillD(top);
    setLineD(line);
  };

  /** RAF loop for buttery-smooth wave drift (with correct cleanup) */
  useEffect(() => {
    // First frame so hydration shows something
    buildWave(p.get(), amp.get(), phaseRef.current);

    if (prefersReduced || !inView) return;

    let last = performance.now();

    const tick = (t: number): void => {
      const dt = Math.min(64, t - last);
      last = t;

      // ms-based → frame-rate independent
      phaseRef.current += 0.0011 * dt;

      buildWave(p.get(), amp.get(), phaseRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
    // Keep this dependency array *fixed*
  }, [inView, prefersReduced]);

  // expose motion values as CSS vars
  const cssP = useMotionTemplate`${p}`;
  const cssAmp = useMotionTemplate`${amp}`;
  const styleVars = { "--p": cssP, "--amp": cssAmp } as unknown as CSSProperties;

  return (
    <section
      id="warmup"
      className="relative isolate mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
      aria-labelledby="warmup-title"
      ref={sectionRef}
    >
      <h2 id="warmup-title" className="sr-only">
        Warm-Up Phase Progress
      </h2>

      {/* ambient vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 30%, rgba(255,31,87,.12), transparent 60%)",
        }}
      />

      <div className="mx-auto grid place-items-center gap-6 text-center">
        <motion.div
          className="warmup-orb"
          role="img"
          aria-label={`Warm-Up progress ${displayPct} percent`}
          style={styleVars}
        >
          <svg className="orb-svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              {/* unified neon red with soft depth */}
              <linearGradient id="liquidFill" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="var(--slime-dark)" />
                <stop offset="55%" stopColor="var(--slime)" />
                <stop offset="100%" stopColor="var(--slime-light)" />
              </linearGradient>
            </defs>

            {/* liquid body */}
            <path d={fillD} fill="url(#liquidFill)" />

            {/* glossy surface line */}
            <path d={lineD} className="wave-line" />
          </svg>

          <div className="orb-label">
            <div className="percent">{displayPct}%</div>
            <div className="caption">Warm-Up Full</div>
          </div>
        </motion.div>

        <p className="max-w-xl text-white/80">{helper}</p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={ctaHref}
            className="rounded-xl bg-red-500/90 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400/60"
          >
            Reserve Early Access
          </a>

          <details className="group">
            <summary className="cursor-pointer select-none rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
              What is Warm-Up?
            </summary>
            <div className="mt-3 max-w-md text-sm text-white/70">
              Warm-Up is our pre-launch onboarding window. Early signups help
              shape features and get <strong>6 months of Premium free</strong>{" "}
              when their city opens. We roll out city-by-city, starting with Denver.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
