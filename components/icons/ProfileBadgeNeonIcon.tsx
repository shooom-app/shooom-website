"use client";
import type { SVGProps } from "react";

export default function ProfileBadgeNeonIcon(props: SVGProps<SVGSVGElement>) {
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
      {/* Outer badge (rounded square) */}
      <rect x="10" y="10" width="44" height="44" rx="8" />

      {/* Head + shoulders */}
      <circle cx="32" cy="28" r="6" />
      <path d="M20 46c2-6 8-10 12-10s10 4 12 10" />

      {/* Verification tick inside bottom right corner */}
      <path className="pb-check" d="M36 44l4 4 8-9" />
    </svg>
  );
}
