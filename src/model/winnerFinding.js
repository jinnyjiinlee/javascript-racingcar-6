const findIndexArray = (MaxNumber, racingProgression) =>
  racingProgression
    .map((item, index) => {
      if (item === MaxNumber) return index;
      return -1;
    })
    .filter((item) => item !== -1);

export const findWinners = (racingProgression) => {
  const MaxNumber = Math.max(...racingProgression);
  const winnersIndex = findIndexArray(MaxNumber, racingProgression);

  return winnersIndex;
};
