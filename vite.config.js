import fs from 'fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
    globals: true,
    environment: 'happy-dom',
    reporters: ['default', 'junit'],
    outputFile: './reports/junit.xml',
  },
})
