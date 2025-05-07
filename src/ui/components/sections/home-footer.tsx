"use client";

import type { FC } from "react";

import { useAnime } from "🐈/lib/hooks/use-anime";
import { Music } from "lucide-react";
import Link from "next/link";

export const Outro: FC = () => {
	const outroRef = useAnime({
		animation: {
			delay: 1200,
			duration: 800,
			easing: "outExpo",
			opacity: [0, 1],
			translateY: [20, 0],
		},
		targets: ".outro-content",
	});

	return (
		<section className="mb-12">
			<div className="outro-content brutal-card p-6" ref={outroRef}>
				<h3 className="mb-4 text-2xl font-bold">bye? hello.</h3>
				<p className="mb-4">
					ah, btw. if you want to be confused and impressed at the same time:
				</p>
				<Link
					className="brutal-button inline-flex items-center gap-2"
					href="https://dub.sh/blefnk-fm"
					rel="noopener noreferrer"
					target="_blank"
				>
					<Music className="h-5 w-5" />
					<span>check my broken music taste</span>
				</Link>
				<div className="mt-6 space-y-4">
					<p>
						broken things are pretty, i think.
						<br />
						<strong>let's keep building broken things. </strong>
						<br />
						<strong>let's keep building humanity. </strong>
						<br />
						because ai can't.
					</p>
					<p>
						thanks for reading.
						<br />
						thanks for caring.
					</p>
					<p className="text-xl">🩷 blefnk</p>
				</div>
			</div>
		</section>
	);
};

export const HomeFooter: FC = () => {
	const footerRef = useAnime({
		animation: {
			delay: 1400,
			duration: 800,
			easing: "outExpo",
			opacity: [0, 1],
			scale: [0.95, 1],
		},
		targets: ".footer-content",
	});

	return (
		<footer
			className="footer-content text-center text-sm text-muted-foreground"
			ref={footerRef}
		>
			<p>
				&copy; {new Date().getFullYear()} Nazar Kornienko. All rights reserved.
			</p>
			<p className="mt-2">Built with 💔. Intentionally broken.</p>
		</footer>
	);
};
