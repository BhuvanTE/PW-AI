import {Page,Locator} from '@playwright/test'

export class AddUserPage{
    private page:Page;
    private lstUserRole:Locator;
    private txtEmployeeName:Locator;
    private txtUserName:Locator;
    private lstStatus:Locator;
    private txtPassword:Locator;
    private txtConfirmPassword:Locator;


constructor(page:Page){
    this.page=page;
    this.lstUserRole=page.getByText('-- Select --').first().describe("user role listbox in add user page");
    this.txtEmployeeName=page.getByRole('textbox', { name: 'Type for hints...' }).describe("employee name text box ");
    this.txtUserName=page.getByRole('textbox').nth(2);
    this.lstStatus=page.getByText('-- Select --').nth(1)
    this.txtPassword=page.getByRole('textbox').nth(3)
    this.txtConfirmPassword=page.getByRole('textbox').nth(3)
}

public async enterUserRole(userRole:string,page:Page){
    await this.lstUserRole.click();
    await this.page.getByText(userRole).click();
}


public async selectEmployeeName(empName:string) {
    await this.txtEmployeeName.fill(empName);
    await this.page.getByText(empName).click();
}


}