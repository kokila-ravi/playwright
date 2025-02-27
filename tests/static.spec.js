// @ts-check
import { test, expect } from '@playwright/test';

test('Login to OrangeHRM', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  
  await expect(page).toHaveTitle(/OrangeHRM/i);

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.screenshot({ path: 'screenshots/loginS.png', fullPage: true });
  
  await page.getByRole('button', { name: 'Login' }).click();
 
  await expect(page).toHaveURL(/dashboard/);
  await page.waitForTimeout(3000);
  
  const navbar = ['Admin', 'PIM', 'Leave', 'Time', 'Recruitment', 'My Info', 'Performance', 'Dashboard', 'Directory', 'Maintenance', 'Claim', 'Buzz'];
  for (const i of navbar) {
    if (i === 'Maintenance') {
      continue;
    }
    const itemLocator = page.locator(`//a//span[text()='${i}']`);
    await itemLocator.click();
    await itemLocator.waitFor({ state: 'visible', timeout: 30000 });
    await page.screenshot({ path: `screenshots/static_screenshots/${i}.png`, fullPage: true });
  }
});

