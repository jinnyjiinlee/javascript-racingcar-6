import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../Constants/messages.js';
import { CarNamesValidator } from '../Validation/carNamesValidator.js';
import { RacingCountValidator } from '../Validation/racingCountValidator.js';

export class Input {
  async getCarNamesInput() {
    return await Console.readLineAsync(INPUT_MESSAGES.CAR_NAMES);
  }

  async getRacingCountInput() {
    return await Console.readLineAsync(INPUT_MESSAGES.RACING_COUNT);
  }
}
