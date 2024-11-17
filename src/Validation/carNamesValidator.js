import { ERRORS } from '../Constants/errorMessages.js';
import { CarNamesParser } from '../Model/carNamesParser.js';

export class CarNamesValidator {
  validateCarNames(carNamesInput) {
    this.carNamesInput = carNamesInput;

    this.parseCarNames();
    const validationRules = this.getValidationChecks();

    validationRules.forEach((ele) => {
      if (ele[0]) throw new Error(ele[1]);
    });

    return true;
  }

  parseCarNames() {
    this.parseCarNames = new CarNamesParser().parseCarNames(this.carNamesInput);
  }

  isNotEmpty() {
    return this.carNamesInput !== '';
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
}
