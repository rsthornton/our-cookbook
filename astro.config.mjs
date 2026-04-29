// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://rsthornton.github.io',
  base: '/our-cookbook',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx()]
});
