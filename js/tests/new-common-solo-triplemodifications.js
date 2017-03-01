var replacements = [{ prefix: 'dcterms', uri: 'http://purl.org/dc/terms/' },
  { prefix: 'ex', uri: 'http://example.org/' },
  { prefix: 'foaf', uri: 'http://xmlns.com/foaf/0.1/' },
  { prefix: 'owl', uri: 'http://www.w3.org/2002/07/owl#' },
{ prefix: 'lsi', uri: 'http://data.thespaceplan.com/ontologies/lsi#' }];

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

var baseURIs = [];

var url = 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl';

//var tripleslocal = triples.map(function(x) { return x; });

//console.log(tripleslocal);

console.log(tripleModifications(triples, replacements, url, baseURIs));

console.log(tocurieother(tripleModifications(triples, replacements, url, baseURIs).triples));

console.log(triples);

console.log(tripleModifications(triples, replacements, url, baseURIs).triples);
//console.log(tripleslocal);
// this function should avoid side effects on triples...
function tripleModifications(triples, replacements, currentbaseURI, baseURIs) {
   var longstrings = [];
  var matchesuri = [];
  var triplesclone = triples.map(function(arr) {
    return arr.slice(0);
  });
  for(var i = 0; i < triplesclone.length; i++) {
    for(var j = 0; j < 3; j++) {

       // replace strings greater than 30 characters
       var re = /'.*'|".*"|""".*"""/ig;
       var matches_array = triplesclone[i][j].match(re);
       if(matches_array !== null && matches_array[0].length > 30) {
            triplesclone[i][j] = matches_array[0].substr(0,30) + '...';
            longstrings.push({match: matches_array[0], replacement: triplesclone[i][j]});
       }


        // Replace URIs with curies
           var name =  tocurie(triplesclone[i][j],replacements);

           var exists = false;
          
            if(name.matches.length > 0) {
                  triplesclone[i][j] = name.string;
               if(matchesuri.length > 0) {
                 for(var k = 0; k < matchesuri.length; k++) {
                    if(name.matches[0].uri === matchesuri[k].uri) {
                       var exists = true;
                    }
                 }

                 if(!exists) {
                    matchesuri.push(name.matches[0]);
                    exists = false;
                 }
                 
               } else {
               matchesuri.push(name.matches[0]);
               }             
            } 

        // Replace main namespace (special case: baseURI) and strings starting with http
        // refer to the rules of section 5.1 RFC3986: https://www.ietf.org/rfc/rfc3986.txt
        // allow multiple base URIs...

      /*         
       // console.log "return the triples"
          console.log('print the triples');
          console.log(triples);
          console.log('end the triples');
      */
    }
  }
       return {triples: triplesclone, longstrings: longstrings, replacements: matchesuri};
}


function tocurie(string,replacements) {
  var matches = [];

  for(var i = 0; i < replacements.length; i++) {
     var re = new RegExp(replacements[i].uri, "ig");
     var found = string.match(re);
     if(found !== null) {
        matches.push({prefix: replacements[i].prefix, uri: replacements[i].uri});
      }
      var new_graph_object = string.replace(re,replacements[i].prefix +':');
      var string = new_graph_object;
  }


  if(matches !== null) {
      return {string: string, matches: matches};
  } else {
     return null;
  }

}

function tocurieother(string, replacements, currentbaseURI, baseURIs) {
// convert all undefined namespaces to ns0, ns1, ns2, etc...
// look for intersections of the currentbaseURI with the baseURIs ...
// look for intersections with replacements ... // replace with the toCurie argument...
// add currentURI to baseURIs
// I need to check whether h is undefined
// replacements and baseURIs need to be JSON files stored that can be added to...
//tocurie(for baseURIs)
//tocurie(for currentbaseURI)  ... except this is not a string... eek...perhaps add currentbaseURI to baseURI them
// run tocurie??
// inherit base the order of precedence...given in section 5 of https://www.ietf.org/rfc/rfc3986.txt
// but for now left currentbaseURI be url...

// convert all undefined namespaces to ns0, ns1, ns2, etc...
 
   for(var i = 0; i < triples.length; i++) {
       for(var j = 0; j < 3; j++) {
           console.log('the modified triples : '+triples[i][j]);
        }
    }

}

exports.tripleModifications = tripleModifications;
