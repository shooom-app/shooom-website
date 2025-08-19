"use client";

export default function VinylIcon({className=""}:{className?:string}) {
  return (
    <svg viewBox="0 0 24 24" className={`w-7 h-7 ${className}`}>
      <g className="neon-stroke" strokeWidth={1.9}>
        <circle cx="12" cy="12" r="8.5"/>
        <circle cx="12" cy="12" r="2.2"/>
        <path d="M12 3.5a8.5 8.5 0 0 1 8.5 8.5"/>
      </g>
    </svg>
  );
}


