const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',   // e2e tests are inside this directory

    use: {
        baseURL: 'http://127.0.0.1:5500', 
        headless: false,  // opens a browser window
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
    },

    reporter: 'html',
});