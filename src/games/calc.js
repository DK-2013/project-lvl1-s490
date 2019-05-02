import { getRandomInt } from '../baseFlow';

const getOperation = () => {
  const operation = ['+', '-', '*'];
  return operation[getRandomInt(3, true)];
};

const operationMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

export default {
  description: 'What is the result of the expression?',

  initGame() {
    const int1 = getRandomInt();
    const int2 = getRandomInt();
    const operation = getOperation();

    return {
      question: `${int1} ${operation} ${int2}`,
      correctAnswer: operationMap[operation](int1, int2),
    };
  },
};
