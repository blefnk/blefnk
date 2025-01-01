import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://blefnk.reliverse.org",
  integrations: [
    starlight({
      title: "Nazar Kornienko blefnk",
      customCss: ["./src/styles/globals.css"],
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        pl: {
          label: "Polish (Polski)",
        },
        uk: {
          label: "Ukrainian (Українська)",
        },
      },
      social: {
        github: "https://github.com/blefnk",
        twitter: "https://x.com/blefnk",
        discord: "https://discord.gg/Pb8uKbwpsJ",
      },
      sidebar: [
        {
          label: "Blog",
          autogenerate: { directory: "blog" },
        },
        {
          label: "About",
          autogenerate: { directory: "about" },
        },
        {
          label: "Skills",
          autogenerate: { directory: "skills" },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
