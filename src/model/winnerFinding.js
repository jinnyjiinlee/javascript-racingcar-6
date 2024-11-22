export const findWinners = (racingProgression) => {
  // console.log('racingProgression: ', racingProgression)
  const MaxNumber = Math.max(...racingProgression);

  const findIndexArray = racingProgression
    .map((item, index) => {
      if (item === MaxNumber) return index;
      else return -1;
    })
    .filter((item) => item !== -1);

  return findIndexArray;
};
