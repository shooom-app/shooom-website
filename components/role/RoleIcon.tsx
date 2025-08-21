"use client";
import ProfileBadgeNeonIcon from "@/components/icons/ProfileBadgeNeonIcon";
import HomeBadgeNeonIcon   from "@/components/icons/HomeBadgeNeonIcon";
import PinBadgeNeonIcon    from "@/components/icons/PinBadgeNeonIcon";
import SearchBadgeNeonIcon from "@/components/icons/SearchBadgeNeonIcon";
import ClockBadgeNeonIcon  from "@/components/icons/ClockBadgeNeonIcon";
import StarBadgeNeonIcon   from "@/components/icons/StarBadgeNeonIcon";
import MartiniIcon         from "@/components/icons/MartiniIcon";
import CardsIcon           from "@/components/icons/CardsIcon";
import LoopIcon            from "@/components/icons/LoopIcon";
import CalendarCheckNeonIcon from "@/components/icons/CalendarCheckNeonIcon";

type StepIconName =
  | "profile" | "home" | "host" | "search" | "clock" | "star"
  | "martini" | "cards" | "loop" | "calendarCheck";

export function RoleIcon({ name, anim, className="h-7 w-7" }:{
  name: StepIconName;
  anim?: "glow"|"wobble"|"bounce"|"radar"|"sandflip"|"twinkle"|"ripple"|"stack"|"loop"|"tick"|"profile"|"home"|"host"|"search"|"clock"|"star"|"star-draw";
  className?: string;
}){
  // Map star to draw-only variant
  const mappedAnim = anim === "star" ? "star-draw" : anim;
  const animClass = mappedAnim ? `ri-anim--${mappedAnim}` : "ri-anim--glow";
  const map: Record<StepIconName, JSX.Element> = {
    profile:   <ProfileBadgeNeonIcon className={className} />,
    home:      <HomeBadgeNeonIcon   className={className} />,
    host:      <PinBadgeNeonIcon    className={className} />,
    search:    <SearchBadgeNeonIcon className={className} />,
    clock:     <ClockBadgeNeonIcon  className={className} />,
    star: <StarBadgeNeonIcon className={className} />,
    martini:   <MartiniIcon         className={className} />,
    cards:     <CardsIcon           className={className} />,
    loop:      <LoopIcon            className={className} />,
    calendarCheck: <CalendarCheckNeonIcon className={className} />,
  };
  
  // Back-compat: if any data still says "handshake", map it to the new icon
  const isHandshake = name === "handshake";
  const wrapClasses = `ri-wrap ${animClass}${isHandshake ? " ri--sharp" : ""}`;
  
  return (
    <span className={wrapClasses} aria-hidden="true">
      {map[name] || map.calendarCheck}
      {anim === "radar" && <span className="ri-radar-ring" />}
    </span>
  );
}
