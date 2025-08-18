"use client";
import { useEffect, useState } from "react";

export default function AnnouncementBar(){
  const KEY = "hideWarmupBar";
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setHidden(localStorage.getItem(KEY) === "1");
  }, []);

  const scrollToWarmup = () => {
    const el = document.querySelector("#warmup");
    if(el) el.scrollIntoView({ behavior:"smooth", block:"start" });
  };

  if (hidden) return null;

  return (
    <div className="announce text-sm text-white">
      <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-center gap-4">
        <button onClick={scrollToWarmup} className="opacity-95 hover:opacity-100">
          Warm-Up phase is live — <span className="underline">click to see</span>
        </button>
        <button
          className="ml-3 close"
          aria-label="Close announcement"
          onClick={() => { localStorage.setItem(KEY,"1"); setHidden(true); }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
