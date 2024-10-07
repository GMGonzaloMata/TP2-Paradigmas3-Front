import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://tp2-paradigmas3-back.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Redirige las solicitudes de /api a tu backend
      }
    },
    port: 3000, // Puerto en el que corre tu frontend localmente
  },
  build: {
    outDir: 'dist', // Carpeta de salida para el build
  },
  resolve: {
    alias: {
      '@': '/src', // Alias para importaciones
    },
  }
})
