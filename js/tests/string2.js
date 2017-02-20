//var one = 'string';
var objstring = {"links":[{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"\"Food Growing Methods\"","value":1,"label":"http://purl.org/dc/terms/title"},{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"\"For independence and resource optimization, some or all of the astronauts diet must be grown in-situ. Various forms have been proposed, from greenhouses to hydroponics, but there must also be optimization in the types of food grown to maximize caloric and nutrient output compared to water and energy input.\"","value":1,"label":"http://www.w3.org/2000/01/rdf-schema#comment"},{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"\"0.0(investment cost pulled from children pages)\"","value":1,"label":"http://data.thespaceplan.com/ontologies/lsi#averageEstInvestmentCost"},{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"\"0.0 (time to maturity pulled from children pages)\"","value":1,"label":"http://data.thespaceplan.com/ontologies/lsi#averageEstTimetoMaturity"},{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"\"Research\"","value":1,"label":"http://data.thespaceplan.com/ontologies/lsi#commercialStatus"},{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"\"Health and Medicine\"","value":1,"label":"http://data.thespaceplan.com/ontologies/lsi#relatedIndustriesFields"},{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/biological-support","value":1,"label":"http://data.thespaceplan.com/ontologies/lsi#label"},{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/habitation-infrastructure","value":1,"label":"http://data.thespaceplan.com/ontologies/lsi#label"}],"nodes":[{"id":"\"0.0 (time to maturity pulled from children pages)\"","group":1},{"id":"\"0.0(investment cost pulled from children pages)\"","group":1},{"id":"\"Food Growing Methods\"","group":1},{"id":"\"For independence and resource optimization, some or all of the astronauts diet must be grown in-situ. Various forms have been proposed, from greenhouses to hydroponics, but there must also be optimization in the types of food grown to maximize caloric and nutrient output compared to water and energy input.\"","group":1},{"id":"\"Health and Medicine\"","group":1},{"id":"\"Research\"","group":1},{"id":"http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/biological-support","group":1},{"id":"http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/habitation-infrastructure","group":1},{"id":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","group":1}]};


var triples = [ [ 'http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl',
    'http://purl.org/dc/terms/title',
    '"Food Growing Methods"' ],
  [ 'http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl',
    'http://www.w3.org/2000/01/rdf-schema#comment',
    '"For independence and resource optimization, some or all of the astronauts diet must be grown in-situ. Various forms have been proposed, from greenhouses to hydroponics, but there must also be optimization in the types of food grown to maximize caloric and nutrient output compared to water and energy input."' ],
  [ 'http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl',
    'http://data.thespaceplan.com/ontologies/lsi#averageEstInvestmentCost',
    '"0.0(investment cost pulled from children pages)"' ],
  [ 'http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl',
    'http://data.thespaceplan.com/ontologies/lsi#averageEstTimetoMaturity',
    '"0.0 (time to maturity pulled from children pages)"' ],
  [ 'http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl',
    'http://data.thespaceplan.com/ontologies/lsi#commercialStatus',
    '"Research"' ],
  [ 'http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl',
    'http://data.thespaceplan.com/ontologies/lsi#relatedIndustriesFields',
    '"Health and Medicine"' ],
  [ 'http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl',
    'http://data.thespaceplan.com/ontologies/lsi#label',
    'http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/biological-support' ],
  [ 'http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl',
    'http://data.thespaceplan.com/ontologies/lsi#label',
    'http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/habitation-infrastructure' ] ];


var one = "\'For independence and resource optimization, \"some or all of the astronauts diet must be grown in-situ\". Various forms have been proposed, from greenhouses to hydroponics, but there must also be optimization in the types of food grown to maximize caloric and nutrient output compared to water and energy input.\'";

//console.log(one);
//var two = console.log(one.length);

/*
if(one.length > 30) {
  console.log(one.substr(0,30) + '...');
}
*/

for(var i = 0; i < triples.length; i++) {
  for(var j = 0; j < 3; j++) {
     var re = /'.*'|".*"|""".*"""/ig;
     var matches_array = triples[i][j].match(re); 
     console.log(triples[i][j]);
     if(matches_array !== null && matches_array[0].length > 30) {
          console.log(matches_array[0].substr(0,30) + '...');
             console.log('==========break============');  
             console.log(matches_array[0].length);
              console.log(triples[i][j].length);
             console.log('==========break============');
     }
  }
}

var re2 = /".*"|'.*'|""".*"""/ig;
var matches_array2 = one.match(re);
console.log(matches_array2);

console.log(typeof JSON.stringify(objstring));
var stringstring = JSON.stringify(objstring);
var matches_array3 = stringstring.match(re2);
console.log(matches_array3.length);

console.log('beginning of report long string');
var hello = reportlongstring(triples);
console.log(hello);

console.log(hello.longstrings[0]);
function reportlongstring(triples) {
  var longstrings = [];
  for(var i = 0; i < triples.length; i++) {
    for(var j = 0; j < 3; j++) {
       var re = /'.*'|".*"|""".*"""/ig;
       var matches_array = triples[i][j].match(re);
    //   console.log(triples[i][j]);
       if(matches_array !== null && matches_array[0].length > 30) {
            console.log(matches_array[0].substr(0,30) + '...');
            triples[i][j] = matches_array[0].substr(0,30) + '...';
            longstrings.push({match: matches_array[0], replacement: triples[i][j]});
      //         console.log('==========break============');
      //         console.log(matches_array[0].length);
      //          console.log(triples[i][j].length);
       //        console.log('==========break============');
       }
    }
  }
    return {triples: triples, longstrings: longstrings};
}

