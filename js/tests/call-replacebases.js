var replacebases = require('./replacebases.js')

var baseURI = [ { prefix: 'base1', uri: 'http://dogbone.org' },
  { prefix: 'base3', uri: 'http://giraffe.org' },
  { prefix: 'base2', uri: 'http://penguin.org' },
  { prefix: 'base4', uri: 'http://localhost/node-arc-d3/data/' } ];

var trial = { triples: 
   [ [ 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl',
       'dcterms:title',
       '"Food Growing Methods"' ],
     [ 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl',
       'rdfs:comment',
       '"For independence and resource...' ],
     [ 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl',
       'lsi:averageEstInvestmentCost',
       '"0.0(investment cost pulled fr...' ],
     [ 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl',
       'lsi:averageEstTimetoMaturity',
       '"0.0 (time to maturity pulled ...' ],
     [ 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl',
       'lsi:commercialStatus',
       '"Research"' ],
     [ 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl',
       'lsi:relatedIndustriesFields',
       '"Health and Medicine"' ],
     [ 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl',
       'lsi:label',
       'http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/biological-support' ],
     [ 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl',
       'lsi:label',
       'http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/habitation-infrastructure' ] ],
  longstrings: 
   [ { match: '"For independence and resource optimization, some or all of the astronauts diet must be grown in-situ. Various forms have been proposed, from greenhouses to hydroponics, but there must also be optimization in the types of food grown to maximize caloric and nutrient output compared to water and energy input."',
       replacement: '"For independence and resource...' },
     { match: '"0.0(investment cost pulled from children pages)"',
       replacement: '"0.0(investment cost pulled fr...' },
     { match: '"0.0 (time to maturity pulled from children pages)"',
       replacement: '"0.0 (time to maturity pulled ...' } ],
  replacements: 
   [ { prefix: 'dcterms', uri: 'http://purl.org/dc/terms/' },
     { prefix: 'lsi',
       uri: 'http://data.thespaceplan.com/ontologies/lsi#' } ] };

console.log(replacebases.replacewithcuries(trial.triples,baseURI));

