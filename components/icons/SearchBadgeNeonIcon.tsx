"use client";
import type { SVGProps } from "react";

export default function SearchBadgeNeonIcon(props: SVGProps<SVGSVGElement>) {
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
      
      {/* Magnifying glass */}
      <circle className="sb-lens" cx="30" cy="30" r="8" />
      <line className="sb-handle" x1="36" y1="36" x2="44" y2="44" />
    </svg>
  );
}
