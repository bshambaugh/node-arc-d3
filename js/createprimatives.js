//alert();

define(['lodash'], function(_) {
 
var triples = [["d", "i", "q"],["a", "f", "c"],["c", "g", "d"],["e", "h", "c"],["c", "i", "q"]];
var width = 400;
var height = 400;

document.write(triples);
document.write('<br>');

var primatives = constructPrimatives(triples,width,height);
//console.log(primatives);
//console.log(primatives.nodes);
//console.log(primatives.edges);
document.write(primatives.nodes[0].x);
//var edges = primatives[0];
//var nodes = primatives[1];
//console.log(edges);
//console.log(nodes);

/*
// The following are equivalent
console.log(edges[0].point1);
console.log(primatives[0][0].point1);

//The following are equivalent
console.log(nodes[0].node_name);
console.log(primatives[1][0].node_name);
*/

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
  nodes.push(new node(points[i][0],points[i][1],uniqNodes[i]));
}
// plot the points here..

// line dq, ac, cd, ec, cq
//console.log(triples);

var lines = [];

for(var i = 0; i < triples.length; i++) {
  for(var j = 0; j < uniqNodes.length; j++) { 

    if(triples[i][0] == uniqNodes[j]) {
   //   console.log('S:We are the same for ' + triples[i][0] + ' and ' + uniqNodes[j] + ' at ' + j + ' and the point is ' + points[j]); 
      var a = points[j];
      var a_name = uniqNodes[j];
    }

//  var a =  returnPoint(triples[i][0],uniqNodes[j]);

    if(triples[i][2] == uniqNodes[j]) {
 //      console.log('O:We are the same for ' + triples[i][2] + ' and ' + uniqNodes[j] + ' at ' + j + ' and the point is ' + points[j]); 
       var b = points[j];
       var b_name = uniqNodes[j]; 
   }

//   var b = returnPoint(triples[i][2],uniqNodes[j]);
//     console.log(a + ' : ' + b);
  }

  //   console.log('line ab is : ' + a + ' to ' + b + ' for ' + triples[i][1]);
     lines.push(new edge(a,a_name,b,b_name,triples[i][1])); 
}

//console.log(lines);

//console.log(lines[0].point1);
//console.log(points);

//console.log(nodes);
//var primatives = [lines,nodes]
var primatives = {edges: lines, nodes: nodes};
//console.log(primatives);
return primatives;
}

function edge(a,a_name,b,b_name,label) {
  this.point1 = a;
  this.point1_name_and_subject = a_name;
  this.point2 = b;
  this.point2_name_and_object = b_name;
  this.label_and_predicate_name = label;
}

function node(point1,point2,name) {
  this.x = point1;
  this.y = point2;
  this.node_name = name;
}

});

