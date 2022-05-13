import { PlaywrightTestConfig } from '@playwright/test'

// const { devices } = require('@playwright/test')

const baseURL: string = 'http://127.0.0.1:3000'

const config: PlaywrightTestConfig = {
  use: {
    baseURL,
    headless: true,
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        browserName: 'chromium',
        viewport: { width: 1920, height: 1080 }
      },
    },
    {
      name: 'Desktop Firefox',
      use: {
        browserName: 'firefox',
        viewport: { width: 1920, height: 1080 }
      },
    },
    {
      name: 'Desktop Safari',
      use: {
        browserName: 'webkit',
        viewport: { width: 1920, height: 1080 }
      },
    },
    // {
    //   name: 'Mobile Chrome',
    //   use: devices['Pixel 5'],
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: devices['iPhone 12'],
    // }
  ],
  testDir: './tests',
}

export default config
