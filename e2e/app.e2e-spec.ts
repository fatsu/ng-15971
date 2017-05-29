import { Cli106Page } from './app.po';

describe('cli106 App', () => {
  let page: Cli106Page;

  beforeEach(() => {
    page = new Cli106Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('asm works!');
  });
});
