const { test, expect } = require('@playwright/test');

test('patient can view doctors', async ({ page }) => {
    await page.goto('/frontend/patient-dashboard.html');

    await page.getByRole('link', { name: 'Find a Doctor' }).first().click();

    await expect(page).toHaveURL(/doctors\.html/);
    // Verify the doctors section is visible
    await expect(page.locator('#doctorsList')).toBeVisible();

    // Verify at least one doctor card is rendered
    await expect(page.locator('#doctorsList').locator('> *').first()).toBeVisible();
});
