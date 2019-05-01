import { getNumber } from '../baseFlow';

const getOperation = () => {
  const operation = ['+', '-', '*'];
  return operation[Math.floor(Math.random() * 3)];
};

const operationMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

class Calc {
  static get description() {
    return 'What is the result of the expression?';
  }

  constructor() {
    this.num1 = getNumber();
    this.num2 = getNumber();
    this.operation = getOperation();
  }

  getQuestion() {
    return `${this.num1} ${this.operation} ${this.num2}`;
  }

  checkAnswer(answer) {
    return this.getAnswer() === Number(answer);
  }

  getAnswer() {
    return operationMap[this.operation](this.num1, this.num2);
  }
}

export default Calc;
