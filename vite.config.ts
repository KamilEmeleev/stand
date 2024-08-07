import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      providerImportSource: '@mdx-js/react',
    }),
  ],
  optimizeDeps: {
    // https://github.com/vitejs/vite/issues/3910
    exclude: ['@ozen-ui/fonts'],
    include: ['react/jsx-runtime'],
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      drafts: {
        customMedia: true,
      },
    },
  },
  build: {
    cssMinify: 'lightningcss',
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
});
