"use client";

import React from "react";

export default function HowItWorksPuzzle() {
	return (
		<section id="how-it-works" className="relative mx-auto max-w-6xl px-6 sm:px-8 py-20">
			<header className="text-center mb-8 sm:mb-12">
				<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">How it works</h2>
				<p className="mt-3 text-sm sm:text-base text-white/70">
					Shooom flow is simple — <span className="text-white">search your vibe</span>
					<span aria-hidden> → </span> <span className="text-white">host availability</span>
					<span aria-hidden> → </span> <span className="text-white">match &amp; book</span>.
				</p>
			</header>

			<div className="relative glass-shell px-4 sm:px-6 py-6">
				{/* Seams-only overlay for clarity */}
				<svg className="puzzle-overlay hidden sm:block" viewBox="0 0 1200 360" preserveAspectRatio="none" aria-hidden="true">
					<defs>
						<linearGradient id="seamStroke" x1="0" x2="0" y1="0" y2="1">
							<stop offset="0%" stopColor="rgba(255,255,255,0.10)"/>
							<stop offset="50%" stopColor="rgba(255,255,255,0.18)"/>
							<stop offset="100%" stopColor="rgba(255,255,255,0.10)"/>
						</linearGradient>
						<filter id="seamGlow" x="-35%" y="-35%" width="170%" height="170%">
							<feGaussianBlur stdDeviation="2.4" result="b"/>
							<feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
						</filter>
					</defs>

					{/* Vertical seams only */}
					<path d="M400 14 Q400 180 400 346" stroke="url(#seamStroke)" strokeWidth={3}
							filter="url(#seamGlow)" fill="none" strokeLinecap="round"/>
					<path d="M800 14 Q800 180 800 346" stroke="url(#seamStroke)" strokeWidth={3}
							filter="url(#seamGlow)" fill="none" strokeLinecap="round"/>
				</svg>

				<div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
					{/* LEFT — Search */}
					<div className="puzzle-tile">
						<div className="mb-3" aria-hidden="true">
							{/* neon search icon */}
							<svg viewBox="0 0 64 64" aria-hidden="true" className="icon-neon neon-search">
								<defs>
									<linearGradient id="neonGrad" x1="0" x2="1" y1="0" y2="1">
										<stop offset="0%" stopColor="var(--neon)" />
										<stop offset="100%" stopColor="var(--neon-2)" />
									</linearGradient>
									<filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
										<feGaussianBlur stdDeviation="2" result="b" />
										<feMerge>
											<feMergeNode in="b" />
											<feMergeNode in="SourceGraphic" />
										</feMerge>
									</filter>
								</defs>
								<circle cx="28" cy="28" r="14" className="np-stroke ring" />
								<line x1="38" y1="38" x2="52" y2="52" className="np-stroke" />
								<circle cx="28" cy="28" r="20" className="sweep" />
								<circle cx="20" cy="22" r="1.4" className="spark s1" />
								<circle cx="33" cy="17" r="1.2" className="spark s2" />
								<circle cx="26" cy="36" r="1.1" className="spark s3" />
							</svg>
						</div>
						<h3 className="text-lg sm:text-xl font-semibold mb-1.5">Search</h3>
						<p className="text-white/70 text-sm leading-6">
							Browse by city and date. Discover people who share your vibe, love your genres, and have similar reviews.
						</p>
					</div>

					{/* MID — Host */}
					<div className="puzzle-tile">
						<div className="mb-3" aria-hidden="true">
							{/* neon GPS/pin icon */}
							<svg viewBox="0 0 64 64" aria-hidden="true" className="icon-neon neon-gps">
								<defs>
									<linearGradient id="neonGrad" x1="0" x2="1" y1="0" y2="1">
										<stop offset="0%" stopColor="var(--neon)" />
										<stop offset="100%" stopColor="var(--neon-2)" />
									</linearGradient>
									<filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
										<feGaussianBlur stdDeviation="2" result="b" />
										<feMerge>
											<feMergeNode in="b" />
											<feMergeNode in="SourceGraphic" />
										</feMerge>
									</filter>
								</defs>
								<circle cx="32" cy="48" r="3" className="dot" />
								<circle cx="32" cy="48" r="6" className="ring1" />
								<circle cx="32" cy="48" r="10" className="ring2" />
								<circle cx="32" cy="48" r="14" className="ring3" />
								<path
									d="M32 14 c-6 0-11 4.9-11 10.8 c0 7.6 9.6 15.9 10.3 16.5 c.4 .3 .9 .3 1.3 0 C33.4 40.7 43 32.4 43 24.8 C43 18.9 38 14 32 14z"
									className="np-stroke pin"
								/>
								<circle cx="32" cy="25" r="4" className="np-stroke" />
								<circle cx="46" cy="20" r="1.2" className="spark s4" />
							</svg>
						</div>
						<h3 className="text-lg sm:text-xl font-semibold mb-1.5">Host</h3>
						<p className="text-white/70 text-sm leading-6">
							Set your availability with vibe and genre tags. DJs can go live in multiple cities at once. Venues receive fresh, unexpected requests from diverse DJs.
						</p>
					</div>

					{/* RIGHT — Match */}
					<div className="puzzle-tile">
						<div className="mb-3" aria-hidden="true">
							{/* neon heart icon */}
							<svg viewBox="0 0 64 64" aria-hidden="true" className="icon-neon neon-heart">
								<defs>
									<linearGradient id="neonGrad" x1="0" x2="1" y1="0" y2="1">
										<stop offset="0%" stopColor="var(--neon)" />
										<stop offset="100%" stopColor="var(--neon-2)" />
									</linearGradient>
									<filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
										<feGaussianBlur stdDeviation="2" result="b" />
										<feMerge>
											<feMergeNode in="b" />
											<feMergeNode in="SourceGraphic" />
										</feMerge>
									</filter>
								</defs>
								<path
									d="M32 48 C28 43 17 36 17 26 c0-5 4-9 9-9 c3.4 0 5.8 1.6 6 4.5 C32.2 18.6 34.6 17 38 17 c5 0 9 4 9 9 c0 10-11 17-15 22z"
									className="np-stroke heart"
								/>
								<path
									d="M32 48 C28 43 17 36 17 26 c0-5 4-9 9-9 c3.4 0 5.8 1.6 6 4.5 C32.2 18.6 34.6 17 38 17 c5 0 9 4 9 9 c0 10-11 17-15 22z"
									className="heart-fill"
								/>
								<circle cx="22" cy="14" r="1.2" className="spark s5" />
								<circle cx="46" cy="50" r="1.1" className="spark s6" />
							</svg>
						</div>
						<h3 className="text-lg sm:text-xl font-semibold mb-1.5">Match</h3>
						<p className="text-white/70 text-sm leading-6">
							When you match, open chat to align details and finalize the booking. You’ll have a focused,
							72-hour window—built for purposeful connections.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
