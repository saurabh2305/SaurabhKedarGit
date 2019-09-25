import { MyFirstAngularProjPage } from './app.po';

describe('my-first-angular-proj App', function() {
  let page: MyFirstAngularProjPage;

  beforeEach(() => {
    page = new MyFirstAngularProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
