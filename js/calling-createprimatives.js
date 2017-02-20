define(['createprimatives'], function(createprimatives) {
var url = 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl';
createprimatives(url, function(duckei) {
//console.log(duckei);
var dope = duckei;
console.log(dope);

var JSONprimatives = JSON.stringify(dope);
console.log(JSONprimatives);
document.write(JSONprimatives);

});

});
