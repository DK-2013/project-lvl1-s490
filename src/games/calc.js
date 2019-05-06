import start, { getRandomInt } from '../baseFlow';

const operationMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandomOperation = () => {
  const operations = Object.keys(operationMap);
  const randomIdx = getRandomInt(0, operations.length - 1);
  return operations[randomIdx];
};


const initStage = () => {
  const int1 = getRandomInt();
  const int2 = getRandomInt();
  const operation = getRandomOperation();
  const question = `${int1} ${operation} ${int2}`;
  const correctAnswer = operationMap[operation](int1, int2);

  return { question, correctAnswer };
};

export default {
  description: 'What is the result of the expression?',
  initGame: userName => start(userName, initStage),
};
