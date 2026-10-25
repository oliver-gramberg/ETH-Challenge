import { expect, type Locator, type Page } from '@playwright/test';

export class PersonDetailsPage {
  private readonly phoneLocator: Locator;
  private readonly emailLocator: Locator;

  constructor(private readonly page: Page) {
    this.phoneLocator = page.locator('li', { hasText: /Telefon/ });
    this.emailLocator = page.locator('li', { hasText: /E-Mail/ });
  }

  async verifyBreadcrumbs() {
    await expect(this.page.getByLabel('Breadcrumb'))
      .toContainText('Startseite Personen Personen A-Z Person detail');
  }

  async verifyEmail(email: string) {
    await expect(this.emailLocator).toHaveText(`E-Mail: ${email}`);
    await expect(this.emailLocator.getByRole('link')).toHaveAttribute('href', `mailto:${email}`)
  }

  async verifyPhone(phone: string) {
    await expect(this.phoneLocator).toHaveText(`Telefon: ${phone}`);
    await expect(this.phoneLocator.getByRole('link')).toHaveAttribute('href', `tel:${phone}`)
  }
}
