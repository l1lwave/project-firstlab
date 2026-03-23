import path from 'path';
export default class JacketsPage {
  constructor(page) {
    this.page = page;
    this.searchField = '#search';
    this.addBtn = '.add-to-cart';
  }
  async open() { await this.page.goto(`file://${path.join(process.cwd(), 'index.html')}`); }
  async buy() { await this.page.click(this.addBtn); }
}