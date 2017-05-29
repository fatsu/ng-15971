import { browser, by, element } from 'protractor';

export class Cli106Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('asm-root h1')).getText();
  }
}
