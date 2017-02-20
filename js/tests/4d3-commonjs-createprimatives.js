var _ = require('../libraries/lodash.min.js') 
/*
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
*/
 var triples = [["d", "i", "q"],["a", "f", "c"],["c", "g", "d"],["e", "h", "c"],["c", "i", "q"]];
var width = 400;
var height = 400;

//var primatives = constructPrimatives(triples,width,height);
var JSONprimatives = constructPrimatives(triples,width,height);
//   console.log(primatives);
console.log(JSONprimatives);

function constructPrimatives(triples,width,height) {
//subject array
var subjects = [];
//object array
var objects = [];
// extract the subject
// console.log('extract the subject');
for (var i = 0; i < triples.length; i++) {
 //  console.log(triples[i][0]);
  subjects.push(triples[i][0]);
}
// extract the object
// console.log('extract the object');
for (var i = 0; i < triples.length; i++) {
 //  console.log(triples[i][2]);
  objects.push(triples[i][2]);
}
// console.log('the subjects are');
// console.log(subjects);
// console.log('the objects are');
// console.log(objects);

// combine the subject and object arrays and sort and find uniq elements
// console.log('concatenate and sort and find uniq elements');
//console.log(_.uniq(_.concat(subjects,objects).sort()));
var uniqNodes = _.uniq(_.concat(subjects,objects).sort());
// console.log(uniqNodes);
// convert each of the uniq elements to a point

// now that I have the points...find the predicates that correspond to these...

 var points = uniqNodes.map(function(elem) {
    return [Math.random() * width, Math.random() * height];
 });
 
// console.log(points);

var nodes = [];
for(var i = 0; i < uniqNodes.length; i++) {
    var group = 1;
//  nodes.push(new node(points[i][0],points[i][1],uniqNodes[i]));
    nodes.push(new node(uniqNodes[i],group));
}
// plot the points here..

// line dq, ac, cd, ec, cq
//console.log(triples);

//var lines = [];
var links = [];

for(var i = 0; i < triples.length; i++) {
  for(var j = 0; j < uniqNodes.length; j++) { 

    if(triples[i][0] == uniqNodes[j]) {
   //   console.log('S:We are the same for ' + triples[i][0] + ' and ' + uniqNodes[j] + ' at ' + j + ' and the point is ' + points[j]); 
      var a = points[j];
     // var a_name = uniqNodes[j];
      var source = uniqNodes[j];
    }

//  var a =  returnPoint(triples[i][0],uniqNodes[j]);

    if(triples[i][2] == uniqNodes[j]) {
 //      console.log('O:We are the same for ' + triples[i][2] + ' and ' + uniqNodes[j] + ' at ' + j + ' and the point is ' + points[j]); 
       var b = points[j];
     //  var b_name = uniqNodes[j];
       var target = uniqNodes[j]; 
   }

//   var b = returnPoint(triples[i][2],uniqNodes[j]);
//     console.log(a + ' : ' + b);
  }
  var value = 1
  //   console.log('line ab is : ' + a + ' to ' + b + ' for ' + triples[i][1]);
  //   lines.push(new edge(a,a_name,b,b_name,triples[i][1])); 
     links.push(new link(source,target,value,triples[i][1]));
}

//console.log(lines);

//console.log(lines[0].point1);
//console.log(points);

//console.log(nodes);
//var primatives = [lines,nodes]
//var primatives = {edges: lines, nodes: nodes};
var primatives = {links: links, nodes: nodes};
//console.log(JSON.stringify(primatives));
var JSONprimatives = JSON.stringify(primatives);
//console.log(primatives);
//return primatives;
return JSONprimatives;
}

//function edge(a,a_name,b,b_name,label) {
function link(source,target,value,label) {
  this.source = source;
  this.target = target;
  this.value = value;
  this.label = label;
/*  this.point1 = a;
  this.point1_name_and_subject = a_name;
  this.point2 = b;
  this.point2_name_and_object = b_name;
  this.label_and_predicate_name = label;
*/
}

//function node(point1,point2,name) {
function node(id,group) {
//  this.x = point1;
//  this.y = point2;
//  this.node_name = name;
    this.id = id;
    this.group = group;
}


