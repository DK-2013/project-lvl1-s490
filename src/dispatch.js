import gameEven from './games/even';
import gameCalc from './games/calc';
import gameGcd from './games/gcd';

export default (gameName) => {
  switch (gameName) {
    case 'even': return gameEven;
    case 'calc': return gameCalc;
    case 'gcd': return gameGcd;
    default: return {
      description: '',
      run: () => {},
    };
  }
};
