const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Card = require('./Card');

class Deck {
  constructor(cards) {
    this.cards = prototypeQuestions.map(flashcard => {
      return new Card(flashcard.id, flashcard.question, flashcard.answers, flashcard.correctAnswer);
    });
  };

  countCards() {
    return this.cards.length;
  };

};

module.exports = Deck;
