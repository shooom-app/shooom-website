"use client";

export default function MartiniIcon({className=""}:{className?:string}) {
  return (
    <svg viewBox="0 0 24 24" className={`w-7 h-7 ${className}`}>
      <g strokeWidth={1.9} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 4h18l-9 8z"/>
        <path d="M12 12v8M8 20h8"/>
        <circle cx="14.5" cy="6.5" r="1.2"/>
      </g>
    </svg>
  );
}


