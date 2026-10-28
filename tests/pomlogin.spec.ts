import test, { expect } from "playwright/test"
import { LoginPage } from "../pom/loginpage";
import { PIMPage } from "../pom/pimpage";
import { DashboardPage } from "../pom/dashboardpage";
import { AddEmployee } from "../pom/addemployeepage";
import { AdminPage } from "../pom/adminpage";

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');
  await page.waitForLoadState('networkidle');

  const loginPage=new LoginPage(page);
  await loginPage.enterUsername("Bhuvans");
  await loginPage.enterPassword("Test@123");
  await loginPage.clickLoginButton();

  //click on PIM link
    const dashBoardPage=new DashboardPage(page)
    await dashBoardPage.clickOnPIMLink();
    // dashBoardPage.verifyPIMDisplayed();

  const pimPage=new PIMPage(page);

  await pimPage.clickOnAddEmployee();
  
  const addEmployeePage=new AddEmployee(page);

  await addEmployeePage.enterUniqueFirstName();
  await addEmployeePage.enterLastName("smith");
  await addEmployeePage.clickOnSaveBtn();

  // await expect(page.getByText("Success")).toBeVisible();

  //click on Admin link

  await dashBoardPage.clickOnAdmin();
  const adminPage=new AdminPage(page);

  await adminPage.clickAddBtn();
// getByRole('link', { name: 'Dashboard' })




})