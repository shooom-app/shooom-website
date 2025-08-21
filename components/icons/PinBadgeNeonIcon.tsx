"use client";
import type { SVGProps } from "react";

export default function PinBadgeNeonIcon(props: SVGProps<SVGSVGElement>) {
  const { className = "", ...rest } = props;
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
      {/* Outer badge */}
      <rect x="10" y="10" width="44" height="44" rx="8" />

      {/* Location pin */}
      <path className="pb-pin" d="M32 22c-5 0-9 4-9 9 0 7 9 14 9 14s9-7 9-14c0-5-4-9-9-9z" />
      <circle className="pb-dot" cx="32" cy="31" r="2.6" />
    </svg>
  );
}
