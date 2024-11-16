import { Input } from '../View/inputViews.js';

export class MainController {
  constructor() {
    this.input = new Input();
  }
  async startProgram() {
    await this.input.getCarNamesInput();
    await this.input.getMatchCountInput();
  }
}
