const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Game', () => {
  let deck;
  let round;
  let game;

  beforeEach(() => {
    deck = new Deck;
    round = new Round(deck);
    game = new Game(round);
  });

  it('should be an instance of the Game class', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should be able to create new cards and put them in the deck', () => {
    game.shuffleDeck();
    expect(game.currentRound.deck.cards).to.deep.equal(prototypeQuestions)
  });

  it('creates a new Round using the current Deck', () => {
    game.shuffleDeck()
    expect(game.currentRound.deck).to.equal(deck)
  });

});
