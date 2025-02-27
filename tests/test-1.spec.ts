import { test, expect } from '@playwright/test';

test('cas non passant 1', async ({ page }) => {
  await page.goto('https://exploratorytestingacademy.com/app/');
  await page.getByRole('textbox', { name: 'Text:' }).click();
  await page.getByRole('textbox', { name: 'Text:' }).fill('@*#$$$#\n');
  await page.getByRole('button', { name: 'Check For E-Prime' }).click();
});

test('caractères spéciaux non valides', async ({ page }) => {
  await page.goto('https://exploratorytestingacademy.com/app/');
  const invalidCharacters = ['é', 'è', 'ç', 'ù', '{', '}', '~', '#', ':', ';', '!', '§'];
  
  for (const char of invalidCharacters) {
    await page.getByRole('textbox', { name: 'Text:' }).click();
    await page.getByRole('textbox', { name: 'Text:' }).fill(char);
    await page.getByRole('button', { name: 'Check For E-Prime' }).click();
  }
});