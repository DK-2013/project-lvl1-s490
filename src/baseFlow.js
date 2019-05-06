import readlineSync from 'readline-sync';

export const getRandomInt = (...args) => {
  const defaultRange = [1, 30];
  let min; let max;
  if (args.length === 0) [min, max] = defaultRange;
  if (args.length === 1) [min, max] = [defaultRange[0], args[0]];
  if (args.length > 1) [min, max] = args;
  return Math.floor(Math.random() * max) + min;
};

const startStage = 0;
const endStage = 3;
const runStage = ({ question, correctAnswer }) => {
  console.log(`Question: ${question}`);

  const answer = readlineSync.question('Your answer: ');
  const isCorrect = String(correctAnswer) === answer;
  const result = isCorrect ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;

  console.log(result);
  return isCorrect;
};

export default (userName, initStage) => {
  const iter = (stageCnt) => {
    if (stageCnt === endStage) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const correct = runStage(initStage());
    if (correct) iter(stageCnt + 1);
    else console.log(`Let's try again, ${userName}!`);
  };
  iter(startStage);
};
