"use client";

import type { SVGProps, FC } from "react";

export type IconName =
  | "vinyl"
  | "calendar"
  | "city"
  | "search"
  | "hourglass"
  | "loop"
  | "martini"
  | "cards"
  | "handshake"
  | "crowd";

/** Shared glow/size */
const base =
  "h-8 w-8 mb-3 text-red-400 drop-shadow-[0_0_12px_rgba(220,38,38,0.8)]";

/** tiny util to merge classes */
const cx = (...parts: Array<string | undefined>) =>
  parts.filter(Boolean).join(" ");

type SvgP = SVGProps<SVGSVGElement>;

/** Minimal placeholder icons (swap SVGs with your real ones anytime) */
const Vinyl = ({ className, ...rest }: SvgP) => (
  <svg viewBox="0 0 24 24" className={cx(base, className)} fill="none" {...rest}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const Calendar = ({ className, ...rest }: SvgP) => (
  <svg viewBox="0 0 24 24" className={cx(base, className)} fill="none" {...rest}>
    <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
    <line x1="3" y1="11" x2="21" y2="11" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const City = ({ className, ...rest }: SvgP) => (
  <svg viewBox="0 0 24 24" className={cx(base, className)} fill="none" {...rest}>
    <path d="M3 20h18M7 20V8h4v12M13 20v-6h4v6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const Search = ({ className, ...rest }: SvgP) => (
  <svg viewBox="0 0 24 24" className={cx(base, className)} fill="none" {...rest}>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <line x1="20" y1="20" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const Hourglass = ({ className, ...rest }: SvgP) => (
  <svg viewBox="0 0 24 24" className={cx(base, className)} fill="none" {...rest}>
    <path d="M6 4h12M6 20h12M16 8l-4 4-4-4M8 16l4-4 4 4" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const Loop = ({ className, ...rest }: SvgP) => (
  <svg viewBox="0 0 24 24" className={cx(base, className)} fill="none" {...rest}>
    <path d="M3 12a6 6 0 0 1 6-6h8M21 12a6 6 0 0 1-6 6H7" stroke="currentColor" strokeWidth="2" />
    <path d="M17 6l-2 2 2 2M7 14l2 2-2 2" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const Martini = ({ className, ...rest }: SvgP) => (
  <svg viewBox="0 0 24 24" className={cx(base, className)} fill="none" {...rest}>
    <path d="M4 4h16l-8 8-8-8Zm8 8v6M9 20h6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const Cards = ({ className, ...rest }: SvgP) => (
  <svg viewBox="0 0 24 24" className={cx(base, className)} fill="none" {...rest}>
    <rect x="5" y="6" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="9" y="4" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const Handshake = ({ className, ...rest }: SvgP) => (
  <svg viewBox="0 0 24 24" className={cx(base, className)} fill="none" {...rest}>
    <path d="M4 12l4-4 4 4 4-4 4 4-6 6-2-2-2 2-6-6Z" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const Crowd = ({ className, ...rest }: SvgP) => (
  <svg viewBox="0 0 24 24" className={cx(base, className)} fill="none" {...rest}>
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M2 20a6 6 0 0 1 12 0M10 20a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="2" />
  </svg>
);

/** Use a component type, not a return type */
const REGISTRY: Record<IconName, FC<SvgP>> = {
  vinyl: Vinyl,
  calendar: Calendar,
  city: City,
  search: Search,
  hourglass: Hourglass,
  loop: Loop,
  martini: Martini,
  cards: Cards,
  handshake: Handshake,
  crowd: Crowd,
};

export function NeonIcon({
  name,
  className,
  ...rest
}: { name: IconName } & SvgP) {
  const Cmp = REGISTRY[name];
  return <Cmp className={className} {...rest} />;
}
