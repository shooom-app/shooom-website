"use client";

export default function CalendarPinsIcon({className=""}:{className?:string}) {
  return (
    <svg viewBox="0 0 24 24" className={`w-7 h-7 icon-wrap ${className}`}>
      <g className="neon-stroke" strokeWidth={1.9}>
        <rect x="3" y="4.5" width="18" height="16" rx="3"/>
        <path d="M8 3v3M16 3v3M3 10h18"/>
        <circle cx="9" cy="14" r="1.2"/>
        <circle cx="15" cy="14" r="1.2"/>
        <circle cx="12" cy="17" r="1.2"/>
      </g>
    </svg>
  );
}


