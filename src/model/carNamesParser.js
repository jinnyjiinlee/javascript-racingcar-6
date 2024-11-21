export class CarNamesParser {
  constructor() {}

  parseCarNames(carNamesInput) {
    this.carNames = carNamesInput;
    this.splitComma();
    return this.trimCommaSplit;
  }

  splitComma() {
    const commaSplit = this.carNames.split(',');
    this.trimCommaSplit = commaSplit.map((carName) => carName.trim());
  }
}


