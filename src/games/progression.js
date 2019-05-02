import { getRandomInt } from '../baseFlow';

const getProgression = () => {
  const start = getRandomInt(10);
  const dif = getRandomInt(7);
  const stuff = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return stuff.map(a => start + a * dif);
};

export default {
  description: 'What number is missing in the progression?',

  initGame() {
    const progression = getProgression();
    const excludeIdx = getRandomInt(10, true);
    const predicate = (a, idx) => (idx === excludeIdx ? '..' : a);

    return {
      question: progression.map(predicate).join(' '),
      correctAnswer: progression[excludeIdx],
    };
  },
};
