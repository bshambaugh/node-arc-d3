var ge = require('../src/gameEngine');

describe('gen Deck', function(){

  it('should generate A cards',function(){
    expect(ge.genDeck(["a","cdhs"])).toEqual(['ac','ad','ah','as']);
  });

  it('should generate a deck of A and 2',function(){
    expect(ge.genDeck(["a2","cdhs"])).toEqual(['ac','ad','ah','as','2c','2d','2h','2s']);
  });

  describe('A spades', function() {
    it('should be black', function () {
      expect(ge.isBlack('as')).toEqual(true);
    })
  })

  describe('A clubs', function() {
    it('should be black', function () {
      expect(ge.isBlack('ac')).toEqual(true);
    })
  })

  describe('A diamonds', function() {
    it('should be red', function () {
      expect(ge.isRed('ad')).toEqual(true);
    })
  })

  describe('A heart', function() {
    it('should be red', function () {
      expect(ge.isRed('ah')).toEqual(true);
    })
  })
});
