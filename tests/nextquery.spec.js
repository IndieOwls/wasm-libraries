const nextquery = require('nextquery')
const { test, expect } = require('@playwright/test')

test('exists', async ({ page }) => {
  console.log(nextquery)

  // Expect a title "to contain" a substring.
  await expect(nextquery).toBeTruthy()
})
