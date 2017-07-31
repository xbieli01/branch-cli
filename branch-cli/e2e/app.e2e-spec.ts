import { BranchCliPage } from './app.po';

describe('branch-cli App', () => {
  let page: BranchCliPage;

  beforeEach(() => {
    page = new BranchCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
