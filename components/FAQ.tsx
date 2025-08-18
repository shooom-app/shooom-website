"use client";

import { useState } from "react";
import { FAQ } from "@/features/data/faqs";

interface FAQProps {
  title: string;
  subtitle: string;
  items: FAQ[];
}

export default function FAQ({ title, subtitle, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold">{title}</h2>
        <p className="text-white/70 mt-2">{subtitle}</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <span className="font-medium text-white">{item.q}</span>
              <svg
                className={`w-5 h-5 text-white/60 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            <div
              className={`px-6 transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100 pb-4"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <p className="text-white/80 leading-relaxed">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
