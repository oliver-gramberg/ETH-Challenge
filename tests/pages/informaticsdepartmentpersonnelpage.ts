import { type Page } from '@playwright/test';
import { InformaticsDepartmentStaffPage } from './informaticsdepartmentstaffpage';

export class InformaticsDepartmentPersonnelPage {
  constructor(private readonly page: Page) {}

  async goToInformaticsDepartmentStaff() {
    await this.page.getByRole('link', { name: 'Departementsstab' }).click();
    return new InformaticsDepartmentStaffPage(this.page);
  }
}
