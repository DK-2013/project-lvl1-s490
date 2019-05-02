import readlineSync from 'readline-sync';

export const getRandomInt = (max = 30, fromZero = false) => Math[fromZero ? 'floor' : 'ceil'](Math.random() * max);

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

export default (userName, initGame) => {
  const iter = (stageCnt) => {
    if (stageCnt === endStage) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const correct = runStage(initGame());
    if (correct) iter(stageCnt + 1);
    else console.log(`Let's try again, ${userName}!`);
  };
  iter(startStage);
};
