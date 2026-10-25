
const { test, expect } = require('@playwright/test');

test('invalid login displays an error', async ({ page }) => {
  await page.goto('/frontend/login.html');

  await page.locator('#email').fill('wrong@example.com');
  await page.locator('#password').fill('wrongpassword');
  await page.locator('#login-btn').click();

  await expect(page.locator('#loginError')).toContainText(
    'Invalid email or username'
  );
  await expect(page).toHaveURL(/login\.html/);
});
