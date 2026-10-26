import { type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class InformaticsDepartmentPersonnelAZPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.url = 'https://inf.ethz.ch/de/personen/people-atoz.html';
    this.breadcrumbName = 'Personen A-Z';
  }
}
