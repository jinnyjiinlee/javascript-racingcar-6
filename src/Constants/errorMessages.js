const ERROR_PREFIX = '[ERROR] ';

export const ERROR_MESSAGES = {
  COMMON: {
    NO_INPUT: `${ERROR_PREFIX} 빈 값을 입력하셨습니다. \n`,
  },

  CAR_NAMES: {
    ONLY_NUMBER_INPUT: `${ERROR_PREFIX} 숫자를 입력하셨습니다. \n`,
    CONTAIN_NUMBER_INPUT: `${ERROR_PREFIX} 숫자가 포함된 문자를 입력하셨습니다. \n`,
    LENGTH_EXCEEDED: `${ERROR_PREFIX} 자동차 이름을 5자를 초과하여 입력하였습니다. \n`,
    DUPLICATION: `${ERROR_PREFIX} 자동차 이름이 중복되었습니다. \n`,
  },

  RACE_COUNT: {
    NO_NUMBER_INPUT: `${ERROR_PREFIX} '숫자를 입력하지 않으셨습니다. \n`,
  },
};
