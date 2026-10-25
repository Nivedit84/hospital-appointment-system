
const { test, expect } = require('@playwright/test');

test('appointments page displays its heading and list container', async ({ page }) => {
  await page.goto('/frontend/appointments.html');

  await expect(
    page.getByRole('heading', { name: /appointments/i }).first()
  ).toBeVisible();

  await expect(page.locator('#appointmentsList')).toBeAttached();
});
