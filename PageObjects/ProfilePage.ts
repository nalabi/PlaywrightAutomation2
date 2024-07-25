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
readonly emailInput: Locator
readonly emailConfirmationInput: Locator
readonly usernameInput: Locator
readonly passwordInput: Locator
readonly loginLnk: Locator
readonly usernameInputLgn: Locator
readonly passwordInputLgn: Locator
readonly nextBtnLgn: Locator
readonly validationLogin
    /**
     *
     */
    constructor(page: Page) {
        super(page);
        this.emailAddressText= page.locator("//label[@class='MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink'][contains(.,'Email address')]");
        this.letStartBtn = page.locator("//button[contains(@class,'MuiButtonBase-root MuiButton-root MuiButton-text Button__BaseButton-sc-o2ehon-1 bjVRlj MuiButton-disableElevation MuiButton-fullWidth')]");
        this.meOption = page.locator("//h5[@class='MuiTypography-root Typography__StyledTypography-sc-1cltmdr-0 fvBUuZ MuiTypography-body1'][contains(.,'Me')]");
        this.continueBtn = page.locator("//span[@class='MuiButton-label'][contains(.,'Continue')]");
        this.emailInput = page.locator("#//input[@name='email']")
        this.emailConfirmationInput = page.locator("//input[contains(@name,'emailConfirmation')]")
        this.usernameInput = page.locator("//input[contains(@name,'username')]")
        this.passwordInput = page.locator("//input[contains(@name,'password')]")
        this.loginLnk = page.locator("//span[@class='MuiButton-label'][contains(.,'Log In')]")
        this.nextBtnLgn = page.locator("//span[@class='MuiButton-label'][contains(.,'Next')]")
        this.validationLogin = page.locator("//h6[@class='MuiTypography-root Typography__StyledTypography-sc-1cltmdr-0 gUONlz Alertstyles__AlertTypography-sc-1uip7uf-1 sqxSx MuiTypography-body1'][contains(.,'The details you entered are incorrect.')]")
    }

    async LoginProfile(usernameLogin: string, passwordLogin: string){
        await this.usernameInput.fill(usernameLogin)
        await this.passwordInput.fill(passwordLogin)
        await this.nextBtnLgn.click()

    }

    async CreateProfile(email: string, password: string, confirmemail: string){
        await this.usernameInput.fill(email)
        await this.emailConfirmationInput.fill(confirmemail)
        await this.passwordInput.fill(password)
    }

    async clickLogin(){
        await this.loginLnk.click()
    }
}

