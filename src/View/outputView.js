import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constants/messages.js';

export const printFinalWinners = (carNames, findIndexArray) => {
  const finalWinners = [];

  for (let i = 0; i < findIndexArray.length; i += 1) {
    finalWinners.push(carNames[findIndexArray[i]]);
  }
  // TODO: join 정리
  Console.print(`${MESSAGE.FINAL_WINNER} : ${finalWinners.join(', ')}`);
};
