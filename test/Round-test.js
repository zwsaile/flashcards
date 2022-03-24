const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round')
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  let turn;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function')
  });

  it('should store a new Deck when round begins', () => {
    expect(round.deck.cards).to.be.an("array");
    expect(round.deck.cards).to.have.lengthOf(3);
  });

  it('should be able to return the current card', () => {
    expect(round.returnCurrentCard()).to.equal(deck.cards[0])
  });

  it('should be able to count how many turns have been taken', () => {
    round.takeTurn();
    round.takeTurn();
    round.takeTurn();
    expect(round.turns).to.equal(3);
  });

  it('should discard the active Card from the Deck', () => {
    expect(round.deck.cards[0]).to.equal(card1)
    round.takeTurn();
    expect(round.deck.cards[0]).to.equal(card2)
  });

  it('should store incorrect guesses', () => {
    round.takeTurn('pug')
    expect(round.incorrectGuesses.length).to.equal(1)
  });

  it('should evaluate the current user guess', () => {
    round.takeTurn('sea otter');
    expect(round.incorrectGuesses.length).to.equal(0)
    round.takeTurn('spleen')
    expect(round.incorrectGuesses.length).to.equal(1)
  });

  it('should tell the user if their guess was correct or incorrect', () => {
    expect(round.takeTurn('sea otter')).to.equal('correct!')
    expect(round.takeTurn('pug')).to.equal('incorrect!')
  });

  it('should be able to calculate the percentage of correct guesses', () => {
    round.takeTurn('sea otter');
    expect(round.calculatePercentCorrect()).to.equal('100%');
    round.takeTurn('spleen');
    expect(round.calculatePercentCorrect()).to.equal('50%');
    round.takeTurn('listening to music');
    expect(round.calculatePercentCorrect()).to.equal('33%');
  });

  it('should be able to end the round and return a message telling the user what their percentage of wins was', () => {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('listening to music');
    expect(round.endRound()).to.equal('**Round over!** You answered 33% of the questions correctly!')
  });
});
