var _ = require('../libraries/lodash.min.js');
var baseExtraction = require('./textprefixestojson/src/baseExtraction.js');

/*
var nsURIs = [ { prefix: 'ns1', uri: 'http://dogbone.org' },
  { prefix: 'ns3', uri: 'http://giraffe.org' },
  { prefix: 'ns2', uri: 'http://penguin.org' },
  { prefix: 'ns5', uri: 'http://localhost/node-arc-d3/data/' } ];
*/

var nsURIs = [];

var url = ['http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl','http://donkey.org','http://ape.org'];

var nams = addns(url,nsURIs);
//var nams = baseExtraction.addns(url,nsURIs);
console.log(nams);
//addns(url,nsURIs);

function addns(currentnsURI, nsURIs) {
   let h = _.maxBy(nsURIs, function(o) {return o.prefix})
   var n = 1;
for(var k = 0; k < currentnsURI.length; k++) {
   let currentns = findPrefix(currentnsURI[k]);
   console.log(currentns);
   if(h !== undefined) {
      if (_.includes(_.map(nsURIs, extracturi),currentns) !== true) {
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
      console.log('hello');
      n = n + 1;
//    console.log(nsURIs);
    //  return {nsURIs: nsURIs};
    }
  }
  return {nsURIs: nsURIs};
}

function extracturi(n) {
    return n.uri;
  }

function findPrefix(currentbaseURI) {
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
  }
