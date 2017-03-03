var _ = require('../libraries/lodash.min.js');
var baseExtraction = require('./textprefixestojson/src/baseExtraction.js');


var nsURIs = [{ prefix: 'ns1', uri: 'http://elephant.org' },
  { prefix: 'ns3', uri: 'http://banana.org' },
  { prefix: 'ns2', uri: 'http://grape.org' }];


//var nsURIs = [];

// var remainderURIs = [];

var triples = [ [ 'base4:Food-Growing-Methods.ttl',
       'dcterms:title',
       '"Food Growing Methods"' ],
     [ 'base4:Food-Growing-Methods.ttl',
       'http://rdfs-names#comment',
       '"For independence and resource...' ],
     [ 'base4:Food-Growing-Methods.ttl',
       'lsi:averageEstInvestmentCost',
       '"0.0(investment cost pulled fr...' ],
     [ 'base4:Food-Growing-Methods.ttl',
       'lsi:averageEstTimetoMaturity',
       '"0.0 (time to maturity pulled ...' ],
     [ 'base4:Food-Growing-Methods.ttl',
       'lsi:commercialStatus',
       '"Research"' ],
     [ 'base4:Food-Growing-Methods.ttl',
       'lsi:relatedIndustriesFields',
       '"Health and Medicine"' ],
     [ 'base4:Food-Growing-Methods.ttl',
       'lsi:label',
       'http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/biological-support' ],
     [ 'base4:Food-Growing-Methods.ttl',
       'lsi:label',
       'http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/habitation-infrastructure' ] ];

/*
  for(var i = 0; i < triples.length; i++) {
    for(var j = 0; j < 3; j++) {
      var curify = baseExtraction.findPrefix(triples[i][j]);
    //  console.log('the element is: ' + triples[i][j] + 'is a URI: ' + curify);
        if(curify !== null) {
         remainderURIs.push(curify);
        }
     }
  }
*/

/*
//console.log(remainderURIs);
var names = _.uniq(remainderURIs);
// match nsURIs with the above
var bases = baseExtraction.addns(names[0],nsURIs);
console.log(bases);
*/

console.log(extractNamespace(triples,nsURIs));

//console.log(baseExtraction.extractNamespace(triples,nsURIs));


function extractNamespace(triples,nsURIs) {
    var remainderURIs = [];
    for(var i = 0; i < triples.length; i++) {
    for(var j = 0; j < 3; j++) {
      var curify = baseExtraction.findPrefix(triples[i][j]);
        if(curify !== null) {
         remainderURIs.push(curify);
        }
     }
  }
  var names = _.uniq(remainderURIs);
//  console.log(names);
  var bases = baseExtraction.addns(names[0],nsURIs);
  console.log(bases);
  return bases;
}


/*
triples.forEach(function(elements) {
  elements.forEach(function(childrenEntry) {
  //  console.log(childrenEntry)
    var curify = baseExtraction.findPrefix(childrenEntry);
     if(curify !== null) {
         remainderURIs.push(curify);
     } 
  })
})
*/
