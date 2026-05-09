// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, passthroughImageService } from "astro/config";

import mdx from "@astrojs/mdx";
const isProd = process.env.NODE_ENV === "production";
// https://astro.build/config
export default defineConfig({
  site: isProd ? "https://alitpurnama.github.io" : "http://localhost:4321",
  base: isProd ? "alitpurnama.github.io" : undefined,
  image: {
    service: passthroughImageService(),
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx()],
});
