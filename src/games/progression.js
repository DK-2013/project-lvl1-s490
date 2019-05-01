const getProgression = () => {
  const start = Math.ceil(Math.random() * 10);
  const dif = Math.ceil(Math.random() * 7);
  const stuff = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return stuff.map(a => start + a * dif);
};

class Progression {
  static get description() {
    return 'What number is missing in the progression?';
  }

  constructor() {
    this.progression = getProgression();
    this.exludeIdx = Math.floor(Math.random() * 10);
  }

  getQuestion() {
    const excludeCond = (a, idx) => (idx === this.exludeIdx ? '..' : a);
    return this.progression.map(excludeCond).join(' ');
  }

  checkAnswer(answer) {
    return this.getAnswer() === Number(answer);
  }

  getAnswer() {
    return this.progression[this.exludeIdx];
  }
}

export default Progression;
