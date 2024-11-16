import { ERRORS } from '../Constants/errorMessages.js';
import { ParseCarNames } from '../model/parseCarNames.js';

export class CarNamesValidator {
  validateCarNames(carNamesInput) {
    this.carNamesInput = carNamesInput;

    this.parseCarNames();
    const validationRules = this.getValidationRules();

    validationRules.forEach((arr) => {
      if (arr[0]) throw new Error(arr[1]);
    });

    return true;
  }

  parseCarNames() {
    this.parseCarNames = new ParseCarNames().parseCarNames(this.carNamesInput);
  }

  isValidEmptyInput() {
    return this.carNamesInput !== '';
  }

  // TODO: 정리해서 공부하기
  isValidNoNumber() {
    return this.parseCarNames.every((carName) => {
      return isNaN(Number(carName));
    });
  }

  isValidLength() {
    this.parseCarNames.every((carName) => {
      return carName.length <= 5;
    });
  }

  getValidationRules() {
    return [
      [!this.isValidEmptyInput(), ERRORS.NO_INPUT],
      [!this.isValidNoNumber(), ERRORS.NUMBER_INPUT],
      [!this.isValidLength(), ERRORS.LENGTH_EXCEEDED],
    ];
  }
}
