import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración adaptada para despliegue
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5173
  }
})