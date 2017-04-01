var URI = require('urijs');
var request = require('request');
//var url = 'http://localhost:8080/marmotta/ldp';
//var url = "http://localhost:8080/marmotta/sparql?query=SELECT%20*%20WHERE%20%7B%3Fs%20%3Fp%20%3Fo%7D%20LIMIT%2010";
var url = 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl';

// The query from a sparql query
if(URI(url)._parts.query !== null) {
console.log('yes, there is a query');
// try...catch...on sparql query ... code...
} else {
  LDPorFile(url, function(duck) { console.log(duck); });
   console.log('no, there is no query');
}

function LDPorFile(url,fn) {
 var type = '';
 request(url, function (error, response, body) {
   if (!error && response.statusCode == 200) {
      if(response.headers.link != null) {
        var string = response.headers.link;
        var str = 'http://www.w3.org/ns/ldp#Resource';
        var re = new RegExp(str, "ig");
        var found = string.match(re);
        type = 'LDP';
        // try ... catch ... on LDP query code..
      } else {
        type = 'File';
        // try ... catch ... on file code...
      }

   }
     return fn(type);
 });
}

