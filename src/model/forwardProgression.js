import { Random } from '@woowacourse/mission-utils';

export class RacingHandler {
  runRace(carNames, racingCount) {
    this.carNames = carNames;
    this.racingCount = racingCount;
    this.resetRaceProgress();
    this.moveCars();

    return this.racingProgression;
  }

  resetRaceProgress() {
    this.racingProgression = [];

    this.carNames.forEach(() => {
      this.racingProgression.push(0);
    });
  }

  // TODO: 공부 +=는 문자열 결합 연산이므로, this.racingProgression이 배열이라도 문자열로 변환되어 연산됩니다.
  // forEach가 아닌 map을 사용해야 한다.!
  moveCars() {
    for (let count = 0; count < this.racingCount; count += 1) {
      this.racingProgression.forEach((_, index) => {
        const randomNumber = Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) {
          this.racingProgression[index] += 1;
        }
      });
    }
  }
}
