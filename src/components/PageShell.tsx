"use client";

import Sidebar from "@/components/Sidebar";

type Props = {
	active?: "profile" | "resume";
	children: React.ReactNode;
};

export default function PageShell({ active = "resume", children }: Props) {
	return (
		<main className="min-h-screen text-white">
			<div className="relative min-h-screen bg-grid vignette noise">
				<div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-[320px_1fr]">
					<div className="md:pl-0">
						<Sidebar active={active} />
					</div>

					<div className="space-y-10 px-6 md:px-10">
						{children}
					</div>
				</div>
			</div>
		</main>
	);
}
