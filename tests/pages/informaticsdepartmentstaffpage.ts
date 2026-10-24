import { expect, type Page } from '@playwright/test';
import { PersonDetailsPage } from './persondetailspage';

export class InformaticsDepartmentStaffPage {
  constructor(private readonly page: Page) {}

  async verifyBreadcrumb() {
    await expect(this.page.getByLabel('Breadcrumb')).toContainText('Sie sind hier Startseite Personen Administration Departementsstab');
  }

  async goToPersonDetails(): Promise<PersonDetailsPage> {
    await this.page.getByRole('link', { name: 'Mehr Details' }).nth(2).click();
    return new PersonDetailsPage(this.page);
  }
}
