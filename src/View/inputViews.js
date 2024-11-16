import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../Constants/messages.js';
import { CarNamesValidator } from '../Validation/carNamesValidator.js';

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

  async getMatchCountInput() {
    await Console.readLineAsync(INPUT_MESSAGES.MATCH_COUNT);
  }
}
