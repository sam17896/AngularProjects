import { MovieFinderPage } from './app.po';

describe('movie-finder App', () => {
  let page: MovieFinderPage;

  beforeEach(() => {
    page = new MovieFinderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
