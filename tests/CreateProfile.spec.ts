import test, { expect } from "@playwright/test";
import { ProfilePage } from "../PageObjects/ProfilePage";

test.describe.parallel('Pofile Creation', () => {
    let profilePage: ProfilePage

    test.beforeEach(async ({ page }) => {
        profilePage = new ProfilePage(page)
        await page.goto('https://my.account.bestinvest.co.uk/onboarding/create-profile')
        await profilePage.letStartBtn.click()
        await profilePage.meOption.click()
        await profilePage.continueBtn.click()

    })
    test('Lets Start button', async ({ page }) => {
        await expect
    })
    test('Email Text', async ({ page }) => {
        await expect(profilePage.emailAddressText).toBeVisible();
    });


}); 