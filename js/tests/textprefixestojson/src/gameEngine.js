var _ = require('lodash');

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
  }
};

