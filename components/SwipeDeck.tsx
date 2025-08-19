"use client";

import { useMemo, useState, useCallback } from "react";
import DeckCard from "./DeckCard";
import EndOfDeckCelebration from "./EndOfDeckCelebration";

type Item = { title: string; blurb: string; icon?: React.ReactNode };

type Props = {
  items: Item[];
  index: number;                   // front card index
  role: "dj" | "venue";
  onChangeIndex: (n: number) => void;
};

export default function SwipeDeck({ items, index, role, onChangeIndex }: Props) {
  const [compressClicks, setCompressClicks] = useState(0);
  const [celebrate, setCelebrate] = useState(false);

  const visible = useMemo(() => items.slice(index, index + 3), [items, index]);

  // compression amount grows a tiny bit on each NEXT click, capped
  const compression = Math.min(0.06, compressClicks * 0.012); // max 6%
  // helper to compute scale with compression
  const scaleFor = (peekIdx: number) =>
    1 - peekIdx * (0.035 + compression); // each peek gets smaller as compression grows

  const canPrev = index > 0;
  const canNext = index < items.length - 1;

  const handlePrev = useCallback(() => {
    if (!canPrev) return;
    onChangeIndex(index - 1);
    // dial back compression a touch when going backward
    setCompressClicks((c) => Math.max(0, c - 1));
  }, [canPrev, index, onChangeIndex]);

  const handleNext = useCallback(() => {
    if (canNext) {
      onChangeIndex(index + 1);
      setCompressClicks((c) => c + 1);
    } else {
      // end reached -> play celebration once
      setCelebrate(true);
      // auto-hide via EndOfDeckCelebration internal timeout calling onDone
    }
  }, [canNext, index, onChangeIndex]);

  return (
    <div className="relative mx-auto h-[520px] w-full max-w-xl deck-sandbox" style={{ isolation: "isolate" }}>
      {/* Cards */}
      {visible.map((item, i) => {
        const isFront = i === 0;
        const z = 30 - i;

        return (
          <DeckCard
            key={`${role}-${index + i}-${item.title}`}
            interactive={isFront}
            animate={{ y: i * 12, scale: scaleFor(i) }}
            transition={{ type: "spring", stiffness: 180, damping: 20, mass: 0.8 }}
            className={`z-[${z}] ${i === 1 ? "translate-y-1" : ""} ${i === 2 ? "translate-y-2" : ""}`}
          >
            <div className="flex items-start gap-3">
              {item.icon}
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="opacity-90">{item.blurb}</p>
              </div>
            </div>
          </DeckCard>
        );
      })}

      {/* Arrows */}
      <div className="absolute -bottom-4 right-0 flex items-center gap-3">
        <button
          type="button"
          onClick={handlePrev}
          disabled={!canPrev}
          className="rounded-xl px-3 py-2 panel-solid neon-outline disabled:opacity-50 active:scale-[0.98] transition-transform"
        >
          ←
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="rounded-xl px-3 py-2 panel-solid neon-outline active:scale-[0.98] transition-transform"
        >
          →
        </button>
      </div>

      {/* Celebration overlay */}
      <EndOfDeckCelebration show={celebrate} onDone={() => setCelebrate(false)} />
    </div>
  );
}


