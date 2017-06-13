import { GithubSearchPage } from './app.po';

describe('github-search App', () => {
  let page: GithubSearchPage;

  beforeEach(() => {
    page = new GithubSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
