var _ = require('lodash');
var config = require('./games/klondike.json');

// shuffle
// isValidMove
// validMoves
//

module.exports = {
  genDeck: function (pack) {
    return _.reduce(pack, function (a, b) {
      return _.flatten(_.map(a, function (x) {
        return _.map(b, function (y) {
          return x.concat(y);
        })
      }))
    })
  },
  isBlack: function(card){
    return card[1] === 's' || card[1] === 'c'
  },
  isRed: function(card){
    return !this.isBlack(card)
  },
  isHeart: function (card) {
    return card[1] === 'h';
  },
  isSpade: function (card) {
    return card[1] === 's';
  },
  isClub: function (card) {
    return card[1] === 'c';
  },
  isDiamond: function (card) {
    return card[1] === 'd';
  },
  isFace: function (card){
    return card[0] === 'j' || card[0] === 'q' || card[0] === 'k' || card[0] === 'a';
  }
};

var setUp = function(){

};

var start = function(){

};

var isValidMove = function (currentState, newState) {

};

var isGameWon = function (boardState) {

};

//var deck = genDeck(config.pack)
//console.log(deck);
