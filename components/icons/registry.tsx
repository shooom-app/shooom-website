"use client";

// TODO: Re-enable icons as new sections need them. SVGs are kept; registry is slimmed to minimize bundle.
import type { FC } from "react";

import ProfileBadgeNeonIcon from "@/components/icons/ProfileBadgeNeonIcon";
import PinBadgeNeonIcon from "@/components/icons/PinBadgeNeonIcon";
import HomeBadgeNeonIcon from "@/components/icons/HomeBadgeNeonIcon";
import SearchBadgeNeonIcon from "@/components/icons/SearchBadgeNeonIcon";
import ClockBadgeNeonIcon from "@/components/icons/ClockBadgeNeonIcon";
import StarBadgeNeonIcon from "@/components/icons/StarBadgeNeonIcon";
import MartiniIcon from "@/components/icons/MartiniIcon";
import CalendarCheckNeonIcon from "@/components/icons/CalendarCheckNeonIcon";
import LoopIcon from "@/components/icons/LoopIcon";
import CardsIcon from "@/components/icons/CardsIcon";
import VinylIcon from "@/components/icons/VinylIcon";
import CrowdIcon from "@/components/icons/CrowdIcon";

export type IconName =
  | "vinyl" | "host" | "home" | "search" | "clock" | "star"
  | "martini" | "cards" | "loop" | "calendarCheck" | "crowd";

const REGISTRY: Record<IconName, FC<{ className?: string }>> = {
  // vinyl: VinylIcon,
  // calendar: CalendarPinsIcon,
  // city: HomePinIcon,
  search: SearchWaveIcon,
  // hourglass: HourglassIcon,
  star: StarBadgeNeonIcon,
  // martini: MartiniIcon,
  // cards: CardsIcon,
  // loop: LoopIcon,
  // handshake: HandshakeIcon,
  // crowd: CrowdIcon,
};

export function NeonIconByName({ name, className = "h-8 w-8 neon-icon" }:{ name: IconName; className?: string }) {
  const Cmp = REGISTRY[name] || REGISTRY["search"];
  return <Cmp className={className} />;
}

// Back-compat: legacy name used by older sections
export function NeonIcon({ name, className }: { name: IconName; className?: string }) {
  return <NeonIconByName name={name} className={className || "h-8 w-8 neon-icon"} />;
}
