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
    turn.giveFeedback();
    this.deck.cards.shift();
  };

  calculatePercentCorrect() {

  };

  endRound() {

  };
};

module.exports = Round
