import readlineSync from 'readline-sync';
import dispatcher from './dispatch';
import start from './baseFlow';

export default (gameName) => {
  const Game = dispatcher(gameName);

  console.log('Welcome to the Brain Games!');
  console.log(Game.description);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}\n`);

  start(userName, Game);
};
