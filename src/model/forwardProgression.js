import { Console, Random } from '@woowacourse/mission-utils';

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
      console.log();
      this.racingProgression[i] = 0;
    }
  }

  MakeRandomNumberAndProgress() {
    for (let i = 0; i < this.racingCount; i += 1) {
      console.log('this.racingCount: ', this.racingCount);
      for (const i in this.carNames) {
        const randomNumber = Random.pickNumberInRange(0, 9);
        console.log('randomNumber: ', randomNumber);
        if (randomNumber >= 4) {
          this.racingProgression[i] += 1;
          console.log('this.racingProgression: ', this.racingProgression);
        }
      }
    }
  }

  printExecutionResult() {
    Console.print('\n실행결과');
    for (const i in this.carNames) {
      Console.print(
        `${this.carNames[i]} : ${'-'.repeat(this.racingProgression[i])}`
      );
    }
    Console.print('');
  }

  getIndexOfMaxValue() {
    const MaxNumber = Math.max(...this.racingProgression);

    const findIndexArray = this.racingProgression
      .map((item, index) => {
        if (item === MaxNumber) return index;
        else return -1;
      })
      .filter((item) => item !== -1);
  }

  printFinalWinner() {
    const finalWinners = [];

    for (let i = 0; i < findIndexArray.length; i += 1) {
      finalWinners.push(this.carNames[findIndexArray[i]]);
    }

    Console.print(`최종 우승자 : ${finalWinners}`);
  }
}
