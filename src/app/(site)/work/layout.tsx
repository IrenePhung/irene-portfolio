import PageShell from "@/components/PageShell";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
	return <PageShell active="resume">{children}</PageShell>;
}
