# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registration.spec.js >> patient can register succesfully
- Location: tests\registration.spec.js:3:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "http://127.0.0.1:5500/frontend/login.html"
Received: "http://127.0.0.1:5500/frontend/sign-up.html"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × locator resolved to <html lang="en">…</html>
       - unexpected value "http://127.0.0.1:5500/frontend/sign-up.html"

```

```yaml
- banner:
  - heading "Healthcare Hospital" [level=1]
- main:
  - heading "Healthcare Hospital" [level=2]
  - paragraph: Quality healthcare, accessible when you need it.
  - heading "Create Account" [level=2]
  - text: "Full Name:"
  - textbox "Full Name:": Nivedit Soni
  - paragraph: Email is already registered.
  - text: "Email:"
  - textbox "Email:": testing2027@gmail.com
  - paragraph
  - text: "Phone:"
  - textbox "Phone:": "9828780066"
  - text: "Password:"
  - textbox "Password:": abc12345
  - text: "Confirm Password:"
  - textbox "Confirm Password:": abc12345
  - text: "Date of Birth:"
  - textbox "Date of Birth:": 2001-05-15
  - paragraph
  - paragraph: "Gender:"
  - radio "Male" [checked]
  - text: Male
  - radio "Female"
  - text: Female
  - radio "Other"
  - text: Other
  - button "Create Account"
  - paragraph:
    - text: Already have an account?
    - link "Login":
      - /url: login.html
- contentinfo:
  - paragraph: © 2026 Healthcare Hospital. All rights reserved.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('patient can register succesfully', async ({ page }) => {
  4  |     await page.goto('/frontend/sign-up.html');
  5  |     await page.locator('#full-name').fill("Nivedit Soni");
  6  |     await page.locator('#email').fill("testing2027@gmail.com");
  7  |     await page.locator('#phone').fill("9828780066");
  8  |     await page.locator('#password').fill('abc12345');
  9  |     await page.locator('#confirm-password').fill('abc12345');
  10 |     await page.locator('#dob').fill('2001-05-15');
  11 |     await page.locator('#male').check();
  12 |     await page.locator('#register-button').click();
  13 | 
> 14 |     await expect(page).toHaveURL('/frontend/login.html');
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  15 | });
```