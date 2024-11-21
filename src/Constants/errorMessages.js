const ERROR_PREFIX = '[ERROR] ';

export const ERRORS = {
  NO_INPUT: ERROR_PREFIX + '빈 값을 입력하셨습니다.' + `\n`,
  NUMBER_INPUT: ERROR_PREFIX + '숫자를 입력하셨습니다.' + `\n`,
  LENGTH_EXCEEDED:
    ERROR_PREFIX + '자동차 이름을 5자를 초과하여 입력하였습니다.' + `\n`,
  DUPLICATION: ERROR_PREFIX + '자동차 이름이 중복되었습니다.' + `\n`,

  NO_NUMBER_INPUT: ERROR_PREFIX + '숫자를 입력하지 않으셨습니다.' + `\n`,
};
