import { defineConfig } from 'vite';

export default defineConfig({
  base: '/CupidoWeb/', // Asegúrate de que esto coincida con el nombre de tu repositorio en GitHub
  build: {
    outDir: 'docs', // Cambiar el directorio de salida a 'docs'
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});
