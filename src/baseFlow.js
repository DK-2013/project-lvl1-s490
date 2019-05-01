import readlineSync from 'readline-sync';

export const getNumber = () => Math.floor(Math.random() * 30);
const maxRound = 3;
const ask = (stage) => {
  console.log(`Question: ${stage.getQuestion()}`);
  const answer = readlineSync.question('Your answer: ');
  if (stage.checkAnswer(answer)) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${stage.getAnswer()}'.`);
  }
  return stage.checkAnswer(answer);
};

export default (userName, Stage) => {
  const iter = (round) => {
    if (round === maxRound) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const correct = ask(new Stage());
    if (correct) iter(round + 1);
    else console.log(`Let's try again, ${userName}!`);
  };
  iter(0);
};
