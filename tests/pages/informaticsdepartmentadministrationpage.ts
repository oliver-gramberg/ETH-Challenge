import { type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class InformaticsDepartmentAdministrationPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.url = 'https://inf.ethz.ch/de/personen/administration.html';
    this.breadcrumbName = 'Administration';
  }
}
