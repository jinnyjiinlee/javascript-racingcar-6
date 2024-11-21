export const parseCarNames = (carNames) => {
  return carNames.split(',').map((carName) => carName.trim());
}