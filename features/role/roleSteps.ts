export type StepItem = {
  title: string;
  blurb: string;
  icon:
    | "profile" | "home" | "host" | "search" | "clock" | "star"
    | "martini" | "cards" | "loop" | "calendarCheck";
  anim?: "glow"|"wobble"|"bounce"|"radar"|"sandflip"|"twinkle"|"ripple"|"stack"|"loop"|"tick"|"profile"|"home"|"host"|"search"|"clock"|"star";
};

export const DJ_STEPS: StepItem[] = [
  { title: "Light Up Your Profile", blurb: "Verify socials, add short clips, set your genres and vibe tags.", icon: "profile",   anim: "profile" },
  { title: "Set Your Home Base",     blurb: "Establish your official location — where you operate from.",     icon: "home",      anim: "home" },
  { title: "Host Availability",      blurb: "Set your availability and let venues discover you. Always dreamed of a West Coast run? Mark yourself open in LA, San Francisco, and San Diego — your calendar becomes the map for making it real while you earn along the way.",   icon: "host",  anim: "host" },
  { title: "Filter & Search",        blurb: "Dial in filters that match you — your genres, vibe tags, city, and the dates you want to perform. Then send requests to the venues that need your sound most.",       icon: "search",    anim: "search" },
  { title: "72-Hour Match Window",   blurb: "Once matched, either you accepted their request or they accepted yours — a 72-hour chat window opens. Use this time to negotiate and lock in the booking. The limit forces each connection to be meaningful; once the date is confirmed, you're ready to play.",             icon: "clock", anim: "clock" },
  { title: "Play → Review → Level Up", blurb: "Once the booked date is over, both you and the venue will be asked to leave a review on a 5-star scale, with an optional note. This system ensures every connection builds credibility and creates real opportunities to grow your career.",         icon: "star",      anim: "star" },
];

export const VENUE_STEPS: StepItem[] = [
  { title: "Dial In Your Venue",     blurb: "Verify IG, set vibe tags, and add photos that show your energy.", icon: "martini",   anim: "ripple" },
  { title: "Post Dates + Budget",    blurb: "List open nights with budget and equipment notes.",               icon: "cards",     anim: "stack" },
  { title: "Browse by Vibe",         blurb: "Filter by genre, energy, city, and date to find fits fast.",      icon: "search",    anim: "radar" },
  { title: "Confirm in 72 Hours",    blurb: "Send offer, align details, lock it in within 72 hours.",          icon: "hourglass", anim: "sandflip" },
  { title: "Book → Review → Repeat", blurb: "Rebook favorites quickly and build regular nights.",              icon: "loop",      anim: "loop" },
  { title: "Pro Talent Pool",        blurb: "Verified DJs with real reviews to hire confidently.",             icon: "calendarCheck", anim: "tick" },
];
