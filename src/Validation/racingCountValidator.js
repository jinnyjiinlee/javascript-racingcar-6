import { ERROR_MESSAGES } from '../Constants/errorMessages.js';

export class RacingCountValidator {
  validateRacingCount(racingCountInput) {
    this.racingCount = racingCountInput;

    this.getValidationChecks().forEach((arr) => {
      if (arr[0]) throw new Error(arr[1]);
    });
  }

  getValidationChecks() {
    return [
      [this.isEmpty(), ERROR_MESSAGES.COMMON.NO_INPUT],
      [this.isNumeric(), ERROR_MESSAGES.RACE_COUNT.NO_NUMBER_INPUT],
    ];
  }

  isEmpty() {
    return this.racingCount === '';
  }

  // TODO: 다시 공부
  isNumeric() {
    return Number.isNaN(Number(this.racingCount));
  }
}
