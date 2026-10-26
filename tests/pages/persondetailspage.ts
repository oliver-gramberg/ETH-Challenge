import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class PersonDetailsPage extends BasePage {
  private readonly phoneLocator: Locator;
  private readonly emailLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.url = '';
    this.breadcrumbName = 'Person detail';
    this.phoneLocator = page.locator('li', { hasText: /Telefon/ });
    this.emailLocator = page.locator('li', { hasText: /E-Mail/ });
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
