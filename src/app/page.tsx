import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeatureWork";

export default function Home() {
	return (
		<PageShell>
			<div className="space-y-10">
				<Hero />
				<FeaturedWork />
			</div>
		</PageShell>
	);
}
