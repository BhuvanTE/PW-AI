import { test, expect } from '@playwright/test';

test('hover action example', async ({ page }) => {

    await page.goto("https://api.jquery.com/hover/");

    //locator('#example-1-0 iframe').contentFrame().getByText('Milk')
    let frm = page.frameLocator("#entry-examples-1 iframe");
    await frm.getByText("Milk").hover();
    await expect(frm.getByText("White")).toBeVisible();
});