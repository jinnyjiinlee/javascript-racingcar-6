import { ERRORS } from '../Constants/errorMessages.js';

export class RacingCountValidator {
  validateRacingCount(racingCountInput) {
    this.racingCount = racingCountInput;

    this.getValidationChecks().forEach((arr) => {
      if (arr[0]) throw new Error(arr[1]);
    });
  }

  // TODO: 다시 공부
  isNumber() {
    return !isNaN(this.racingCount);
  }

  isNotEmpty() {
    return this.racingCount !== '';
  }

  getValidationChecks() {
    return [
      [!this.isNotEmpty(), ERRORS.NO_INPUT],
      [!this.isNumber(), ERRORS.NO_NUMBER_INPUT],
    ];
  }
}