"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Evidence = {
	title: string;
	description: string;
	src: string;
	alt: string;
	reportHref?: string;
};

const tags = ["Spring Boot", "Java", "REST APIs", "MySQL", "React", "OpenAI API", "PayPal API", "JUnit"];

const evidences: Evidence[] = [
	// Ví dụ:
	// {
	// 	title: "System architecture",
	// 	description: "High-level architecture showing React client + Spring Boot APIs + MySQL + external services.",
	// 	src: "/work/scriptcraft/architecture.png",
	// 	alt: "ScriptCraft architecture diagram",
	// 	reportHref: "#",
	// },
];

function Pill({ text }: { text: string }) {
	return (
		<span className="shrink-0 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-[13px] text-white/80">
			{text}
		</span>
	);
}

function Modal({
	open,
	title,
	children,
	onClose,
}: {
	open: boolean;
	title?: string;
	children: React.ReactNode;
	onClose: () => void;
}) {
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
		<div
			className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10"
			role="dialog"
			aria-modal="true"
			aria-label={title ?? "Modal"}
		>
			<button
				type="button"
				aria-label="Close"
				className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
				onClick={onClose}
			/>

			<div className="relative z-10 w-full max-w-5xl rounded-[28px] border border-white/10 bg-neutral-950/70 shadow-2xl">
				<div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
					<div className="text-white/85 font-medium truncate">{title}</div>
					<button
						type="button"
						onClick={onClose}
						className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 transition"
					>
						Close
					</button>
				</div>

				<div className="p-4 md:p-6">{children}</div>
			</div>
		</div>
	);
}

function SectionTitle({ kicker, title, desc }: { kicker?: string; title: string; desc?: string }) {
	return (
		<div>
			{kicker ? (
				<p className="text-white/55 text-xs md:text-sm tracking-[0.18em] uppercase">{kicker}</p>
			) : null}
			<h2 className="mt-2 text-white/90 text-xl md:text-2xl font-semibold">{title}</h2>
			{desc ? <p className="mt-3 text-white/70 leading-7 text-[14px] md:text-[15px]">{desc}</p> : null}
		</div>
	);
}

function BulletList({ items }: { items: React.ReactNode[] }) {
	return (
		<ul className="mt-4 space-y-3 text-white/70 leading-7 text-[14px] md:text-[15px]">
			{items.map((it, i) => (
				<li key={i}>{it}</li>
			))}
		</ul>
	);
}

