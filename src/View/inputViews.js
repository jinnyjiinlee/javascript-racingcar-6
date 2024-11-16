import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../Constants/messages.js';

export class Input {
  async getCarNamesInput() {
    Console.readLineAsync(INPUT_MESSAGES.CAR_NAMES);
  }
}
