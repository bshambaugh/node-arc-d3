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


var hello = reportlongstring(triples,replacements);
console.log(hello);

function reportlongstring(triples,replacements) {
  var longstrings = [];
  var matchesuri = [];
  for(var i = 0; i < triples.length; i++) {
    for(var j = 0; j < 3; j++) {
       var re = /'.*'|".*"|""".*"""/ig;
       var matches_array = triples[i][j].match(re);
       if(matches_array !== null && matches_array[0].length > 30) {
            triples[i][j] = matches_array[0].substr(0,30) + '...';
            longstrings.push({match: matches_array[0], replacement: triples[i][j]});
       }

   /*
       var re2 = new RegExp('http://data.thespaceplan.com/ontologies/lsi#label', "ig");
       var found = triples[i][j].match(re2);
       if(found !== null) {i
          console.log('what is the found: ' + found);
       }
   */  //   if(tocurie(triples[i][j],replacements) !== null) {
          //  console.log(tocurie(triples[i][j],replacements));
           var name =  tocurie(triples[i][j],replacements);
         //  console.log(name.string + ' ' + name.matches);

           var exists = false;
         //   console.log(name.matches);
         //   console.log('name matchces' + name.matches);
         //   console.log('name matches' + name.matches + 'array length:' + name.matches.length);
            if(name.matches.length > 0) {
                  triples[i][j] = name.string;
               if(matchesuri.length > 0) {
                // console.log('hola ' + matchesuri[0].uri + ' ' + name.matches[0].uri);
                 for(var k = 0; k < matchesuri.length; k++) {
                    if(name.matches[0].uri === matchesuri[k].uri) {
                    //   matchesuri.push(name.matches[0]);
                       var exists = true;
                    }
                 }

                 if(!exists) {
                    matchesuri.push(name.matches[0]);
                   // console.log(exists);
                    exists = false;
                 }
                 
               } else {
               matchesuri.push(name.matches[0]);
               }             
            }           
         //  }
    }
  }
       return {triples: triples, longstrings: longstrings, replacements: matchesuri};
}


function tocurie(string,replacements) {
  var matches = [];

  for(var i = 0; i < replacements.length; i++) {
     var re = new RegExp(replacements[i].uri, "ig");
     var found = string.match(re);
     if(found !== null) {
     //   console.log('matches: ' + found + ' ' + replacements[i].uri + ' ' + replacements[i].prefix);
        matches.push({prefix: replacements[i].prefix, uri: replacements[i].uri});
      }
      var new_graph_object = string.replace(re,replacements[i].prefix +':');
      var string = new_graph_object;
  }


  if(matches !== null) {
   //   return {matches: matches};
      return {string: string, matches: matches};
  } else {
     return null;
  }

}

