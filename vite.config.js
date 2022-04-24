/* eslint-disable react-hooks/rules-of-hooks */

import fs from 'fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const unitTestsExclude = ['coverage', 'node_modules', 'reports']

function useHttps() {
  let https = false

  try {
    https = {
      key: fs.readFileSync('../.cert/key.pem'),
      cert: fs.readFileSync('../.cert/cert.pem'),
    }
  } catch (e) {
    https = false
  }

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
      exclude: ['**.config.js', '**/__tests__'],
    },
    environment: 'happy-dom',
    exclude: [...unitTestsExclude, 'tests'],
    globals: true,
    reporters: ['default', 'junit'],
    outputFile: './reports/junit.xml',
  },
})
