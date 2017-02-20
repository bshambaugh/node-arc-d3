//var _ = require('lodash');

// This modifies the output of createprimatives.js by putting in str replacements

var graph_object = {"links":[{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"\"Food Growing Methods\"","value":1,"label":"http://purl.org/dc/terms/title"}],"nodes":[
{"id":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","group":1}],
"nodes":[{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/biological-support","value":1,"label":"http://data.thespaceplan.com/ontologies/lsi#label"}]};

// output from textprefixestojson

var replacements = [{ prefix: 'dcterms', uri: 'http://purl.org/dc/terms/' },
  { prefix: 'ex', uri: 'http://example.org/' },
  { prefix: 'foaf', uri: 'http://xmlns.com/foaf/0.1/' },
  { prefix: 'owl', uri: 'http://www.w3.org/2002/07/owl#' },
  { prefix: 'lsi', uri: 'http://data.thespaceplan.com/ontologies/lsi#' }];

/*
var c = Object.keys(replacements[0]);
console.log(replacements.length);

for(var i = 0; i < c.length; i++) {
   var re = new RegExp(c[i], "ig");
   for(var k = 0; k < replacements.length; k++) { 
    console.log(replacements[k][c[i]]);
   }
}
*/

function tocurie(graph_object) {
  var matches = [];
  var graph_object_string = JSON.stringify(graph_object);

  for(var i = 0; i < replacements.length; i++) {
     var re = new RegExp(replacements[i].uri, "ig");
     var found = graph_object_string.match(re);
     if(found !== null) {
        // console.log('matches: ' + found + ' ' + replacements[i].uri + ' ' + replacements[i].prefix);
        matches.push({prefix: replacements[i].prefix, uri: replacements[i].uri});
      }
      var new_graph_object = graph_object_string.replace(re,replacements[i].prefix +':');
      var graph_object_string = new_graph_object;
  }


  var collector = JSON.parse(graph_object_string)
//console.log(dog);
//console.log(matches);
// create a new graph object instatiation 
  collector.replacements = matches;
//console.log('break here for final');
  return collector;
//console.log(dog);
}

console.log('\n');
console.log('graph object before');
console.log('\n');
console.log(graph_object);
console.log('\n');
console.log('graph object after');
console.log('\n');
console.log(tocurie(graph_object));
