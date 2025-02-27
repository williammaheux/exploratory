import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://exploratorytestingacademy.com/app/');
  await page.getByRole('link', { name: 'Alan Richardson, eviltester' }).click({
    button: 'middle'
  });
  //await page.goto('https://github.com/eviltester/TestingApp');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Eprimer/);

  // Wait for a new popup window to open and click on the link with the name 'e-prime'
  // await page.goto('https://en.wikipedia.org/wiki/E-Prime');
  await page.getByRole('link', { name: 'e-prime' }).click({
    button: 'middle'
  });
 
  // Get the textbox with the label 'Text:' on the new popup page (page1), double-click it, and fill it with the text 'We're in class'
  const textbox = page.getByRole('textbox', { name: 'Text:' });
  await textbox.click();
  await textbox.fill('We\'re in class');
  
  // Click on the button with the name 'Check For E-Prime' on the popup page (page1)
  await page.getByRole('button', { name: 'Check For E-Prime' }).click();
});


// test target AR 

