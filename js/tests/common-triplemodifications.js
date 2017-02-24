var parsedata = require('./common-parsetriples.js');
var N3 = require('./libraries/N3.js/N3.js');
var request = require('request');
var url = 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl';


var replacements = [{ prefix: 'dcterms', uri: 'http://purl.org/dc/terms/' },
  { prefix: 'ex', uri: 'http://example.org/' },
  { prefix: 'foaf', uri: 'http://xmlns.com/foaf/0.1/' },
  { prefix: 'owl', uri: 'http://www.w3.org/2002/07/owl#' },
{ prefix: 'lsi', uri: 'http://data.thespaceplan.com/ontologies/lsi#' }];


request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
      var string = JSON.stringify(body);
      var string = body.toString();
      var string_2 = string.replace(/'/ig,'\\\'');
      var string_3 = string_2.replace(/<>/ig,'<'+url+'>');
     // console.log(string_3);

      parsedata.parsedata(string_3, function(duck) {
         console.log(tripleModifications(duck, replacements));
         console.log('break for only the triple array used by createprimatives');
         console.log(tripleModifications(duck, replacements).triples); 
     });
  }
});


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
