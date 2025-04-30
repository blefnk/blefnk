"use client";

import type { FC } from "react";

import GlitchyNazar from "🐈/img/blefnk.png";
import { useAnime } from "🐈/lib/hooks/use-anime";
import Image from "next/image";

export const Hero: FC = () => {
	const contentRef = useAnime({
		animation: {
			delay: 400,
			duration: 800,
			easing: "outExpo",
			opacity: [0, 1],
			translateY: [20, 0],
		},
		targets: ".hero-content",
	});

	const imageRef = useAnime({
		animation: {
			delay: 600,
			duration: 1000,
			easing: "outElastic(1, 0.5)",
			opacity: [0, 1],
			scale: [0.9, 1],
		},
		targets: ".hero-image",
	});

	return (
		<header className="mb-2">
			<div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
				<div className="hero-content" ref={contentRef}>
					<h2 className="typewriter mb-4 text-2xl font-bold">
						hey🌚. i&apos;m nazar kornienko.
					</h2>
					<div className="space-y-4 text-lg">
						<p className="text-muted-foreground">
							i'm not here to build the next big thing.
							<br />
							i'm here to build the next real thing.
						</p>
						<p>
							i make things.
							<br />i break them.
							<br />
							then rebuild:
							<br />
							better. louder. weirder.
							<br />
							until it&apos;s truly something.
						</p>
						<p>
							my oss tools don&apos;t scream for attention.
							<br />
							they just <em>show up</em>, do the job,
							<br />
							and somehow make it feel good.
						</p>
						<p>
							no fluff.
							<br />
							no startup perfume.
							<br />
							just actual tools with actual spine.
						</p>
					</div>
				</div>
				<div className="hero-image vhs-effect" ref={imageRef}>
					<Image
						alt="Glitchy portrait of Nazar Kornienko with the text 'i think you're pretty'"
						className="brutal-border h-auto w-full"
						height={500}
						placeholder="blur"
						priority
						src={GlitchyNazar}
						width={500}
					/>
				</div>
			</div>
		</header>
	);
};
