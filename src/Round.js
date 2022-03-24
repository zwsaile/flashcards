const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  };

  returnCurrentCard() {
    return this.deck.cards[0]
  };

  takeTurn(guess) {
    this.turns += 1;
    const turn = new Turn(guess, this.deck.cards[0]);
    turn.evaluateGuess();
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.unshift(guess)
    }
    this.deck.cards.shift();
    return turn.giveFeedback();
  };

  calculatePercentCorrect() {
    const percentIncorrect = (this.incorrectGuesses.length / this.turns) * 100;
    const percentCorrect = `${100 - percentIncorrect.toFixed()}%`;
    return percentCorrect
  };

  endRound() {
    const winMsg = `**Round over!** You answered ${this.calculatePercentCorrect()} of the questions correctly!`;
    console.log(winMsg);
    return winMsg;
  };
};

module.exports = Round
