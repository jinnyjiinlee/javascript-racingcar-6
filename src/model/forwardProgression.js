import { Console, Random } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constants/messages.js';

export class racingHandler {
  progressRacing = (carNames, racingCount) => {
    this.carNames = carNames;
    this.racingCount = racingCount;
    this.initializeRacingProgression();
    this.MakeRandomNumberAndProgress();
    this.printExecutionResult();
    this.getIndexOfMaxValue();
    this.MakeRandomNumberAndProgress();
    this.printFinalWinner();
  };

  initializeRacingProgression() {
    this.racingProgression = [];
    for (const i in this.carNames) {
      this.racingProgression[i] = 0;
    }
  }

  MakeRandomNumberAndProgress() {
    for (let i = 0; i < this.racingCount; i += 1) {
      for (const i in this.carNames) {
        const randomNumber = Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) {
          this.racingProgression[i] += 1;
        }
      }
    }
  }

  printExecutionResult() {
    Console.print(MESSAGE.EXECUTION_RESULT);
    for (const i in this.carNames) {
      Console.print(
        `${this.carNames[i]} : ${'-'.repeat(this.racingProgression[i])}`
      );
    }
    Console.print('');
  }

  getIndexOfMaxValue() {
    const MaxNumber = Math.max(...this.racingProgression);

    this.findIndexArray = this.racingProgression
      .map((item, index) => {
        if (item === MaxNumber) return index;
        else return -1;
      })
      .filter((item) => item !== -1);
  }

  printFinalWinner() {
    const finalWinners = [];

    for (let i = 0; i < this.findIndexArray.length; i += 1) {
      finalWinners.push(this.carNames[this.findIndexArray[i]]);
    }

    Console.print(`${MESSAGE.FINAL_WINNER} : ${finalWinners}`);
  }
}
