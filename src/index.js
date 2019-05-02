import readlineSync from 'readline-sync';
import dispatcher from './dispatch';
import start from './baseFlow';

export default (gameName) => {
  const { description, initGame } = dispatcher(gameName);

  console.log('Welcome to the Brain Games!');
  if (description) console.log(description);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}\n`);

  if (initGame) start(userName, initGame);
};
