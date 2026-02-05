import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gobinath.com',
  output: 'static',
  integrations: [
    sitemap({
      // Single sitemap file instead of index
      entryLimit: 50000,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
