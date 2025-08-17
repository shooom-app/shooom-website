import { Sacramento } from "next/font/google";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import NeonVinylLogo from "@/components/NeonVinylLogo";
import RoleSwitch from "@/features/role-flow/RoleSwitch";
import ContentByRole from "@/features/role-flow/ContentByRole";
// ⬇️ replace WarmupPhase with WarmupOrb
import WarmupOrb from "@/components/WarmupOrb";

const appleScript = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-apple-script",
});

export default function Home() {
  const chips = [
    "Verified profiles",
    "Real reviews",
    "No middlemen",
    "72h confirm window",
    "Genre & vibe tags",
    "Launching in Denver",
  ];

  return (
    <main className={`min-h-screen bg-black text-white ${appleScript.variable}`}>
      {/* Global blobs */}
      <div className="global-blobs" aria-hidden="true">
        <div className="gblob g1" /><div className="gblob g2" /><div className="gblob g3" />
      </div>

      {/* Announcement */}
      <div className="w-full bg-white/5 border-b border-white/10 relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-2 text-center text-sm">
          <strong className="neon-red">Warm-Up first.</strong>{" "}
          Sign up during Warm-Up to get <strong>6 months of Premium free</strong> when your city opens.
        </div>
      </div>

      {/* HERO */}
      <section className="relative isolate overflow-hidden min-h-[78vh] flex items-center">
        <div className="hero-bg" aria-hidden="true">
          <div className="blob b1" /><div className="blob b2" /><div className="blob b3" /><div className="scrim" />
        </div>

        <div className="mx-auto max-w-6xl px-6 text-center relative z-10 w-full">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            If <span className="neon-red">Tinder</span> and <span className="neon-red">Airbnb</span> had a baby — for{" "}
            <span className="neon-red">DJs</span> and <span className="neon-red">bars</span>.
          </h1>

          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Built for nightlife: <span className="neon-red font-semibold">verified</span> Instagram profiles,{" "}
            <span className="neon-red font-semibold">vibe tags</span>, and{" "}
            <span className="neon-red font-semibold">frictionless booking</span>.
          </p>

          <div className="mt-6 neon-scope">
            <EarlyAccessForm />
          </div>

          <p className="mt-2 text-xs text-white/60">
            P.S. We launch with a <span className="text-white font-medium">Warm-Up phase</span>. Early signups get{" "}
            <span className="text-white font-medium">6 months of Premium</span> free when your city opens.
          </p>

          {/* Logo + signature */}
          <div className="sig-wrap mt-10">
            <div className="enforce-center">
              <NeonVinylLogo size={300} lineWidth={2.0} spin spinDurationSec={18} />
            </div>
            <svg className="sig-svg" viewBox="0 0 1200 220" role="img" aria-label="shooom.app">
              <defs>
                <linearGradient id="sigGrad" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#fb7185" />
                  <stop offset="55%" stopColor="#e11d48" />
                  <stop offset="100%" stopColor="#fb7185" />
                </linearGradient>
                <filter id="sigGlow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="1.2" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <text x="600" y="140" textAnchor="middle" id="sigRed">shooom.app</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="ticker-wrap py-4 relative z-10">
        <div className="ticker-bg" aria-hidden="true">
          <div className="tb tb1" /><div className="tb tb2" />
        </div>
        <div className="ticker">
          <div className="ticker-mask">
            <div className="ticker-track">
              <ul className="ticker-list">
                {chips.map((c) => <li key={c} className="chip-neon">{c}</li>)}
              </ul>
              <ul className="ticker-list" aria-hidden="true">
                {chips.map((c, i) => <li key={`${c}-dup-${i}`} className="chip-neon">{c}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Example neon cards */}
      {/* How it works (Neon) */}
      <section id="how-it-works" className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-bold">How it works</h2>
          <p className="text-white/70 mt-2">Search the vibe → Host with GPS ping → Match from the heart.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {/* SEARCH — Neon radar sweep */}
          <article className="hiw-card group">
            <div className="hiw-icon mb-3">
              <svg viewBox="0 0 64 64" aria-hidden="true" className="icon-neon neon-search">
                <defs>
                  <linearGradient id="neonGrad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--neon)" />
                    <stop offset="100%" stopColor="var(--neon-2)" />
                  </linearGradient>
                  <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="b"/>
                    <feMerge>
                      <feMergeNode in="b"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* lens + handle */}
                <circle cx="28" cy="28" r="14" className="np-stroke ring"/>
                <line x1="38" y1="38" x2="52" y2="52" className="np-stroke"/>
                {/* sweeping arc */}
                <circle cx="28" cy="28" r="20" className="sweep"/>
                {/* sparkle dots */}
                <circle cx="20" cy="22" r="1.4" className="spark s1"/>
                <circle cx="33" cy="17" r="1.2" className="spark s2"/>
                <circle cx="26" cy="36" r="1.1" className="spark s3"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Search</h3>
            <p className="text-white/75 mt-1 text-sm">
              Find DJs or venues by city, date, genre, vibe, and energy.
            </p>
          </article>

          {/* HOST — GPS pin + concentric signal rings */}
          <article className="hiw-card group">
            <div className="hiw-icon mb-3">
              <svg viewBox="0 0 64 64" aria-hidden="true" className="icon-neon neon-gps">
                <defs>
                  <linearGradient id="neonGrad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--neon)" />
                    <stop offset="100%" stopColor="var(--neon-2)" />
                  </linearGradient>
                  <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="b"/>
                    <feMerge>
                      <feMergeNode in="b"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* base map dot */}
                <circle cx="32" cy="48" r="3" className="dot"/>
                {/* signal rings */}
                <circle cx="32" cy="48" r="6"  className="ring1"/>
                <circle cx="32" cy="48" r="10" className="ring2"/>
                <circle cx="32" cy="48" r="14" className="ring3"/>
                {/* GPS pin */}
                <path d="M32 14
                        c-6 0-11 4.9-11 10.8
                        c0 7.6 9.6 15.9 10.3 16.5
                        c.4 .3 .9 .3 1.3 0
                        C33.4 40.7 43 32.4 43 24.8
                        C43 18.9 38 14 32 14z"
                      className="np-stroke pin"/>
                <circle cx="32" cy="25" r="4" className="np-stroke"/>
                {/* tiny spark */}
                <circle cx="46" cy="20" r="1.2" className="spark s4"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Host</h3>
            <p className="text-white/75 mt-1 text-sm">
              Post your location & dates — let the city feel your signal.
            </p>
          </article>

          {/* MATCH — Heart beat + glow pulse */}
          <article className="hiw-card group">
            <div className="hiw-icon mb-3">
              <svg viewBox="0 0 64 64" aria-hidden="true" className="icon-neon neon-heart">
                <defs>
                  <linearGradient id="neonGrad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--neon)" />
                    <stop offset="100%" stopColor="var(--neon-2)" />
                  </linearGradient>
                  <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="b"/>
                    <feMerge>
                      <feMergeNode in="b"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* heart outline */}
                <path d="M32 48
                        C28 43 17 36 17 26
                        c0-5 4-9 9-9
                        c3.4 0 5.8 1.6 6 4.5
                        C32.2 18.6 34.6 17 38 17
                        c5 0 9 4 9 9
                        c0 10-11 17-15 22z"
                      className="np-stroke heart"/>
                {/* inner beat fill */}
                <path d="M32 48
                        C28 43 17 36 17 26
                        c0-5 4-9 9-9
                        c3.4 0 5.8 1.6 6 4.5
                        C32.2 18.6 34.6 17 38 17
                        c5 0 9 4 9 9
                        c0 10-11 17-15 22z"
                      className="heart-fill"/>
                {/* sparkles */}
                <circle cx="22" cy="14" r="1.2" className="spark s5"/>
                <circle cx="46" cy="50" r="1.1" className="spark s6"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Match</h3>
            <p className="text-white/75 mt-1 text-sm">
              Real connections, real bookings — sealed with a heartbeat.
            </p>
          </article>
        </div>
      </section>

      {/* Toggle section AFTER How it works */}
      <section className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <RoleSwitch />
        </div>
      </section>

      {/* ==== Role-specific content START ==== */}
      <ContentByRole />
      {/* ==== Role-specific content END ==== */}

      {/* Warm-Up Progress Orb (universal) */}
      <WarmupOrb progress={70} />
    </main>
  );
}
