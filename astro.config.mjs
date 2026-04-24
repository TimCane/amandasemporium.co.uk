import { defineConfig, envField } from 'astro/config';
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
  env: {
    schema: {
      UMAMI_HOST: envField.string({ context: 'client', access: 'public', optional: true, default: 'https://umami.tjc.fyi' }),
      UMAMI_WEBSITE_ID: envField.string({ context: 'client', access: 'public', optional: true }),
    },
  },
  vite: {
    optimizeDeps: {
      include: ['leaflet', 'leaflet.markercluster'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
});
