"use client";
import { useEffect, useRef, useState } from "react";

export function useMeasure<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [rect, setRect] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      setRect({ width: r.width, height: r.height });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, rect] as const;
}
