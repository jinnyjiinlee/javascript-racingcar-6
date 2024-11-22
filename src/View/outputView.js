import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constants/messages.js';

export class Output {
  printRaceStatus(carNames, racingProgression) {
    Console.print(MESSAGE.EXECUTION_RESULT);

    // TODO: for in 을 사용하면 상속된 속성도 돌 수 있어서 위험하다. for in -> forEach로 변경
    carNames.forEach((carName, index) => {
      Console.print(`${carName} : ${'-'.repeat(racingProgression[index])}`);
    });
    Console.print('');
  }

  printFinalWinners(carNames, findWinnerIndex) {
    const finalWinners = [];

    for (let i = 0; i < findWinnerIndex.length; i += 1) {
      finalWinners.push(carNames[findWinnerIndex[i]]);
    }
    // TODO: join 정리
    Console.print(`${MESSAGE.FINAL_WINNER} : ${finalWinners.join(', ')}`);
  }
}
