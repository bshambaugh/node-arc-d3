define(['lodash','jquery','parsetriples'], function(_,$,parsetriples) {
 
return function (url, fn) {
  $.get(url, function(data) {
     var string = JSON.stringify(data);
     var string = data.toString();
     var string_2 = string.replace(/'/ig,'\\\'');
     var string_3 = string_2.replace(/<>/ig,'<'+url+'>');

  parsetriples(string_3, function(duck) {
       var primatives = constructPrimatives(duck);
       fn(primatives);
  });


});

};


function constructPrimatives(triples) {
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

var primatives = {links: links, nodes: nodes};
var JSONprimatives = JSON.stringify(primatives);
return JSONprimatives;
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

