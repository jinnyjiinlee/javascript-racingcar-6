import { Input } from '../View/inputViews.js';
import { CarNamesValidator } from '../Validation/carNamesValidator.js';
import { CarNamesParser } from '../Model/carNamesParser.js';
import { RacingCountValidator } from '../Validation/racingCountValidator.js';
import { racingHandler } from '../Model/forwardProgression.js';

export class MainController {
  constructor() {
    this.input = new Input();
  }

  async startProgram() {
    const carNamesInput = await this.input.getCarNamesInput();
    new CarNamesValidator().validateCarNames(carNamesInput);
    const parsedCarNames = new CarNamesParser().parseCarNames(carNamesInput);

    const racingCount = await this.input.getRacingCountInput();
    new RacingCountValidator().validateRacingCount(racingCount);

    new racingHandler().progressRacing(parsedCarNames, racingCount);
  }
}
