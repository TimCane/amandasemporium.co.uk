import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';
import remarkDateTokens from './src/lib/remark-date-tokens.ts';

export default defineConfig({
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap(), preact()],
  markdown: {
    remarkPlugins: [remarkDateTokens],
  },
  site: 'https://amandasemporium.co.uk',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
});
