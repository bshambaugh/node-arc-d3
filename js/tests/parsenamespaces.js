var fs = require('fs');
fs.readFile( __dirname + '/namespaces5.txt', function (err, data) {
  if (err) {
    throw err; 
  }
  console.log(data.toString());
  var string = data.toString();

  var re = /@prefix [A-Za-z0-9]*: /ig;
  var matches_array = string.match(re);
  console.log(matches_array);
});

