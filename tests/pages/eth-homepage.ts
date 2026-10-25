import { type Locator, type Page } from '@playwright/test';
import { InformaticsDepartmentPage } from './informaticsdepartmentpage';

export class EthHomePage {
  private readonly departmentSelector: Locator;

  constructor(private readonly page: Page) {
    this.departmentSelector = page.getByLabel('Wählen Sie ein Departement');
  }

  async open() {
    await this.page.goto('https://ethz.ch/de.html');
    await this.page.getByRole('button', { name: 'Alle Cookies ablehnen' }).click();
  }

  async goToInformaticsDepartment(): Promise<InformaticsDepartmentPage> {
    await this.departmentSelector.selectOption('https://inf.ethz.ch/de/');
    return new InformaticsDepartmentPage(this.page);
  }
}
