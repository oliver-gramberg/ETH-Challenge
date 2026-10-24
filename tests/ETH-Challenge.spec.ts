import { test, expect } from '@playwright/test';

test('Verify ETH site according to challenge', async ({ page }) => {
  await test.step('Open ETH website, refuse cookies', async () => {
    await page.goto('https://ethz.ch/de.html');
    await page.getByRole('button', { name: 'Alle Cookies ablehnen' }).click();
  });

  await test.step('Navigate to CS department', async () => {
    await page.getByLabel('Wählen Sie ein Departement').selectOption({ label: 'D-INFK: Informatik' });    
  });

  await test.step('Navigate to personnel', async () => {
    await page.getByRole('button', { name: 'Personen' }).click();
  });

  await test.step('Navigate to department staff section', async () => {
    await page.getByRole('link', { name: 'Departementsstab' }).click();
  });

  await test.step('Verify department staff page and navigate to Paulina Motyka\'s details', async () => {
    await page.getByRole('link', { name: 'Mehr Details' }).nth(2).click();
  });

  await test.step('Verify email, phone, breadcrumbs on person detail page', async () => {
    await expect(page.locator('#personDetailApp')).toContainText('E-Mail: paulina.motyka@inf.ethz.ch');
    await expect(page.locator('#personDetailApp')).toContainText('Telefon: +41 44 632 57 79');
    await expect(page.getByLabel('Breadcrumb').getByRole('list')).toContainText('Startseite Personen Personen A-Z Person detail');
  });
});
