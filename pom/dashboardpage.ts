import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage{
    private hdrDashboard:Locator;
    private lnkPIM:Locator;
    private lnkAdmin:Locator;

    constructor(page:Page){

        this.hdrDashboard=page.getByRole('heading', { name: 'Dashboard' }).describe("dashboard header");
        this.lnkPIM=page.getByRole('link', { name: 'PIM'}).describe("PIM link");
        this.lnkAdmin=page.getByRole('link',{name:'Admin'}).describe('Admin link');
    }

    public async verifyPIMDisplayed(){

        await expect(this.lnkPIM).toBeVisible();
    }

    public async clickOnPIMLink(){
        await this.lnkPIM.click();
    }

    public async clickOnAdmin(){
        await this.lnkAdmin.click();
    }

}