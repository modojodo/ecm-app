import { test, expect } from '@playwright/test';

test('page has correct title a', async ({ page }) => {
  await page.goto('http://localhost:3001/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("ECM Media App");
});

test('page has correct number of items', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await  page.locator('media-card').first().waitFor();

  // Since API is always going to return 10 items, so expect exactly 10 items.
  const mediaCardCount = await page.locator('media-card').count();
  expect(mediaCardCount).toEqual(10);
})
