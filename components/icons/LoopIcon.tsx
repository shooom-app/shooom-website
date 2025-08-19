"use client";

export default function LoopIcon({className=""}:{className?:string}) {
  return (
    <svg viewBox="0 0 24 24" className={`w-7 h-7 ${className}`}>
      <g className="neon-stroke" strokeWidth={1.9}>
        <path d="M4 12a6 6 0 0 1 6-6h6"/>
        <path d="M20 12a6 6 0 0 1-6 6H8"/>
        <path d="M16 6l-2 2 2 2M8 14l2 2-2 2"/>
      </g>
    </svg>
  );
}


