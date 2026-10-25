
const { test, expect } = require('@playwright/test');

test('doctor can login and reach doctor dashboard', async ({ page }) => {
  await page.goto('/frontend/login.html');

  await page.locator('#email').fill('doctor2@gmail.com');
  await page.locator('#password').fill('Doctor@123');
  await page.locator('#login-btn').click();

  await expect(page).toHaveURL('/frontend/doctor-dashboard.html');
});
