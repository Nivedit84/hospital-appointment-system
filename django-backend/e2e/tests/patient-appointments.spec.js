
const { test, expect } = require('@playwright/test');

test('patient can view appointments page after login', async ({ page }) => {
  // Login
  await page.goto('/frontend/login.html');

  await page.locator('#email').fill('testinge2e@gmail.com');
  await page.locator('#password').fill('abc12345');
  await page.locator('#login-btn').click();

  await expect(page).toHaveURL(/patient-dashboard\.html/);

  // Open appointments
  await page.getByRole('link', { name: 'My Appointments' }).click();

  await expect(page).toHaveURL(/appointments\.html/);
  await expect(
    page.getByRole('heading', { name: /appointments/i }).first()
    ).toBeVisible();
});
