import { expect, test } from '../../../fixtures';
import { ArticlePage } from '../../../pages/article.page';
import { MainPage } from '../../../pages/main.page';
import { URLs } from '../../../utils/constants';

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
});

test.describe('search for article', () => {
  test('search for "Playwright" article', async ({ page }) => {
    const searchTerm: string = 'Playwright';
    const mainPage = new MainPage(page);
    await mainPage.searchFor(searchTerm);
    await mainPage.selectFirstSearchResult();

    const articlePage = new ArticlePage(page);
    await expect(page).toHaveURL(URLs.SEARCH_RESULT + searchTerm);
    await expect(await articlePage.getTitle()).toContainText(searchTerm);
  });
});
