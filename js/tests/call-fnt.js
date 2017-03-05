define(['libraries/fn_triplemodifications'],function(tmfn) {

// baseURIs and nsURIs defined like replacements in textprefixestojson
var baseURIs = [ { prefix: 'base1', uri: 'http://dogbone.org' },
  { prefix: 'base3', uri: 'http://giraffe.org' },
  { prefix: 'base2', uri: 'http://penguin.org' },
  { prefix: 'base4', uri: 'http://localhost/node-arc-d3/data/' } ];

var nsURIs = [{ prefix: 'ns1', uri: 'http://dog.org' }];

// extracted from namespaces with parseNamespaces from textprefixestojson
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
var shortenstrings = tmfn.replacelongstrings(triples);

// create an array with the prefixes replaced (substitution list two)
var replaceprefix = tmfn.replacewithcuries(shortenstrings.triples,replacements);

var bases = tmfn.addBases(url,baseURIs);

// create an array with the bases replaced (substitution list three)
var basesreplaced = tmfn.replacewithcuries(replaceprefix.triples,bases.baseURIs);

var nams = tmfn.addns(tmfn.extractNamespace(basesreplaced.triples),nsURIs);

var namsreplaced = tmfn.replacewithcuries(basesreplaced.triples,nams.nsURIs);

// Add the replacements from replacebases
Array.prototype.push.apply(namsreplaced.replacements,basesreplaced.replacements);
// Add replacements from replaceprefixes
Array.prototype.push.apply(namsreplaced.replacements,replaceprefix.replacements);
// Add long strings 
namsreplaced.longstrings = shortenstrings.longstrings;
console.log(namsreplaced);
Object.getOwnPropertyNames(namsreplaced);

});
