import { test, expect } from '@playwright/test';
import { ConfigLoader } from '../core/configLoader';
import { HomePage } from '../pages/homePage';

test.describe('Universal SDET Framework Smoke Tests', () => {
  const config = ConfigLoader.loadConfig('example');

  test('Basic navigation and element verification', async ({ page }) => {
    const homePage = new HomePage(page, config);

    await homePage.navigate();

    const titleLocator = homePage.getLocator('home', 'title');
    await expect(titleLocator).toBeVisible();
    await expect(titleLocator).toHaveText('Example Domain');

    const moreInfoLocator = homePage.getLocator('home', 'moreInfoLink');
    await expect(moreInfoLocator).toBeVisible();
    await expect(moreInfoLocator).toHaveAttribute('href', 'https://iana.org/domains/example');
  });
});
