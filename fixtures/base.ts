import { test as base} from "@playwright/test";

// import { LoginPage } from "../pom/loginpage";
// import { PIMPage } from "../pom/pimpage";
// import { DashboardPage } from "../pom/dashboardpage";
// import { AddEmployee } from "../pom/addemployeepage";
// import { AdminPage } from "../pom/adminpage";
// import { AddUserPage } from "../pom/adduserpage";
// import { BasePage } from "../pom/basepage";

//instead of importing each page , can write one index ts file there can import all pages from there we can import the pages

import { BasePage,LoginPage,DashboardPage,AddEmployee,AddUserPage,AdminPage, PIMPage } from "../pom";

//loginPage is object 
//testdata is variable
//tData is type

let testData={username:"Bhuvanadmin", password:"Vibetestq@123#"};
type tData={
    username:string;
    password:string;
};

let test=base.extend<{testData:tData,loginPage:LoginPage,basePage:BasePage,dashboardPage:DashboardPage,adminPage:AdminPage,pimpage:PIMPage,addEmployeePage:AddEmployee,
adduserPage:AddUserPage}>({
    loginPage:async({page},use)=>{
        await use(new LoginPage(page));
    },
     basePage: async ({ page }, use) => {
        await use(new BasePage(page));
    },
    addEmployeePage: async ({ page }, use) => {
        await use(new AddEmployee(page));
    },
    adminPage: async ({ page }, use) => {
        await use(new AdminPage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },
    pimpage: async ({ page }, use) => {
        await use(new PIMPage(page));
    },
    testData: async ({}, use) => {
        await use(testData);
    },
    adduserPage:async({page},use)=>{
        await use(new AddUserPage(page));
    }

});

export{test};

