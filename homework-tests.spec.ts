import { test, expect } from '@playwright/test';

test('navigate yakaboo', async ({ page }) => {
  await page.goto("https://yakaboo.ua/");
  await expect(page.getByRole('button', { name: 'Знайти' })).toBeVisible();
  await expect(page.getByPlaceholder('Знайти книгу')).toBeVisible();

  await page
    .getByPlaceholder('Знайти книгу')
    .fill('Гарі Потер');

 
});

test('navigate aquavin', async ({ page }) => {
  await page.goto('https://aquavin.com.ua');
  await expect(page.getByRole('img', { name: 'Aquavin', exact: true })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Знайти' })).toBeVisible();

  
});

test('aquavin again', async ({ page }) => {
  await page.goto('https://aquavin.com.ua');
  await expect(page.getByRole('link', { name: 'Фільтри для води Фільтри для води' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'About company Aquavin' })).toBeVisible();

});

test('login dribble', async ({ page }) => {
  await page.goto ('https://dribbble.com/session/new');
  await page.getByLabel('Password Forgot?').fill('secret');
  await expect(page.getByRole('heading', { name: 'Sign in to Dribbble' })).toBeVisible();

  
});

test('webflow check', async ({ page }) => {
  await page.goto ('https://webflow.com/');
  await expect(page.getByText('Take control of HTML, CSS,')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Build with the power of code' })).toBeVisible();

});
