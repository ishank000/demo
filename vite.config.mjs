import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

const resolvePath = (str) => path.resolve(__dirname, str);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const API_URL = `${env.VITE_APP_BASE_NAME}`;
  const PORT = 3000;

  return {
    server: {
      open: true,
      port: PORT,
      host: true,
    },
    preview: {
      open: true,
      host: true,
    },
    define: {
      global: 'window',
    },
    resolve: {
      alias: [
        { find: 'components', replacement: path.resolve(__dirname, 'src/components') },
        { find: 'views', replacement: path.resolve(__dirname, 'src/views') },
        // Add more aliases below if needed:
        // { find: 'hooks', replacement: path.resolve(__dirname, 'src/hooks') },
        // { find: 'utils', replacement: path.resolve(__dirname, 'src/utils') },
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
        },
        less: {
          charset: false,
        },
      },
      charset: false,
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              },
            },
          },
        ],
      },
    },
    build: {
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        input: {
          main: resolvePath('index.html'),
          legacy: resolvePath('index.html'),
        },
      },
    },
    base: API_URL,
    plugins: [react(), tsconfigPaths()],
  };
});
