import Link from "next/link";

const featured = [
	{
		title: "Painting Cost App (RenoPilot)",
		desc: "Full-stack features + test pyramid (Vitest/Playwright) + deploy behind Nginx.",
		tags: ["Next.js", "TypeScript", "PostgreSQL", "Vitest", "Playwright", "Nginx"],
		live: "",
		github: "",
		caseStudy: "/work/renopilot",
	},
	{
		title: "ScriptCraft (AI Script Generation)",
		desc: "Spring Boot REST APIs + MySQL + React client with robust error handling.",
		tags: ["Spring Boot", "Java", "REST APIs", "MySQL", "React", "JUnit"],
		live: "",
		github: "",
		caseStudy: "/work/scriptcraft",
	},
	{
		title: "TrailBlazer (Hiking Platform)",
		desc: "Django + Angular + PostGIS with AWS EC2 deployment, Nginx reverse proxy, uWSGI, and security hardening.",
		tags: ["Django", "Angular", "PostgreSQL", "PostGIS", "AWS EC2", "Nginx", "uWSGI", "Terraform"],
		live: "",
		github: "",
		caseStudy: "/work/trailblazer",
	},
];

function Pill({ text }: { text: string }) {
	return <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/75">{text}</span>;
}

function ExternalBtn({ href, label }: { href: string; label: string }) {
	return (
		<a
			href={href}
			className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition"
			target="_blank"
			rel="noreferrer"
		>
			{label}
		</a>
	);
}

function InternalBtn({ href, label }: { href: string; label: string }) {
	return (
		<Link href={href} className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition">
			{label}
		</Link>
	);
}

export default function FeaturedWork() {
	return (
		<section id="work" className="space-y-4">
			<div className="flex items-end justify-between">
				<h2 className="text-2xl md:text-3xl serif-italic">Featured Work</h2>
				<a href="#projects" className="text-white/60 hover:text-white text-sm">
        Plus several smaller projects (labs, utilities, experiments)
				</a>
			</div>

			<div className="grid gap-4 md:grid-cols-2">
				{featured.map((p) => (
					<div key={p.title} className="glass rounded-[28px] p-6">
						<h3 className="text-lg font-semibold text-white">{p.title}</h3>
						<p className="mt-2 text-white/70 leading-7">{p.desc}</p>

						<div className="mt-4 flex flex-wrap gap-2">
							{p.tags.map((t) => (
								<Pill key={t} text={t} />
							))}
						</div>

						<div className="mt-5 flex flex-wrap gap-2">
							{p.live ? <ExternalBtn href={p.live} label="Live" /> : null}
							{p.github ? <ExternalBtn href={p.github} label="GitHub" /> : null}
							<InternalBtn href={p.caseStudy} label="Case Study" />
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
