import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomeRegLoginPage extends BasePage {
    readonly HeaderTitle: Locator
    constructor(page: Page) {
        super(page);
        this.HeaderTitle = page.locator("//a[@routerlink='/'][contains(.,'My Hot Rave')]")
    }
}