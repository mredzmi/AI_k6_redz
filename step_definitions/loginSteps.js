// step_definitions/loginSteps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the Saucedemo login page', async function () {
  await this.page.goto('/'); // Assuming baseURL is set in hooks to https://www.saucedemo.com/
});

When('the user enters {string} and {string}', async function (username, password) {
  await this.page.fill('[data-test="username"]', username);
  await this.page.fill('[data-test="password"]', password);
});

// 'And clicks the login button' from the feature file will use this step definition
When('clicks the login button', async function () {
  await this.page.click('[data-test="login-button"]');
});

Then('the user should be redirected to the inventory page', async function () {
  await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

// 'And should see the products listing' from the feature file will use this step definition
Then('should see the products listing', async function () {
  const productsTitle = this.page.locator("//span[@class='title' and text()='Products']");
  // Alternatively, check for the inventory container:
  // const inventoryList = this.page.locator('.inventory_list');
  // await expect(inventoryList).toBeVisible();
  await expect(productsTitle).toBeVisible();
});

Then('the user should see an error message {string}', async function (expectedErrorMessage) {
  const errorElement = this.page.locator('[data-test="error"]');
  await expect(errorElement).toBeVisible();
  await expect(errorElement).toHaveText(expectedErrorMessage);
});

// Old step definitions commented out or removed:
/*
Given('the user is on the login page', async function () {
  await this.page.goto('/login');
});

When('the user enters valid credentials', async function () {
  await this.page.fill('#username', 'testuser');
  await this.page.fill('#password', 'testpassword');
});

When('the user enters a valid username and an incorrect password', async function () {
  await this.page.fill('#username', 'testuser');
  await this.page.fill('#password', 'wrongpassword');
});

Then('the user should be redirected to the dashboard', async function () {
  await expect(this.page.url()).toContain('/dashboard');
});

Then('the user should see an error message indicating invalid credentials', async function () {
  const errorMessage = this.page.locator('.error-message');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText('Invalid credentials');
});
*/
