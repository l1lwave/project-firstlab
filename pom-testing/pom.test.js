import puppeteer from 'puppeteer';
import JacketsPage from './JacketsPage.js';

describe('ЛР7: Page Object Model', () => {
  test('Тест через клас сторінки', async () => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    const jacketsPage = new JacketsPage(page);
    
    await jacketsPage.open();
    await jacketsPage.buy();
    
    const res = await page.$eval('#cart-count', el => el.innerText);
    expect(res).toBe('1');
    await browser.close();
  });
});