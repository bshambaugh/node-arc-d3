var acallnack = require('./parseNamespaces');
var url = '/namespaces.txt';
var _ = require('lodash');

var dummyarray = [];

acallnack.loadData(url, function(duck) {
  var elephant = acallnack.parseLine(duck);

   _.each(elephant, function(someThing) {
       dummyarray.push(acallnack.namespace(someThing));
  });

  console.log(dummyarray);
  console.log(dummyarray[0].prefix + ' ' + dummyarray[0].uri);

})

