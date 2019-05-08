import readlineSync from 'readline-sync';

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

export const greeting = (description) => {
  console.log('Welcome to the Brain Games!');
  if (description) console.log(description);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}\n`);

  return userName;
};

export default (description, initStage) => {
  const userName = greeting(description);
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
