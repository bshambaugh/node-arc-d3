define(['lodash'],function(_) {

return {

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
},

   findPrefix: function(currentbaseURI) {
      let re = /.*:\/\/.*/i;
      let found = currentbaseURI.match(re);     
    if(found !== null) {
      if(currentbaseURI.match(/^.*:\/\/.*#/) !== null) {
         return currentbaseURI.match(/^.*:.*#/)[0];
      } else {
        if (currentbaseURI.match(/^.*:\/\/.*\//) !==null) {
          return currentbaseURI.match(/^.*:\/\/.*\//)[0];
       } else {
          return currentbaseURI;
       }
      }
    } else {
      return found;
    } 
  },

  addBases: function(currentbaseURI, baseURIs) {
   let h = _.maxBy(baseURIs, function(o) {return o.prefix})
   let currentbase = this.findPrefix(currentbaseURI);
   if(h !== undefined) {
      if (_.includes(_.map(baseURIs, this.extracturi),currentbase) !== true) {
        var numz = h.prefix.match(/[0-9]/);
        var local = { prefix: 'base'+(parseInt(numz[0],10) + 1), uri: currentbase};
        baseURIs.push(local);
       } else {
         // push the currentbaseURI prefix...
       var local = _.find(baseURIs, { uri: currentbase})
  /*   
      if(baseURI.uri === currentbase) {
            return baseURI.prefix;
         } 
         var local = { prefix: 'base1', uri: currentbase }; */
       }
      return {baseURIs: baseURIs, currentbase: local};
    } else {
      var local = { prefix: 'base1', uri: currentbase};
      baseURIs.push(local);
      return {baseURIs: baseURIs, currentbase: local};
    }
  },

 addns: function(currentnsURI, nsURIs) {
   let h = _.maxBy(nsURIs, function(o) {return o.prefix})
   let n = 1;
for(var k = 0; k < currentnsURI.length; k++) {
   let currentns = this.findPrefix(currentnsURI[k]);
//   console.log(currentns);
   if(h !== undefined) {
      if (_.includes(_.map(nsURIs, this.extracturi),currentns) !== true) {
        let h = _.maxBy(nsURIs, function(o) {return o.prefix})
        var numz = h.prefix.match(/[0-9]/);
        var local = { prefix: 'ns'+(parseInt(numz[0],10) + 1), uri: currentns};
        nsURIs.push(local);
       } else {
         // push the currentbaseURI prefix...
       var local = _.find(nsURIs, { uri: currentns})
       }
    //  return {nsURIs: nsURIs};
    } else {
      var local = { prefix: 'ns'+n, uri: currentns};
      nsURIs.push(local);
      n = n + 1;
    //  return {nsURIs: nsURIs};
    }
  }
  return {nsURIs: nsURIs};
},

  extractNamespace: function(triples,nsURIs) {
    var remainderURIs = [];
 //   var namespaces = [];
    for(var i = 0; i < triples.length; i++) {
    for(var j = 0; j < 3; j++) {
      var curify = this.findPrefix(triples[i][j]);
        if(curify !== null) {
         remainderURIs.push(curify);
        }
     }
  }
  var names = _.uniq(remainderURIs);
    return names;
},


  extracturi: function(n) {
    return n.uri;
  }
  
};

//return fn-triplemodifications;

});

 
