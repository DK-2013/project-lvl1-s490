import { getRandomInt } from '../baseFlow';

export default {
  description: 'Answer "yes" if number even otherwise answer "no"',

  initGame: () => {
    const int = getRandomInt();

    return {
      question: int,
      correctAnswer: int % 2 ? 'no' : 'yes',
    };
  },
};
