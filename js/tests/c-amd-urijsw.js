define(['tests/amd-urijsw'], function(parsetriples) {

//var url = "http://localhost:8080/marmotta/sparql?query=SELECT%20*%20WHERE%20%7B%3Fs%20%3Fp%20%3Fo%7D%20LIMIT%2010";
//var url = "http://localhost:8080/marmotta/ldp";
var url = 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl';


   parsetriples(url, function(duck) {

            document.write(duck);
   });


});
