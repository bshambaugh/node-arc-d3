define(['lodash','n3lib','jquery'], function(_,N3,$) {
//var N3 = require('../libraries/bun2-exportN3.js');
//define(['n3lib'], function(N3) {

// http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl
// http://localhost/node-arc-d3/js/loadFile/miserables.json
var url = 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl';	
$.get(url, function(data) {
 //   alert(data);
// document.write(JSON.stringify(data));
 var string = JSON.stringify(data);
 var string = data.toString();
 var string_2 = string.replace(/'/ig,'\\\'');
 var string_3 = string_2.replace(/<>/ig,'<'+url+'>');
// var string2 = str.replace("\'","\\\'");
 document.write(string_3);
 document.write('<br><br>');

  parsedata(string_3, function(duck) {
//    document.write(N3);
//    console.log(N3);
//    console.log(Object.getOwnPropertyNames(N3));
//   console.log(duck);
     document.write(duck);
     document.write('<br><br>');
     document.write(duck[0]);
  });


});

/*
const fs = require('fs');

fs.readFile('http://localhost/node-arc-d3/js/loadFile/miserables.json', (err, data) => {
  if (err) throw err;
//  console.log(hello);
  console.log(data);
});
*/
/*
  var string = '<http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl> <http://purl.org/dc/terms/title> "Food Growing Methods" ; <http://www.w3.org/2000/01/rdf-schema#comment> "For independence and resource optimization, some or all of the astronauts diet must be grown in-situ. Various forms have been proposed, from greenhouses to hydroponics, but there must also be optimization in the types of food grown to maximize caloric and nutrient output compared to water and energy input." ; <http://data.thespaceplan.com/ontologies/lsi#averageEstInvestmentCost> "0.0(investment cost pulled from children pages)" ; <http://data.thespaceplan.com/ontologies/lsi#averageEstTimetoMaturity> "0.0 (time to maturity pulled from children pages)" ; <http://data.thespaceplan.com/ontologies/lsi#commercialStatus> "Research" ; <http://data.thespaceplan.com/ontologies/lsi#relatedIndustriesFields> "Health and Medicine" ; <http://data.thespaceplan.com/ontologies/lsi#label> <http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/biological-support> ; <http://data.thespaceplan.com/ontologies/lsi#label> <http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/habitation-infrastructure> .';
*/

/*
parsedata(string, function(duck) {
//    document.write(N3);
//    console.log(N3);
//    console.log(Object.getOwnPropertyNames(N3));
//   console.log(duck);
//     document.write(duck);
  });
*/

function parsedata(string, fn) {
var parser = N3.Parser();
let triples = [];
parser.parse(string,

             function (error, triple, prefixes) {
               if (triple) {
               //  console.log(triple.subject, triple.predicate, triple.object, '.');
                   let subject = triple.subject;
                   let predicate = triple.predicate;
                   let object = triple.object;
                  triples.push([subject, predicate, object]);
                //  console.log(triples);
               } else {
              //   console.log("# That's all, folks!", prefixes)
              //   console.log(triples);
                   fn(triples);
               }
       });
}

});
