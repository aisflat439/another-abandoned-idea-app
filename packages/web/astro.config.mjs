import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import aws from "astro-sst/lambda";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: aws(),
  integrations: [tailwind()],
});