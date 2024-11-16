import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../Constants/messages.js';

export class Input {
  async getCarNamesInput() {
    await Console.readLineAsync(INPUT_MESSAGES.CAR_NAMES);
  }

  async getMatchCountInput() {
    await Console.readLineAsync(INPUT_MESSAGES.MATCH_COUNT);
  }
}
