import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sdosborn.github.io/mo-portfolio-site',
  integrations: [tailwind()],
  output: 'static',
});
