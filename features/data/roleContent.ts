// features/data/roleContent.ts
import type { RoleContent } from "@/features/role-flow/types";

export const roleContent: RoleContent = {
  dj: {
    title: "For DJs",
    subtitle:
      "Plug in, glow up, and get booked. Your profile becomes a neon beacon for venues that match your sound.",
    sections: [
      {
        type: "steps",
        steps: [
          { icon: "vinyl",    title: "Light Up Your Profile",  blurb: "Verify socials, drop 2–3 short clips, pick genre + vibe. Clean, bold, unmistakably you." },
          { icon: "city",     title: "Claim Your Base City",   blurb: "Home base helps locals find you fast. Touring soon? Add secondary cities and set travel windows." },
          { icon: "calendar", title: "Host Availability",      blurb: "Post your open nights once. Your calendar becomes a live neon sign for bookers browsing dates." },
          { icon: "search",   title: "Find & Be Found",        blurb: "Search by vibe, energy, and city—or let venues request you first. You’re always in control." },
          { icon: "hourglass",title: "72h Match Window",       blurb: "No lost DMs. Offers expire in 72 hours—confirm, counter, or pass. Smooth, drama-free bookings." },
          { icon: "loop",     title: "Play → Review → Level Up", blurb: "Stack reviews, rise in local rankings, unlock higher-tier venues. Momentum looks good in neon." },
        ],
      },
      // Replaced CTA row with a heading chip:
      { type: "heading", text: "12-month predictions" },
      {
        type: "stats",
        items: [
          { k: "1,200+", v: "Bookings" },
          { k: "300+",   v: "Venues" },
          { k: "4.9★",   v: "Avg. Reviews" },
        ],
      },
    ],
  },

  bar: {
    title: "For Venues",
    subtitle:
      "Book the right crowd-maker. Verified DJs, crystal-clear offers, and a calendar that just… works.",
    sections: [
      {
        type: "steps",
        steps: [
          { icon: "martini",  title: "Dial In Your Venue",      blurb: "Verify Instagram, set your vibe tags (rooftop, lounge, nightclub), and add a couple photos." },
          { icon: "calendar", title: "Post Dates + Budget",     blurb: "Mark your open nights, add budget + equipment notes. DJs only request what fits." },
          { icon: "cards",    title: "Browse by Vibe",          blurb: "Filter by genre, energy, city, and specific dates. Watch clips without leaving the page." },
          { icon: "handshake",title: "Confirm in 72 Hours",     blurb: "Send offer, chat terms, and lock it in. Both sides confirm—no back-and-forth chaos." },
          { icon: "crowd",    title: "Book → Review → Repeat",  blurb: "Save favorites, rebook in two taps, grow your regular nights and keep the floor packed." },
        ],
      },
      // Replaced CTA row with a heading chip:
      { type: "heading", text: "12-month predictions" },
      {
        type: "stats",
        items: [
          { k: "98%",   v: "On-time Rate" },
          { k: "2.3×",  v: "Avg. Bar Lift" },
          { k: "Top 5%",v: "Pro Talent Pool" },
        ],
      },
    ],
  },
} as const;
