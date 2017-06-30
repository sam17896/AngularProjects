import { MapitPage } from './app.po';

describe('mapit App', () => {
  let page: MapitPage;

  beforeEach(() => {
    page = new MapitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
