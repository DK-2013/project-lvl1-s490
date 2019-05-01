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
};

export default gameName => map[gameName];
