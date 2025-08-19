"use client";

export default function HomePinIcon({className=""}:{className?:string}) {
  return (
    <svg viewBox="0 0 24 24" className={`w-7 h-7 icon-wrap ${className}`}>
      <g className="neon-stroke" strokeWidth={1.9}>
        <path d="M4 11.5l8-6.5 8 6.5"/>
        <path d="M6.5 10.5v8h11v-8"/>
        <path d="M17.5 20.5c1.8-2.2 2.8-3.9 2.8-5.4a3.3 3.3 0 10-6.6 0c0 1.5 1 3.2 2.8 5.4z"/>
        <circle cx="17.5" cy="15.1" r="1.1"/>
      </g>
    </svg>
  );
}


