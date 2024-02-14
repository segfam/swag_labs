import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test('sanity', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  const loginPage = new LoginPage (page);
  await loginPage.loginToApp ()

});