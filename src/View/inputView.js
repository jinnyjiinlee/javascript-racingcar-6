import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../Constants/messages.js';

export class Input {
  async getCarNamesInput() {
    return Console.readLineAsync(INPUT_MESSAGES.CAR_NAMES);
  }

  // TODO: 공부하기, 리턴할때는 await 생략 가능?
  async getRacingCountInput() {
    return Console.readLineAsync(INPUT_MESSAGES.RACING_COUNT);
  }
}
