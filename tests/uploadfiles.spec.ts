import  { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://qtpsudhakar-vibetestq-hrm.up.railway.app/');
    await page.locator('input[name="username"]').fill('Bhuvanadmin');
    await page.locator('input[name="password"]').fill('Vibetestq@123#');
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL('https://qtpsudhakar-vibetestq-hrm.up.railway.app/web/index.php/dashboard/index');
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

    await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/img").click();

    let fileChooserPromise = page.waitForEvent('filechooser');
    
    await page.locator(".employee-image-action").click();
    const fileChooser = await fileChooserPromise;
    
//another way

// let [fileChooserPro]=Promise.all[]
    await fileChooser.setFiles('files/VQLogoTitleForLight.png');



    
})  
