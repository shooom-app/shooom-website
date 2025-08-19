"use client";
import ProfileCardIcon   from "@/components/icons/ProfileCardIcon";
import HomePinIcon       from "@/components/icons/HomePinIcon";
import CalendarPinsIcon  from "@/components/icons/CalendarPinsIcon";
import SearchWaveIcon    from "@/components/icons/SearchWaveIcon";
import HourglassIcon     from "@/components/icons/HourglassIcon";
import StarBadgeIcon     from "@/components/icons/StarBadgeIcon";
import MartiniIcon       from "@/components/icons/MartiniIcon";
import CardsIcon         from "@/components/icons/CardsIcon";
import LoopIcon          from "@/components/icons/LoopIcon";
import HandshakeIcon     from "@/components/icons/HandshakeIcon";

type StepIconName =
  | "profile" | "city" | "calendar" | "search" | "hourglass" | "star"
  | "martini" | "cards" | "loop" | "handshake";

export function RoleIcon({ name, anim, className="h-7 w-7" }:{
  name: StepIconName;
  anim?: "glow"|"wobble"|"bounce"|"radar"|"sandflip"|"twinkle"|"ripple"|"stack"|"loop"|"clasp";
  className?: string;
}){
  const animClass = anim ? `ri-anim--${anim}` : "ri-anim--glow";
  const map: Record<StepIconName, JSX.Element> = {
    profile:   <ProfileCardIcon  className={className} />,
    city:      <HomePinIcon      className={className} />,
    calendar:  <CalendarPinsIcon className={className} />,
    search:    <SearchWaveIcon   className={className} />,
    hourglass: <HourglassIcon    className={className} />,
    star:      <StarBadgeIcon    className={className} />,
    martini:   <MartiniIcon      className={className} />,
    cards:     <CardsIcon        className={className} />,
    loop:      <LoopIcon         className={className} />,
    handshake: <HandshakeIcon    className={className} />,
  };
  return (
    <span className={`ri-wrap ${animClass}`} aria-hidden="true">
      {map[name]}
      {anim === "radar" && <span className="ri-radar-ring" />}
    </span>
  );
}
