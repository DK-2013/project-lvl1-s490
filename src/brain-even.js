import readlineSync from 'readline-sync';

const maxSteps = 3;
const getNumber = () => Math.floor(Math.random() * 100);
const ask = () => {
  const number = getNumber();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = number % 2 ? 'no' : 'yes';
  const isCorrect = () => correctAnswer === answer;
  if (isCorrect()) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
  return isCorrect();
};

export default {
  description: 'Answer "yes" if number even otherwise answer "no"',
  run: (userName) => {
    const iter = (stepCnt) => {
      if (stepCnt === maxSteps) {
        console.log(`Congratulations, ${userName}!`);
        return;
      }
      const correct = ask();
      if (correct) iter(stepCnt + 1);
      else console.log(`Let's try again, ${userName}!`);
    };
    iter(0);
  },
};
