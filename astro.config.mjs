import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  adapter: vercelStatic(),
  integrations: [react()]
});
