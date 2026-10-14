// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Staging deploys set SITE_URL so canonicals/sitemap point at the preview origin.
export default defineConfig({
  site: process.env.SITE_URL || 'https://fight.lviv.ua',
  integrations: [sitemap()],
  // Old site URLs → sections of the single landing page.
  // Static redirects are meta-refresh pages; configure real 301s on the host too.
  redirects: {
    '/kids': '/#about',
    '/adult': '/#about',
    '/girls': '/#about',
    '/rozklad': '/#training',
    '/pro-biy': '/#about',
    '/zmahannia': '/#contacts',
  },
  build: { inlineStylesheets: 'auto' },
});
