import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../Constants/messages.js';
import { CarNamesValidator } from '../Validation/carNamesValidator.js';
import { RacingCountValidator } from '../Validation/racingCountValidator.js';

export class Input {
  async getValidatedCarNamesInput() {
    while (true) {
      try {
        await this.getCarNamesInput();
        new CarNamesValidator().validateCarNames(this.carNamesInput);
        return this.carNamesInput;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async getCarNamesInput() {
    this.carNamesInput = await Console.readLineAsync(INPUT_MESSAGES.CAR_NAMES);
  }

  async getValidatedRacingCountInput() {
    while (true) {
      try {
        await this.getRacingCountInput();
        new RacingCountValidator().validateRacingCount(this.racingCount);
        return Number(this.racingCount);
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async getRacingCountInput() {
    this.racingCount = await Console.readLineAsync(INPUT_MESSAGES.RACING_COUNT);
  }
}
