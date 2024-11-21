import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constants/messages.js';

export const printRaceStatus = (carNames, racingProgression) => {
  Console.print(MESSAGE.EXECUTION_RESULT);
  for (const i in carNames) {
    Console.print(`${carNames[i]} : ${'-'.repeat(racingProgression[i])}`);
  }
  Console.print('');
};

export const printFinalWinners = (carNames, findIndexArray) => {
  const finalWinners = [];

  for (let i = 0; i < findIndexArray.length; i += 1) {
    finalWinners.push(carNames[findIndexArray[i]]);
  }
  // TODO: join 정리
  Console.print(`${MESSAGE.FINAL_WINNER} : ${finalWinners.join(', ')}`);
};
