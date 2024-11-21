import { Console, Random } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constants/messages.js';
import { printFinalWinners } from '../View/outputView.js';

export class RacingHandler {
  startRace = (carNames, racingCount) => {
    this.carNames = carNames;
    this.racingCount = racingCount;
    this.resetRaceProgress();
    this.moveCars();
    this.printRaceStatus();
    this.findWinners();
    printFinalWinners(this.carNames, this.findIndexArray);
  };

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

  printRaceStatus() {
    Console.print(MESSAGE.EXECUTION_RESULT);
    for (const i in this.carNames) {
      Console.print(
        `${this.carNames[i]} : ${'-'.repeat(this.racingProgression[i])}`
      );
    }
    Console.print('');
  }

  findWinners() {
    const MaxNumber = Math.max(...this.racingProgression);

    this.findIndexArray = this.racingProgression
      .map((item, index) => {
        if (item === MaxNumber) return index;
        else return -1;
      })
      .filter((item) => item !== -1);
  }
}
