// @ts-check
import { test, expect } from '@playwright/test';
test('check box', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
  
    
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);
  
    
    const checkbox = page.locator("//input[@class='toggle-all']");
    await checkbox.waitFor({ state: 'visible', timeout: 40000 }); 
    await page.screenshot({ path: 'screenshots/checkBox_screenshots/checkBox.png', fullPage: true });
    
    await checkbox.scrollIntoViewIfNeeded();

    await checkbox.check();

    await expect(checkbox).toBeChecked();
  });
  