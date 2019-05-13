import readlineSync from 'readline-sync';

const startStage = 0;
const endStage = 3;
const runStage = (question, correctAnswer) => {
  if (typeof correctAnswer !== 'string') throw new Error('Type of correctAnswer must be string.');
  console.log(`Question: ${question}`);

  const answer = readlineSync.question('Your answer: ');
  const isCorrect = correctAnswer === answer;
  const result = isCorrect ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;

  console.log(result);
  return isCorrect;
};

const greeting = (description) => {
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
    const { question, correctAnswer } = initStage();
    const isCorrect = runStage(question, correctAnswer);
    if (isCorrect) iter(stageCnt + 1);
    else console.log(`Let's try again, ${userName}!`);
  };
  iter(startStage);
};
