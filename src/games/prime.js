import start, { getRandomInt } from '../baseFlow';

const isPrime = (number) => {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;

  const fn = (cnt) => {
    if (cnt * cnt > number) return true;
    if (number % cnt === 0 || number % (cnt + 2) === 0) return false;
    return fn(cnt + 6);
  };

  return fn(5, false);
};


const initStage = () => {
  const question = getRandomInt(100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  initGame: userName => start(userName, initStage),
};
