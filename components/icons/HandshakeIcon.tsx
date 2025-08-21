"use client";
import type { SVGProps } from "react";

/**
 * Handshake (Deal) — 64x64 grid, stroke-only, proportioned to match the reference.
 * - Balanced cuffs (rounded-rect), dot buttons
 * - Symmetric palms with 4-finger rhythm
 * - Center clasp seam
 * - Non-scaling stroke for clarity at all sizes
 */
export default function HandshakeIcon({
  className,
  ...rest
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
      vectorEffect="non-scaling-stroke"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {/* Cuffs (proportions matched to ref: height≈10, width≈12, corner radius≈3) */}
      <rect x="6"  y="23" width="12" height="10" rx="3" />
      <rect x="46" y="23" width="12" height="10" rx="3" />
      {/* Cuff buttons (centered) */}
      <circle cx="12" cy="28" r="1.3" />
      <circle cx="52" cy="28" r="1.3" />

      {/* Left palm + fingers (mirror of right) */}
      <g className="hs-left">
        {/* Wrist → palm curve: slight S-shape to avoid "flat" look */}
        <path d="M18 26c6 -2 9.8 -0.4 13.2 3.1c1.2 1.2 2.4 1.5 3.5 1.4" />
        {/* Finger rhythm (progressively shorter spans) */}
        <path d="M20.3 32.4l4.7 4.0" />
        <path d="M23.1 31.2l4.8 4.0" />
        <path d="M25.9 30.3l4.7 3.9" />
        <path d="M28.6 29.7l4.3 3.7" />
      </g>

      {/* Right palm + fingers */}
      <g className="hs-right">
        <path d="M46 26c-6 -2 -9.8 -0.4 -13.2 3.1c-1.2 1.2 -2.4 1.5 -3.5 1.4" />
        <path d="M43.7 32.4l-4.7 4.0" />
        <path d="M40.9 31.2l-4.8 4.0" />
        <path d="M38.1 30.3l-4.7 3.9" />
        <path d="M35.4 29.7l-4.3 3.7" />
      </g>

      {/* Clasp seam (slight arc; matched weight) */}
      <path className="hs-clasp" d="M24.8 36c2.1 1.6 4.2 2.2 7.2 2.2s5.1-.6 7.2-2.2" />

      {/* Pulse halo (for optional clasp animation) */}
      <circle className="hs-pulse" cx="32" cy="34" r="0.1" />
    </svg>
  );
}


