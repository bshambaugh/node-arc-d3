//define(['lodash','jquery','parsetriples'], function(_,$,parsetriples) {
//var $ = require('jQuery');
//var fs = require('fs');
var parsedata = require('parsedata');
var request = require('request');
var url = 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl';

//var request = require('request');
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
      var string = JSON.stringify(body);
      var string = body.toString();
      var string_2 = string.replace(/'/ig,'\\\''); 
      var string_3 = string_2.replace(/<>/ig,'<'+url+'>');
      console.log(string_3); 
  }
});


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


var hello = tripleModifications(triples,replacements);
console.log(hello);

function calltriplemodifications(url, fn) {
   request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
      var string = JSON.stringify(body);
      var string = body.toString();
      var string_2 = string.replace(/'/ig,'\\\'');
      var string_3 = string_2.replace(/<>/ig,'<'+url+'>');
      console.log(string_3);


       parsetriples(string_3, function(triples) {
       var replacements = [{ prefix: 'dcterms', uri: 'http://purl.org/dc/terms/' },
                           { prefix: 'ex', uri: 'http://example.org/' },
                           { prefix: 'foaf', uri: 'http://xmlns.com/foaf/0.1/' },
                           { prefix: 'owl', uri: 'http://www.w3.org/2002/07/owl#' },
                           { prefix: 'lsi', uri: 'http://data.thespaceplan.com/ontologies/lsi#' }];
       var primatives = tripleModifications(triples, replacements);
       fn(primatives);
       });

  }
});

};

/*
return function (url, fn) {
  $.get(url, function(data) {
     var string = JSON.stringify(data);
     var string = data.toString();
     var string_2 = string.replace(/'/ig,'\\\'');
     var string_3 = string_2.replace(/<>/ig,'<'+url+'>'); 

  parsetriples(string_3, function(triples) {
       var replacements = [{ prefix: 'dcterms', uri: 'http://purl.org/dc/terms/' },
                           { prefix: 'ex', uri: 'http://example.org/' },
                           { prefix: 'foaf', uri: 'http://xmlns.com/foaf/0.1/' },
                           { prefix: 'owl', uri: 'http://www.w3.org/2002/07/owl#' },
                           { prefix: 'lsi', uri: 'http://data.thespaceplan.com/ontologies/lsi#' }];
       var primatives = tripleModifications(triples, replacements);
       fn(primatives);
  });


});

};
*/

function tripleModifications(triples, replacements) {
   var longstrings = [];
  var matchesuri = [];
  for(var i = 0; i < triples.length; i++) {
    for(var j = 0; j < 3; j++) {

       // replace strings greater than 30 characters
       var re = /'.*'|".*"|""".*"""/ig;
       var matches_array = triples[i][j].match(re);
       if(matches_array !== null && matches_array[0].length > 30) {
            triples[i][j] = matches_array[0].substr(0,30) + '...';
            longstrings.push({match: matches_array[0], replacement: triples[i][j]});
       }


        // Replace URIs with curies
           var name =  tocurie(triples[i][j],replacements);

           var exists = false;
          
            if(name.matches.length > 0) {
                  triples[i][j] = name.string;
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

//});
