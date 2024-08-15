import { defineConfig } from 'vite';

export default defineConfig({
  base: '/CupidoWeb/', // Reemplaza '<nombre-del-repositorio>' con el nombre de tu repositorio en GitHub
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});
