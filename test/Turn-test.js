const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

  it('should be a function', () => {
    const turn = new Turn;
    expect(Turn).to.be.a('function')
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn;
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take a guess and a Card instantiation as arguments', () => {
    const turn = new Turn(42, new Card)
    expect(turn.guess).to.equal(42)
    expect(turn.card).to.be.an("object")
  });

  it('should be able to return the user guess', () => {
    const turn = new Turn(42);
    expect(turn.returnGuess()).to.equal(42)
  });

  it('should be able to return the current card', () => {
    const card = new Card;
    const turn = new Turn(42, card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should return a boolean determining if the user guess matches the correct answer', () => {
    const card = new Card(1, "What is the capital of Colorado?", ["Denver", "Pueblo", "Colorado Springs"], "Denver");
    const turn = new Turn ("Denver", card);
    expect(turn.evaluateGuess()).to.equal(true);
    const turn2 = new Turn ("Pueblo", card);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should tell the user if their guess is correct or incorrect', () => {
    const card = new Card(1, "What is the capital of Colorado?", ["Denver", "Pueblo", "Colorado Springs"], "Denver");
    const turn = new Turn("Denver", card);
    expect(turn.giveFeedback()).to.equal("correct!");
    const turn2 = new Turn("Pueblo", card);
    expect(turn2.giveFeedback()).to.equal("incorrect!");
  });
});
