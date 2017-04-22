import { Q4readPage } from './app.po';

describe('q4read App', () => {
  let page: Q4readPage;

  beforeEach(() => {
    page = new Q4readPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
