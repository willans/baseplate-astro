import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'server',
  server: {
    host: '0.0.0.0',
  },
});
