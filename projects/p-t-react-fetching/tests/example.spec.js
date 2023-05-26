// @ts-check

import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/'
const CAT_IMAGE_URL = 'https://cataas.com';

test('app show a random fact and an image about that fact', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = page.getByRole('paragraph');
  const image = page.getByRole('img');

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute('src');

  console.log({textContent});
  console.log({imageSrc});

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_IMAGE_URL)).toBeTruthy()
});
