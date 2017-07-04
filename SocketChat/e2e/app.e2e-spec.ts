import { SocketChatPage } from './app.po';

describe('socket-chat App', () => {
  let page: SocketChatPage;

  beforeEach(() => {
    page = new SocketChatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
