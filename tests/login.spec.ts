import { test, expect } from '@playwright/test';


test ('login test', async ({page}) =>{
    await page.goto ('https://www.saucedemo.com/' )
    await expect(page).toHaveTitle('Swag Labs')
    await (page.getByPlaceholder('Username').fill('standard_user'))
    await (page.getByPlaceholder('Password').fill('secret_sauce'))
    const loginButton = page.getByRole('button', {name: 'Login'});
    await expect (loginButton).toBeVisible()
    await loginButton.click();
    await expect (page).toHaveURL('https://www.saucedemo.com/inventory.html')
  
})