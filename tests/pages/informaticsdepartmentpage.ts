import { type Page } from '@playwright/test';
import { InformaticsDepartmentPersonnelPage } from './informaticsdepartmentpersonnelpage';

export class InformaticsDepartmentPage {
  constructor(private readonly page: Page) {}

  async goToInformaticsDepartmentPersonnel() {
    await this.page.getByRole('button', { name: 'Personen' }).click();
    return new InformaticsDepartmentPersonnelPage(this.page);
  }
}