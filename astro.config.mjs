// @ts-check
import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [
    partytown({
      config: {
        lib: '/partytown/',
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
