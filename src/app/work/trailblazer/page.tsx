// app/(site)/work/trailblazer/page.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type Evidence = {
	title: string;
	description: string;
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
	"Django",
	"Angular",
	"PostgreSQL",
	"PostGIS",
	"AWS EC2",
	"Terraform",
	"Nginx",
	"uWSGI",
	"HTTPS",
	"Security Hardening",
];

const stats: Stat[] = [
	{
		label: "Role",
		value: "Deployment + Security + QA contributions",
		note: "Production-style setup & verification",
	},
	{
		label: "Focus",
		value: "Secure exposure, reliability, reproducibility",
		note: "Reverse proxy, TLS, IaC mindset",
	},
	{
		label: "Delivery",
		value: "Team build deployed to AWS",
		note: "From design → deployment → validation",
	},
];

const overviewBullets: Bullet[] = [
	{
		title: "What the product does",
		items: [
			"Helps users discover hiking routes and explore route details in a consistent UX flow.",
			"Supports community contributions (reviews/photos) to enrich route quality and trust.",
			"Stores geospatial route data for location-aware features using PostGIS-backed persistence.",
		],
	},
	{
		title: "Why it matters",
		items: [
			"Public-facing web apps need secure exposure and reliable runtime behavior to be credible.",
			"This project focused on production-style deployment (proxy boundary, TLS, safer defaults) and evidence-based verification.",
		],
	},
];

const myOwnership: Bullet[] = [
	{
		title: "What I owned / contributed",
		items: [
			"Deployment & security focus: reverse proxy boundary, TLS/HTTPS, and safer runtime configuration.",
			"Helped validate production readiness using clear checks and documented outcomes.",
			"Collaborated on data model integration for PostgreSQL/PostGIS and route-related features.",
		],
	},
	{
		title: "Collaboration",
		items: [
			"Worked with teammates to align deployment constraints with app requirements (ports, proxy headers, static/media handling).",
			"Reviewed issues discovered during deployment validation and helped refine configuration for stability.",
			"Documented approach so reviewers can understand the deployment/security decisions quickly.",
		],
	},
];

const approach: Bullet[] = [
	{
		title: "How I approached deployment & security",
		items: [
			"Reverse proxy as a boundary: isolate app server behind Nginx and expose only required entrypoints.",
			"TLS/HTTPS: ensure secure access and reduce accidental plaintext access (where applicable).",
			"Infrastructure-as-code mindset: prefer repeatability and auditable changes (Terraform).",
			"Verification mindset: validate the critical parts (routing, TLS, service exposure) and document the results.",
		],
	},
	{
		title: "What I verified (examples)",
		items: [
			"Correct reverse proxy routing to the application and stable navigation through typical flows.",
			"Nginx/uWSGI integration and reliable serving under expected usage.",
			"DB integration with PostGIS enabled for route-related storage/querying.",
			"Inbound exposure constrained to necessary ports (least privilege where applicable).",
		],
	},
];

const results: Bullet[] = [
	{
		title: "Results & outcomes",
		items: [
			"Delivered a production-style deployment setup that is easier to reason about and review.",
			"Improved confidence by validating critical paths and documenting the setup clearly.",
			"Strengthened credibility by using secure exposure patterns and reproducibility intent.",
		],
	},
	{
		title: "Key learnings",
		items: [
			"Proxy boundaries simplify security decisions: you can reason about a single entrypoint and enforce safer defaults.",
			"Documentation is evidence: clear setup notes help others trust your system quickly.",
			"Reproducibility reduces drift: IaC and documented configs prevent “works on my machine” issues.",
		],
	},
];

const nextSteps: Bullet[] = [
	{
		title: "If I had more time",
		items: [
			"Add observability: structured logs, basic dashboards, and error monitoring.",
			"Expand CI automation for deployment validation (lint configs, run smoke tests after deploy).",
			"Performance tune frequent geospatial queries and add caching for common route pages.",
			"Add resilience checks (restart policies, health checks, controlled rollouts).",
		],
	},
];

