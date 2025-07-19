// "use client";

import type { FC } from "react";

import { SOCIAL_LINKS } from "🐈/lib/constants";
import { cn } from "🐈/lib/utils";
import { buttonVariants } from "🐈/ui/primitives/button";
// import { useAnime } from "🐈/lib/hooks/use-anime";
import Link from "next/link";

interface SocialButtonProps {
	href: string;
	icon: FC<{ className?: string }>;
	label: string;
	renderLabel?: boolean;
}

const SocialButton: FC<SocialButtonProps> = ({
	href,
	icon: Icon,
	label,
	renderLabel = false,
}) => (
	<Link
		aria-label={label}
		className={cn(buttonVariants({ variant: "outline" }))}
		href={href}
		rel="noopener noreferrer"
		target="_blank"
	>
		<Icon className="h-5 w-5" />
		{renderLabel && label}
	</Link>
);

export const HomeHeader: FC = () => {
	// const headerRef = useAnime({
	// 	animation: {
	// 		duration: 800,
	// 		easing: "outExpo",
	// 		opacity: [0, 1],
	// 		translateY: [-20, 0],
	// 	},
	// 	targets: ".hero-header",
	// });

	// const socialRef = useAnime({
	// 	animation: {
	// 		delay: 200,
	// 		duration: 800,
	// 		easing: "outExpo",
	// 		opacity: [0, 1],
	// 		translateX: [20, 0],
	// 	},
	// 	targets: ".hero-social",
	// });

	return (
		<div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
			<div className="hero-header" /* ref={headerRef}*/>
				<h1
					className="glitch-text mb-2 text-4xl font-bold md:text-5xl"
					data-text="blefnk"
				>
					blefnk
				</h1>
				<p className="text-lg text-muted-foreground">
					ts+node.js and frontend (next.js usually) developer.
				</p>
				<p className="text-sm text-muted-foreground">
					focused on clean dx, honest ux, and tools you actually want to use.
				</p>
			</div>
			<nav
				aria-label="social links"
				className="hero-social flex gap-3"
				/* ref={socialRef} */
			>
				{SOCIAL_LINKS.map(({ href, icon, label }) => (
					<SocialButton
						href={href}
						icon={icon}
						key={href}
						label={label}
						renderLabel={false}
					/>
				))}
			</nav>
		</div>
	);
};
