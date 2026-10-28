import {test, expect} from '@playwright/test';

// Browser
// context
// page

// A Browser can have multiple contexts
// A context can have multiple pages
// A page can have multiple frames

// Context is like profile shares seperate memory
// With in context all pages share same memory

test('browser context page example', async ({ page }) => {

    await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app/web/index.php/auth/login");

    // let newPagePromise = page.context().waitForEvent("page");
    // await page.getByText('Visit VibeTestQ').click();

    // let newPage1 = await newPagePromise;
    // newPage1.getByRole("link", { name: "Request a Trial" }).first().click();

    let [newPage1]=await Promise.all([
        page.context().waitForEvent("page"),
        page.getByText('Visit VibeTestQ').click()
    ])
    
    let [newPage2] = await Promise.all([
        page.context().waitForEvent("page"),
        newPage1.getByRole("link", { name: "Request a Trial" }).first().click()
    ]);
    await newPage2.waitForLoadState('networkidle',{timeout:10000});
    await newPage2.getByRole("textbox", { name:"Full name" }).fill("Bhuvan");
})