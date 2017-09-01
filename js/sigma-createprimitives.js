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
   
   parsetriples(url, function(duck) {
      //  fn(duck);  
       var primitives = constructPrimitives(triplemodifications(duck, replacements, nsURIs, baseURIs,url).triples);
       fn(primitives);     
   });

};

function constructPrimitives(triples) {

//document.write(triples);
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

document.write('Here are the subjects');
document.write(subjects);

document.write('++++++++++++++++++++++++++++++++++++++++++++++++++');

document.write('Here are the objects');
document.write(objects);

// combine the subject and object arrays and sort and find uniq elements
var uniqNodes = _.uniq(_.concat(subjects,objects).sort());

var nodes = [];
for(var i = 0; i < uniqNodes.length; i++) {
    var group = 1;
    var x = Math.random();
    var y = Math.random();
    var size = Math.random();
    var color = '#666';
    nodes.push(new node(uniqNodes[i],group,uniqNodes[i],x,y,size,color));
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
  var size = Math.random();
  var color = '#ccc';
  var type = 'curve';
     links.push(new link(i,source,target,value,triples[i][1],size,color,type));
}

var primitives = {links: links, nodes: nodes};

var JSONprimatives = JSON.stringify(primitives);
document.write(JSONprimatives);
//document.write(primitives);
//return JSONprimatives;

return primitives;
}

function link(id,source,target,value,label,size,color,type) {
  this.id = id;
  this.source = source;
  this.target = target;
  this.value = value;
  this.label = label;
  this.size = size;
  this.color = color;
  this.type = type;
}

function node(id,group,label,x,y,size,color) {
    this.id = id;
    this.group = group;
    this.label = label;
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
}




});

