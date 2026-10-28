import {Page,Locator,expect} from '@playwright/test'

export class AdminPage{

    private hdrAdmin:Locator;
    private btnAdd:Locator;

    constructor(page:Page){

        this.hdrAdmin=page.getByRole('heading',{name:'Admin'}).describe('header label in Admin page')
        this.btnAdd=page.getByRole('button',{name:'Add'}).describe("Add button in Admin page")
    }

    public async verifyAdminHeader(){

        await expect(this.hdrAdmin).toBeVisible();
    }
    

    public async clickAddBtn(){

        await this.btnAdd.click();
    }

}