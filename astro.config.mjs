import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://monikakakar.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  prefetch: { prefetchAll: true },
  integrations: [sitemap({ filter: (p) => !p.includes('/thank-you/') })],
  vite: { plugins: [tailwindcss()] },
});
