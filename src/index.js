import readlineSync from 'readline-sync';
import gameEven from './games/even';
import gameCalc from './games/calc';
import gameGcd from './games/gcd';
import gameProgr from './games/progression';
import gamePrime from './games/prime';

const map = {
  even: gameEven,
  calc: gameCalc,
  gcd: gameGcd,
  progression: gameProgr,
  prime: gamePrime,
  greeting: {},
};

export default (gameName) => {
  const { description, initGame } = map[gameName];

  console.log('Welcome to the Brain Games!');
  if (description) console.log(description);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}\n`);

  if (initGame) initGame(userName);
};
