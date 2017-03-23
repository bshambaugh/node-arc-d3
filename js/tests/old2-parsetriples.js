define(['lodash','n3lib','jquery','jsonld'], function(_,N3,$,jsonld) {

// This should return an array of the form triples = ([[0][0],[0][1],[0][2]],[[1][0],[1][1],[1][2]],[[2][0],[2][1],[2][2]] etc
// corresponding to data triples = ((subject,predicate,object),(subject2,predicate2,object2), (subject3,predicate3,object3) etc
// var triples = [["d", "i", "q"],["a", "f", "c"],["c", "g", "d"],["e", "h", "c"],["c", "i", "q"]]; etc


return function(string, fn) {
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
      fn(duck);
     //      document.write(duck);
     });

   });

} else {
  parsedata(string, function(duck) {
    fn(duck);
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

});
