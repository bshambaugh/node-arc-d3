define(['jsonld','n3lib'], function(jsonld,N3) {

return function(string,fn) {
if(validateobject(string) === null) {
 //  console.log('this is an awesome null');

  jsonld.toRDF(string, {format: 'application/nquads'}, function(err, nquads) {
    //    document.write(nquads); 
    //  console.log(nquads);
     // nquads is a string of nquads
     //});

     var string = nquads;


     parsedata(string, function(duck) {
     //    document.write(N3);
     //    console.log(N3);
     //    console.log(Object.getOwnPropertyNames(N3));
    //  console.log(duck);
           fn(duck);
     });

   });

} else {

  parsedata(string, function(duck) {
   return fn(duck);
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
};

});

