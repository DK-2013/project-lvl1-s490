import readlineSync from 'readline-sync';
import brainEven from './brain-even';

const getGame = (name) => {
  switch (name) {
    case 'even': return brainEven;
    default: return { run: () => {} };
  }
};

export default (gameName) => {
  const game = getGame(gameName);

  console.log('Welcome to the Brain Games!');
  console.log(`${game.description || ''}`);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}\n`);

  game.run(userName);
};
