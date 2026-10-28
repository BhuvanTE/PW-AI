import { Page, Locator, expect } from '@playwright/test';

export class PIMPage{
    private lnkAddEmployee:Locator
    private page:Page;

    constructor(page:Page){
        this.page=page;
        this.lnkAddEmployee=page.getByRole('link', { name: 'Add Employee' }).describe("Add employee link in PIM pae")
    }


    public async clickOnAddEmployee(){

        await this.lnkAddEmployee.click();
        await this.page.waitForLoadState("load");

    }







}