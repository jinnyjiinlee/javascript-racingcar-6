const findWinnerIndex = (RaceMaxNumber, racingProgression) =>
  racingProgression
    .map((item, index) => {
      if (item === RaceMaxNumber) return index;
      return -1;
    })
    .filter((item) => item !== -1);

export const findWinners = (racingProgression) => {
  const RaceMaxNumber = Math.max(...racingProgression);
  const winnersIndex = findWinnerIndex(RaceMaxNumber, racingProgression);

  return winnersIndex;
};
