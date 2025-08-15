import React, { useId } from "react";

type Props = {
  size?: number;
  lineWidth?: number;
  spin?: boolean;
  spinDurationSec?: number;
  className?: string;
};

export default function NeonVinylLogo({
  size = 300,
  lineWidth = 3,
  spin = true,
  spinDurationSec = 14,
  className,
}: Props) {
  const uid = useId().replace(/[:]/g, "-");
  const gradId = `nv_grad_${uid}`;
  const glowId = `nv_glow_${uid}`;

  const arcPath = (r: number, startDeg: number, endDeg: number) => {
    const cx = 256, cy = 256;
    const toRad = (d: number) => (d * Math.PI) / 180;
    const a0 = toRad(startDeg), a1 = toRad(endDeg);
    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    const largeArc = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
    return `M ${x0} ${y0} A ${r} ${r} 0 ${largeArc} 1 ${x1} ${y1}`;
  };

  const arcOuter = arcPath(208, -42, -12);
  const arcInner = arcPath(188, -50, -22);

  return (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      role="img"
      aria-label="Shooom neon vinyl"
      className={className}
      style={{ display: "block", filter: "drop-shadow(0 18px 40px rgba(0,0,0,.35))" }}
    >
      <style>{`
        @keyframes nv_spin { to { transform: rotate(360deg); } }
        .nv-rotor {
          transform-box: fill-box;
          transform-origin: center;
          animation: nv_spin ${spinDurationSec}s linear infinite;
          will-change: transform;
        }
      `}</style>

      <defs>
        <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="55%" stopColor="#e11d48" />
          <stop offset="100%" stopColor="#fb7185" />
        </linearGradient>
        <filter id={glowId} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <g className={spin ? "nv-rotor" : undefined}>
        <g opacity="0.6" filter={`url(#${glowId})`} stroke={`url(#${gradId})`} fill="none" strokeLinecap="round">
          <circle cx="256" cy="256" r="220" strokeWidth={lineWidth * 4} />
          <circle cx="256" cy="256" r="92"  strokeWidth={lineWidth * 3.2} />
          <circle cx="256" cy="256" r="6"   strokeWidth={lineWidth * 2.8} />
          <path d={arcOuter} strokeWidth={lineWidth * 3.2} />
          <path d={arcInner} strokeWidth={lineWidth * 2.8} />
        </g>
        <g stroke={`url(#${gradId})`} fill="none" strokeLinecap="round">
          <circle cx="256" cy="256" r="220" strokeWidth={lineWidth} />
          <circle cx="256" cy="256" r="92"  strokeWidth={lineWidth * 0.9} />
          <circle cx="256" cy="256" r="6"   strokeWidth={lineWidth * 0.9} />
          <path d={arcOuter} strokeWidth={lineWidth * 1.4} />
          <path d={arcInner} strokeWidth={lineWidth * 1.2} />
        </g>
      </g>
    </svg>
  );
}
