// app/(site)/components/ProfileModal.tsx
"use client";

import Image from "next/image";
import { useEffect } from "react";
import { X, MapPin } from "lucide-react";
import profileImg from "@/image/profile.png";

type Props = {
	open: boolean;
	onClose: () => void;
};

const companies = [
	{ name: "The University of Sydney", short: "USYD" },
	{ name: "RenoPilot (Team Capstone)", short: "RP" },
	{ name: "TrailBlazer (Team Project)", short: "TB" },
];

export default function ProfileModal({ open, onClose }: Props) {
	useEffect(() => {
		if (!open) return;

		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};

		window.addEventListener("keydown", onKeyDown);
		return () => {
			document.body.style.overflow = prevOverflow;
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [open, onClose]);

	if (!open) return null;

	return (
		<div className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8">
			<button
				type="button"
				aria-label="Close profile modal"
				className="absolute inset-0 bg-black/60"
				onClick={onClose}
			/>

			<div className="relative z-10 w-full max-w-[980px] overflow-hidden rounded-[26px] bg-white shadow-[0_30px_120px_rgba(0,0,0,0.45)] ring-1 ring-black/5">
				<div className="relative">
					<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.04),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.035),transparent_50%)]" />
					<div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(0,0,0,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.18)_1px,transparent_1px)] [background-size:44px_44px]" />

					<button
						type="button"
						onClick={onClose}
						className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white/70 text-neutral-800 hover:bg-white transition"
						aria-label="Close"
					>
						<X className="h-4 w-4" />
					</button>

					<div className="px-8 pb-8 pt-10 md:px-10">
						<div className="flex flex-col gap-8 md:flex-row md:items-start">
							<div className="shrink-0">
								<div className="h-[86px] w-[86px] overflow-hidden rounded-full ring-1 ring-black/10">
									<Image src={profileImg} alt="Irene profile photo" className="h-full w-full object-cover" priority />
								</div>
							</div>

							<div className="min-w-0">
								<h2 className="text-[44px] font-semibold leading-[1.05] tracking-[-0.02em] text-neutral-950">
									Irene Phung
								</h2>

								<div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px] font-semibold text-neutral-500">
									<span>@irenephung.work@gmail.com</span>
									<span className="h-1 w-1 rounded-full bg-neutral-300" />
									<span className="inline-flex items-center gap-2">
										<MapPin className="h-4 w-4" />
										Mascot, Sydney, Australia
									</span>
								</div>

								<div className="mt-1 text-[15px] font-semibold text-neutral-500">
									Final-year Software Engineering • The University of Sydney
								</div>
							</div>
						</div>

						<div className="mt-8 h-px w-full bg-neutral-200" />

						<div className="mt-7 grid gap-8 md:grid-cols-[1.4fr_0.9fr]">
							<div>
								<div className="text-[18px] font-semibold text-neutral-950">About</div>
								<p className="mt-3 text-[15px] leading-7 text-neutral-700">
									I’m a final-year Software Engineering student who enjoys building reliable web products with a strong QA mindset.
									I focus on clean implementation, testing (unit/integration/E2E), and practical delivery concerns like CI evidence,
									deployment basics, and safer defaults. I like making complex systems easy to verify and easy to trust.
								</p>

								<div className="mt-7 text-[18px] font-semibold text-neutral-950">What I bring</div>
								<ul className="mt-3 space-y-2 text-[15px] leading-7 text-neutral-700">
									<li>• Testing pyramid ownership (Vitest/RTL/Playwright) for critical user flows</li>
									<li>• CI-friendly evidence (coverage, deterministic tests, reviewer-ready artefacts)</li>
									<li>• Deployment basics (reverse proxy, HTTPS concepts, process management)</li>
									<li>• Strong attention to UX consistency and product polish</li>
								</ul>
							</div>

							<div>
								<div className="text-[18px] font-semibold text-neutral-950">Experience includes</div>
								<div className="mt-4 flex flex-wrap gap-3">
									{companies.map((c) => (
										<div
											key={c.name}
											title={c.name}
											className="grid h-12 w-12 place-items-center rounded-full border border-black/10 bg-white text-[12px] font-bold text-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.10)]"
										>
											{c.short}
										</div>
									))}
								</div>

								<div className="mt-8 rounded-2xl border border-black/10 bg-neutral-50 p-5">
									<div className="text-[13px] font-semibold text-neutral-500">Best fit roles</div>
									<div className="mt-2 text-[15px] font-semibold text-neutral-900">
										Frontend / Full-stack • QA-minded SWE • Graduate roles
									</div>
									<div className="mt-2 text-[14px] leading-6 text-neutral-700">
										I enjoy teams that value testing, clean delivery, and practical security.
									</div>
								</div>

								<div className="mt-4 flex flex-col gap-3">
									<a
										href="mailto:irenephung.work@gmail.com"
										className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-[15px] font-semibold text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)] hover:bg-neutral-800 transition"
									>
										Message
									</a>

									<a
										href="https://www.linkedin.com/in/irene-phung-029a3b222"
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-[15px] font-semibold text-neutral-900 hover:bg-neutral-50 transition"
									>
										LinkedIn
									</a>
								</div>
							</div>
						</div>

						<div className="mt-10 text-center text-[12px] text-neutral-400">
							Tip: press ESC to close
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
