import { getRandomInt } from '../baseFlow';

const calcGcd = (a, b) => {
  if (!(a % b)) return b;
  return calcGcd(b, a % b);
};

export default {
  description: 'Find the greatest common divisor of given numbers.',

  initGame() {
    const int1 = getRandomInt();
    const int2 = getRandomInt();

    return {
      question: `${int1}, ${int2}`,
      correctAnswer: calcGcd(...[int1, int2].sort((a, b) => a - b)),
    };
  },
};
