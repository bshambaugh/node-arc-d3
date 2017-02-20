var acallnack = require('./parseNamespaces');
var url = '/namespaces.txt';
//var _  = require('underscore');
var _ = require('lodash');

var dummyarray = [];

acallnack.loadData(url, function(duck) {
//  console.log(duck);
//  console.log(duck + 'hello');
//  print(duck);
  var elephant = acallnack.parseLine(duck);
//  console.log(elephant);
/*  for(var i = 0; i < elephant.length; i++) {
    var prefix = acallnack.parsePrefix(elephant[i]);
    var URI = acallnack.parseURI(elephant[i]);
    //acallnack.namespace(prefix,URI);
   }
  for(var i = 0; i < elephant.length; i++) {
    console.log(acallnack.parseURI(elephant[i]));
   } */
/*
    for(var i = 0; i < elephant.length; i++) {
    console.log(acallnack.namespace(elephant[i]));
  }
*/
//var dummyarray = [];

   _.each(elephant, function(someThing) {
     //   console.log(acallnack.namespace(someThing));
       dummyarray.push(acallnack.namespace(someThing));
      //  return acallnack.namespace(someThing)
  });

  console.log(dummyarray);
  console.log(dummyarray[0].prefix + ' ' + dummyarray[0].uri);
  console.log(dummyarray[1].prefix);
})

//console.log(dummyarray);
/*
function print(duck) {
  console.log('animals');
}
*/
/*
acallnack.loadData(url, function(duck) {
  console.log(duck);
  acallnack.parseLine(duck);
})
*/

/*
var giraffe = acallnack.parseLine('@prefix foaf:   <http://xmlns.com/foaf/0.1/> .\r\n @prefix owl: <http://www.w3.org/2002/07/owl#> .');

console.log(giraffe);
*/
