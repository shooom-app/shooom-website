"use client";
import type { SVGProps } from "react";

export default function HourglassBadgeNeonIcon(props: SVGProps<SVGSVGElement>) {
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

      {/* Hourglass frame */}
      <path className="hg-frame" d="M24 18h16M24 46h16M24 18c0 8 16 8 16 14s-16 6-16 14" />

      {/* Sand top + bottom triangles */}
      <path className="hg-sand-top" d="M28 20l8 6 8-6" />
      <path className="hg-sand-bottom" d="M28 44l8-6 8 6" />
    </svg>
  );
}
