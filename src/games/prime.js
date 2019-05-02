import { getRandomInt } from '../baseFlow';

const primeNumbersMap = {
  2: true,
  3: true,
  5: true,
  7: true,
  11: true,
  13: true,
  17: true,
  19: true,
  23: true,
  29: true,
  31: true,
  37: true,
  41: true,
  43: true,
  47: true,
  53: true,
  59: true,
  61: true,
  67: true,
  71: true,
  73: true,
  79: true,
  83: true,
  89: true,
  97: true,
};


export default {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',

  initGame() {
    const int = getRandomInt(100);

    return {
      question: int,
      correctAnswer: primeNumbersMap[int] ? 'yes' : 'no',
    };
  },
};
