"use client";

export default function CrowdIcon({className=""}:{className?:string}) {
  return (
    <svg viewBox="0 0 24 24" className={`w-7 h-7 ${className}`}>
      <g className="neon-stroke" strokeWidth={1.9}>
        <circle cx="8" cy="9" r="2.6"/>
        <circle cx="16" cy="9" r="2.6"/>
        <path d="M2.8 20c0-3.6 2.9-6.6 6.6-6.6s6.6 3 6.6 6.6"/>
        <path d="M8 20c0-3.6 2.9-6.6 6.6-6.6S21.2 16.4 21.2 20"/>
      </g>
    </svg>
  );
}


