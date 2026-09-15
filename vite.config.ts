import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // ⚠️ EDIT_ME: Change to match your GitHub repo name
  // Remove or set to '/' if using a custom domain
  base: '/MyPortafolio/',
})
