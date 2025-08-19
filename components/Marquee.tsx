"use client";
import { useLayoutEffect, useRef, useState } from "react";

type Props = {
  items: string[];
  /** seconds for one cycle; larger = slower */
  speedSec?: number;
  className?: string;
  pauseOnHover?: boolean;
};

export default function Marquee({
  items,
  speedSec = 32,
  className = "",
  pauseOnHover = true,
}: Props) {
  const segRef = useRef<HTMLUListElement | null>(null);
  const [segWidth, setSegWidth] = useState(0);

  // measure with layout effect to avoid 1-frame jitter
  useLayoutEffect(() => {
    const el = segRef.current;
    if (!el) return;
    const measure = () => {
      const { width } = el.getBoundingClientRect();
      setSegWidth(Math.ceil(width) + 1); // ceiling to beat subpixel gaps
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [items]);

  const style: React.CSSProperties & { [key: `--${string}`]: string } = {
    ["--seg"]: `${segWidth}px`,
    ["--duration"]: `${speedSec}s`,
  } as const;

  const marqueeCls =
    "marquee w-full select-none" +
    (pauseOnHover ? " marquee--pause-on-hover" : "") +
    (className ? ` ${className}` : "");

  return (
    <div className={marqueeCls} aria-label="Social proof highlights" style={style}>
      <div className="marquee__stage" aria-hidden={segWidth === 0}>
        {/* Segment A — measured */}
        <ul ref={segRef} className="marquee__segment">
          {items.map((txt) => (
            <li key={`a-${txt}`} className="chip-neon">{txt}</li>
          ))}
        </ul>

        {/* Segment B */}
        <ul className="marquee__segment" aria-hidden="true">
          {items.map((txt) => (
            <li key={`b-${txt}`} className="chip-neon">{txt}</li>
          ))}
        </ul>

        {/* Segment C (gives buffer so reset is invisible) */}
        <ul className="marquee__segment" aria-hidden="true">
          {items.map((txt) => (
            <li key={`c-${txt}`} className="chip-neon">{txt}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
