import { CarNamesParser } from '../Model/carNamesParser.js';
import { progressRacing } from '../Model/forwardProgression.js';
import { Input } from '../View/inputViews.js';

export class MainController {
  constructor() {
    this.input = new Input();
  }

  async startProgram() {
    const carNamesInput = await this.input.getValidatedCarNamesInput();
    const carNames = new CarNamesParser().parseCarNames(carNamesInput);
    const racingCount = await this.input.getValidatedRacingCountInput();

    progressRacing(carNames, racingCount);
  }
}
