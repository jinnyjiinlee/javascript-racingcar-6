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
    for (const i in this.carNames) {
      this.racingProgression[i] = 0;
    }
  }

  moveCars() {
    for (let i = 0; i < this.racingCount; i += 1) {
      for (const i in this.carNames) {
        const randomNumber = Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) {
          this.racingProgression[i] += 1;
        }
      }
    }
  }
}
