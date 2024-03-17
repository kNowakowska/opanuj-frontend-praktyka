import { Locator, Page } from '@playwright/test';

export class SearchPage {
  private readonly page: Page;
  private readonly searchResultsContainer: Locator;
  private readonly searchResultsList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchResultsContainer = this.page.locator('#bodyContent');
    this.searchResultsList = this.searchResultsContainer.getByRole('list');
  }

  findOtherResults() {
    return this.searchResultsList.getByRole('listitem');
  }

  selectResult(searchTerm: string) {
    return this.searchResultsContainer
      .getByRole('link', { name: searchTerm })
      .click();
  }
}
