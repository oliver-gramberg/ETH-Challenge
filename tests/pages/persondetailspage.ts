import { expect, type Page } from '@playwright/test';


export class PersonDetailsPage {
  constructor(private readonly page: Page) {}

  async verifyBreadcrumb() {
    await expect(this.page.getByLabel('Breadcrumb').getByRole('list')).toContainText('Startseite Personen Personen A-Z Person detail');
  }

  async verifyEmail(email: string) {
    await expect(this.page.locator('#personDetailApp')).toContainText(`E-Mail: ${email}`);
  }

  async verifyPhone(phone: string) {
    await expect(this.page.locator('#personDetailApp')).toHaveText(`Telefon: ${phone}`);
  }
}
