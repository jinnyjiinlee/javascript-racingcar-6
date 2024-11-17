import { Random } from '@woowacourse/mission-utils';

export const progressRacing = (carNames, racingCount) => {
  const racingProgression = [];

  for (const i in carNames) {
    racingProgression[i] = 0;
  }
  console.log('\n실행결과');

  for (let i = 0; i < racingCount; i += 1) {
    for (const i in carNames) {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber > 4) {
        racingProgression[i] += 1;
      }
    }

    for (const i in carNames) {
      console.log(`${carNames[i]} : ${'-'.repeat(racingProgression[i])}`);
    }
    console.log('');
  }
};
