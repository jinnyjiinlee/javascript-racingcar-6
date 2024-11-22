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

  // eslint-disable-next-line max-lines-per-function
  async initializeProgram() {
    // 자동차 이름 입력 및 검증
    const carNamesInput = await this.input.getCarNamesInput();
    const parsedCarNames = parseCarNames(carNamesInput);
    new CarNamesValidator().validateCarNames(carNamesInput, parsedCarNames);

    // 레이싱 횟수 입력 및 검증
    const racingCount = await this.input.getRacingCountInput();
    new RacingCountValidator().validateRacingCount(racingCount);

    // 레이싱 진행 및 결과 처리
    const raceStatus = new RacingHandler().runRace(parsedCarNames, racingCount);
    const findWinnerIndex = findWinners(raceStatus);

    // 결과 출력
    this.output.printRaceStatus(parsedCarNames, raceStatus);
    this.output.printFinalWinners(parsedCarNames, findWinnerIndex);
  }
}
