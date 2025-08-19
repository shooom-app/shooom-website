import { Sacramento } from "next/font/google";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import NeonVinylLogo from "@/components/NeonVinylLogo";
// Role Flow removed; placeholder below
// ⬇️ replace WarmupPhase with WarmupOrb
import WarmupOrb from "@/components/WarmupOrb";
import FAQ from "@/components/FAQ";
import { faqs } from "@/features/data/faqs";
import Marquee from "@/components/Marquee";
import ShooomWordmark from "@/components/ShooomWordmark";
import HowItWorksPuzzle from "@/components/HowItWorksPuzzle";
import RoleSection from "@/components/sections/RoleSection";
import { RoleProvider } from "@/features/role/RoleContext";

const appleScript = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-apple-script",
});

export default function Home() {
  const chips = [
    "Grow your business",
    "Grow your career",
    "Network with the right people",
    "Find your vibe match",
    "Dial in your genre match",
    "Explore with ease",
    "Daily swipes → huge connections",
  ];

  return (
    <main className={`min-h-screen bg-transparent text-white ${appleScript.variable}`}>

      {/* Announcement */}
      <div className="text-center text-xs sm:text-sm py-2 border-b border-white/10 bg-black/60">
        <span className="opacity-90">Warm-Up first. </span>
        <span className="opacity-90">
          Sign up during{" "}
          <a
            href="#warmup"
            className="underline decoration-[color:var(--brand-red)] decoration-2 underline-offset-2 text-[color:var(--brand-red)] hover:opacity-90"
          >
            Warm-Up Phase
          </a>{" "}
          to get 6 months of <strong>Premium</strong> when the concept warms up.
        </span>
      </div>

      {/* HERO */}
      <section className="relative isolate overflow-hidden min-h-[78vh] flex items-center">

        <div className="mx-auto max-w-6xl px-6 text-center relative z-10 w-full">
          <h1 className="text-5xl font-bold leading-tight text-center">
            If <span className="text-brand-gradient">Tinder</span> and <span className="text-brand-gradient">Airbnb</span> had a baby — for
            <br />
            <span className="text-brand-gradient">DJs and bars.</span>
          </h1>

          <p className="text-center mt-4 text-sm text-white/70">
            Grow your career/business{"; "}
            <span className="text-brand font-semibold">verified Instagram profiles</span>,{" "}
            <span className="text-brand font-semibold">vibe tags</span>,{" "}
            and <span className="text-brand font-semibold">worldwide connections</span>.
          </p>

          <EarlyAccessForm />

          <p className="mt-2 text-xs text-white/60">
            P.S. Sign up during{" "}
            <a
              href="#warmup"
              className="text-brand-underline font-medium hover:opacity-90"
            >
              Warm-Up Phase
            </a>{" "}
            to get 6 months of <span className="text-brand font-semibold">Premium</span> when the concept warms up.
          </p>

          {/* Logo + signature */}
          <div className="sig-wrap mt-10">
            <div className="enforce-center">
              <NeonVinylLogo size={300} lineWidth={2.0} spin spinDurationSec={18} />
            </div>
            <div className="mt-8 flex justify-center">
              <ShooomWordmark />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-4 relative z-[220] overflow-visible">
        <Marquee items={chips} speedSec={32} />
      </section>

      {/* How it works — Masked glass puzzle */}
      <HowItWorksPuzzle />
      <RoleProvider>
        <RoleSection />
      </RoleProvider>

      {/* Warm-Up Progress Orb (universal) */}
      <WarmupOrb progress={70} />

      {/* FAQ Section */}
      <FAQ title="Shooom FAQ" subtitle="Quick answers for DJs & Venues" items={faqs} />
    </main>
  );
}
