import{Page,Locator} from '@playwright/test'
import { BasePage } from './basepage';

export class AddEmployee extends BasePage{

    private txtFirstName:Locator;
    private txtLastName:Locator;
    private btnSave:Locator;
    private btnCancel:Locator;
    private formLoader:Locator;


    constructor(page:Page){
        super(page);
        this.txtFirstName=page.getByRole('textbox', { name: 'First Name' }).describe("Add employee first name")
        this.txtLastName=page.getByRole('textbox', { name: 'Last Name' }).describe("Add employee Last name");
        this.btnSave=page.getByRole('button', { name: 'Save' }).describe("Add employee Save btn");
        this.btnCancel=page.getByRole('button', { name: 'Cancel' }).describe("Add employee Cancel");
        this.formLoader=page.locator('.oxd-form-loader');
    }

    public async enterFirstName(firstName:string){

        await this.txtFirstName.fill(firstName);
    }


    public async enterLastName(lastName:string){
        await this.txtLastName.fill(lastName);
        // await this.navigateTo("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"); //using basepage navigateTo method to navigate to add employee page after entering last name

    }

    public async enterUniqueFirstName()
    {
        const firstName="User"+Date.now();
        console.log("unique first name"+firstName);
        await this.txtFirstName.fill(firstName);
    }

    public async clickOnSaveBtn(){

        // wait for the form loader overlay to clear before clicking Save
        await this.formLoader.waitFor({ state: 'hidden' });
        await this.btnSave.click();
    }
}