import puppeteer from 'puppeteer';
import path from 'path';

describe('E2E Сценарій: Пошук та покупка (Варіант 28)', () => {
  let browser;
  let page;

  jest.setTimeout(30000); // Таймаут 30 секунд

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox']
    });
    page = await browser.newPage();
    const filePath = `file://${path.join(process.cwd(), 'index.html')}`;
    await page.goto(filePath);
  });

  afterAll(async () => {
    if (browser) await browser.close();
  });

  test('Користувач може знайти товар та додати його в кошик', async () => {
    // 1. Взаємодія з пошуком
    await page.type('#search', 'Proteus Fitness');
    
    // 2. Клік по кнопці "Додати в кошик"
    await page.click('.add-to-cart');

    // 3. Перевірка появи повідомлення про успіх
    await page.waitForSelector('.success-message', { visible: true });
    const messageText = await page.$eval('.success-message', el => el.textContent);
    expect(messageText).toContain('Товар успішно додано!');

    // 4. Перевірка лічильника кошика (має бути 1)
    const cartCount = await page.$eval('#cart-count', el => el.innerText);
    expect(cartCount).toBe('1');
  });
});