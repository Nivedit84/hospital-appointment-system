const { test, expect } = require('@playwright/test');

test('patient can register succesfully', async ({ page }) => {
    await page.goto('/frontend/sign-up.html');
    await page.locator('#full-name').fill("Nivedit Soni");
    await page.locator('#email').fill("testing2027@gmail.com");
    await page.locator('#phone').fill("9828780066");
    await page.locator('#password').fill('abc12345');
    await page.locator('#confirm-password').fill('abc12345');
    await page.locator('#dob').fill('2001-05-15');
    await page.locator('#male').check();
    await page.locator('#register-button').click();

    await expect(page).toHaveURL('/frontend/login.html');
});