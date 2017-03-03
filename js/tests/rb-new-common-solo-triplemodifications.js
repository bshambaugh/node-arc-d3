var _ = require('../libraries/lodash.min.js');
var replacebases = require('./replacebases.js');
var baseExtraction = require('./textprefixestojson/src/baseExtraction.js');

var baseURIs = [ { prefix: 'base1', uri: 'http://dogbone.org' },
  { prefix: 'base3', uri: 'http://giraffe.org' },
  { prefix: 'base2', uri: 'http://penguin.org' },
  { prefix: 'base4', uri: 'http://localhost/node-arc-d3/data/' } ];

var nsURIs = [];

var replacements = [{ prefix: 'dcterms', uri: 'http://purl.org/dc/terms/' },
  { prefix: 'ex', uri: 'http://example.org/' },
  { prefix: 'foaf', uri: 'http://xmlns.com/foaf/0.1/' },
  { prefix: 'owl', uri: 'http://www.w3.org/2002/07/owl#' },
  { prefix: 'rdfs', uri: 'http://www.w3.org/2000/01/rdf-schema#' },
{ prefix: 'lsi', uri: 'http://data.thespaceplan.com/ontologies/lsi#' }];

var triples = [ [ 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl',
    'http://purl.org/dc/terms/title',
    '"Food Growing Methods"' ],
  [ 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl',
    'http://www.w3.org/2000/01/rdf-schema#comment',
    '"For independence and resource optimization, some or all of the astronauts diet must be grown in-situ. Various forms have been proposed, from greenhouses to hydroponics, but there must also be optimization in the types of food grown to maximize caloric and nutrient output compared to water and energy input."' ],
  [ 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl',
    'http://data.thespaceplan.com/ontologies/lsi#averageEstInvestmentCost',
    '"0.0(investment cost pulled from children pages)"' ],
  [ 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl',
    'http://data.thespaceplan.com/ontologies/lsi#averageEstTimetoMaturity',
    '"0.0 (time to maturity pulled from children pages)"' ],
  [ 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl',
    'http://data.thespaceplan.com/ontologies/lsi#commercialStatus',
    '"Research"' ],
  [ 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl',
    'http://data.thespaceplan.com/ontologies/lsi#relatedIndustriesFields',
    '"Health and Medicine"' ],
  [ 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl',
    'http://data.thespaceplan.com/ontologies/lsi#label',
    'http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/biological-support' ],
  [ 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl',
    'http://data.thespaceplan.com/ontologies/lsi#label',
    'http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/habitation-infrastructure' ], 
   [ 'http://dogbone.org',
    'http://data.thespaceplan.com/ontologies/lsi#label',
    'http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/habitation-infrastructure' ]
];

var url = 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl';

// create an array with strings shortened (substitution list one)
var shortenstrings = replacebases.replacelongstrings(triples);

//console.log(shortenstrings);

//console.log(shortenstrings.triples);

// create an array with the prefixes replaced (substitution list two)
var replaceprefix = replacebases.replacewithcuries(shortenstrings.triples,replacements);

//console.log(replaceprefix);

var bases = baseExtraction.addBases(url,baseURIs);
//console.log(bases);

//console.log(replacebases.replacewithcuries(trial.triples,bases.baseURIs));

// create an array with the bases replaced (substitution list three)
var basesreplaced = replacebases.replacewithcuries(replaceprefix.triples,bases.baseURIs);

//console.log(basesreplaced);

// create an array with all other URIs replaced with namespaces ...
// curify should only return a string if it is a uri...
/*
var curify = baseExtraction.findPrefix('http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/habitation-infrastructure');

console.log('curify');
console.log(curify);

var curifytwo = baseExtraction.findPrefix('howdy');

console.log('curify two');
console.log(curifytwo);

var curifythree = baseExtraction.findPrefix('bitcoin://this%20is%a%20bitcoin%20URI');

console.log('curify three');
console.log(curifythree);
*/
//console.log(baseExtraction.extractNamespace(basesreplaced.triples,nsURIs));

// Convert any remaining http:// prefix to ns1, ns2, etc to an array
//var lastnames = baseExtraction.extractNamespace(basesreplaced.triples);
//console.log(lastnames);

// Convert 
//var nams = baseExtraction.addns(lastnames,nsURIs);
var nams = baseExtraction.addns(baseExtraction.extractNamespace(basesreplaced.triples),nsURIs);
console.log(nams);

var namsreplaced = replacebases.replacewithcuries(basesreplaced.triples,nams.nsURIs);
/*
console.log(namsreplaced);
console.log('======break========');
console.log(shortenstrings.longstrings);
console.log(replaceprefix.replacements);
console.log(basesreplaced.replacements);
console.log(namsreplaced.replacements);
*/

// Add the replacements from replacebases
Array.prototype.push.apply(namsreplaced.replacements,basesreplaced.replacements);
// Add replacements from replaceprefixes
Array.prototype.push.apply(namsreplaced.replacements,replaceprefix.replacements);
// Add long strings 
namsreplaced.longstrings = shortenstrings.longstrings;
console.log(namsreplaced);
