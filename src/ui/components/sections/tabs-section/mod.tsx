// "use client";

import type { FC } from "react";

// import { useAnime } from "🐈/lib/hooks/use-anime";
import { cn } from "🐈/lib/utils";
import { buttonVariants } from "🐈/ui/primitives/button";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "🐈/ui/primitives/tabs";

import { AboutTab } from "../about";
import { ContactSection } from "./contact";
import { ManifestoTab } from "./manifesto/mod";
import { ProjectsTab } from "./projects";
import { DonateTab } from "./support";

const TABS = [
	{ label: "who i am", value: "about" },
	{ label: "projects", value: "projects" },
	{ label: "manifesto", value: "manifesto" },
	{ label: "donate", value: "donate" },
] as const;

export const TabsSection: FC = () => {
	// const tabsListRef = useAnime({
	// 	animation: {
	// 		delay: 800,
	// 		duration: 800,
	// 		easing: "outExpo",
	// 		opacity: [0, 1],
	// 		translateY: [20, 0],
	// 	},
	// 	targets: ".tabs-list",
	// });

	// const tabsContentRef = useAnime({
	// 	animation: {
	// 		delay: 1000,
	// 		duration: 800,
	// 		easing: "outExpo",
	// 		opacity: [0, 1],
	// 		translateY: [20, 0],
	// 	},
	// 	targets: ".tabs-content",
	// });

	return (
		<Tabs className="mb-12" defaultValue="about">
			{/* TABS LIST */}
			<TabsList
				className="tabs-list grid h-auto w-full grid-cols-4 gap-2 bg-transparent"
				/* ref={tabsListRef} */
			>
				{TABS.map(({ label, value }) => (
					<TabsTrigger
						className={cn(
							buttonVariants({ variant: "outline" }),
							"brutal-button data-[state=active]:bg-foreground data-[state=active]:text-background",
						)}
						key={value}
						value={value}
					>
						{label}
					</TabsTrigger>
				))}
			</TabsList>

			{/* ABOUT */}
			<TabsContent
				className="tabs-content mt-6"
				/* ref={tabsContentRef} */
				value="about"
			>
				<AboutTab />
				<ContactSection />
			</TabsContent>

			{/* PROJECTS */}
			<TabsContent
				className="tabs-content mt-6"
				/* ref={tabsContentRef} */
				value="projects"
			>
				<ProjectsTab />
			</TabsContent>

			{/* DONATE */}
			<TabsContent
				className="tabs-content mt-6"
				/* ref={tabsContentRef} */
				value="donate"
			>
				<DonateTab />
			</TabsContent>

			{/* MANIFESTO */}
			<TabsContent
				className="tabs-content mt-6"
				/* ref={tabsContentRef} */
				value="manifesto"
			>
				<ManifestoTab />
			</TabsContent>
		</Tabs>
	);
};
