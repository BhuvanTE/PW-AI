const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, args: ['--start-maximized', '--remote-debugging-port=9333'] });
  const context = await browser.newContext({ viewport: null });
  const page = await context.newPage();

  await page.goto('https://qtpsudhakar-vibetestq-hrm.up.railway.app/');
  await page.fill('input[name="username"]', 'testadmin');
  await page.fill('input[name="password"]', 'Vibetestq@123#');
  await page.click('button[type="submit"]');
  await page.waitForURL('**/dashboard/**');

  console.log('Logged in. Browser will stay open — close it manually when done.');

  // Keep the process alive so the headed browser stays open for viewing.
  await new Promise(() => {});
})();
