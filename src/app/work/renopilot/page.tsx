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

type Stat = {
	label: string;
	value: string;
	note?: string;
};

type Bullet = {
	title: string;
	items: string[];
};

const tags = [
	"Next.js",
	"TypeScript",
	"PostgreSQL",
	"Payload CMS",
	"Vitest",
	"React Testing Library",
	"Playwright",
	"Nginx",
];

const stats: Stat[] = [
	{ label: "Role", value: "QA/Testing + Full-stack contributions", note: "Owned testing strategy & CI evidence" },
	{ label: "Focus", value: "Correctness, performance, security checks", note: "Recruiter-friendly proof" },
	{ label: "Delivery", value: "Team capstone build", note: "From requirements → tested deployment" },
];

const overviewBullets: Bullet[] = [
	{
		title: "What the product does",
		items: [
			"Calculates residential/commercial painting estimates using defined formulas (areas, coats, labour, materials).",
			"Provides transparent breakdowns so users can understand cost drivers (surface types, paint types, labour).",
			"Supports a consistent UX flow for entering project details and generating an estimate output.",
		],
	},
	{
		title: "Why it matters",
		items: [
			"Estimation is error-prone when formulas are inconsistent or UX is confusing.",
			"This project focused on making estimation repeatable, testable, and explainable.",
		],
	},
];

const myOwnership: Bullet[] = [
	{
		title: "Quality work I owned",
		items: [
			"Built a testing pyramid: unit + integration + E2E smoke checks for critical user flows.",
			"Implemented Vitest + React Testing Library suite for core UI logic and calculation edge cases.",
			"Added Playwright checks to validate performance/security-related requirements at a user-flow level.",
			"Maintained CI artefacts/evidence so reviewers can verify quality gates quickly.",
		],
	},
	{
		title: "Collaboration",
		items: [
			"Worked with teammates to identify highest-risk modules and set coverage priorities.",
			"Reviewed test failures, refined test data/fixtures, and improved determinism in CI.",
			"Documented testing approach and evidence inside the final report.",
		],
	},
];

const approach: Bullet[] = [
	{
		title: "How I approached testing",
		items: [
			"Unit tests: validate formulas and edge cases (zero/negative inputs, rounding, boundary values).",
			"Integration tests: validate UI state changes and rendered outputs given controlled inputs.",
			"E2E checks: ensure critical paths work end-to-end (core flow + non-functional checks).",
			"CI evidence: store screenshots/coverage outputs as proof for reviewers and hiring managers.",
		],
	},
	{
		title: "What I tested (examples)",
		items: [
			"Correct cost breakdown after changing surface type / paint type / labour options.",
			"Regression safety for key components when refactoring UI logic.",
			"Basic security/performance checks as acceptance criteria (where applicable).",
		],
	},
];

const results: Bullet[] = [
	{
		title: "Results & outcomes",
		items: [
			"Improved confidence for core modules via repeatable automated tests and CI coverage evidence.",
			"Reduced regressions during iteration by catching UI logic and calculation issues early.",
			"Made the project more “hireable” by showing measurable quality work and artefacts.",
		],
	},
	{
		title: "Key learnings",
		items: [
			"Tests are most valuable when tied to risk: core flows + calculation logic + critical components.",
			"CI evidence (coverage reports, screenshots, logs) helps reviewers trust the quality quickly.",
			"Keeping tests deterministic is as important as writing them (stable fixtures & predictable data).",
		],
	},
];

const nextSteps: Bullet[] = [
	{
		title: "If I had more time",
		items: [
			"Add visual regression tests for key UI screens (snapshot + layout checks).",
			"Expand device coverage with real device testing (not just browser emulation).",
			"Add stress/endurance tests for deployment-level confidence under load.",
			"Improve observability: add structured logging + basic error monitoring for production.",
		],
	},
];

const evidences: Evidence[] = [
	{
		title: "CI coverage report",
		description:
			"Coverage report snapshot from CI (Vitest). Used to support a quality gate on core modules and demonstrate automated verification.",
		src: "/work/renopilot/coverage.png",
		alt: "RenoPilot CI coverage report",
		reportHref: "#",
	},
];

function Pill({ text }: { text: string }) {
	return (
		<span className="shrink-0 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-[13px] text-white/80">
			{text}
		</span>
	);
}

function SectionHeader({ kicker, title, desc }: { kicker?: string; title: string; desc?: string }) {
	return (
		<div>
			{kicker ? <p className="text-white/55 t-kicker text-xs md:text-sm">{kicker}</p> : null}
			<h2 className="mt-2 text-white/90 t-heading text-xl md:text-2xl font-semibold">{title}</h2>
			{desc ? <p className="mt-3 text-white/70 t-body text-[14px] md:text-[15px]">{desc}</p> : null}
		</div>
	);
}

