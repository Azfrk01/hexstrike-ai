import { BasePage } from '../core/basePage';

export class HomePage extends BasePage {
  async verifyTitle() {
    const title = this.getLocator('home', 'title');
    await title.waitFor();
  }

  async clickMoreInfo() {
    await this.click('home', 'moreInfoLink');
  }
}
