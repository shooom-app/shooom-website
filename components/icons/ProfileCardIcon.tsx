"use client";

export default function ProfileCardIcon({className=""}:{className?:string}) {
  return (
    <svg viewBox="0 0 24 24" className={`w-7 h-7 icon-wrap ${className}`}>
      <g className="neon-stroke" strokeWidth={1.9}>
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <circle cx="12" cy="9" r="3.2"/>
        <path d="M6.5 18c1.9-3.3 4.2-4.9 5.5-4.9s3.6 1.6 5.5 4.9"/>
      </g>
    </svg>
  );
}


