import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://Ressobe.github.io",
  base: "intro-section-with-dropdown-navigation",
  integrations: [tailwind()],
});
