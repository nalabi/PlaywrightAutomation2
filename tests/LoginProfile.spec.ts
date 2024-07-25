import test, { expect } from "@playwright/test";
import { ProfilePage } from "../PageObjects/ProfilePage";

test.describe.parallel('Pofile Creation', () => {
    let profilePage: ProfilePage

    test.beforeEach(async ({ page }) => {
        profilePage = new ProfilePage(page)
        await page.goto('https://my.account.bestinvest.co.uk/onboarding/create-profile')
        await profilePage.clickLogin()


    })

    test('Login Link- Positive', async ({ page }) => {
        await profilePage.clickLogin()
    })

    test('Login - negative sceanario', async ({ page }) => {
     //   await profilePage.clickLogin()
        await profilePage.LoginProfile('test2', 'passwordee')
        await profilePage.nextBtnLgn.click()
        await expect(profilePage.validationLogin).toHaveText('The details you entered are incorrect.')
    }
    )
}); 