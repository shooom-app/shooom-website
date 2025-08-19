"use client";

export default function StarBadgeIcon({className=""}:{className?:string}) {
  return (
    <svg viewBox="0 0 24 24" className={`w-7 h-7 ${className}`}>
      <g strokeWidth={1.9} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4.5l2.5 4.7 5.2.7-3.8 3.6.9 5.1L12 16.8 7.2 18.6l.9-5.1L4.3 9.9l5.2-.7z"/>
        <circle cx="12" cy="4.5" r="1"/>
      </g>
    </svg>
  );
}


