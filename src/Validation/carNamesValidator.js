import { ERRORS } from '../Constants/errorMessages.js';
import { CarNamesParser } from '../Model/carNamesParser.js';

export class CarNamesValidator {
  getParseCarNames() {
    this.parseCarNames = new CarNamesParser().parseCarNames(this.carNamesInput);
  }

  isNotEmpty() {
    return this.parseCarNames !== '';
  }

  // TODO: 정리해서 공부하기
  hasNoNumbers() {
    return this.parseCarNames.every((carName) => isNaN(Number(carName)));
  }

  isValidLength() {
    return this.parseCarNames.every((carName) => carName.length <= 5);
  }

  getValidationChecks() {
    return [
      [!this.isNotEmpty(), ERRORS.NO_INPUT],
      [!this.hasNoNumbers(), ERRORS.NUMBER_INPUT],
      [!this.isValidLength(), ERRORS.LENGTH_EXCEEDED],
    ];
  }

  validateCarNames(carNamesInput) {
    this.carNamesInput = carNamesInput;
    this.getParseCarNames();

    this.getValidationChecks().forEach((arr) => {
      if (arr[0]) throw new Error(arr[1]);
    });

    return true;
  }
}
