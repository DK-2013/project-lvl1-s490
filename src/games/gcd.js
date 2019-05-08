import getRandomInt from '../utils';
import start from '..';

const description = 'Find the greatest common divisor of given numbers.';


const calcGcd = (...args) => {
  const iter = (a, b) => {
    if (!(a % b)) return b;
    return iter(b, a % b);
  };
  return iter(Math.max(...args), Math.min(...args));
};

const initStage = () => {
  const int1 = getRandomInt();
  const int2 = getRandomInt();
  const question = `${int1}, ${int2}`;
  const correctAnswer = calcGcd(int1, int2);

  return { question, correctAnswer };
};

export default () => {
  start(description, initStage);
};
