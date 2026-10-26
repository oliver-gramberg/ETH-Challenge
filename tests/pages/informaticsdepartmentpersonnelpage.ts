import { type Page } from '@playwright/test';
import { BasePage } from './base-page';
import { InformaticsDepartmentStaffPage } from './informaticsdepartmentstaffpage';

export class InformaticsDepartmentPersonnelPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.url = 'https://inf.ethz.ch/de/personen.html';
    this.breadcrumbName = 'Personen';
  }

  async goToInformaticsDepartmentStaff(): Promise<InformaticsDepartmentStaffPage> {
    await this.page.getByRole('link', { name: 'Departementsstab' }).click();
    return new InformaticsDepartmentStaffPage(this.page);
  }
}
