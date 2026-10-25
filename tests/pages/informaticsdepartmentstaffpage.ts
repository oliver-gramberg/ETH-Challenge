import { expect, type Locator, type Page } from '@playwright/test';
import { PersonDetailsPage } from './persondetailspage';

export class InformaticsDepartmentStaffPage {
  private readonly personBoxes: Locator;

  constructor(private readonly page: Page) {
    this.personBoxes = page.locator('.box');
  }

  getPersonBoxFor(fullName: string): Locator {
    return this.personBoxes.filter({has: this.page.getByText(fullName, { exact: true })});
  }

  async verifyPersonCount(count: number) {
    await expect(this.personBoxes, 'wrong number of persons').toHaveCount(count);
  }

  async verifyBreadcrumbs() {
    await expect(this.page.getByLabel('Breadcrumb'), 'something is wrong with the breadcrumbs')
      .toContainText('Sie sind hier Startseite Personen Administration Departementsstab');
  }

  async goToPersonDetails(fullName: string): Promise<PersonDetailsPage> {
    await this.getPersonBoxFor(fullName).getByRole('link', { name: 'Mehr Details' }).click();
    return new PersonDetailsPage(this.page);
  }
}