export default function ScriptCraftCaseStudy() {
	const [activeEvidenceIdx, setActiveEvidenceIdx] = useState<number | null>(null);

	const activeEvidence = useMemo(() => {
		if (activeEvidenceIdx === null) return null;
		return evidences[activeEvidenceIdx] ?? null;
	}, [activeEvidenceIdx]);

	return (
		<>
			<section className="glass-strong noise rounded-[32px] p-8">
				<div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
					<div>
						<p className="text-white/55 text-xs md:text-sm tracking-[0.18em] uppercase">Case Study</p>

						<h1 className="mt-3 font-display italic text-[34px] leading-[1.05] md:text-[54px] md:leading-[1.02]">
							ScriptCraft <span className="text-white/70">(AI Script Generation)</span>
						</h1>

						<p className="mt-4 max-w-2xl text-white/70 text-[15px] md:text-[16px] leading-7">
							AI-assisted scriptwriting platform that generates structured dialogues from user-defined options,
							with accounts, favourites, search, and donation support.
						</p>

						<div className="mt-6 flex flex-wrap gap-2">
							{tags.map((t) => (
								<Pill key={t} text={t} />
							))}
						</div>
					</div>

					<div className="flex gap-3">
						<Link
							href="/#work"
							className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-white/85 hover:bg-white/10 transition"
						>
							← Back
						</Link>
						<a
							href="#contact"
							className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-white/85 hover:bg-white/10 transition"
						>
							Contact
						</a>
					</div>
				</div>
			</section>

			<section className="grid gap-6 lg:grid-cols-3">
				<div className="glass noise rounded-[32px] p-7 lg:col-span-2">
					<h2 className="text-white/90 text-lg md:text-xl font-semibold">My role & scope</h2>
					<BulletList
						items={[
							<>
								• Built and refined <b className="text-white">Spring Boot REST APIs</b> for script generation,
								saving, retrieval, and search with stable contracts (DTO-first).
							</>,
							<>
								• Integrated <b className="text-white">MySQL persistence</b> (JPA/Hibernate) to support accounts,
								saved scripts, and favourites.
							</>,
							<>
								• Added <b className="text-white">JUnit tests</b> for core modules, focusing on validation,
								error cases, and regressions during refactors.
							</>,
						]}
					/>
				</div>

				<div className="glass noise rounded-[32px] p-7">
					<h2 className="text-white/90 text-lg md:text-xl font-semibold">Highlights</h2>
					<BulletList
						items={[
							<>• OpenAI-driven generation with structured outputs and safe fallbacks</>,
							<>• Clear API behaviour: predictable status codes + validation messages</>,
							<>• PayPal donation flow (create + capture) integrated via backend endpoints</>,
						]}
					/>
				</div>
			</section>

			<section className="glass-strong noise rounded-[32px] p-8">
				<SectionTitle
					title="Context"
					desc="This project was designed as a full-stack web app to demonstrate practical engineering skills: API design, database modelling, external integrations, and testable, maintainable code."
				/>

				<div className="mt-6 grid gap-6 lg:grid-cols-2">
					<div className="glass noise rounded-[28px] p-7">
						<h3 className="text-white/90 text-base md:text-lg font-semibold">Problem</h3>
						<p className="mt-3 text-white/70 leading-7 text-[14px] md:text-[15px]">
							Writing scripts is highly iterative: creators need a structured first draft fast, then a clean way to
							save, search, and revisit drafts without losing context.
						</p>
					</div>

					<div className="glass noise rounded-[28px] p-7">
						<h3 className="text-white/90 text-base md:text-lg font-semibold">Goal</h3>
						<ul className="mt-4 space-y-2 text-white/70 leading-7 text-[14px] md:text-[15px]">
							<li>• Generate a usable structured draft within seconds</li>
							<li>• Provide reliable CRUD flows (save/view/edit/delete)</li>
							<li>• Support discovery: search + favourites</li>
							<li>• Keep integrations stable (OpenAI + PayPal)</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="glass-strong noise rounded-[32px] p-8">
				<SectionTitle
					title="Solution overview"
					desc="ScriptCraft turns user inputs into a structured dialogue draft via OpenAI, then wraps the workflow in a full-stack product experience."
				/>

				<div className="mt-6 grid gap-6 lg:grid-cols-2">
					<div className="glass noise rounded-[28px] p-7">
						<h3 className="text-white/90 text-base md:text-lg font-semibold">Core user flows</h3>
						<ul className="mt-4 space-y-2 text-white/70 leading-7 text-[14px] md:text-[15px]">
							<li>• Auth: register/login/logout</li>
							<li>• Generate script: options → draft</li>
							<li>• Save draft and manage history</li>
							<li>• Search and favourite scripts</li>
							<li>• Donate via PayPal</li>
						</ul>
					</div>

					<div className="glass noise rounded-[28px] p-7">
						<h3 className="text-white/90 text-base md:text-lg font-semibold">What makes it “engineering-grade”</h3>
						<ul className="mt-4 space-y-2 text-white/70 leading-7 text-[14px] md:text-[15px]">
							<li>• Layered architecture: controller → service → repository</li>
							<li>• DTO-first REST contract + predictable errors</li>
							<li>• Tested behaviours (JUnit) to reduce regressions</li>
							<li>• External integrations abstracted behind services</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="glass-strong noise rounded-[32px] p-8">
				<SectionTitle title="Architecture" desc="Backend responsibilities are separated into layers so features remain testable and changes remain local." />

				<div className="mt-6 grid gap-6 lg:grid-cols-3">
					<div className="glass noise rounded-[28px] p-7">
						<h3 className="text-white/90 text-base md:text-lg font-semibold">Controller</h3>
						<p className="mt-3 text-white/70 leading-7 text-[14px] md:text-[15px]">
							Receives requests, validates payloads, and returns consistent status codes and response shapes.
						</p>
					</div>
					<div className="glass noise rounded-[28px] p-7">
						<h3 className="text-white/90 text-base md:text-lg font-semibold">Service</h3>
						<p className="mt-3 text-white/70 leading-7 text-[14px] md:text-[15px]">
							Business logic for generation, saving, favourites, search, and integration boundaries.
						</p>
					</div>
					<div className="glass noise rounded-[28px] p-7">
						<h3 className="text-white/90 text-base md:text-lg font-semibold">Repository</h3>
						<p className="mt-3 text-white/70 leading-7 text-[14px] md:text-[15px]">
							MySQL persistence via JPA/Hibernate, enabling stable CRUD and future schema evolution.
						</p>
					</div>
				</div>
			</section>

			<section className="glass-strong noise rounded-[32px] p-8">
				<SectionTitle
					title="Quality & testing"
					desc="Tests focus on correctness and predictable API behaviour—especially around validation, persistence, and integration boundaries."
				/>

				<div className="mt-6 grid gap-6 lg:grid-cols-2">
					<div className="glass noise rounded-[28px] p-7">
						<h3 className="text-white/90 text-base md:text-lg font-semibold">JUnit strategy</h3>
						<ul className="mt-4 space-y-2 text-white/70 leading-7 text-[14px] md:text-[15px]">
							<li>• Happy paths: create + fetch + update + delete</li>
							<li>• Validation: missing fields, invalid enums, empty prompts</li>
							<li>• Error cases: not found, forbidden actions, invalid ownership</li>
							<li>• Regression tests for refactors</li>
						</ul>
					</div>

					<div className="glass noise rounded-[28px] p-7">
						<h3 className="text-white/90 text-base md:text-lg font-semibold">What I measured</h3>
						<ul className="mt-4 space-y-2 text-white/70 leading-7 text-[14px] md:text-[15px]">
							<li>• Consistent response shapes (DTOs)</li>
							<li>• Predictable HTTP status codes</li>
							<li>• Minimal breaking changes to integration points</li>
							<li>• Faster debugging due to clear error messages</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="glass-strong noise rounded-[32px] p-8">
				<SectionTitle
					title="Security & robustness"
					desc="This section highlights production-style considerations that recruiters typically look for."
				/>

				<div className="mt-6 grid gap-6 lg:grid-cols-2">
					<div className="glass noise rounded-[28px] p-7">
						<h3 className="text-white/90 text-base md:text-lg font-semibold">API hardening</h3>
						<ul className="mt-4 space-y-2 text-white/70 leading-7 text-[14px] md:text-[15px]">
							<li>• Input validation and safe defaults</li>
							<li>• Clear error responses (avoid leaking internal details)</li>
							<li>• Ownership checks for user-owned resources</li>
							<li>• Safe fallbacks when OpenAI responses are malformed</li>
						</ul>
					</div>

					<div className="glass noise rounded-[28px] p-7">
						<h3 className="text-white/90 text-base md:text-lg font-semibold">Integration safety</h3>
						<ul className="mt-4 space-y-2 text-white/70 leading-7 text-[14px] md:text-[15px]">
							<li>• Timeouts and error mapping (OpenAI/PayPal)</li>
							<li>• Server-side secrets (never expose keys to client)</li>
							<li>• Graceful failures with user-friendly messages</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="glass noise rounded-[32px] p-8">
				<SectionTitle title="Challenges & decisions" />
				<BulletList
					items={[
						<>
							• <b className="text-white">Prompt-to-structure reliability:</b> handled inconsistent model output by
							enforcing a response format and adding fallbacks.
						</>,
						<>
							• <b className="text-white">Stable API contracts:</b> used DTOs so frontend changes don’t leak
							into persistence models.
						</>,
						<>
							• <b className="text-white">PayPal integration:</b> isolated create/capture flows behind a service
							layer to keep controllers thin and testable.
						</>,
					]}
				/>
			</section>

			<section className="glass noise rounded-[32px] p-8">
				<SectionTitle title="What I would improve next" />
				<ul className="mt-4 space-y-2 text-white/70 leading-7 text-[14px] md:text-[15px]">
					<li>• Add rate limiting on generation endpoints to prevent abuse</li>
					<li>• Add background jobs/queue for long generation requests</li>
					<li>• Expand automated tests around PayPal edge cases</li>
					<li>• Add monitoring/logging dashboards for production readiness</li>
				</ul>
			</section>

			{evidences.length ? (
				<section className="glass-strong noise rounded-[32px] p-8">
					<SectionTitle
						title="Evidence (artefacts & screenshots)"
						desc="Click an artefact to zoom. Keep these as concrete proof (diagrams, test reports, CI output)."
					/>

					<div className="mt-6 grid gap-6 lg:grid-cols-2">
						{evidences.map((e, idx) => (
							<div key={e.title} className="glass noise rounded-[28px] p-6">
								<div className="flex items-start justify-between gap-4">
									<div>
										<h3 className="text-white/90 text-base md:text-lg font-semibold">{e.title}</h3>
										<p className="mt-2 text-white/70 leading-7 text-[14px] md:text-[15px]">{e.description}</p>
									</div>

									{e.reportHref ? (
										<a
											href={e.reportHref}
											className="shrink-0 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-[13px] hover:bg-white/10 text-white/80 transition"
											target="_blank"
											rel="noreferrer"
										>
											Open →
										</a>
									) : null}
								</div>

								<button
									type="button"
									onClick={() => setActiveEvidenceIdx(idx)}
									className="mt-4 block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left hover:bg-white/10 transition"
									aria-label={`Open ${e.title}`}
								>
									<div className="relative w-full">
										<Image src={e.src} alt={e.alt} width={1600} height={900} className="h-auto w-full" />
									</div>
								</button>

								<p className="mt-3 text-sm text-white/50">Tip: press ESC to close the zoom.</p>
							</div>
						))}
					</div>
				</section>
			) : null}

			<section id="contact" className="glass-strong noise rounded-[48px] px-10 py-10">
				<div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
					<h3 className="font-display italic text-white/90 text-[34px] leading-[1.08] md:text-[52px] md:leading-[1.02]">
						Let’s connect—I’d love to hear from you.
					</h3>

					<a
						href="mailto:irenephung.work@gmail.com"
						className="inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-white/90 hover:bg-white/10 transition"
					>
						<span className="text-base font-semibold">Email Me</span>
						<span className="text-2xl leading-none" aria-hidden="true">
							✉️
						</span>
					</a>
				</div>

				<div className="mt-10 flex items-center justify-center">
					<a
						href="https://www.linkedin.com/in/irene-phung-029a3b222"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-white/90 hover:bg-white/10 transition"
					>
						<span className="text-base font-semibold">LinkedIn</span>

						<span
							aria-hidden="true"
							className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-white/80"
						>
							<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
								<path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.4 24h4.2V7.9H.4V24ZM8.1 7.9H12v2.2h.1c.5-1 1.9-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.7V24h-4.2v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24H8.1V7.9Z" />
							</svg>
						</span>
					</a>
				</div>
			</section>

			<footer className="pb-6 text-center text-white/40 text-sm">
				© {new Date().getFullYear()} Irene. Built with Next.js.
			</footer>

			<Modal open={activeEvidence !== null} title={activeEvidence?.title} onClose={() => setActiveEvidenceIdx(null)}>
				{activeEvidence ? (
					<div className="space-y-4">
						<div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
							<Image
								src={activeEvidence.src}
								alt={activeEvidence.alt}
								width={2400}
								height={1400}
								className="h-auto w-full"
								priority
							/>
						</div>

						<p className="text-white/60 text-sm leading-6">{activeEvidence.description}</p>

						{activeEvidence.reportHref ? (
							<a
								href={activeEvidence.reportHref}
								className="inline-flex rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition"
								target="_blank"
								rel="noreferrer"
							>
								Open full report →
							</a>
						) : null}
					</div>
				) : null}
			</Modal>
		</>
	);
}
