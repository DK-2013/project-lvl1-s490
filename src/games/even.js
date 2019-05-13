import getRandomInt from '../utils';
import start from '..';

const description = 'Answer "yes" if number even otherwise answer "no"';

const isEven = number => number % 2 === 0;

const initStage = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  start(description, initStage);
};
