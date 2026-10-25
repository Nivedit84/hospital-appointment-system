const { test, expect } = require('@playwright/test');

test('application loads successfully', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/./);
});

/*
Import Playwright's test and assertion tools.
Create a test called "application loads successfully".
Give me control of a browser page.
Navigate that page to my application.
Wait for it to load.
Verify that the page has a title.
If that expectation is satisfied → PASS.
If it isn't → FAIL.
*/