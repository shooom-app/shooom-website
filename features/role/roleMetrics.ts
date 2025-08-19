export type MetricItem = {
  value: string;
  label: string;
  icon: "handshake" | "martini" | "star" | "globe" | "users";
};

export const DJ_METRICS: MetricItem[] = [
  { value: "5,000+",  label: "bookings completed",        icon: "handshake" },
  { value: "20,000+", label: "venues actively searching", icon: "martini" },
  { value: "4.9★",    label: "average review",            icon: "star" },
];

export const VENUE_METRICS: MetricItem[] = [
  { value: "10×",     label: "more diverse event offerings", icon: "globe" },
  { value: "10,000+", label: "meaningful DJ connections",     icon: "users" },
  { value: "4.9★",    label: "average rating",                icon: "star" },
];

export const METRICS_CHIP = "12-month predictions";
