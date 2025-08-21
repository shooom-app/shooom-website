"use client";
import type { SVGProps } from "react";

/**
 * CalendarCheckNeonIcon — stroke-only, currentColor, neon-friendly.
 * 64x64 grid to match your set. No fills; lines read clean at small sizes.
 */
export default function CalendarCheckNeonIcon({
  className,
  ...rest
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      shapeRendering="geometricPrecision"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {/* Rings */}
      <path d="M18 10v8" />
      <path d="M32 10v8" />
      <path d="M46 10v8" />

      {/* Calendar outline (stroke only) */}
      <rect x="8" y="14" width="48" height="42" rx="6" />

      {/* Top divider */}
      <path d="M8 22h48" />

      {/* Badge circle (stroke only) */}
      <circle cx="32" cy="40" r="12" />

      {/* Check — animated via role-only CSS */}
      <path className="cc-check" d="M26 40l4.5 4.8L40 33" />
    </svg>
  );
}
