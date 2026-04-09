import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap()],
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
