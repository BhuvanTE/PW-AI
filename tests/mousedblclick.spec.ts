import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
    await page.goto('https://api.jquery.com/dblclick/');
    await page.waitForLoadState('networkidle',{timeout:10000});
    let frmlocator = page.frameLocator('div.demo.code-demo iframe');
    let dblclickLocator = frmlocator.locator('div');

    await dblclickLocator.dblclick();
    await page.waitForTimeout(2000); // Wait for 2 seconds to observe the effect of the double-click

    await dblclickLocator.dblclick();

})
