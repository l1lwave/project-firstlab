import puppeteer from 'puppeteer';
import path from 'path';

describe('UI Тестування - Варіант 28', () => {
let browser;
let page;

jest.setTimeout(60000);

beforeAll(async () => {
browser = await puppeteer.launch({
headless: "new",
args: ['--no-sandbox', '--disable-setuid-sandbox']
});
page = await browser.newPage();

const filePath = `file://${path.join(process.cwd(), 'index.html')}`;
await page.goto(filePath);
});

afterAll(async () => {
if (browser) await browser.close();
});

test('1. Перевірка заголовка сторінки (Title)', async () => {
const title = await page.title();
expect(title).toBe('Jackets - Tops - Men');
});

test('2. Перевірка наявності сітки товарів', async () => {
const productGrid = await page.$('.products-grid');
expect(productGrid).not.toBeNull();
});

test('3. Перевірка лічильника товарів', async () => {
await page.waitForSelector('.toolbar-number');
const countText = await page.$eval('.toolbar-number', el => el.textContent);
const count = parseInt(countText.trim(), 10);
expect(count).toBeGreaterThan(0);
expect(count).toBe(12);
});

test('4. Перевірка наявності фільтрів', async () => {
const filters = await page.$$('.filter-options-item');
expect(filters.length).toBeGreaterThan(0);
});

test('5. Перевірка поля пошуку', async () => {
const searchSelector = '#search';
await page.waitForSelector(searchSelector, { visible: true });

await page.type(searchSelector, 'Jacket');

const value = await page.$eval(searchSelector, el => el.value);
expect(value).toBe('Jacket');
});
});