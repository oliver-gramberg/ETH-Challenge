import { test } from '@playwright/test';
import { EthHomePage } from './pages/eth-homepage';
import { InformaticsDepartmentPage } from './pages/informaticsdepartmentpage';
import { InformaticsDepartmentAdministrationPage } from './pages/informaticsdepartmentadministrationpage';
import { InformaticsDepartmentPersonnelAZPage } from './pages/informaticsdepartmentpersonnel-a-z-page';
import { InformaticsDepartmentPersonnelPage } from './pages/informaticsdepartmentpersonnelpage';
import { InformaticsDepartmentStaffPage } from './pages/informaticsdepartmentstaffpage';
import { PersonDetailsPage } from './pages/persondetailspage';

test('Verify ETH site according to challenge', async ({ page }) => {
  let homePage: EthHomePage;
  let departmentPage: InformaticsDepartmentPage;
  let personnelPage: InformaticsDepartmentPersonnelPage;
  let staffPage: InformaticsDepartmentStaffPage;
  let personDetailsPage: PersonDetailsPage;

  await test.step('Open ETH website, refuse cookies', async () => {
    homePage = new EthHomePage(page);
    await homePage.open();
  });

  await test.step('Navigate to CS department', async () => {
    departmentPage = await homePage.goToInformaticsDepartment();
  });

  await test.step('Navigate to personnel', async () => {
    personnelPage = await departmentPage.goToInformaticsDepartmentPersonnel();
  });

  await test.step('Navigate to department staff', async () => {
    staffPage = await personnelPage.goToInformaticsDepartmentStaff();
  });

  await test.step('Verify department staff page and navigate to Paulina Motyka\'s details', async () => {
    await staffPage.verifyPersonCount(6); // Spec says 4.
    const administrationPage = new InformaticsDepartmentAdministrationPage(page);
    await staffPage.verifyBreadcrumbs([departmentPage, personnelPage, administrationPage, staffPage]);
    personDetailsPage = await staffPage.goToPersonDetails('Paulina Motyka');
  });

  await test.step('Verify email, phone, breadcrumbs on Paulina Motyka\'s person detail page', async () => {
    await personDetailsPage.verifyEmail('paulina.motyka@inf.ethz.ch');
    await personDetailsPage.verifyPhone('+41 44 632 57 79');
    const personnelAZPage = new InformaticsDepartmentPersonnelAZPage(page);
    await personDetailsPage.verifyBreadcrumbs([departmentPage, personnelPage, personnelAZPage, personDetailsPage]);
  });
});
