"use client";
import type { SVGProps } from "react";

export default function StarBadgeNeonIcon(props: SVGProps<SVGSVGElement>) {
  const { className = "", ...rest } = props;
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"                        // global fill off
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
      {/* Badge frame (explicitly no fill) */}
      <rect x="10" y="10" width="44" height="44" rx="8" fill="none" />

      {/* Stroke-only star (explicitly no fill) */}
      <path
        className="star-outline"
        fill="none"
        d="M32 18l5.1 10.3 11.4 1.7-8.2 8 1.9 11.3L32 44.7 21.8 49.3l1.9-11.3-8.2-8 11.4-1.7L32 18z"
      />
    </svg>
  );
}
