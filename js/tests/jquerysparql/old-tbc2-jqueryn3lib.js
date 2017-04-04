define(['jquery','n3lib','lodash'], function($,N3,_) {

return {
   parsesparql : function (url, fn) {
     let triples = [];
     // document.write(url);
     $.ajax({
        dataType: 'json',
        url: url,
        success: function(data) {
        //      alert('success: ' + data.results.bindings.length + ' results');
                  //            console.log(data.results.bindings.length);
                       for(var k = 0; k < data.results.bindings.length; k++) {
                           let subject = data.results.bindings[k].s.value;
                          //  let subject = JSON.stringify(data.results.bindings[k].s.value);
                         //   let predicate = JSON.stringify(data.results.bindings[k].p.value);
                            let predicate = data.results.bindings[k].p.value;
                            let object = data.results.bindings[k].o.value;
                          //  let object = JSON.stringify(data.results.bindings[k].o.value);
                            triples.push([subject,predicate,object]);
                         }
                //   document.write(triples);
                   fn(triples);
                }
     });

  },
  parseldp : function (url, fn) {
  //function jqueryldphttp(url) {
  triples = [];
  $.ajax({
      dataType: 'text',
      url: url,
      success: function(data) {
            this.parsedata(data, function(duck) {
                //   document.write(duck);
                //   document.write('howdy');
                   for(var k = 0; k < duck.length; k++) {
                  //   document.write('subject: ' + duck[k][0] + ', predicate: ' + duck[k][1] + 'object: ' + duck[k][2]);
                     triples.push([duck[k][0],duck[k][1],duck[k][2]]);
                   }
                   //   document.write(triples);
                    fn(triples);
            })
      }
 });
 },
 parsedata : function(string, fn) {
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
