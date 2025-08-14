export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Announcement bar */}
      <div className="w-full bg-white/5 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-2 text-center text-sm">
          <strong className="text-red-400">Warm-Up first.</strong>{" "}
          Sign up during Warm-Up to get <strong>6 months of Premium free</strong> when your city opens.
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
          If Tinder and Airbnb had a baby — for DJs and nightclubs.
        </h1>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Built for nightlife: verified Instagram profiles, vibe tags, and frictionless booking.
        </p>

        {/* Early Access (placeholder; wiring comes next) */}
        <form className="mt-8 mx-auto max-w-md flex gap-3">
          <input
            type="email"
            required
            placeholder="Enter your email"
            aria-label="Email"
            className="flex-1 rounded-xl px-4 py-3 bg-white/5 border border-white/15 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="rounded-xl px-5 py-3 bg-red-500 text-white font-medium hover:opacity-90"
          >
            Get Early Access
          </button>
        </form>
        <p className="mt-2 text-xs text-white/60">
          P.S. We launch with a <span className="text-white font-medium">Warm-Up phase</span>. Early signups get{" "}
          <span className="text-white font-medium">6 months of Premium</span> free when your city opens.
        </p>

        {/* Hero visual placeholder */}
        <div className="mt-12 w-full max-w-4xl mx-auto aspect-[16/9] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
          <span className="text-white/50">[ Mockup: Match card + Booking confirmation ]</span>
        </div>
      </section>

      {/* Social proof chips */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
          {[
            "Verified profiles",
            "Real reviews",
            "No middlemen",
            "72h confirm window",
            "Genre & vibe tags",
            "Launching in Denver",
          ].map((c) => (
            <span key={c} className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            ["Search", "Find DJs/venues by vibe, genre, city, and date."],
            ["Host", "Post availability or events and receive targeted requests."],
            ["Match & Book", "Verified profiles, reviews, direct chat, simple booking."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-white/70 text-sm">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Shooom */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Shooom lifts the whole scene</h2>
        <p className="text-white/80 max-w-3xl">
          Shooom upgrades discovery, trust, and repeat bookings so the <strong>entire nightlife ecosystem rises</strong>.
          Venues diversify nights with verified talent. DJs stack back-to-back gigs across nearby cities.
          Result: <strong>more booked nights, better crowds, higher re-book rates</strong>—a flywheel that compounds each weekend.
        </p>
        <ul className="mt-6 grid sm:grid-cols-3 gap-4 text-sm text-white/80">
          <li className="rounded-2xl p-4 bg-white/5 border border-white/10">
            <strong>For DJs:</strong> travel corridors, stacked weekends, reputation that compounds with verified reviews.
          </li>
          <li className="rounded-2xl p-4 bg-white/5 border border-white/10">
            <strong>For Venues:</strong> precise vibe matching, fill slow slots, lower no-shows with verified profiles.
          </li>
          <li className="rounded-2xl p-4 bg-white/5 border border-white/10">
            <strong>For the Ecosystem:</strong> discovery → booking → review → re-booking — momentum everyone feels.
          </li>
        </ul>
      </section>

      {/* Product showcase */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            ["DJ Profile", "Followers, tags, media — show who you are in seconds."],
            ["Venue Search", "City/date filters + vibe/genre tags — find the exact energy."],
            ["Match & Confirm", "72-hour confirm window, clear terms — lock it in."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl p-4 bg-white/5 border border-white/10">
              <div className="aspect-[16/10] rounded-xl bg-white/5 border border-white/10 mb-3" />
              <h3 className="font-semibold">{title}</h3>
              <p className="text-white/70 text-sm">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founders’ Offer + second CTA */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
          <h3 className="font-semibold mb-2">Founders’ Offer</h3>
          <p className="text-white/80">
            We launch each city with a <strong>Warm-Up phase</strong>. If you sign up during Warm-Up and complete
            verification, you’ll get <strong>6 months of Premium free</strong> when your city opens. Limited spots per city.
          </p>
          <p className="text-white/50 text-xs mt-2">
            *Instagram verification required; limited cohorts for DJs & venues; offer applies when your city opens.*
          </p>

          {/* Repeat CTA (placeholder) */}
          <form className="mt-6 mx-auto max-w-md flex gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email"
              aria-label="Email"
              className="flex-1 rounded-xl px-4 py-3 bg-white/5 border border-white/15 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="rounded-xl px-5 py-3 bg-red-500 text-white font-medium hover:opacity-90"
            >
              Get Early Access
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">FAQ</h2>
        <div className="space-y-4">
          {[
            ["How is Shooom different from agencies?", "Agencies gatekeep and add friction. Shooom connects verified DJs and venues directly with transparent profiles, vibe tags, and reviews."],
            ["How does verification work?", "Instagram-based check + signals (followers, media, past gigs). Verified profiles receive a badge."],
            ["Who sends requests to who?", "Both. Venues invite DJs; DJs pitch available dates. A booking is confirmed when both accept (72-hour window)."],
            ["Does Shooom handle payments?", "During Warm-Up we connect both sides and keep chat/receipts in one place. Integrated payouts (Stripe Connect) are on the roadmap."],
          ].map(([q, a]) => (
            <div key={q} className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <h3 className="font-semibold mb-2">{q}</h3>
              <p className="text-white/70 text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60">
        <div className="flex flex-wrap items-center gap-4 justify-between">
          <span>© {new Date().getFullYear()} Shooom — All rights reserved.</span>
          <nav className="flex flex-wrap gap-4">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Contact</a>
            <a className="hover:text-white" href="#">Instagram</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
