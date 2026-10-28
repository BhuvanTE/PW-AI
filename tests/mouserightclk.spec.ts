import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    await page.waitForLoadState('networkidle',{timeout:10000});

    await page.locator("//span[text()='right click me']").click({button:'right'});
    await page.waitForTimeout(2000); // Wait for 2 seconds to observe the effect of the right-click
    

})
