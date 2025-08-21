"use client";
import type { SVGProps } from "react";

export default function HomeBadgeNeonIcon(props: SVGProps<SVGSVGElement>) {
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

      {/* House outline */}
      <path className="hb-house" d="M20 36L32 24l12 12" />
      <path className="hb-house" d="M24 36v8h16v-8" />
      <path className="hb-house" d="M28 44v-4h8v4" />
    </svg>
  );
}
