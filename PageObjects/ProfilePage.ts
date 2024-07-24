import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProfilePage extends BasePage{
readonly letStartBtn: Locator
readonly meOption: Locator
readonly continueBtn: Locator
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
        this.letStartBtn = page.locator("//button[contains(@class,'MuiButtonBase-root MuiButton-root MuiButton-text Button__BaseButton-sc-o2ehon-1 bjVRlj MuiButton-disableElevation MuiButton-fullWidth')]");
        this.meOption = page.locator("//h5[@class='MuiTypography-root Typography__StyledTypography-sc-1cltmdr-0 fvBUuZ MuiTypography-body1'][contains(.,'Me')]");
        this.continueBtn = page.locator("//span[@class='MuiButton-label'][contains(.,'Continue')]");
    }
}