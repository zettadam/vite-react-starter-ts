/// <reference types="vitest" />
/// <reference types="vite/client" />

import fs from 'fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const unitTestsExclude = [
  'build',
  'coverage',
  'dist',
  'node_modules',
  'public',
  'reports',
]

/* eslint-disable react-hooks/rules-of-hooks */
function useHttps() {
  let https: object = {}

  try {
    https = {
      key: fs.readFileSync('../.cert/key.pem'),
      cert: fs.readFileSync('../.cert/cert.pem'),
    }
  } catch (e) {}

  return https
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: useHttps(),
  },
  test: {
    coverage: {
      all: true,
      src: ['src'],
      exclude: ['**.config.js', 'vitest.setup.ts', '**.d.ts', '**/__tests__'],
    },
    environment: 'jsdom',
    exclude: [...unitTestsExclude, 'tests'],
    globals: true,
    reporters: ['default', 'junit'],
    outputFile: './reports/junit.xml',
    setupFiles: './vitest.setup.ts',
  },
})
