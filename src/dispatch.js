import gameEven from './games/even';
import gameCalc from './games/calc';

export default (gameName) => {
  switch (gameName) {
    case 'even': return gameEven;
    case 'calc': return gameCalc;
    default: return {
      description: '',
      run: () => {},
    };
  }
};
