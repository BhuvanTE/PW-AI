import {test}  from "../fixtures/base";


test('Login test',async({testData,loginPage,basePage,pimpage,dashboardPage,adduserPage,addEmployeePage})=>{

    let url="https://qtpsudhakar-vibetestq-hrm.up.railway.app/";
    basePage.navigateTo(url);
    await loginPage.enterUsername(testData.username);
    await loginPage.enterPassword(testData.password)
    await loginPage.clickLoginButton();
    await dashboardPage.verifyPIMDisplayed()
    await dashboardPage.clickOnPIMLink();
    await pimpage.clickOnAddEmployee();
    await addEmployeePage.enterUniqueFirstName();
    await addEmployeePage.enterLastName("Smith");
    await addEmployeePage.clickOnSaveBtn();

})