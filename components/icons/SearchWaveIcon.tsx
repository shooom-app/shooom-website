"use client";

export default function SearchWaveIcon({className=""}:{className?:string}) {
  return (
    <svg viewBox="0 0 24 24" className={`w-7 h-7 icon-wrap ${className}`}>
      <g className="neon-stroke" strokeWidth={1.9}>
        <circle cx="11" cy="11" r="5.5"/>
        <path d="M15.5 15.5L20 20"/>
        <path d="M7.8 11c1.1-1.2 2.2-1.2 3.3 0s2.2 1.2 3.3 0"/>
      </g>
    </svg>
  );
}


