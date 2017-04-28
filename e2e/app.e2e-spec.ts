import { NgSuperpowersPage } from './app.po';

describe('ng-superpowers App', () => {
  let page: NgSuperpowersPage;

  beforeEach(() => {
    page = new NgSuperpowersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ngsp works!');
  });
});
