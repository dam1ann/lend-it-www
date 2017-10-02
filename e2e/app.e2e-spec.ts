import { LendItWwwPage } from './app.po';

describe('lend-it-www App', () => {
  let page: LendItWwwPage;

  beforeEach(() => {
    page = new LendItWwwPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
