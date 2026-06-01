// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages 用户主站：根域托管，base 保持 '/'
  site: 'https://winnieai123.github.io',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});