import { Locator, Page } from '@playwright/test';

export class HelpCenterPage {
  private readonly page: Page;
  private readonly searchForm: Locator;
  private readonly searchInput: Locator;
  private readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchForm = this.page.getByRole('cell', {
      name: 'Search the frequently asked',
    });

    this.searchInput = this.searchForm.getByRole('textbox');
    this.searchButton = this.searchForm.getByRole('button', {
      name: 'Search the frequently asked',
    });
  }

  async searchFor(term: string) {
    await this.searchInput.fill(term);
    return this.submitSearch();
  }

  async submitSearch() {
    return this.searchButton.click();
  }
}
