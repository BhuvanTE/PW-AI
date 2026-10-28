import  { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://qtpsudhakar-vibetestq-hrm.up.railway.app/');
    await page.locator('input[name="username"]').fill('Bhuvanadmin');
    await page.locator('input[name="password"]').fill('Vibetestq@123#');
    await page.locator('button[type="submit"]').click();
    // await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    //add employee
    let firstName = 'user';
    let lastName = 'Test'+Date.now();
    await page.getByRole('link', { name: 'PIM'}).click();
    await page.getByRole('link', { name: 'Add Employee'}).click();

    // await page.locator('//i[normalize-space()="Add"]').click();
    // await page.locator('a[href="/web/index.php/pim/addEmployee"]').click();
    // await expect(page.getByText('Add Employee')).toBeVisible();
    await page.locator('input[name="firstName"]').fill(firstName);
    await page.locator('input[name="lastName"]').fill(lastName);
    await page.locator('button[type="submit"]').click();
    await expect(page.getByText('Successfully Saved')).toBeVisible();
    // await expect(page).toHaveURL(/.*\/web\/index.php\/pim\/viewEmployeeList.*/);

    let employeeName=firstName+ ' '+lastName;
    //navigate to Admin and create new user
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.waitForTimeout(2000);
    //await page.locator('input[name="username"]').fill('testuser'+Date.now());await page.getByRole('textbox', { name: 'Type for hints...' }).click();
    await page.getByText('-- Select --').first().click();
    await page.getByRole('option', { name: 'Admin' }).click();
    // await page.getByText('ESS', { exact: true }).nth(0).click();
    await page.getByPlaceholder('Type for hints...').fill(employeeName);
    await page.getByRole('option', { name: employeeName }).click();
    await page.getByText('-- Select --').click();
    await page.getByText('Enabled').click();
    let userName=firstName+lastName;
    console.log('userName is : '+userName);
    // await page.getByLabel('Username').click();
    // await expect(page.getByLabel('Username')).toBeVisible();
    await page.waitForLoadState('networkidle');
    await page.locator("//label[text()='Username']/../..//input").fill(userName);
    // await expect(page.getByLabel('Password')).toBeVisible();

    await page.locator("//label[text()='Password']/../..//input").fill('Vibetestq@123#');
    await page.locator("//label[text()='Confirm Password']/../..//input").fill('Vibetestq@123#');
    // await page.getByLabel('Password').fill('Vibetestq@123#');
    // await page.getByLabel('Confirm Password').fill('Vibetestq@123#');
    // await page.locator('input[name="password"]').fill('Test@1234');
    // await page.locator('input[name="confirmPassword"]').fill('Test@1234');
    // await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
    await page.locator('button[type="submit"]').click();
    await expect(page.getByText('Successfully Saved')).toBeVisible();

    //logout and login with new user
    await page.getByRole('img', { name: 'profile picture' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    // await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(userName);
    // await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password'}).fill('Vibetestq@123#');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard'})).toBeVisible();
})  
