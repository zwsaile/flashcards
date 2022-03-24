const data = require('./data');
const util = require('./util');
const prototypeQuestions = data.prototypeData;
const Card = require('./Card');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = new Round;
  };

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
};

  printQuestion(round) {
    util.main(round);
  };

  shuffleDeck() {
    const newCards = prototypeQuestions.map(flashcard => {
      return new Card(flashcard.id, flashcard.question, flashcard.answers, flashcard.correctAnswer);
    });
    this.currentRound.deck.cards = newCards;
  };

  start() {
    this.printMessage(this.currentRound.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  };
};

module.exports = Game;
