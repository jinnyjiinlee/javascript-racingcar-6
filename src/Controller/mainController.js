import { Input } from '../View/inputView.js';
import { CarNamesValidator } from '../Validation/carNamesValidator.js';
import { parseCarNames } from '../Model/carNamesParser.js';
import { RacingCountValidator } from '../Validation/racingCountValidator.js';
import { RacingHandler } from '../Model/forwardProgression.js';
import { findWinners } from '../Model/winnerFinding.js';
import { printFinalWinners, printRaceStatus } from '../View/outputView.js';

export class MainController {
  constructor() {
    this.input = new Input();
  }

  async initializeProgram() {
    const carNamesInput = await this.input.getCarNamesInput();
    new CarNamesValidator().validateCarNames(carNamesInput);
    const parsedCarNames = parseCarNames(carNamesInput);

    const racingCount = await this.input.getRacingCountInput();
    new RacingCountValidator().validateRacingCount(racingCount);

    const raceStatus = new RacingHandler().runRace(parsedCarNames, racingCount);
    const findIndexArray = findWinners(raceStatus);

    printRaceStatus(parsedCarNames, raceStatus);
    printFinalWinners(parsedCarNames, findIndexArray);
  }
}
