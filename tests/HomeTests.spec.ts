import { test, expect, defineConfig } from '@playwright/test';
import { HomeRegLoginPage } from '../PageObjects/HomePage';



test.describe.parallel('Home Page feautures Test', () =>{
  let homeRegLoginPage: HomeRegLoginPage

  test.beforeEach(async({page})=>{
  homeRegLoginPage = new HomeRegLoginPage(page)
  await page.goto('https://hotrave.herokuapp.com/')
})

test('Page Title', async ({ page }) => {

  const testPageElement = page.locator("//button[@type='submit'][contains(.,'Login')]");
  await expect(testPageElement).toBeVisible();
 
})
})
