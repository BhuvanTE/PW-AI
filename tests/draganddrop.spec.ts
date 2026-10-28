import { test, expect } from '@playwright/test';
test('drag and drop test', async ({ page }) => {
    await page.goto('https://jqueryui.com/droppable/');
    await page.waitForLoadState('networkidle', { timeout: 10000 });
    let frmLocator = page.frameLocator('iframe.demo-frame');

    // let frm = page.frameLocator('#PhotoSwipe_Container iframe');
    await frmLocator.locator("#draggable").dragTo(frmLocator.locator("#droppable"));
    // let targetLocator = frmLocator.locator("//div[@class='ui-widget-content ui-state-default ui-droppable']");

    // await page.mouse.move(0, 0); // Move the mouse to the top-left corner of the page
    // await page.keyboard.press('Escape'); // Example of pressing the Escape key

})