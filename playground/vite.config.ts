import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import solidDevtools from 'solid-devtools/vite';
import path from 'node:path';

export default defineConfig({
  base: './',
  plugins: [
    solidDevtools({
      autoname: true,
      locator: {
        targetIDE: 'vscode',
        componentLocation: true,
        jsxLocation: true,
      },
    }),
    solidPlugin({
      include: ['src/**/*', path.resolve(__dirname, '../lib/**/*')],
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
  ],
  build: {
    target: 'esnext',
    outDir: path.resolve(__dirname, '../docs'),
  },
  server: {
    port: 4576,
    strictPort: true,
  },
});
