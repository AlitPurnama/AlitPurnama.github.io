// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, passthroughImageService } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx()],
});
