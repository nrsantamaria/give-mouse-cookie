import { GiveMouseCookiePage } from './app.po';

describe('give-mouse-cookie App', () => {
  let page: GiveMouseCookiePage;

  beforeEach(() => {
    page = new GiveMouseCookiePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
