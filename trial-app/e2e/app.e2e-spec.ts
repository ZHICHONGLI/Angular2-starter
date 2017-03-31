import { TrialAppPage } from './app.po';

describe('trial-app App', () => {
  let page: TrialAppPage;

  beforeEach(() => {
    page = new TrialAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
