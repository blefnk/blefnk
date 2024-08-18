import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://blefnk.reliverse.org",
  integrations: [
    starlight({
      title: "Nazar Kornienko blefnk",
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
        discord: "https://discord.gg/C4Z46fHKQ8",
      },
      sidebar: [
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
  ],
});
