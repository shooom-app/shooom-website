"use client";

export default function HourglassIcon({className=""}:{className?:string}) {
  return (
    <svg viewBox="0 0 24 24" className={`w-7 h-7 icon-wrap ${className}`}>
      <g className="neon-stroke" strokeWidth={1.9}>
        <rect x="6" y="3" width="12" height="18" rx="2"/>
        <path d="M7.8 6.5c2 1.8 6.4 1.8 8.4 0M7.8 17.5c2-1.8 6.4-1.8 8.4 0"/>
        <path d="M9 9.5c2 .9 4 .9 6 0" style={{strokeDasharray:24, animation:"sandFlow 2.8s ease-in-out infinite alternate"}}/>
      </g>
    </svg>
  );
}


