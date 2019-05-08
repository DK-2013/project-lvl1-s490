import getRandomInt from '../utils';
import start from '..';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = () => {
  const begin = getRandomInt(10);
  const dif = getRandomInt(7);
  const stuff = [...Array(progressionLength).keys()];
  return stuff.map(a => begin + a * dif);
};

const initStage = () => {
  const progression = getProgression();
  const excludeIdx = getRandomInt(0, progressionLength - 1);
  const predicate = (a, idx) => (idx === excludeIdx ? '..' : a);
  const question = progression.map(predicate).join(' ');
  const correctAnswer = progression[excludeIdx];

  return { question, correctAnswer };
};

export default () => {
  start(description, initStage);
};
