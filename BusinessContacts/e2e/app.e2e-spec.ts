import { BusinessContactsPage } from './app.po';

describe('business-contacts App', () => {
  let page: BusinessContactsPage;

  beforeEach(() => {
    page = new BusinessContactsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
