"use client";

type Props = { items: string[]; speedSec?: number };

export default function SocialProofMarquee({ items, speedSec = 30 }: Props){
  const doubled = [...items, ...items];
  const style: React.CSSProperties & { [key: `--${string}`]: string } = {
    ["--speed"]: `${speedSec}s`,
  } as const;
  return (
    <div className="marquee" style={style}>
      <div className="marquee__track">
        {doubled.map((txt, i) => (
          <span key={i} className="chip">{txt}</span>
        ))}
      </div>
    </div>
  );
}
