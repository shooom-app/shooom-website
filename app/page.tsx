import { Sacramento } from "next/font/google";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import NeonVinylLogo from "@/components/NeonVinylLogo";

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
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            ["Search", "Find DJs/venues by vibe, genre, city, and date."],
            ["Host", "Post availability or events and receive targeted requests."],
            ["Match & Book", "Verified profiles, reviews, direct chat, simple booking."],
          ].map(([title, body]) => (
            <div key={title} className="card-neon p-6">
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-white/80 text-sm">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
