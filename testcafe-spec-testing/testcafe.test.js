import { Selector } from 'testcafe';
import path from 'path';

const filePath = `file://${path.join(process.cwd(), 'index.html')}`;

fixture `ЛР8: TestCafe Scenario`
    .page(filePath);

test('Повний сценарій: Пошук та перевірка кошика', async t => {
    await t
        .expect(Selector('title').innerText).eql('Jackets - Tops - Men') // Тест 1: Title
        .typeText('#search', 'Proteus Fitness')                         // Тест 2: Пошук
        .click('.add-to-cart')                                          // Тест 3: Купівля
        .expect(Selector('#cart-count').innerText).eql('1');            // Перевірка результату
});