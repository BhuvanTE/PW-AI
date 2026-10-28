import {test, expect} from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://qtpsudhakar-vibetestq-hrm.up.railway.app/');
  await page.getByRole('textbox', { name: 'Username' }).fill('Bhuvan');
  await page.getByRole('textbox', { name: 'Password' }).fill('Vibetestq@123#');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveTitle('OrangeHRM');
});