define(['n3lib'], function(N3) {
  var string = '<http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl> <http://purl.org/dc/terms/title> "Food Growing Methods" ; <http://www.w3.org/2000/01/rdf-schema#comment> "For independence and resource optimization, some or all of the astronauts diet must be grown in-situ. Various forms have been proposed, from greenhouses to hydroponics, but there must also be optimization in the types of food grown to maximize caloric and nutrient output compared to water and energy input." ; <http://data.thespaceplan.com/ontologies/lsi#averageEstInvestmentCost> "0.0(investment cost pulled from children pages)" ; <http://data.thespaceplan.com/ontologies/lsi#averageEstTimetoMaturity> "0.0 (time to maturity pulled from children pages)" ; <http://data.thespaceplan.com/ontologies/lsi#commercialStatus> "Research" ; <http://data.thespaceplan.com/ontologies/lsi#relatedIndustriesFields> "Health and Medicine" ; <http://data.thespaceplan.com/ontologies/lsi#label> <http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/biological-support> ; <http://data.thespaceplan.com/ontologies/lsi#label> <http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/habitation-infrastructure> .';

parsedata(string, function(duck) {
//    document.write(N3);
//    console.log(N3);
//    console.log(Object.getOwnPropertyNames(N3));
    console.log(duck);
    document.write(duck);
    document.write('<br><br>');
    document.write(duck[0][0]);
  });


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
