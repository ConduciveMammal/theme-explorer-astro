import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://theme-explorer.merlyndesignworks.co.uk',
  compressHTML: !import.meta.env.DEV,
  integrations: [mdx()]
});