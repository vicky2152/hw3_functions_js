import { test, expect } from '@playwright/test';

test('Login on the website', async ({ page }) => {
  await page.goto("https://slice.biz.ua/uviity-na-sait");
  await page.locator('input[name="username"]').pressSequentially('vickynaumenko@ukr.net');
  await page.locator('input[name="passwd"]').pressSequentially('sabaka555');
  await page.locator("xpath=//button[contains(@id,'send2')]").click();
  
});


test('add to cart and order', async ({ page }) => {
    await page.goto("https://slice.biz.ua/stryzhka-i-ukladka/nasadky-i-nozhi-do-mashynok/nojevuy-blok-babyliss-pro-fx707zgse-japanese-steel-blade");
    await page.locator("xpath=//span[contains(text(),'Купити')]").click();
    await page.locator("xpath=//a[contains(text(),'тут')]").click();
    await page.locator("xpath=//input[@id='f_name']").pressSequentially('Вікторія');
    await page.locator("xpath=//input[@id='l_name']").pressSequentially('Науменко');
    await page.locator("xpath=//input[@id='email']").pressSequentially('vicky_n@gmail.com');
    await page.locator("xpath=//input[@id='shipping_method_3']").click();

  });

test('sort products on page', async ({ page }) => {
    await page.goto("https://slice.biz.ua/podarunky");
    await page.locator("xpath=//*[@id='order']").click();
    await page.locator("xpath=//*[contains(text(),'Виробники')]").click();
    await page.locator("xpath=//a[@href='javascript:;']").click();
    await page.locator("xpath=//*[@class='icon_search']").pressSequentially('фен');
    
    //await page.locator("xpath=//option[@value='1']").selectOption('6');


    
  });