import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import path, { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  define: {
    __DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
  server: {
    port: 3000,
    open: false,
    allowedHosts: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './projects/resume-stack/src'),
      '@landing': path.resolve(__dirname, './src'),
      '@resume': path.resolve(__dirname, './projects/resume-stack/src'),
      '@poker': path.resolve(__dirname, './projects/poker/src'),
      '#tiptap': path.resolve(__dirname, './projects/resume-stack/src/components/tiptap'),
      '#ui': path.resolve(__dirname, './projects/resume-stack/src/components/ui'),
      '#widgets': path.resolve(__dirname, './projects/resume-stack/src/components/widgets'),
    },
    dedupe: ['react', 'react-dom'],
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    chunkSizeWarningLimit: 1600,
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        resume: resolve(__dirname, 'projects/resume-stack/index.html'),
        poker: resolve(__dirname, 'projects/poker/index.html'),
      },
    },
  },
})
