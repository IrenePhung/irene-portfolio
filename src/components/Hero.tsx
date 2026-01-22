export default function Hero() {
	return (
		<section className="space-y-6">
			<div className="relative glass rounded-[36px] p-8 overflow-hidden">
				<div className="flex items-start justify-between gap-6">
					<div>
						<p className="text-white/60">Hello! I’m</p>

						<h1 className="mt-2 text-4xl md:text-6xl serif-italic">
							Irene <span className="text-white/70">Phung</span>
						</h1>

						<div className="mt-10 text-white/60">
							<div className="flex items-center gap-2">
								<span className="text-white/70">Junior Full-Stack / Software Engineer</span>
								<span className="text-white/40">→</span>
								<a
									href="https://www.linkedin.com/in/irene-phung-029a3b222"
									target="_blank"
									rel="noreferrer"
									className="text-white/70 hover:text-white transition"
								>
									LinkedIn
								</a>
							</div>
							<div className="text-white/40 text-sm mt-1">Sydney, Australia</div>
						</div>
					</div>
				</div>
			</div>

			<div className="glass rounded-[36px] p-8 text-white/70 leading-8">
				Sydney-based <b className="text-white">Junior Software Engineer (Full-Stack)</b>. Built web apps with{" "}
				<b className="text-white">React/Next.js</b>, <b className="text-white">Node/REST APIs</b>, and{" "}
				<b className="text-white">SQL databases</b>. Strong focus on <b className="text-white">automated testing</b>{" "}
				(Vitest/Playwright/JUnit) and clean, maintainable code.
			</div>

			<div className="glass rounded-[28px] px-7 py-6">
				<div className="flex items-start justify-between gap-4">
					<p className="text-white/85 font-semibold">Outside of Work</p>
					<p className="text-white/40 italic text-sm">in no order of preference</p>
				</div>

				<div className="mt-4 flex flex-wrap items-center gap-2 text-white/80">
					<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm">🎮 Gaming</span>
					<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm">🍳 Cooking</span>
					<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm">🧹 Home organising</span>
				</div>
			</div>
		</section>
	);
}
