import { expect, test } from '../../../fixtures';
import { ArticlePage } from '../../../pages/article.page';
import { CommunityPortalPage } from '../../../pages/communityPortal.page';
import { HelpCenterPage } from '../../../pages/helpCenter.page';
import { MainPage } from '../../../pages/main.page';
import { SearchPage } from '../../../pages/search.page';
import { URLs } from '../../../utils/constants';

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.goToCommunityPortal();
});

test.describe('search for term in help center', () => {
  test('search for "watchlist" in help center', async ({ page }) => {
    const searchTerm: string = 'Watchlist';
    const communityPortal = new CommunityPortalPage(page);
    await communityPortal.goToHelpCenter();

    const helpCenter = new HelpCenterPage(page);
    await helpCenter.searchFor(searchTerm);

    const searchPage = new SearchPage(page);
    await searchPage.selectResult(searchTerm);

    const articlePage = new ArticlePage(page);
    await expect(page).toHaveURL(URLs.SEARCH_RESULT + searchTerm);
    await expect(await articlePage.getTitle()).toContainText(searchTerm);
  });
});
