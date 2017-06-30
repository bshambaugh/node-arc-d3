define(['jsonld','n3','jquery'], function(jsonld,N3,$) {

return function(url, fn) { 
  $.get(url, function(data) {
     var dummy = [];
     dummy.push(data);
     dummy.push(url);

    gettriples(dummy, function(duck) {
       fn(duck);
    });

 });

};


function gettriples(string,fn) {
if(validateobject(string[0]) === null) {
 //  console.log('this is an awesome null');

  jsonld.toRDF(string[0], {format: 'application/nquads'}, function(err, nquads) {
    //    document.write(nquads); 
    //  console.log(nquads);
     // nquads is a string of nquads
     //});

 //    var string = nquads;


     parsedata(nquads, function(duck) {
     //    document.write(N3);
     //    console.log(N3);
     //    console.log(Object.getOwnPropertyNames(N3));
    //  console.log(duck);
           fn(duck);
     });

   });

} else {

  /// This code only works for turtle files...
  //   var string_1 = JSON.stringify(string);
     var string_1 = string[0].toString();
     var string_2 = string_1.replace(/'/ig,'\\\'');
     var string_3 = string_2.replace(/<>/ig,'<'+string[1]+'>');

  parsedata(string_3, function(duck) {
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

