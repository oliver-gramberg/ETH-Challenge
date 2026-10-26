import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';
import { PersonDetailsPage } from './persondetailspage';

export class InformaticsDepartmentStaffPage extends BasePage {
  private readonly personBoxes: Locator;

  constructor(page: Page) {
    super(page);
    this.url = 'https://inf.ethz.ch/de/people/departmentstaff';
    this.breadcrumbName = 'Departementsstab';
    this.personBoxes = page.locator('.box');
  }

  getPersonBoxFor(fullName: string): Locator {
    return this.personBoxes.filter({has: this.page.getByText(fullName, { exact: true })});
  }

  async verifyPersonCount(count: number) {
    await expect(this.personBoxes, 'wrong number of persons').toHaveCount(count);
  }

  async goToPersonDetails(fullName: string): Promise<PersonDetailsPage> {
    await this.getPersonBoxFor(fullName).getByRole('link', { name: 'Mehr Details' }).click();
    return new PersonDetailsPage(this.page);
  }
}
