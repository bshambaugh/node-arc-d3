var ge = require('./gameEngine');
var config = require('./games/klondike.json');

var deck = ge.genDeck(config.pack);
console.log(deck);
