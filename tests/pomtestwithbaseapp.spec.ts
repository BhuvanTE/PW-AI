import {test}  from "../fixtures/baseapp";


test('Login test',async({testData,app})=>{

    let url="https://qtpsudhakar-vibetestq-hrm.up.railway.app/";
    await app.basePage.navigateTo(url);
    await app.loginPage.enterUsername(testData.username);
    await app.loginPage.enterPassword(testData.password)
    await app.loginPage.clickLoginButton();
    await app.dashboardPage.verifyPIMDisplayed()
    await app.dashboardPage.clickOnPIMLink();
    await app.pimpage.clickOnAddEmployee();
    await app.addEmployeePage.enterUniqueFirstName();
    await app.addEmployeePage.enterLastName("Smith");
    await app.addEmployeePage.clickOnSaveBtn();

})