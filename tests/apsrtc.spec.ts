import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.apsrtconline.in/oprs-web/guest/home.do?h=1');
  await page.waitForLoadState('networkidle',{timeout:10000});

  let fromPlace="HYDERABAD";
  let toPlace="VIJAYAWADA";
  let date="2024-06-15";

  await page.locator('#fromPlaceName').fill(fromPlace);

  await page.locator(`//span[text()='${fromPlace}']`).click();
//   await page.getByText(fromPlace).click();
  await page.locator('#toPlaceName').fill(toPlace);
  await page.locator(`//span[text()='${toPlace}']`).click();

  await page.locator('#txtJourneyDate').click()
  await page.getByRole('link', { name: '6', exact: true }).first().click();

  await page.locator('#searchBtn').click();
  await page.waitForSelector('.srvceNO:visible', { timeout: 10000 }); // Wait for the bus numbers to be visible

  //find the number of buses available
  // const busNumbers = await page.locator('.srvceNO:visible').allTextContents();
  //   console.log(`Number of buses available: ${busNumbers.length}`);
  //   for (const busNumber of busNumbers) {
  //       let busNumberTrimmed = busNumber.trim();
  //       console.log(`Bus Number: ${busNumberTrimmed}`);
  //   }


    let serviceNo="3658"

    let busLocator = page.locator(`//div[@class='row']//div[@class='srvceNO' and normalize-space()='${serviceNo}']`);
    let selctButtonLocator = busLocator.locator('..').locator('..').locator('input[type="button"]');
    // await expect(busLocator).toBeVisible({ timeout: 10000 });/
    // await expect(selctButtonLocator).toBeVisible({ timeout: 10000 });
    await selctButtonLocator.scrollIntoViewIfNeeded();
    await selctButtonLocator.click();
    // await page.locator(`//div[@class='row']//div[@class='srvceNO' and normalize-space()='${serviceNo}']/../..//input[@type='button']`).scrollIntoViewIfNeeded();
    //
    // await page.locator(`//div[@class='row']//div[@class='srvceNO' and normalize-space()='${serviceNo}']/../..//input[@type='button']`).click();
    //select boarding point
    await page.waitForLoadState('networkidle',{timeout:10000});
    await page.locator('#ForwardBoardId').selectOption({ index: 1 });

    // let selectedToBaordingPoint = await page.locator('#ForwardBoardId').textContent();

const fromBoardingTextDetails = (await page.locator('#ForwardBoardId option:checked').textContent())?.trim();
    console.log(`Selected boarding point: ${fromBoardingTextDetails}`);
    let selecctedFromBoardingPoint = fromBoardingTextDetails?.trim().split('-')[0].trim();
    console.log(`Selected boarding point: ${selecctedFromBoardingPoint}`);
    let selectedFromBoardTime = fromBoardingTextDetails?.trim().split('-')[1].trim();
    console.log(`Selected boarding time: ${selectedFromBoardTime}`);
    //select dropping point
    await page.locator('#ForwardDroppingId').selectOption({ index: 1 });

    const toDroppingTextDetails  = (await page.locator('#ForwardDroppingId option:checked').textContent())?.trim();
    console.log(`Selected dropping point: ${toDroppingTextDetails}`);
    let selecctedToDroppingPoint   = toDroppingTextDetails?.trim().split('-')[0].trim();
    console.log(`Selected dropping point: ${selecctedToDroppingPoint}`);
    let selectedToDroppingTime   = toDroppingTextDetails?.trim().split('-')[1].trim();
    console.log(`Selected dropping time: ${selectedToDroppingTime}`);

    await page.getByRole('button', { name: 'Show layout' }).click();
    await page.waitForLoadState('networkidle',{timeout:10000});
    // get all available seats
    const availableSeats = page.locator("//ul[@class='bus-select-seat']/li[@class='availSeatClassS']");
    await availableSeats.first().waitFor(); // wait for the layout to load
    console.log(`Available seats: ${await availableSeats.count()}`);

    for (const seat of await availableSeats.all()) {
      const title = await seat.getAttribute('title'); // "Seat:13 | Fare:547.0 "
      const seatNo = title?.match(/Seat:(\d+)/)?.[1];
      console.log(`Seat: ${seatNo}`);
    }

    // select one seat
    await availableSeats.first().click();
    //enter passenger details
    await page.locator('#passengerNameForward0').fill('John Doe');
    await page.locator('#passengerAgeForward0').fill('30');
    await page.locator('#genderCodeIdForward0').selectOption({ label: 'MALE' });
    await page.locator('#mobileNo').fill('9972123456');
    await page.locator('#email').fill("test@gmail.com");
    await page.locator('#concessionIdsForward0').selectOption({ label: 'GENERAL PUBLIC' });
    await page.getByRole('button', { name: 'Continue' }).click();
    //vverify payment page is loaded
    await page.waitForLoadState('networkidle',{timeout:10000});
    await expect(page.getByText('Payment',{exact: true})).toBeVisible({ timeout: 10000 });


    //verify the boarding and dropping points and times
    const boardingPoint = await page.locator('//table/tbody/tr[5]/td[2]').textContent();
    console.log(`Boarding Point: ${boardingPoint}`);
    const droppingPoint = await page.locator('//table/tbody/tr[5]/td[4]').textContent();
    console.log(`Dropping Point: ${droppingPoint}`);
    await expect(boardingPoint?.trim()).toBe(selecctedFromBoardingPoint);
    await expect(droppingPoint?.trim()).toBe(selecctedToDroppingPoint);
    let departTime = await page.locator('//table/tbody/tr[7]/td[4]').textContent();
    let arriveTime = await page.locator('//table/tbody/tr[8]/td[4]').textContent();
    await expect(departTime?.trim()).toContain(selectedFromBoardTime);
    await expect(arriveTime?.trim()).toContain(selectedToDroppingTime);

  })
// setTimeout(()=>{debugger},10000);