import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Share': {
          import: './src/Share',
          dontAppendStylesToHead: true,
        },
      },
      shared: ['react', 'react-dom', 'wouter'],
    }),
  ],
  optimizeDeps: {
    exclude: ['@ozen-ui/fonts'],
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
