import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   host: "0.0.0.0", // Bind to all interfaces
    port: process.env.PORT || 3000,
})
