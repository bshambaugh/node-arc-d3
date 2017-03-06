define(['lodash','n3lib','jquery'], function(_,N3,$) {

// This should return an array of the form triples = ([[0][0],[0][1],[0][2]],[[1][0],[1][1],[1][2]],[[2][0],[2][1],[2][2]] etc
// corresponding to data triples = ((subject,predicate,object),(subject2,predicate2,object2), (subject3,predicate3,object3) etc
// var triples = [["d", "i", "q"],["a", "f", "c"],["c", "g", "d"],["e", "h", "c"],["c", "i", "q"]]; etc

return function (string, fn) {
var parser = N3.Parser();
let triples = [];
parser.parse(string[0],
//parser.parse(string,

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
