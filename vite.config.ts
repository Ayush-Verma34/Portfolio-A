import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://ayush-2003.netlify.app',
    })
  ],
  server: {
    port: 3000,
    open: true,
  },
})
