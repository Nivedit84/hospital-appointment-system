
const { test, expect } = require('@playwright/test');

test('patient can select a doctor and proceed to booking', async ({ page }) => {
  // 1. Login
  await page.goto('/frontend/login.html');

  await page.locator('#email').fill('testinge2e@gmail.com');
  await page.locator('#password').fill('abc12345');
  await page.locator('#login-btn').click();

  await expect(page).toHaveURL(/patient-dashboard\.html/);

  // 2. Open doctors page
  await page.goto('/frontend/doctors.html');

  const firstDoctor = page.locator('#doctorsList a').first();
  await expect(firstDoctor).toBeVisible();
  await firstDoctor.click();

  // 3. Select appointment date
  await page.locator('#appointment-date').fill('2026-10-12');

  // 4. Wait for available slots
  const slots = page.locator('#timeSlots button:not(:disabled)');
  await expect(slots.first()).toBeVisible({ timeout: 10000 });

  // 5. Select a slot
  await slots.first().click();

  // 6. Verify booking page
  await expect(page).toHaveURL(/booking\.html/);
  await expect(page.locator('#bookingForm')).toBeVisible();
});
