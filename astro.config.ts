import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://blefnk.reliverse.org",
	integrations: [
		starlight({
			title: "@blefnk Nazar Kornienko",
			social: {
				github: "https://github.com/blefnk",
				discord: "https://discord.gg/Pb8uKbwpsJ",
				twitter: "https://x.com/blefnk",
			},
			sidebar: [
				{
					label: "📃 Blog",
					collapsed: true,
					autogenerate: { directory: "blog", collapsed: false },
				},
				{
					label: "👋 About",
					collapsed: true,
					autogenerate: { directory: "about", collapsed: true },
				},
				{
					label: "✂️ Skills",
					collapsed: false,
					autogenerate: { directory: "skills", collapsed: true },
				},
			],
		}),
	],
});
