"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
	console.error("[GlobalError]", error);
	return (
		<html>
			<body className="min-h-screen bg-black text-white flex items-center justify-center p-6">
				<div className="panel-solid neon-outline rounded-2xl p-6 max-w-lg text-center">
					<h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
					<p className="opacity-80 mb-4">{error.message}</p>
					<button
						onClick={() => reset()}
						className="px-4 py-2 rounded-xl panel-solid neon-outline active:scale-[0.98] transition-transform"
					>
						Try again
					</button>
				</div>
			</body>
		</html>
	);
}
