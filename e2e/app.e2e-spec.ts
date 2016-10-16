import { PonyRacerPage } from './app.po';

describe('PonyRacer App', function() {
  let page: PonyRacerPage;

  beforeEach(() => {
    page = new PonyRacerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
