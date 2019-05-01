const primeNumbersMap = {
  2: true,
  3: true,
  5: true,
  7: true,
  11: true,
  13: true,
  17: true,
  19: true,
  23: true,
  29: true,
  31: true,
  37: true,
  41: true,
  43: true,
  47: true,
  53: true,
  59: true,
  61: true,
  67: true,
  71: true,
  73: true,
  79: true,
  83: true,
  89: true,
  97: true,
};


class Prime {
  static get description() {
    return 'Answer "yes" if given number is prime. Otherwise answer "no".';
  }

  constructor() {
    this.number = Math.ceil(Math.random() * 100);
  }

  getQuestion() {
    return this.number;
  }

  checkAnswer(answer) {
    return this.getAnswer() === answer;
  }

  getAnswer() {
    return primeNumbersMap[this.number] ? 'yes' : 'no';
  }
}

export default Prime;
