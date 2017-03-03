module.exports = {

replacelongstrings: function(triples) {
   var longstrings = [];
  for(var i = 0; i < triples.length; i++) {
    for(var j = 0; j < 3; j++) {

       // replace strings greater than 30 characters
       var re = /'.*'|".*"|""".*"""/ig;
       var matches_array = triples[i][j].match(re);
       if(matches_array !== null && matches_array[0].length > 30) {
            triples[i][j] = matches_array[0].substr(0,30) + '...';
            longstrings.push({match: matches_array[0], replacement: triples[i][j]});
       }


   }
  }
       return {triples: triples, longstrings: longstrings};
},

replacewithcuries: function(basearray,replacements) {
   var matchesuri = [];
   var triplesclone = basearray.map(function(arr) {
      return arr.slice(0);
   });

  for(var i = 0; i < triplesclone.length; i++) {
    for(var j = 0; j < 3; j++) {
       
           // Replace URIs with curies
           var name =  this.tocurie(triplesclone[i][j],replacements);

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

      
    }
  }
     return {triples: triplesclone, replacements: matchesuri};
},

tocurie: function(string,replacements) {
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

};
