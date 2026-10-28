const { chromium } = require('playwright');

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await chromium.connectOverCDP('http://localhost:9333');
  const context = browser.contexts()[0];
  const page = context.pages()[0];

  const modules = [
    { name: 'Admin', url: '/web/index.php/admin/viewSystemUsers' },
    { name: 'PIM - Employee List', url: '/web/index.php/pim/viewEmployeeList' },
    { name: 'Leave', url: '/web/index.php/leave/viewLeaveModule' },
    { name: 'Time', url: '/web/index.php/time/viewTimesheet' },
    { name: 'Recruitment', url: '/web/index.php/recruitment/viewCandidates' },
    { name: 'My Info', url: '/web/index.php/pim/viewMyDetails' },
    { name: 'Performance', url: '/web/index.php/performance/searchEvaluatePerformanceReview' },
    { name: 'Directory', url: '/web/index.php/directory/viewDirectory' },
    { name: 'Maintenance', url: '/web/index.php/maintenance/purchaseModal' },
    { name: 'Claim', url: '/web/index.php/claim/viewAssignClaim' },
    { name: 'Buzz', url: '/web/index.php/buzz/viewBuzz' },
    { name: 'Dashboard', url: '/web/index.php/dashboard/index' },
  ];

  const base = 'https://qtpsudhakar-vibetestq-hrm.up.railway.app';

  for (const m of modules) {
    console.log(`\n=== Visiting ${m.name} ===`);
    try {
      await page.goto(base + m.url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await wait(1500);
      const title = await page.title();
      const heading = await page.locator('h6, h5, .oxd-topbar-header-breadcrumb-module').first().textContent().catch(() => 'n/a');
      console.log(`Title: ${title} | Heading: ${(heading || '').trim()}`);
    } catch (err) {
      console.log(`Error visiting ${m.name}: ${err.message}`);
    }
    await wait(800);
  }

  console.log('\nExploration complete. Returning to Dashboard.');
  await page.goto(base + '/web/index.php/dashboard/index');
})();
