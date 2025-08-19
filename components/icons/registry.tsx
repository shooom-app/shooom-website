"use client";

// TODO: Re-enable icons as new sections need them. SVGs are kept; registry is slimmed to minimize bundle.
import type { FC } from "react";

import ProfileCardIcon from "@/components/icons/ProfileCardIcon";
import CalendarPinsIcon from "@/components/icons/CalendarPinsIcon";
import HomePinIcon from "@/components/icons/HomePinIcon";
import SearchWaveIcon from "@/components/icons/SearchWaveIcon";
import HourglassIcon from "@/components/icons/HourglassIcon";
import StarBadgeIcon from "@/components/icons/StarBadgeIcon";
import MartiniIcon from "@/components/icons/MartiniIcon";
import HandshakeIcon from "@/components/icons/HandshakeIcon";
import LoopIcon from "@/components/icons/LoopIcon";
import CardsIcon from "@/components/icons/CardsIcon";
import VinylIcon from "@/components/icons/VinylIcon";
import CrowdIcon from "@/components/icons/CrowdIcon";

export type IconName =
  | "vinyl" | "calendar" | "city" | "search" | "hourglass" | "star"
  | "martini" | "cards" | "loop" | "handshake" | "crowd";

const REGISTRY: Record<IconName, FC<{ className?: string }>> = {
  // vinyl: VinylIcon,
  // calendar: CalendarPinsIcon,
  // city: HomePinIcon,
  search: SearchWaveIcon,
  // hourglass: HourglassIcon,
  // star: StarBadgeIcon,
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