const evidences: Evidence[] = [
	{
		title: "Final report",
		description: "Project documentation and deployment/security discussion in the final report.",
		reportHref: "https://github.com/IrenePhung/trailblazer-hiking-platform/blob/main/FinalReport.pdf",
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

			<div className="relative z-10 w-full max-w-3xl rounded-[28px] border border-white/10 bg-neutral-950/70 shadow-2xl">
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

				<div className="p-5">{children}</div>
			</div>
		</div>
	);
}

export default function TrailBlazerCaseStudy() {
	const router = useRouter();

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
							TrailBlazer <span className="text-white/70">(Hiking Platform)</span>
						</h1>
						<p className="mt-4 max-w-2xl text-white/70 t-body text-[15px] md:text-[16px]">
							A hiking platform deployed to AWS with production-style networking, reverse proxy configuration,
							secure service exposure, and reliable runtime behavior.
						</p>

						<div className="mt-6 flex flex-wrap gap-2">
							{tags.map((t) => (
								<Pill key={t} text={t} />
							))}
						</div>
					</div>

					<div className="flex gap-3 relative z-10">
						<button
							type="button"
							onClick={() => {
								if (window.history.length > 1) router.back();
								else router.push("/work");
							}}
							className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-white/85 hover:bg-white/10 transition"
						>
							← Back
						</button>

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
							• Secure exposure via <b className="text-white">TLS + reverse proxy boundary</b>
						</p>
						<p>
							• Reproducibility intent with <b className="text-white">Terraform (IaC)</b>
						</p>
						<p>
							• Evidence-driven validation via <b className="text-white">clear documentation</b>
						</p>
					</div>
				</div>
			</section>

			<section className="glass-strong noise rounded-[32px] p-8">
				<SectionHeader
					title="Overview"
					desc="A quick explanation of the product and why production-style deployment/security mattered."
				/>
				<div className="mt-6 grid gap-6 lg:grid-cols-2">
					{overviewBullets.map((b) => (
						<BulletCard key={b.title} title={b.title} items={b.items} />
					))}
				</div>
			</section>

			<section className="glass-strong noise rounded-[32px] p-8">
				<SectionHeader title="My role & scope" desc="What I owned, what I contributed, and how I worked with the team." />
				<div className="mt-6 grid gap-6 lg:grid-cols-2">
					{myOwnership.map((b) => (
						<BulletCard key={b.title} title={b.title} items={b.items} />
					))}
				</div>
			</section>

			<section className="glass-strong noise rounded-[32px] p-8">
				<SectionHeader
					title="Implementation approach"
					desc="A recruiter-friendly breakdown of how I approached deployment/security and what I verified."
				/>
				<div className="mt-6 grid gap-6 lg:grid-cols-2">
					{approach.map((b) => (
						<BulletCard key={b.title} title={b.title} items={b.items} />
					))}
				</div>
			</section>

			<section className="glass-strong noise rounded-[32px] p-8">
				<SectionHeader
					title="Reports"
					desc="Documentation that supports the deployment/security decisions (no screenshots included)."
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
								className="mt-4 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left hover:bg-white/10 transition"
								aria-label={`Open ${e.title}`}
							>
								<div className="text-white/80 font-medium">View details</div>
								<div className="mt-1 text-white/55 text-sm">Opens a small summary panel.</div>
							</button>

							<p className="mt-3 text-sm text-white/50">Tip: press ESC to close.</p>
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
				<SectionHeader title="Limitations" desc="Short and honest constraints show maturity." />
				<ul className="mt-4 space-y-2 text-white/70 t-body text-[14px] md:text-[15px]">
					<li>• No screenshots included in the public portfolio version.</li>
					<li>• Some validation depends on deployment environment constraints (e.g., restricted SSH / staging setup).</li>
					<li>• Performance checks are baseline; deeper load testing would increase confidence for long-term operation.</li>
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
						<p className="text-white/70 text-[14px] leading-7">{activeEvidence.description}</p>

						{activeEvidence.reportHref ? (
							<a
								href={activeEvidence.reportHref}
								className="inline-flex rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition"
								target="_blank"
								rel="noreferrer"
							>
								Open report →
							</a>
						) : null}
					</div>
				) : null}
			</Modal>
		</div>
	);
}
