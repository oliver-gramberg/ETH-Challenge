import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';
import { InformaticsDepartmentPage } from './informaticsdepartmentpage';

export class EthHomePage extends BasePage {
  private readonly departmentSelector: Locator;

  constructor(page: Page) {
    super(page);
    this.url = 'https://ethz.ch/de.html';
    this.breadcrumbName = 'Startseite';
    this.departmentSelector = page.getByLabel('Wählen Sie ein Departement');
  }

  async open() {
    await this.page.goto(this.url);
    await this.page.getByRole('button', { name: 'Alle Cookies ablehnen' }).click();
  }

  async goToInformaticsDepartment(): Promise<InformaticsDepartmentPage> {
    await this.departmentSelector.selectOption('https://inf.ethz.ch/de/');
    return new InformaticsDepartmentPage(this.page);
  }
}
