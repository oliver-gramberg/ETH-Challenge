import { type Page } from '@playwright/test';
import { BasePage } from './base-page';
import { InformaticsDepartmentPersonnelPage } from './informaticsdepartmentpersonnelpage';

export class InformaticsDepartmentPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.url = 'https://inf.ethz.ch/de/';
    this.breadcrumbName = '';
  }

  async goToInformaticsDepartmentPersonnel(): Promise<InformaticsDepartmentPersonnelPage> {
    await this.page.getByRole('button', { name: 'Personen' }).click();
    return new InformaticsDepartmentPersonnelPage(this.page);
  }
}