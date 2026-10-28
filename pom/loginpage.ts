import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    
    private txtUserName: Locator;
    private txtPassword: Locator;
    private btnLogin: Locator;


    constructor(page: Page) {
        this.txtUserName = page.getByRole('textbox', { name: 'Username' }).describe("textbox username");
        this.txtPassword = page.getByRole('textbox', { name: 'Password' }).describe("textbox password");
        this.btnLogin = page.getByRole('button', { name: 'Login' }).describe("login button")
    }



    public async enterUsername(userName:string){
         await this.txtUserName.fill(userName);
         console.log(userName+" entered on "+ this.txtUserName.description);


    }


    public async enterPassword(pwd:string){
        await this.txtPassword.fill(pwd);
        console.log(pwd+" entered on "+ this.txtPassword.description);
    }

    public async clickLoginButton(){
       await this.btnLogin.click();
       console.log("login buton clicked")

}
}