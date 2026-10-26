import { expect, type Page } from '@playwright/test';

export abstract class BasePage {
  url: string = '';
  breadcrumbName: string = '';

  constructor(protected readonly page: Page) {}

  async verifyBreadcrumbs(pages: BasePage[]) {
    const breadcrumbs = this.page.getByLabel('Breadcrumb');
    const breadcrumbItems = breadcrumbs.getByRole('link');

    await expect(breadcrumbItems, `breadcrumb should have ${pages.length} items`).toHaveCount(pages.length);
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      const breadcrumbItem = breadcrumbItems.nth(i);

      await expect(breadcrumbItem, `breadcrumb item ${i} should be "${page.breadcrumbName}"`).toContainText(page.breadcrumbName);
      if (i < pages.length - 1) { // The last breadcrumb is not clickable.
        const href = await breadcrumbItem.getAttribute('href');
        const fullUrl = href?.startsWith('http') ? href : `https://inf.ethz.ch${href}`;
        expect(fullUrl, `breadcrumb item "${page.breadcrumbName}" should link to ${page.url}`).toBe(page.url);
      }
    }
  }
}
