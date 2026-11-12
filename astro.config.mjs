// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { cpSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** Astro integration: keeps src/scripts/i18n.js in sync with public/scripts/i18n.js */
function i18nSync() {
  return {
    name: 'i18n-sync',
    hooks: {
      'astro:build:start': () => {
        cpSync(
          resolve(__dirname, 'src/scripts/i18n.js'),
          resolve(__dirname, 'public/scripts/i18n.js')
        );
      },
      'astro:server:start': () => {
        cpSync(
          resolve(__dirname, 'src/scripts/i18n.js'),
          resolve(__dirname, 'public/scripts/i18n.js')
        );
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://diamo.club',
  integrations: [
    sitemap(),
    i18nSync(),
  ],
});