function BulletCard({ title, items }: Bullet) {
	return (
		<div className="glass noise rounded-[28px] p-7">
			<h3 className="text-white/90 t-heading text-base md:text-lg font-semibold">{title}</h3>
			<ul className="mt-4 space-y-2 text-white/70 t-body text-[14px] md:text-[15px]">
				{items.map((x) => (
					<li key={x}>• {x}</li>
				))}
			</ul>
		</div>
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

export default function RenoPilotCaseStudy() {
	const [activeEvidenceIdx, setActiveEvidenceIdx] = useState<number | null>(null);

	const activeEvidence = useMemo(() => {
		if (activeEvidenceIdx === null) return null;
		return evidences[activeEvidenceIdx] ?? null;
	}, [activeEvidenceIdx]);

	return (
		<div className="space-y-10">
			<section className="glass-strong noise rounded-[32px] p-8">
				<div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
					<div>
						<p className="text-white/55 t-kicker text-xs md:text-sm">Case Study</p>
						<h1 className="mt-3 font-display italic t-heading text-[34px] leading-[1.05] md:text-[54px] md:leading-[1.02]">
							Painting Cost App <span className="text-white/70">(RenoPilot)</span>
						</h1>
						<p className="mt-4 max-w-2xl text-white/70 t-body text-[15px] md:text-[16px]">
							Web-based calculator to estimate residential/commercial painting costs with verified formulas,
							clear outputs, and a quality-first test suite.
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
					<h2 className="text-white/90 t-heading text-lg md:text-xl font-semibold">Snapshot</h2>
					<div className="mt-4 grid gap-4 md:grid-cols-3">
						{stats.map((s) => (
							<div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
								<div className="text-white/55 text-xs">{s.label}</div>
								<div className="mt-1 text-white/90 font-semibold">{s.value}</div>
								{s.note ? <div className="mt-1 text-white/60 text-xs leading-5">{s.note}</div> : null}
							</div>
						))}
					</div>
				</div>

				<div className="glass noise rounded-[32px] p-7">
					<h2 className="text-white/90 t-heading text-lg md:text-xl font-semibold">Highlights</h2>
					<div className="mt-4 space-y-3 text-white/70 leading-7 t-body text-[14px] md:text-[15px]">
						<p>
							• Coverage evidence for core modules via <b className="text-white">CI reports</b>
						</p>
						<p>
							• Automated UI checks with <b className="text-white">RTL + Vitest</b>
						</p>
						<p>
							• End-to-end safety checks with <b className="text-white">Playwright</b>
						</p>
					</div>
				</div>
			</section>

			<section className="glass-strong noise rounded-[32px] p-8">
				<SectionHeader
					title="Overview"
					desc="A quick explanation of the product and why quality/testing mattered for this project."
				/>
				<div className="mt-6 grid gap-6 lg:grid-cols-2">
					{overviewBullets.map((b) => (
						<BulletCard key={b.title} title={b.title} items={b.items} />
					))}
				</div>
			</section>

			<section className="glass-strong noise rounded-[32px] p-8">
				<SectionHeader
					title="My role & scope"
					desc="What I owned, how I contributed, and how I worked with the team."
				/>
				<div className="mt-6 grid gap-6 lg:grid-cols-2">
					{myOwnership.map((b) => (
						<BulletCard key={b.title} title={b.title} items={b.items} />
					))}
				</div>
			</section>

			<section className="glass-strong noise rounded-[32px] p-8">
				<SectionHeader
					title="Implementation approach"
					desc="A recruiter-friendly breakdown of how I built the quality work: what was tested and why."
				/>
				<div className="mt-6 grid gap-6 lg:grid-cols-2">
					{approach.map((b) => (
						<BulletCard key={b.title} title={b.title} items={b.items} />
					))}
				</div>
			</section>

			<section className="glass-strong noise rounded-[32px] p-8">
				<SectionHeader
					title="CI artefacts & reports"
					desc="Clickable evidence. This is exactly what reviewers/hiring managers like: proof of automated verification."
				/>

				<div className="mt-6 grid gap-6 lg:grid-cols-2">
					{evidences.map((e, idx) => (
						<div key={e.title} className="glass noise rounded-[28px] p-6">
							<div className="flex items-start justify-between gap-4">
								<div>
									<h3 className="text-white/90 t-heading text-base md:text-lg font-semibold">{e.title}</h3>
									<p className="mt-2 text-white/70 t-body text-[14px] md:text-[15px]">{e.description}</p>
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
									<Image
										src={e.src}
										alt={e.alt}
										width={1600}
										height={900}
										className="h-auto w-full"
										priority={idx === 0}
									/>
								</div>
							</button>

							<p className="mt-3 text-sm text-white/50">Tip: press ESC to close the zoom.</p>
						</div>
					))}
				</div>
			</section>

			<section className="glass-strong noise rounded-[32px] p-8">
				<SectionHeader title="Results & learnings" desc="Outcomes that matter for hiring: impact + what you learned." />
				<div className="mt-6 grid gap-6 lg:grid-cols-2">
					{results.map((b) => (
						<BulletCard key={b.title} title={b.title} items={b.items} />
					))}
				</div>
			</section>

			<section className="glass noise rounded-[32px] p-8">
				<SectionHeader
					title="Limitations"
					desc="Honest constraints show maturity. Keep it short and practical."
				/>
				<ul className="mt-4 space-y-2 text-white/70 t-body text-[14px] md:text-[15px]">
					<li>• Used a mock database in testing (limited access to real client DB environment).</li>
					<li>• Mobile device testing was mostly via browser emulation (not a full device lab).</li>
					<li>• No stress/endurance testing; infra-level controls verified by deployment environment.</li>
				</ul>
			</section>

			<section className="glass-strong noise rounded-[32px] p-8">
				<SectionHeader title="Next improvements" desc="What I’d do next if this shipped long-term." />
				<div className="mt-6 grid gap-6 lg:grid-cols-2">
					{nextSteps.map((b) => (
						<BulletCard key={b.title} title={b.title} items={b.items} />
					))}
				</div>
			</section>

			<section id="contact" className="glass-strong noise rounded-[48px] px-10 py-10">
				<div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
					<h3 className="font-display italic t-heading text-white/90 text-[34px] leading-[1.08] md:text-[52px] md:leading-[1.02]">
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

			<footer className="pb-6 text-center text-white/35 text-sm">
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
		</div>
	);
}
