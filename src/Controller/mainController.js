import { ParseCarNames } from '../model/parseCarNames.js';
import { Input } from '../View/inputViews.js';

export class MainController {
  constructor() {
    this.input = new Input();
  }
  async startProgram() {
    const carNamesInput = await this.input.getCarNamesInput();
    const parsedCarNames = new ParseCarNames().parseCarNames(carNamesInput);
    console.log(parsedCarNames);

    // await this.input.getMatchCountInput();
  }
}
