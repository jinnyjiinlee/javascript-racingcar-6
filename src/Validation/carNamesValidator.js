import { ERRORS } from '../Constants/errorMessages.js';

export class CarNamesValidator {
  // TODO: 트러블 슈팅 정리
  isEmpty() {
    return this.parseCarNames[0] === '';
  }

  // isEmpty() {
  //   return this.parseCarNames === '';
  // }

  // TODO: 정리해서 공부하기 every 가 아니라 some
  hasNumbers() {
    return this.parseCarNames.some((carName) => !isNaN(Number(carName)));
  }

  isValidLength() {
    return this.parseCarNames.some((carName) => carName.length > 5);
  }

  // TODO: ==! 이걸로해서 안됨 !==로 변경
  isDuplicatedName() {
    const set = new Set(this.parseCarNames);

    if (this.parseCarNames.length !== set.size) {
      return true;
    }

    return false;
  }

  getValidationChecks() {
    return [
      [this.isEmpty(), ERRORS.NO_INPUT],
      [this.hasNumbers(), ERRORS.NUMBER_INPUT],
      [this.isValidLength(), ERRORS.LENGTH_EXCEEDED],
      [this.isDuplicatedName(), ERRORS.DUPLICATION],
    ];
  }

  validateCarNames(carNamesInput, parsedCarNames) {
    this.carNamesInput = carNamesInput;
    this.parseCarNames = parsedCarNames;

    this.getValidationChecks().forEach((arr) => {
      if (arr[0]) throw new Error(arr[1]);
    });

    return true;
  }
}
