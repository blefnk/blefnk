import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

import Image from "next/image";

import Logo from "../img/favicon-32x32.png";

/**
 * Shared layout configurations
 *
 * layouts can be customised individually from:
 * Home Layout: app/(home)/layout.tsx
 * Blog Layout: app/blog/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
	links: [
		{
			active: "nested-url",
			text: "CV",
			url: "/cv",
		},
		{
			active: "nested-url",
			text: "Blog",
			url: "/blog",
		},
		{
			active: "url",
			text: "Donate",
			url: "https://github.com/sponsors/blefnk", // TODO: change to /donate when ready
		},
	],
	nav: {
		title: (
			<>
				<Image
					alt="Logo"
					className="inline-block"
					height={24}
					src={Logo}
					width={24}
				/>
				@blefnk Nazar Kornienko
			</>
		),
	},
};
