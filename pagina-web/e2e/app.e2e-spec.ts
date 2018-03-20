import { PaginaWebPage } from './app.po';

describe('pagina-web App', () => {
  let page: PaginaWebPage;

  beforeEach(() => {
    page = new PaginaWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
