// features/role-flow/SectionRenderer.tsx
"use client";

import StepsGrid  from "./sections/StepsGrid";
import CTAButtons from "./sections/CTAButtons";
import StatsStrip from "@/components/StatsStrip"; // preferred
// If alias "@" isn't set, use:
// import StatsStrip from "../../components/StatsStrip";

import type { AnySection } from "./types";

export default function SectionRenderer({ section }: { section: AnySection }) {
  if (section.type === "steps")  return <StepsGrid section={section as any} />;
  if (section.type === "ctas")   return <CTAButtons section={section as any} />;
  if (section.type === "stats")  return <StatsStrip items={(section as any).items} />;
  return null;
}
