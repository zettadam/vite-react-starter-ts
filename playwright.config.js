// @ts-check
// const { devices } = require('@playwright/test')

const baseURL = 'http://127.0.0.1:3000'

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
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

module.exports = config
