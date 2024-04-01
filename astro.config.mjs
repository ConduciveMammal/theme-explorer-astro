import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://theme-explorer.merlyndesignworks.co.uk',
  output: 'server',
  compressHTML: !import.meta.env.DEV,
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  integrations: [mdx()]
});