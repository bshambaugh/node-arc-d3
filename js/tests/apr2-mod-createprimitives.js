define(['lodash','jquery','parsetriples','triplemodifications'], function(_,$,parsetriples,triplemodifications) {

// Input:
//  var triples = [["d", "i", "q"],["a", "f", "c"],["c", "g", "d"],["e", "h", "c"],["c", "i", "q"]];
// Output:
// {"links":[{"source":"d","target":"q","value":1,"label":"i"},{"source":"a","target":"c","value":1,"label":"f"},{"source":"c","target":"d","value":1,"label":"g"},{"source":"e","target":"c","value":1,"label":"h"},{"source":"c","target":"q","value":1,"label":"i"}],"nodes":[{"id":"a","group":1},{"id":"c","group":1},{"id":"d","group":1},{"id":"e","group":1},{"id":"q","group":1}]}
// baseURIs and nsURIs defined like replacements in textprefixestojson
var baseURIs = [ { prefix: 'base1', uri: 'http://dogbone.org' },
  { prefix: 'base3', uri: 'http://giraffe.org' },
  { prefix: 'base2', uri: 'http://penguin.org' },
  { prefix: 'base4', uri: 'http://localhost/node-arc-d3/data/' } ];

var nsURIs = [];

var replacements = [{ prefix: 'dcterms', uri: 'http://purl.org/dc/terms/' },
  { prefix: 'ex', uri: 'http://example.org/' },
  { prefix: 'foaf', uri: 'http://xmlns.com/foaf/0.1/' },
  { prefix: 'owl', uri: 'http://www.w3.org/2002/07/owl#' },
  { prefix: 'schema', uri: 'http://schema.org/' },
  { prefix: 'dbr', uri: 'http://dbpedia.org/resource/' },
  { prefix:  'rdfs', uri: 'http://www.w3.org/2000/01/rdf-schema#' } ,
  { prefix: 'lsi', uri: 'http://data.thespaceplan.com/ontologies/lsi#' }];

return function(url, fn) {
   
   getprimatives(url, function(duck) {
      //  fn(duck);  
       var primitives = constructPrimitives(triplemodifications(duck, replacements, nsURIs, baseURIs,url).triples);
       fn(primitives);     
   });

};
 
function getprimatives(url, fn) {
  $.get(url, function(data) {
     /// This code only works for turtle files...
/*     var string = JSON.stringify(data);
     var string = data.toString();
     var string_2 = string.replace(/'/ig,'\\\'');
     var string_3 = string_2.replace(/<>/ig,'<'+url+'>');
     // prepare extra data to pass to parse triples.. */
     var dummy = [];
     dummy.push(data);
     dummy.push(url); 

    parsetriples(dummy, function(duck) {
//  parsetriples(dummy, function(duck) {
      // console.log(constructPrimatives(tripleModifications.tripleModifications(duck, replacements).triples));
      // var primatives = constructPrimatives(duck);
//       var primitives = constructPrimitives(triplemodifications(duck, replacements).triples)
   //   var primitives = constructPrimitives(triplemodifications(duck, replacements, nsURIs, baseURIs,dummy[1]).triples);
       fn(duck);
    //  var primitives = constructPrimitives(triplemodifications(duck, replacements, nsURIs, baseURIs,url).triples);
    //   fn(primitives);
  });


});

};


function constructPrimitives(triples) {
//subject array
var subjects = [];
//object array
var objects = [];
// extract the subject
for (var i = 0; i < triples.length; i++) {
  subjects.push(triples[i][0]);
}
// extract the object
for (var i = 0; i < triples.length; i++) {
  objects.push(triples[i][2]);
}

// combine the subject and object arrays and sort and find uniq elements
var uniqNodes = _.uniq(_.concat(subjects,objects).sort());

var nodes = [];
for(var i = 0; i < uniqNodes.length; i++) {
    var group = 1;
    nodes.push(new node(uniqNodes[i],group));
}

var links = [];

for(var i = 0; i < triples.length; i++) {
  for(var j = 0; j < uniqNodes.length; j++) { 

    if(triples[i][0] == uniqNodes[j]) {
      var source = uniqNodes[j];
    }

    if(triples[i][2] == uniqNodes[j]) {
       var target = uniqNodes[j]; 
   }

  }
  var value = 1
     links.push(new link(source,target,value,triples[i][1]));
}

var primitives = {links: links, nodes: nodes};
//var JSONprimatives = JSON.stringify(primatives);
//return JSONprimatives;
return primitives;
}

function link(source,target,value,label) {
  this.source = source;
  this.target = target;
  this.value = value;
  this.label = label;
}

function node(id,group) {
    this.id = id;
    this.group = group;
}




});

