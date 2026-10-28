import { test } from "@playwright/test";

test("downlaod file", async ({ page }) => {
    await page.goto('https://qtpsudhakar-vibetestq-hrm.up.railway.app/');
    await page.locator('input[name="username"]').fill('Bhuvanadmin');
    await page.locator('input[name="password"]').fill('Vibetestq@123#');
    await page.locator('button[type="submit"]').click();
    await page.getByRole('link', { name: 'My Info' }).click();

// let downloadFile=Promise.all[
//     await page.waitForEvent()

// ]

 let downloadPromise = page.waitForEvent('download');
    const downloadXpath="//*[@id='app']//following::i[contains(@class,'oxd-icon bi-download')]";
    await page.locator(downloadXpath).click();
    const downloadChooser = await downloadPromise;
    await downloadChooser.saveAs("tests/files/download1.png")
    
//anothr way 
const [download1]=await Promise.all([
    page.waitForEvent('download'),
    // const downloadXpath1="//*[@id='app']//following::i[contains(@class,'oxd-icon bi-download')]",
     page.locator("//*[@id='app']//following::i[contains(@class,'oxd-icon bi-download')]").click()

]);

await download1.saveAs("tests/files/download2.png")
// download1.

})