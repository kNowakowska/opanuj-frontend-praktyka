import { Locator, Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class MainPage {
  private readonly page: Page;
  private readonly url = URLs.MAIN_PAGE;
  readonly navigation: Locator;
  private readonly featuredArticleExcerpt: Locator;
  private readonly searchInput: Locator;
  private readonly sideMenu: Locator;
  private readonly searchList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigation = page.getByRole('navigation', {
      name: 'Personal tools',
    });

    this.featuredArticleExcerpt = page.locator('#mp-tfa');

    this.searchInput = page
      .getByRole('search')
      .getByRole('searchbox', { name: /Search Wikipedia/i });

    this.sideMenu = page.getByRole('navigation', { name: 'Site' });
    this.searchList = this.page.getByRole('listbox', {
      name: /Search results/i,
    });
  }

  navigate() {
    return this.page.goto(this.url);
  }

  goToLoginPage() {
    return this.navigation.getByRole('link', { name: 'Log in' }).click();
  }

  goToCommunityPortal() {
    return this.sideMenu
      .getByRole('link', { name: 'Community portal' })
      .click();
  }

  async goToFeaturedArticle() {
    const linkToFeaturedArticle = this.featuredArticleExcerpt
      .getByRole('paragraph')
      .getByRole('link')
      .first();

    const articleHref = (await linkToFeaturedArticle.getAttribute('href'))!;

    await linkToFeaturedArticle.click();

    return this.page.waitForURL(`**${articleHref}`);
  }

  async searchFor(term: string) {
    return this.searchInput.fill(term);
  }

  selectFirstSearchResult() {
    return this.searchList.getByRole('option').first().click();
  }

  getSearchResults() {
    return this.page.getByRole('listbox', { name: /Search results/i });
  }

  getFirstSearchResult() {
    return this.getSearchResults().getByRole('option').first();
  }

  getNavigation() {
    return this.navigation;
  }
}
