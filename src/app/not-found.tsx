import NoiseEffect from "🐈/ui/components/noise-effect";
import { Button } from "🐈/ui/primitives/button";
import Link from "next/link";

export default function NotFound() {
	return (
		<main className="min-h-screen bg-background text-foreground font-mono relative flex items-center justify-center">
			<NoiseEffect />
			{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
			<div className="scanlines"></div>

			<div className="container mx-auto px-4 py-12 max-w-md text-center">
				<h1 className="text-6xl font-bold mb-4 glitch-text" data-text="404">
					404
				</h1>
				<h2 className="text-2xl mb-6">page not found</h2>
				<p className="mb-8">
					this page is broken.
					<br />
					but broken things are pretty.
					<br />i think.
				</p>
				<Link href="/">
					<Button className="brutal-button px-6 py-3">go back home</Button>
				</Link>
			</div>
		</main>
	);
}
