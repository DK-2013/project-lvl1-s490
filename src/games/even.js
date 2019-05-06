import start, { getRandomInt } from '../baseFlow';

const isEven = number => Boolean(number % 2);

const initStage = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? 'no' : 'yes';

  return { question, correctAnswer };
};

export default {
  description: 'Answer "yes" if number even otherwise answer "no"',
  initGame: userName => start(userName, initStage),
};
