"use client";

export default function CardsIcon({className=""}:{className?:string}) {
  return (
    <svg viewBox="0 0 24 24" className={`w-7 h-7 ${className}`}>
      <g className="neon-stroke" strokeWidth={1.9}>
        <rect x="5" y="6" width="10" height="14" rx="2"/>
        <rect x="9" y="4" width="10" height="14" rx="2"/>
      </g>
    </svg>
  );
}


