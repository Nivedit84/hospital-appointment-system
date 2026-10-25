const { test, expect } = require('@playwright/test');

test('patient dashboard loads correctly', async ({ page }) => {
    await page.goto('/frontend/patient-dashboard.html');

    await expect(
        page.getByRole('heading', { name: 'Healthcare Hospital' })
    ).toBeVisible();

    await expect(page.locator('#patientName')).toBeVisible();

    await expect(
        page.getByRole('link', { name: 'Find a Doctor' }).first()
    ).toBeVisible();

    await expect(
        page.getByRole('link', { name: 'My Appointments' })
    ).toBeVisible();
});