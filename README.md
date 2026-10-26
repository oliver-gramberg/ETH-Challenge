# ETH Challenge

A Playwright-based test for the ETH Zürich website, specifically validating the Informatik department staff page and personnel details.

## Description

This project automates the verification of selecting a department, navigating to personnel pages, and validating staff information and breadcrumb navigation. It uses the Page Object Model pattern for extendability, maintainability and clarity.

## Prerequisites

- Node.js 18+
- npm 10+
Consider using nvm.

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Project Structure

```
tests/
├── pages/           # Page Object Model classes for each page
├── ETH-Challenge.spec.ts  # Main test file
```

### Most Interesting Page Objects

- `EthHomePage` - ETH homepage with department selector
- `InformaticsDepartmentPage` - Informatik department page
- `InformaticsDepartmentPersonnelPage` - Personnel listing page
- `InformaticsDepartmentStaffPage` - Department staff page
- `PersonDetailsPage` - Individual person detail page
- `BasePage` - Abstract base class with shared breadcrumb verification logic

## Running Tests

### Run test

```bash
npx playwright test
```

### Run test in headed mode (with browser visible)

```bash
npx playwright test --headed
```

### Run test in debug mode

```bash
npx playwright test --debug
```

## Breadcrumb Verification

The test suite verifies breadcrumbs by:
- Checking text content matches expected page name
- Verifying correct number of breadcrumb items
- Confirming links point to correct URLs (handles relative URLs)
- Ensuring correct navigation order
- Skipping link verification for the current page (last item)

## Configuration

Playwright configuration is defined in `playwright.config.ts`. Key settings:
- Browser: Chromium
- Timeout: 5 seconds per action (default)
- Test timeout: 30 seconds per test (default)
