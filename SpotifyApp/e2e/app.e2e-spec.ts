import { SpotifyAppPage } from './app.po';

describe('spotify-app App', () => {
  let page: SpotifyAppPage;

  beforeEach(() => {
    page = new SpotifyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
