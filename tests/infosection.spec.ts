import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    // await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    //click on My Info
    await page.getByRole('link', { name: 'My Info' }).click();
    await page.locator("//label[text()='Nationality']/../..//i").click();
    //update nationality,DOB and marital status
    await page.getByRole('option', { name: 'Indian' }).click();
    await page.locator("//label[text()='Marital Status']/../..//i").click();
    await page.getByRole('option', { name: 'Married' }).click();
    // await page.getByLabel('Male').first().check();
    await page.locator("//label[text()='Male']/span").click();
    // await page.locator("//label[text()='Female']/span").click();
    // await page.getByRole('button', { name: 'Save' }).first().click();  //first button
    //click on date of birth and select date
    await page.locator("//label[text()='Date of Birth']/../..//i").click();
    //click on month and select month
    await page.locator("div.oxd-calendar-selector-month-selected").click();
    // await page.getByRole('textbox', { name: 'mm-dd-yyyy' }).nth(1).cli
    // await page.getByRole('textbox', { name: 'yyyy-mm-dd' }).nth(1).click();
    // await page.locator("//p[text()='October']").first().click();
    await page.getByText('January',{exact:true}).first().click();
    // await page.getByRole('menu', { name: 'January' }).click();
    //click on year and select year
    await page.locator("li.oxd-calendar-selector-year").click();
    // await page.locator("//p[text()='1990']").first().click();
    // await page.getByRole('menu', { name: '1990' }).click();
    await page.getByText('2000',{exact:true}).first().click();
    await page.getByText('30', { exact: true }).click();
    await page.getByRole('button', { name: 'Save' }).first().click();
    await expect(page.getByText('Successfully Updated')).toBeVisible();





})