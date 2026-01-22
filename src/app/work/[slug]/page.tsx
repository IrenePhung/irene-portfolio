import Link from "next/link";

const CASES: Record<
  string,
  {
    title: string;
    subtitle: string;
    overview: string;
    role: string[];
    stack: string[];
    highlights: string[];
    testing: string[];
    deploy: string[];
    links: { label: string; href: string }[];
  }
> = {
  "renopilot": {
    title: "Painting Cost App (RenoPilot)",
    subtitle: "Full-stack features + test pyramid + deploy behind Nginx",
    overview:
      "A production-style estimating app. My focus was backend features, reliability, and automated testing across unit → integration → E2E.",
    role: [
      "Implemented REST endpoints (health, reference data, project cost).",
      "Worked with PostgreSQL schema/seeds and environment configuration.",
      "Owned test strategy and maintained CI stability.",
    ],
    stack: ["Next.js", "TypeScript", "Payload CMS", "PostgreSQL", "Docker", "Nginx"],
    highlights: [
      "Structured error handling and consistent API responses.",
      "Improved developer onboarding with clear setup steps and scripts.",
      "Ensured performance/UX reliability via automated checks.",
    ],
    testing: [
      "Vitest: unit + integration tests for core logic and API behaviour.",
      "Playwright: E2E smoke tests for critical user flows.",
    ],
    deploy: ["Dockerised services for local/prod parity.", "Reverse proxy via Nginx; HTTPS/HSTS configuration."],
    links: [
      { label: "GitHub", href: "/work/renopilot" },
      { label: "Live", href: "#" },
    ],
  },

  "scriptcraft": {
    title: "ScriptCraft (AI Script Generation)",
    subtitle: "Spring Boot REST APIs + MySQL + React client",
    overview:
      "An app that generates scripts using AI. I focused on robust APIs, database integration, and reliability for request/response flows.",
    role: [
      "Designed and implemented Spring Boot REST endpoints.",
      "Modelled MySQL schema for sessions/configuration.",
      "Improved client reliability with error handling and retries.",
    ],
    stack: ["Spring Boot", "React", "MySQL", "REST", "JUnit"],
    highlights: [
      "Clear API contracts and predictable error states.",
      "Separation of concerns between service, controller, and persistence layers.",
    ],
    testing: ["JUnit tests for API logic and database interactions."],
    deploy: ["Local dev setup documented; easy run instructions."],
    links: [{ label: "GitHub", href: "#" }],
  },

  "localshop": {
    title: "LocalShop E-Commerce",
    subtitle: "JWT auth + cart/checkout + PayPal integration",
    overview:
      "A full-stack e-commerce prototype. I built authentication, checkout flow, and payment integration with clean architecture.",
    role: [
      "Implemented JWT authentication and protected routes.",
      "Built cart/checkout flow and order lifecycle.",
      "Integrated PayPal end-to-end.",
    ],
    stack: ["React", "Node/Express", "MySQL", "JWT", "PayPal API"],
    highlights: [
      "Secure auth flow and clear separation between client/server responsibilities.",
      "Improved UX with predictable form validation and error feedback.",
    ],
    testing: ["(Optional) Add API tests + basic E2E checkout smoke test."],
    deploy: ["(Optional) Deploy to Render/Fly.io + MySQL provider."],
    links: [{ label: "GitHub", href: "#" }],
  },
};

function Pill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/75">
      {text}
    </span>
  );
}

export default function WorkCaseStudy({ params }: { params: { slug: string } }) {
  const data = CASES[params.slug];

  if (!data) {
    return (
      <main className="min-h-screen bg-[#070A10] text-white">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <p className="text-white/70">Case study not found.</p>
          <Link className="underline" href="/">Back</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#070A10] text-white">
      <div className="mx-auto max-w-4xl px-6 py-14 space-y-10">
        <Link href="/" className="text-white/60 hover:text-white">← Back</Link>

        <header className="glass rounded-[32px] p-8">
          <h1 className="text-3xl md:text-5xl serif-italic">{data.title}</h1>
          <p className="mt-3 text-white/70 leading-7">{data.subtitle}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {data.stack.map((s) => (
              <Pill key={s} text={s} />
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {data.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                target="_blank"
                rel="noreferrer"
              >
                {l.label}
              </a>
            ))}
          </div>
        </header>

        <section className="glass rounded-[32px] p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-2 text-white/70 leading-7">{data.overview}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">My role</h2>
            <ul className="mt-2 list-disc pl-5 text-white/70 space-y-2">
              {data.role.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Highlights</h2>
            <ul className="mt-2 list-disc pl-5 text-white/70 space-y-2">
              {data.highlights.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold">Testing</h2>
              <ul className="mt-2 list-disc pl-5 text-white/70 space-y-2">
                {data.testing.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Deployment</h2>
              <ul className="mt-2 list-disc pl-5 text-white/70 space-y-2">
                {data.deploy.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
