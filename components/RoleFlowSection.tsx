"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import SwipeDeck from "@/components/SwipeDeck";
import { Layers, Award, Users } from "lucide-react";
import ProfileCardIcon from "@/components/icons/ProfileCardIcon";
import HomePinIcon from "@/components/icons/HomePinIcon";
import CalendarPinsIcon from "@/components/icons/CalendarPinsIcon";
import SearchWaveIcon from "@/components/icons/SearchWaveIcon";
import HourglassIcon from "@/components/icons/HourglassIcon";
import StarBadgeIcon from "@/components/icons/StarBadgeIcon";
import HandshakeIcon from "@/components/icons/HandshakeIcon";
import MartiniIcon from "@/components/icons/MartiniIcon";
import { motion, useInView } from "framer-motion";
import type { RoleCubeHandle } from "@/components/role-cube/RoleCube";
import type { CubeFaceData } from "@/features/role-flow/roleFaces";
import { DJ_FACES, VENUE_FACES } from "@/features/role-flow/roleFaces";

const RoleCube = dynamic(() => import("@/components/role-cube/RoleCube"), { ssr: false });

type Role = "dj" | "venue";

type Item = { id: string; title: string; blurb: string; icon?: React.ReactNode };

export default function RoleFlowSection() {
  const [role, setRole] = useState<Role>("dj");
  const [deckIndex, setDeckIndex] = useState(0);
  const cubeRef = useRef<RoleCubeHandle>(null);

  // read role from URL or localStorage on mount
  useEffect(() => {
    const url = new URL(window.location.href);
    const q = (url.searchParams.get("role") || "").toLowerCase();
    const saved = (localStorage.getItem("shooom:role") || "").toLowerCase();
    if (q === "dj" || q === "venue") setRole(q as Role);
    else if (saved === "dj" || saved === "venue") setRole(saved as Role);
  }, []);

  // persist role & shallow push
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("role", role);
    window.history.replaceState({}, "", url.toString());
    localStorage.setItem("shooom:role", role);
  }, [role]);

  // Reset deck index when role changes
  useEffect(() => {
    setDeckIndex(0);
  }, [role]);

  const djItems: Item[] = useMemo(() => [
    {
      id: "profile",
      title: "Light Up Your Profile",
      blurb: "Verify socials, add 2–3 short clips, and pick your genre + vibe tags. Clean, bold—unmistakably you.",
      icon: <ProfileCardIcon />,
    },
    {
      id: "base-city",
      title: "Claim Your Base City",
      blurb: "Set your home base so locals find you fast. Keep your city available year-round to stay discoverable.",
      icon: <HomePinIcon />,
    },
    {
      id: "availability",
      title: "Host Availability (Multi-City)",
      blurb: "Post availability for the same dates across multiple cities. Planning a West Coast run? Host LA, SF, and SD—then map the trip.",
      icon: <CalendarPinsIcon />,
    },
    {
      id: "browse",
      title: "Browse & Request",
      blurb: "Find the right spot. Browse venues in your available cities and send requests where the vibe matches.",
      icon: <SearchWaveIcon />,
    },
    {
      id: "match",
      title: "72-Hour Match Window",
      blurb: "Every connection has 72 hours to confirm—no stacking or drift. Purposeful matches, clear outcomes.",
      icon: <HourglassIcon />,
    },
    {
      id: "level-up",
      title: "Play → Review → Level Up",
      blurb: "After each gig, both sides leave star ratings and optional notes. Reviews build credibility and unlock better bookings.",
      icon: <StarBadgeIcon />,
    },
  ], []);

  const venueItems: Item[] = useMemo(() => [
    {
      id: "venue-setup",
      title: "Dial In Your Venue",
      blurb: "Verify Instagram, set vibe tags, and add photos that show your atmosphere.",
      icon: <MartiniIcon />,
    },
    {
      id: "dates-budget",
      title: "Post Dates + Budget",
      blurb: "Mark open nights and add budget + equipment notes. DJs only request what fits.",
      icon: <CalendarPinsIcon />,
    },
    {
      id: "diverse-events",
      title: "Diverse Events",
      blurb: "Create themed nights with distinct tags and descriptions—Shooom matches the perfect DJ.",
      icon: <ProfileCardIcon />,
    },
    {
      id: "browse-vibe",
      title: "Browse by Vibe",
      blurb: "Filter by genre, energy, city, and dates. Fresh talent flows into your city weekly.",
      icon: <SearchWaveIcon />,
    },
    {
      id: "match",
      title: "72-Hour Match Window",
      blurb: "After matching, both sides have 72 hours to align and confirm—focused, outcome-driven bookings.",
      icon: <HourglassIcon />,
    },
    {
      id: "review-repeat",
      title: "Book → Review → Repeat",
      blurb: "Leave ratings and notes post-show. Strong reviews attract better DJs and build lasting relationships.",
      icon: <StarBadgeIcon />,
    },
  ], []);

  const title = role === "dj" ? "For DJs" : "For Venues";
  const subtitle = role === "dj"
    ? "Hello, DJ, let me introduce you how your flow works:"
    : "Hey, Boss, let me explain how your flow works.";

  const faces: CubeFaceData[] = role === "dj" ? DJ_FACES : VENUE_FACES;

  return (
    <section className="relative mx-auto max-w-6xl px-6 sm:px-8 py-20">
      {/* Toggle */}
      <div className="toggle-wrap w-fit">
        <button className="toggle-seg" data-active={role === "dj"} onClick={() => setRole("dj")}>I&apos;m a DJ</button>
        <button className="toggle-seg" data-active={role === "venue"} onClick={() => setRole("venue")}>I&apos;m a Venue</button>
      </div>

      <header className="text-center mt-6 mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-3 text-sm sm:text-base text-white/70">{subtitle}</p>
      </header>

      {/* Inline RoleCube */}
      <RoleCube ref={cubeRef} faces={faces} className="mt-6" />

      {/* Swipe deck (cards are solid panels now) */}
      <SwipeDeck
        key={role}
        items={(role === "dj" ? djItems : venueItems).map(it => ({
          ...it,
          icon: <div className="icon-wrap">{it.icon}</div>,
        }))}
        index={deckIndex}
        role={role}
        onChangeIndex={setDeckIndex}
      />

      {/* Metrics */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {role === "dj" ? (
          <>
            <Metric icon={<HandshakeIcon />} value="5,000+" label="Bookings" />
            <Metric icon={<MartiniIcon />} value="20,000+" label="Active Venues" />
            <Metric icon={<StarBadgeIcon />} value="4.9★" label="Average Review" />
          </>
        ) : (
          <>
            <Metric icon={<Layers />} value="10×" label="More Diverse Events" />
            <Metric icon={<Users />} value="10,000+" label="Meaningful Connections" />
            <Metric icon={<Award />} value="4.9★" label="Average Rating" />
          </>
        )}
      </div>
    </section>
  );
}

function Metric({ icon, value, label }: { icon: ReactNode; value: string; label: string }) {
  return (
    <div className="metric">
      <div className="mx-auto mb-2 neon-icon [&>*]:stroke-[1.75] [&>*]:w-6 [&>*]:h-6">{icon}</div>
      <AnimatedNumber className="num">{value}</AnimatedNumber>
      <div className="label">{label}</div>
    </div>
  );
}

function AnimatedNumber({ children, className }: { children: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0.001, y: 6, filter: "blur(1px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.span>
  );
}


