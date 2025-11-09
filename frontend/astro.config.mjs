import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4321,
    host: true // Permite acceso desde otros dispositivos en tu red
  },
  output: 'server', // Necesario para SSR (renderizado del lado del servidor)
});