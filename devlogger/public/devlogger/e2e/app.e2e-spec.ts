import { DevloggerPage } from './app.po';

describe('devlogger App', () => {
  let page: DevloggerPage;

  beforeEach(() => {
    page = new DevloggerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
