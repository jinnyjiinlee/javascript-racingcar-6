import { CarNamesParser } from '../Model/carNamesParser.js';
import { progressRacing } from '../Model/forwardProgression.js';
import { CarNamesValidator } from '../Validation/carNamesValidator.js';
import { RacingCountValidator } from '../Validation/racingCountValidator.js';
import { Input } from '../View/inputViews.js';

export class MainController {
  constructor() {
    this.input = new Input();
  }

  async startProgram() {
    const carNamesInput = await this.input.getCarNamesInput();
    new CarNamesValidator().validateCarNames(carNamesInput);
    const carNames = new CarNamesParser().parseCarNames(carNamesInput);

    const racingCount = await this.input.getRacingCountInput();
    new RacingCountValidator().validateRacingCount(racingCount);

    progressRacing(carNames, racingCount);
  }
}
