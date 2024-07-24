import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ServicesPage extends BasePage{
    readonly StockShares: Locator
    constructor(page: Page) {
        super(page);
        this.StockShares = page.locator("")
    }
}