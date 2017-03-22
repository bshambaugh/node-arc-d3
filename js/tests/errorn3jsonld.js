// https://github.com/lobid/lodmill/issues/250
// Source:  https://github.com/digitalbazaar/jsonld.js
var jsonld = require('jsonld');
var N3 = require('n3');

var string = '<http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl> <http://purl.org/dc/terms/title> "Food Growing Methods" ; <http://www.w3.org/2000/01/rdf-schema#comment> "For independence and resource optimization, some or all of the astronauts diet must be grown in-situ. Various forms have been proposed, from greenhouses to hydroponics, but there must also be optimization in the types of food grown to maximize caloric and nutrient output compared to water and energy input." ; <http://data.thespaceplan.com/ontologies/lsi#averageEstInvestmentCost> "0.0(investment cost pulled from children pages)" ; <http://data.thespaceplan.com/ontologies/lsi#averageEstTimetoMaturity> "0.0 (time to maturity pulled from children pages)" ; <http://data.thespaceplan.com/ontologies/lsi#commercialStatus> "Research" ; <http://data.thespaceplan.com/ontologies/lsi#relatedIndustriesFields> "Health and Medicine" ; <http://data.thespaceplan.com/ontologies/lsi#label> <http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/biological-support> ; <http://data.thespaceplan.com/ontologies/lsi#label> <http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/habitation-infrastructure> .';

var doc =
{
    "@id": "http://store.example.com/",
    "@type": "Store",
    "name": "Links Bike Shop",
    "description": "The most \"linked\" bike store on earth!",
    "product": [
        {
            "@id": "p:links-swift-chain",
            "@type": "Product",
            "name": "Links Swift Chain",
            "description": "A fine chain with many links.",
            "category": ["cat:parts", "cat:chains"],
            "price": "10.00",
            "stock": 10
        },
        {
            "@id": "p:links-speedy-lube",
            "@type": "Product",
            "name": "Links Speedy Lube",
            "description": "Lubricant for your chain links.",
            "category": ["cat:lube", "cat:chains"],
            "price": "5.00",
            "stock": 20
        }
    ],
    "@context": {
        "Store": "http://ns.example.com/store#Store",
        "Product": "http://ns.example.com/store#Product",
        "product": "http://ns.example.com/store#product",
        "category":
        {
          "@id": "http://ns.example.com/store#category",
          "@type": "@id"
        },
        "price": "http://ns.example.com/store#price",
        "stock": "http://ns.example.com/store#stock",
        "name": "http://purl.org/dc/terms/title",
        "description": "http://purl.org/dc/terms/description",
        "p": "http://store.example.com/products/",
        "cat": "http://store.example.com/category/"
    }
};


// Source: http://json-ld.org
/*
var doc = 
{
  "@context": "http://json-ld.org/contexts/person.jsonld",
  "@id": "http://dbpedia.org/resource/John_Lennon",
  "name": "John Lennon",
  "born": "1940-10-09",
  "spouse": "http://dbpedia.org/resource/Cynthia_Lennon"
};
*/

//console.log(validateobject(string));
toarray(doc);

function toarray(string) {
if(validateobject(string) === null) {
 //  console.log('this is an awesome null');

  jsonld.toRDF(string, {format: 'application/nquads'}, function(err, nquads) {
     //  console.log(nquads);
     // nquads is a string of nquads
     //});

     var string = nquads;

     parsedata(string, function(duck) {
     //    document.write(N3);
     //    console.log(N3);
     //    console.log(Object.getOwnPropertyNames(N3));
      console.log(duck);
     //      document.write(duck);
     });

   });

} else {
  parsedata(string, function(duck) {
   console.log(duck);
  });
}

}

function validateobject(body) {
  try {

    parsedata(body, function(data) {
    //  console.log(data);
    });

    // if came to here, then valid
    return true;
  } catch(e) {
    // failed to parse
    return null;
  }
}

// serialize a document to N-Quads (RDF)

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

