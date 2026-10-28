import { test as base } from "@playwright/test";

// import { LoginPage } from "../pom/loginpage";
// import { PIMPage } from "../pom/pimpage";
// import { DashboardPage } from "../pom/dashboardpage";
// import { AddEmployee } from "../pom/addemployeepage";
// import { AdminPage } from "../pom/adminpage";
// import { AddUserPage } from "../pom/adduserpage";
// import { BasePage } from "../pom/basepage";

//instead of importing each page , can write one index ts file there can import all pages from there we can import the pages

import { BasePage, LoginPage, DashboardPage, AddEmployee, AddUserPage, AdminPage, PIMPage } from "../pom";

//loginPage is object 
//testdata is variable
//tData is type

let testData = { username: "Bhuvanadmin", password: "Vibetestq@123#" };
type tData = {
    username: string;
    password: string;
};

type App = {
    loginPage: LoginPage,
    basePage: BasePage,
    dashboardPage: DashboardPage,
    adminPage: AdminPage,
    pimpage: PIMPage,
    addEmployeePage: AddEmployee,

}

// let test=base.extend<{testData:tData,loginPage:LoginPage,basePage:BasePage,dashboardPage:DashboardPage,adminPage:AdminPage,pimpage:PIMPage,addEmployeePage:AddEmployee,

let test = base.extend<{ testData: tData, app: App }>({


    app: async ({ page }, use) => {
        await use({
            loginPage: new LoginPage(page),
            basePage: new BasePage(page),
            dashboardPage: new DashboardPage(page),
            adminPage: new AdminPage(page),
            pimpage: new PIMPage(page),
            addEmployeePage: new AddEmployee(page)

        })
    },


    testData: async ({ }, use) => {
        await use(testData);
    },


});

export { test };

