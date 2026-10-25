
const { test, expect } = require('@playwright/test');

test('patient can logout', async ({ page }) => {
  await page.goto('/frontend/login.html');

  await page.locator('#email').fill('testinge2e@gmail.com');
  await page.locator('#password').fill('abc12345');
  await page.locator('#login-btn').click();

  await expect(page).toHaveURL(/patient-dashboard\.html/);

  await page.getByRole('link', { name: 'Logout' }).click();

  await expect(page).toHaveURL(/login\.html/);
});
