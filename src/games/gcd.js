import { getNumber } from '../baseFlow';

const calcGcd = (a, b) => {
  if (!(a % b)) return b;
  return calcGcd(b, a % b);
};

class BrainGcd {
  static get description() {
    return 'Find the greatest common divisor of given numbers.';
  }

  constructor() {
    this.num1 = getNumber();
    this.num2 = getNumber();
  }

  getQuestion() {
    return `${this.num1}, ${this.num2}`;
  }

  checkAnswer(answer) {
    return this.getAnswer() === Number(answer);
  }

  getAnswer() {
    return calcGcd(...[this.num1, this.num2].sort((a, b) => a - b));
  }
}

export default BrainGcd;
