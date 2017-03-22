// Source:  https://github.com/digitalbazaar/jsonld.js
var jsonld = require('jsonld');
var N3 = require('n3');

// Source: http://json-ld.org
var doc = 
{
  "@context": "http://json-ld.org/contexts/person.jsonld",
  "@id": "http://dbpedia.org/resource/John_Lennon",
  "name": "John Lennon",
  "born": "1940-10-09",
  "spouse": "http://dbpedia.org/resource/Cynthia_Lennon"
};

// serialize a document to N-Quads (RDF)
jsonld.toRDF(doc, {format: 'application/nquads'}, function(err, nquads) {
  console.log(nquads);
  // nquads is a string of nquads
//});

var string = nquads;

parsedata(string, function(duck) {
//    document.write(N3);
//    console.log(N3);
//    console.log(Object.getOwnPropertyNames(N3));
   console.log(duck);
//    document.write(duck);
  });

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

//});

