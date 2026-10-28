
import { test, expect } from "@playwright/test"

//hooks are optional when  pre and post conditions are needed
//fixtures are pass the values to tests 

test.describe("multiple tests", () => {  //grouping all related tests

    test("my test", async ({ page }) => {
        expect(page.url()).toBe('https://qtpsudhakar-vibetestq-hrm.up.railway.app/web/index.php/auth/login');

    })

    test("my test1", async ({ page }) => {
        await page.locator('input[name="username"]').fill('Bhuvanadmin');
        await page.locator('input[name="password"]').fill('Vibetestq@123#');
        await page.locator('button[type="submit"]').click();
        console.log(await page.title());
        expect(await page.title()).toBe("OrangeHRM");

    })

    test.beforeEach(async ({ page },testInfo) => {
        await page.goto('https://qtpsudhakar-vibetestq-hrm.up.railway.app/');
        // await page.goto("")
        console.log("before each test"+ test.info().title)
        testInfo.
    })

    test.afterEach(async({})=>{

        console.log("after each test"+ test.info().title)
    
    })

     test.afterAll(async({})=>{

        console.log("after all"+ test.info().title)
    
    })

     test.beforeAll(async({})=>{

        console.log("before  all"+ test.info().title)
    
    })
})