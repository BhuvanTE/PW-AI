import { test, expect } from '@playwright/test';

test('browser context page example', async ({ page }) => {

    await page.goto('https://www.apsrtconline.in/oprs-web/guest/home.do?h=1');
    await page.waitForLoadState('networkidle', { timeout: 10000 });

    let fromPlace = "HYDERABAD";
    let toPlace = "VIJAYAWADA";
    let date = "2024-06-15";

    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        await page.waitForTimeout(2000);
        await dialog.accept();
    });
    await page.locator('#searchBtn').click();

    await page.locator('#fromPlaceName').fill(fromPlace);

    await page.locator(`//span[text()='${fromPlace}']`).click();

    // await page.locator('#toPlaceName').fill(toPlace);
    // await page.locator(`//span[text()='${toPlace}']`).click();

    await page.locator('#txtJourneyDate').click()
    await page.getByRole('link', { name: '12', exact: true }).first().click();

    await page.locator('#searchBtn').click();



})