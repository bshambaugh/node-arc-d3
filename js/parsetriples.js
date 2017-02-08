define(['lodash','n3lib','jquery'], function(_,N3,$) {

return function (string, fn) {
var parser = N3.Parser();
let triples = [];
parser.parse(string,

             function (error, triple, prefixes) {
               if (triple) {
                   let subject = triple.subject;
                   let predicate = triple.predicate;
                   let object = triple.object;
                  triples.push([subject, predicate, object]);
               } else {
                   fn(triples);
               }
       });
}

});
