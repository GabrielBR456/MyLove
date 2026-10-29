// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://GabrielBR456.github.io', // Substitua pelo seu usuário do GitHub
  base: '/MyLove',       // Substitua exatamente pelo nome do repositório que você vai criar no GitHub
  vite: {
    plugins: [tailwindcss()]
  }
});