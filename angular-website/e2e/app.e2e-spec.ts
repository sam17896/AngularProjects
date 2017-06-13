import { AngularWebsitePage } from './app.po';

describe('angular-website App', () => {
  let page: AngularWebsitePage;

  beforeEach(() => {
    page = new AngularWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
