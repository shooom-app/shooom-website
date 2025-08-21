"use client";
import type { SVGProps } from "react";

export default function ClockBadgeNeonIcon(props: SVGProps<SVGSVGElement>) {
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
      {/* Badge */}
      <rect x="10" y="10" width="44" height="44" rx="8" />

      {/* Clock face */}
      <circle cx="32" cy="32" r="10" />

      {/* Clock hands */}
      <line className="clk-hour" x1="32" y1="32" x2="32" y2="26" />
      <line className="clk-minute" x1="32" y1="32" x2="38" y2="32" />
    </svg>
  );
}
