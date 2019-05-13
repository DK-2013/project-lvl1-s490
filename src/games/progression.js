import getRandomInt from '../utils';
import start from '..';

const description = 'What number is missing in the progression?';

const progressionLength = 10;
const progressionMaxBegin = 10;
const progressionMaxDif = 7;

const getProgression = ({ begin, dif, len }) => {
  const stuff = [...Array(len).keys()];
  return stuff.map(a => begin + a * dif);
};

const initStage = () => {
  const progressionCfg = {
    begin: getRandomInt(progressionMaxBegin),
    dif: getRandomInt(progressionMaxDif),
    len: progressionLength,
  };
  const progression = getProgression(progressionCfg);
  const excludeIdx = getRandomInt(0, progressionLength - 1);
  const predicate = (a, idx) => (idx === excludeIdx ? '..' : a);
  const question = progression.map(predicate).join(' ');
  const correctAnswer = String(progression[excludeIdx]);

  return { question, correctAnswer };
};

export default () => {
  start(description, initStage);
};
