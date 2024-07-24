import { test, expect, defineConfig } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://hotrave.herokuapp.com/');

});
test('Page Title', async ({ page }) => {
  await page.goto('https://hotrave.herokuapp.com/');
  const testPageElement = page.locator("//button[@type='submit'][contains(.,'Login')]");
  await expect(testPageElement).toBeVisible();
  await testPageElement.getByText('My Hot Rave');
})

