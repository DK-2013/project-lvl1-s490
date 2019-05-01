import gameEven from './games/even';
import gameCalc from './games/calc';
import gameGcd from './games/gcd';
import gameProgr from './games/progression';

export default (gameName) => {
  switch (gameName) {
    case 'even': return gameEven;
    case 'calc': return gameCalc;
    case 'gcd': return gameGcd;
    case 'progression': return gameProgr;
    default: return {
      description: '',
      run: () => {},
    };
  }
};
