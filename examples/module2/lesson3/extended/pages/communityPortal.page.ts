import { Locator, Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class CommunityPortalPage {
  private readonly page: Page;
  private readonly helpCenter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.helpCenter = page.getByRole('link', {
      name: 'Help desk',
      exact: true,
    });
  }

  async goToHelpCenter() {
    await this.helpCenter.click();
    await this.page.waitForURL(URLs.HELP_DESK);
  }
  getHelpCenter() {
    return this.helpCenter;
  }
}
