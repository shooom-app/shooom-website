"use client";

type Props = { items: string[]; speedSec?: number };

export default function SocialProofMarquee({ items, speedSec = 30 }: Props){
  const doubled = [...items, ...items];
  return (
    <div className="marquee" style={{ ['--speed' as any]: `${speedSec}s` }}>
      <div className="marquee__track">
        {doubled.map((txt, i) => (
          <span key={i} className="chip">{txt}</span>
        ))}
      </div>
    </div>
  );
}
