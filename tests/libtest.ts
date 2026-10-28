import { chromium } from "playwright";

//IIFE - immeditely invoked funtion exprerssion , not providing function name
(async function(){

    let browser= await chromium.launch({headless:false});
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto('https://qtpsudhakar-vibetestq-hrm.up.railway.app/');   
    await browser.close();


})()