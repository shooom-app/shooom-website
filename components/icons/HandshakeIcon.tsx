"use client";

export default function HandshakeIcon({className=""}:{className?:string}) {
  return (
    <svg viewBox="0 0 24 24" className={`w-7 h-7 ${className}`}>
      <g strokeWidth={1.9} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 13l4 4 3-3m11-1l-4 4-3-3M7 9l5 5M17 9l-5 5"/>
        <path d="M4 11l3-3 3 3 3-3 3 3 4-4"/>
      </g>
    </svg>
  );
}


