import { getNumber } from '../baseFlow';

class BrainEven {
  static get description() {
    return 'Answer "yes" if number even otherwise answer "no"';
  }

  constructor() {
    this.number = getNumber();
  }

  getQuestion() {
    return this.number;
  }

  checkAnswer(answer) {
    return this.getAnswer() === answer;
  }

  getAnswer() {
    return this.number % 2 ? 'no' : 'yes';
  }
}

export default BrainEven;
