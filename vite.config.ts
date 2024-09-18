import mdx from '@mdx-js/rollup';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      mdx({
        providerImportSource: '@mdx-js/react',
      }),
      federation({
        name: 'app',
        remotes: {
          remoteApp:
            mode === 'development'
              ? 'http://localhost:5001/assets/remoteEntry.js'
              : 'https://verdant-jelly-22f11b.netlify.app/assets/remoteEntry.js',
        },
        shared: {
          react: {},
          'react-dom': {},
          wouter: {
            version: '3.3.5',
          },
        },
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
      sourcemap: false,
      target: 'esnext',
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './setupTests.ts',
    },
  };
});
