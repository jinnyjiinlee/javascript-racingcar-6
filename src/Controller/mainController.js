import { Input } from '../View/inputViews.js';

export class MainController {
  constructor() {
    this.input = new Input();
  }
  async startProgram() {
    const carNamesInput = await this.input.getValidatedCarNamesInput();

    // await this.input.getMatchCountInput();
  }
}





