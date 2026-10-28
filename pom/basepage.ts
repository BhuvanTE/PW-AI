import {Locator, Page, expect} from "@playwright/test"

export class BasePage {
    protected page: Page; // page extends to subclasses like LoginPage

    constructor(page: Page) {
        this.page = page;
    }

    public getPage() {
        return this.page;
    }

    public async navigateTo(url: string) {
        await this.page.goto(url);
        await this.page.waitForLoadState("load");
        console.log("Navigated to URL: " + url);
    }
}