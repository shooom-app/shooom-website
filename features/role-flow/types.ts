import type { IconName } from "@/components/icons/registry";

export type Role = "dj" | "bar";

export type CTA = { label: string; href: string; variant?: "primary" | "ghost" };

export type Step = {
  icon: IconName;
  title: string;
  blurb: string;
  media?: { type: "img" | "video" | "lottie"; src: string; alt?: string };
};

export type SectionBase = { type: string; id?: string; title?: string; subtitle?: string };

/** NEW: simple heading chip above a section (e.g., above stats) */
export type HeadingSection = SectionBase & { type: "heading"; text: string };

export type StepsSection = SectionBase & { type: "steps"; steps: Step[] };
export type CTAsSection  = SectionBase & { type: "ctas"; ctas: CTA[] };
export type StatsSection = SectionBase & { type: "stats"; items: { k: string; v: string }[] };

export type TestimonialsSection = SectionBase & {
  type: "testimonials";
  items: { quote: string; name: string; role?: string }[];
};
export type FAQSection = SectionBase & { type: "faq"; items: { q: string; a: string }[] };

export type AnySection =
  | HeadingSection
  | StepsSection
  | CTAsSection
  | StatsSection
  | TestimonialsSection
  | FAQSection;

export type SectionConfig = { title: string; subtitle?: string; sections: AnySection[] };
export type RoleContent = Record<Role, SectionConfig>;
