import { Input } from '../View/inputView.js';
import { Output } from '../View/outputView.js';

import { parseCarNames } from '../Model/carNamesParser.js';
import { RacingHandler } from '../Model/forwardProgression.js';
import { findWinners } from '../Model/winnerFinding.js';

import { CarNamesValidator } from '../Validation/carNamesValidator.js';
import { RacingCountValidator } from '../Validation/racingCountValidator.js';

export class MainController {
  constructor() {
    this.input = new Input();
    this.output = new Output();
  }

  async initializeProgram() {
    const carNamesInput = await this.input.getCarNamesInput();
    new CarNamesValidator().validateCarNames(carNamesInput);
    const parsedCarNames = parseCarNames(carNamesInput);

    const racingCount = await this.input.getRacingCountInput();
    new RacingCountValidator().validateRacingCount(racingCount);

    const raceStatus = new RacingHandler().runRace(parsedCarNames, racingCount);
    const findIndexArray = findWinners(raceStatus);

    this.output.printRaceStatus(parsedCarNames, raceStatus);
    this.output.printFinalWinners(parsedCarNames, findIndexArray);
  }
}
