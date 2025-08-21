"use client";
import type { SVGProps } from "react";

export default function PlaneBadgeNeonIcon(props: SVGProps<SVGSVGElement>) {
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
      {/* Airplane silhouette */}
      <path className="pb-plane" d="M20 40l24-12M20 40l14-22M20 40l22 8" />
    </svg>
  );
}
