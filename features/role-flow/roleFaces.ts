// features/role-flow/roleFaces.ts
export type CubeFaceData = {
  title: string;
  blurb?: string;
  icon?: string; // string id; mapped to animated icons inside the client cube later
};

export const DJ_FACES: CubeFaceData[] = [
  { title: "Build Your Profile",       blurb: "Verify Instagram, set genres & vibe tags.", icon: "vinyl" },
  { title: "Claim Your Base City",     blurb: "Pin your primary city; add travel cities.", icon: "city" },
  { title: "Host Availability",        blurb: "Mark open dates; set minimums & equipment.", icon: "calendar" },
  { title: "Browse & Apply",           blurb: "Filter by vibe, energy, city, and dates.",   icon: "search" },
  { title: "Confirm in 72 Hours",      blurb: "Offer → chat → both sides confirm.",         icon: "hourglass" },
  { title: "Reviews & Level Up",       blurb: "Rebook favorites, grow ratings, unlock perks.", icon: "star" },
];

export const VENUE_FACES: CubeFaceData[] = [
  { title: "Dial In Your Venue",       blurb: "Verify Instagram, set vibe tags, add photos.", icon: "martini" },
  { title: "Post Dates + Budget",      blurb: "Open nights, budget & equipment notes.",       icon: "cards" },
  { title: "Browse by Vibe",           blurb: "Filter by genre, energy, city & dates.",       icon: "search" },
  { title: "Confirm in 72 Hours",      blurb: "Send offer, chat terms, lock it in.",          icon: "hourglass" },
  { title: "Book → Review → Repeat",   blurb: "Rebook fast, grow regular nights.",            icon: "loop" },
  { title: "Pro Talent Pool",          blurb: "Verified DJs with real reviews.",              icon: "handshake" },
];

