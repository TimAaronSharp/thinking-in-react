import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  })

  test('should have correct metadata title', async ({ page }) => {
    await expect(page).toHaveTitle("thinking-in-react");
  });

  test('searchBar should return a valid result', async ({ page }) => {
    const nameSearchElem = 'Apple';
    const priceSearchElem = '$1';

    const productRows = page.getByTestId('product-row');
    const searchBarElem = page.getByRole('textbox', { name: "Search..." });

    await searchBarElem.fill(nameSearchElem);

    const rowCount = await productRows.count();

    for (let i = 0; i < rowCount; i++) {
      const currentRow = productRows.nth(i);
      const nameCell = currentRow.getByRole('cell').nth(0);
      const priceCell = currentRow.getByRole('cell').nth(1);

      await expect(nameCell).toHaveText(nameSearchElem);
      await expect(priceCell).toHaveText(priceSearchElem);
    }
  });
});

  // test('searchBar should return a valid result', async ({ page }) => {
  // const nameSearchElem = 'Apple';
  // const priceSearchElem = '$1';

  // const productRows = page.getByTestId('product-row');
  // const searchBarElem = page.getByRole('textbox', { name: "Search..." });

  // await searchBarElem.fill(nameSearchElem);

  // const rowCount = await productRows.count();

  // for (let i = 0; i < rowCount; i++) {
  //   const currentRow = productRows.nth(i);
  //   const nameCell = currentRow.getByRole('cell').nth(0);
  //   const priceCell = currentRow.getByRole('cell').nth(1);

  //   await expect(nameCell).toHaveText(nameSearchElem);
  //   await expect(priceCell).toHaveText(priceSearchElem);
  // }


  /* SECTION Alternate Approaches
  
      // NOTE Wanted to try making the test with variables for the data being tested. My understanding is that generally more specific/hard-coded data is preferred for predictability, but I wanted to try making it so that you could change one variable (nameSearchElem or priceSearchElem) in one place to make it easy to test different sets of data without needing to change multiple places in the test, just to see how it turned out. It did work in the end, but only for complete matches. Partial searches (such as "a") would filter down to anything containing an "a", but the test would fail because it was looking for a specific word. Incorporating a RegEx in another test to account for this. Going forward I'm going to go back to hard-coded data for testing, baring other experiments.
      
      test('searchBar should return a valid result', async ({ page }) => {
      // const nameSearchElem = 'Apple';
      // const priceSearchElem = '$1';
  
      // const allRows = page.getByRole('row');
      // const searchBarElem = page.getByRole('textbox', { name: "Search..." });
  
      // await searchBarElem.fill(nameSearchElem);
  
      // const rowCount = await allRows.count();
  
      // for (let i = 2; i < rowCount; i++) {
      //   const currentRow = allRows.nth(i);
  
      //   const nameCell = currentRow.getByRole('cell').nth(0);
      //   const priceCell = currentRow.getByRole('cell').nth(1);
  
      //   if (i === 0) {
      //     await expect(nameCell).toHaveText('Name');
      //     await expect(priceCell).toHaveText('Price');
      //     continue;
      //   }
  
      //   await expect(nameCell).toHaveText(nameSearchElem);
      //   await expect(priceCell).toHaveText(priceSearchElem);
      // }
    // });
  
  */



  // const textElem = page.getByRole('textbox', { name: "Search..." });
  // const rowElem = page.getByRole('row').filter({ hasText: 'Spinach' })
  // const nameCell = rowElem.getByRole('cell').nth(0);
  // const priceCell = rowElem.getByRole('cell').nth(1);

  // await expect(textElem.fill('Spinach'));
  // await expect(nameCell).toHaveText('Spinach');
  // await expect(priceCell).toHaveText('$2');


  // test('')



// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
