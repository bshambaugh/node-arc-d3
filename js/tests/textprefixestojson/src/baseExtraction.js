var _ = require('lodash');
//var baseURIs = ['base1','base2','base3'];

/*
var baseURIs = [{prefix: 'base1' , uri: 'http://dogbone.org'},
                {prefix: 'base3' , uri: 'http://giraffe.org'},
                {prefix: 'base2' , uri: 'http://penguin.org'}]
*/

//console.log(_.find(baseURIs, { uri: 'http://dogbone.org'}));
/*
//var baseURIs = [];

var url = 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl';

var test = 'http://dogbone.org';
*/



//console.log(baseURIs);

//console.log(containsbaseURI(baseURIs,test));
/*
console.log(_.includes(_.map(baseURIs, extracturi),test));

function extracturi(n) {
  return n.uri;
}
*/

/*
function containsbaseURI(baseURIs,test) {
  baseURIs.forEach(function(element) {
//    console.log('element is: ' + element.uri);
     if(element.uri === test) {
        return test;
      //  console.log('true');
      } else {
      //  console.log('false');
      //  return false;
      }
  });
}
*/

/*
//console.log(baseURIs);
var number_store = 0;
for(var i = 0; i < baseURIs.length; i++) {
   var number = baseURIs[i].prefix.match(/[0-9]/);
   if(number > number_store) {
     number_store = number;
   }
}

//console.log(number_store[0]);
var num = parseInt(number_store[0],10)+1;
//baseURIs.push('base'+num);
//console.log(baseURIs);

// now push the baseURI to the object
url = 'http://example.org';
baseURIs.push({prefix: 'base'+num, uri: 'http://example.org'});

console.log(baseURIs);

var a = ['a', 'b', 'c'];

number_st = 0;
baseURIs.forEach(function(element) {
    console.log(element.prefix);
    var number = element.prefix.match(/[0-9]/);
    if(number > number_st) {
      number_st = number;
    } 
});

console.log('number string');
console.log(parseInt(number_st[0],10) + 1);
*/
//var objects = [{ 'n': 1 }, { 'n': 2 }];


// I need to check whether h is undefined... 
//var g = _.maxBy(objects, function(o) { return o.n; })
//var h = _.maxBy(baseURIs, function(o) {return o.prefix})
//console.log(g);
//console.log(h);




//addBases(url, baseURIs);

/*
console.log('find prefixes');

console.log(findPrefix('foo://example.com:8042/over/there?name=ferret#nose'));
console.log(findPrefix(url));
console.log(findPrefix('http://example.com/thisissomething/somemore#tree'));
console.log(findPrefix('http://something-something-something'));
*/
//findPrefix2('http://purl.org/dc/terms/');



/*
function addBases(currentbaseURI, baseURIs) {
  var h = _.maxBy(baseURIs, function(o) {return o.prefix})
//  var currentbase = currentbaseURI;
   var currentbase = findPrefix(currentbaseURI);
   console.log(currentbase);
  if(h !== undefined) {
    var numz = h.prefix.match(/[0-9]/);
    baseURIs.push({ prefix: 'base'+(parseInt(numz[0],10) + 1), uri: currentbase});
    console.log(baseURIs);
  } else {
    baseURIs.push({ prefix: 'base1', uri: currentbase});
    console.log(baseURIs);
  }
}



function findPrefix(currentbaseURI)  {
    if(currentbaseURI.match(/^.*:\/\/.*#/) !== null) {
       return currentbaseURI.match(/^.*:.*#/);
    } else {
      if (currentbaseURI.match(/^.*:\/\/.*\//) !==null) {
        return currentbaseURI.match(/^.*:\/\/.*\//);
      } else {
        return currentbaseURI;
      }
    }
 // return currentbaseURI.match(/^.*:.*\/|^.*:.*#/);
}
*/



/*
function findPrefix2(currentbaseURI) {
    var absoluteIRI = /^[a-z][a-z0-9+.-]*:/i,
    schemeAuthority = /^(?:([a-z][a-z0-9+.-]*:))?(?:\/\/[^\/]*)?/i,
    dotSegments = /(?:^|\/)\.\.?(?:$|[\/#?])/;
    console.log(currentbaseURI.match(absoluteIRI));
    console.log(currentbaseURI.match(schemeAuthority));
   console.log(currentbaseURI.match(dotSegments));
}
*/

module.exports = {

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
  /*   
      if(baseURI.uri === currentbase) {
            return baseURI.prefix;
         } 
         var local = { prefix: 'base1', uri: currentbase }; */
       }
  //   console.log(nsURIs);
    //  return {nsURIs: nsURIs};
    } else {
      var local = { prefix: 'ns'+n, uri: currentns};
      nsURIs.push(local);
      n = n + 1;
//    console.log(nsURIs);
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
 // for(var k = 0; k < names.length; k++) {
//    var bases = this.addns(names[k],nsURIs);
//    var bases = this.addns(names[0],nsURIs);
//    namespaces.push(bases);
//  }
//  return namespaces;
//    return bases;
    return names;
},


  extracturi: function(n) {
    return n.uri;
  }
  
};

 
