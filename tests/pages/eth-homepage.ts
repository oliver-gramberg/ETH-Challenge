import { type Page } from '@playwright/test';
import { InformaticsDepartmentPage } from './informaticsdepartmentpage';

export class EthHomePage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto('https://ethz.ch/de.html');
    await this.page.getByRole('button', { name: 'Alle Cookies ablehnen' }).click();
  }

  async goToInformaticsDepartment(): Promise<InformaticsDepartmentPage> {
    await this.page.getByLabel('Wählen Sie ein Departement').selectOption('https://inf.ethz.ch/de/');
    return new InformaticsDepartmentPage(this.page);
  }
}
