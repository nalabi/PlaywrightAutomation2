import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProfilePage extends BasePage{
    
readonly emailAddressText: Locator
readonly confirmEmailAddressText: Locator
readonly UsernameText: Locator
readonly PasswordText: Locator
    /**
     *
     */
    constructor(page: Page) {
        super(page);
        this.emailAddressText= page.locator("//label[@class='MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink'][contains(.,'Email address')]");

    }
}