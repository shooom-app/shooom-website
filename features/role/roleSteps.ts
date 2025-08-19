export type StepItem = {
  title: string;
  blurb: string;
  icon:
    | "profile" | "city" | "calendar" | "search" | "hourglass" | "star"
    | "martini" | "cards" | "loop" | "handshake";
  anim?: "glow"|"wobble"|"bounce"|"radar"|"sandflip"|"twinkle"|"ripple"|"stack"|"loop"|"clasp";
};

export const DJ_STEPS: StepItem[] = [
  { title: "Light Up Your Profile", blurb: "Verify socials, add short clips, set your genres and vibe tags.", icon: "profile",   anim: "glow" },
  { title: "Claim Your Base City",   blurb: "Pin your home base; add travel cities to plan runs easily.",     icon: "city",      anim: "wobble" },
  { title: "Host Availability",      blurb: "Mark open dates and min requirements (multi-city supported).",   icon: "calendar",  anim: "bounce" },
  { title: "Browse & Apply",         blurb: "Filter venues by vibe, energy, city, and specific dates.",       icon: "search",    anim: "radar" },
  { title: "72-Hour Match Window",   blurb: "Offer → chat → both sides confirm within 72 hours.",             icon: "hourglass", anim: "sandflip" },
  { title: "Play → Review → Level Up", blurb: "Great shows earn reviews and unlock better bookings.",         icon: "star",      anim: "twinkle" },
];

export const VENUE_STEPS: StepItem[] = [
  { title: "Dial In Your Venue",     blurb: "Verify IG, set vibe tags, and add photos that show your energy.", icon: "martini",   anim: "ripple" },
  { title: "Post Dates + Budget",    blurb: "List open nights with budget and equipment notes.",               icon: "cards",     anim: "stack" },
  { title: "Browse by Vibe",         blurb: "Filter by genre, energy, city, and date to find fits fast.",      icon: "search",    anim: "radar" },
  { title: "Confirm in 72 Hours",    blurb: "Send offer, align details, lock it in within 72 hours.",          icon: "hourglass", anim: "sandflip" },
  { title: "Book → Review → Repeat", blurb: "Rebook favorites quickly and build regular nights.",              icon: "loop",      anim: "loop" },
  { title: "Pro Talent Pool",        blurb: "Verified DJs with real reviews to hire confidently.",             icon: "handshake", anim: "clasp" },
];
