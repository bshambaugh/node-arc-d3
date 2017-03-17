var URI = require('urijs');

console.log(URI("http://localhost:8080/marmotta/ldp"));
console.log("break");
console.log(URI("http://localhost:8080/marmotta/sparql?query=SELECT%20*%20WHERE%20%7B%3Fs%20%3Fp%20%3Fo%7D%20LIMIT%2010"));
console.log("break two");
// The query from a sparql query
if(URI("http://localhost:8080/marmotta/sparql?query=SELECT%20*%20WHERE%20%7B%3Fs%20%3Fp%20%3Fo%7D%20LIMIT%2010")._parts.query !== null) {
console.log(URI("http://localhost:8080/marmotta/sparql?query=SELECT%20*%20WHERE%20%7B%3Fs%20%3Fp%20%3Fo%7D%20LIMIT%2010")._parts.query);
}

console.log(URI("http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl"));


// It is really hard to use this to find the filename...because I do not know the domain...
// ahh...just extract the filename from the path if it exists...
//var string = 'http://investors.ddns.net:8080/marmotta/sparql?query=SELECT%20*%20WHERE%20%7B%3Fs%20%3Fp%20%3Fo%7D%20LIMIT%2010';
var string = 'http://www.a.com/test.xml?q=1&x=3#aidjsf';
//var string = 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl?hello';
//var string = 'http://localhost:8080/marmotta/ldp';
// If this thing is null then it is note a file
console.log(string.match(/\/[a-zA-Z-_]*\.[a-zA-Z]*/g));
console.log(URI(string));
//console.log(string.match(/\/[a-zA-Z-_]*\.[a-zA-Z]*/));
var http = require('http');
var options = {
  host: 'localhost',
  port: '8080',
  path: '/marmotta/ldp'
};

var req = http.get(options, function(res) {
  var string = res.headers.link;
  str = 'http://www.w3.org/ns/ldp#Resource';
  var re = new RegExp(str, "ig");
  var found = string.match(re);
  console.log('found is: ' + found);
});

req.on('error', function(e) {
  console.log('ERROR: ' + e.message);
});
