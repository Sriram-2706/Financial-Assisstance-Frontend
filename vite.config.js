import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/Financial-Assisstance-Frontend/', // 👈 GitHub Pages base path
  plugins: [
    tailwindcss(),
    react()
  ]
});
