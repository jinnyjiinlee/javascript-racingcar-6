import { Console, Random } from '@woowacourse/mission-utils';

export const progressRacing = (carNames, racingCount) => {
  const racingProgression = [];
  
  for (const i in carNames) {
    racingProgression[i] = 0;
  }
  Console.print('\n실행결과');

  for (let i = 0; i < racingCount; i += 1) {
    for (const i in carNames) {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber > 4) {
        racingProgression[i] += 1;
      }
    }
  }

  for (const i in carNames) {
    Console.print(`${carNames[i]} : ${'-'.repeat(racingProgression[i])}`);
  }
  Console.print('');

  const MaxNumber = Math.max(...racingProgression);

  const findIndexArray = racingProgression
    .map((item, index) => {
      if (item === MaxNumber) return index;
      else return -1;
    })
    .filter((item) => item !== -1);

  const finalWinners = [];

  for (let i = 0; i < findIndexArray.length; i += 1) {
    finalWinners.push(carNames[findIndexArray[i]]);
  }

  Console.print(`최종 우승자 : ${finalWinners}`);
};
