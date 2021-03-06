define(['lodash','n3lib','jquery'], function(_,N3,$) {
//var siteDomain = "localhost:8080/marmotta/ldp"
//var url = "http://" + siteDomain;

//jqueryldphttp(url);

return {
 parseldp : function(url, fn) {
 //function jqueryldphttp(url) {
 let triples = [];
 let parsedata = this.parsedata;
 $.ajax({
     dataType: 'text',
     url: url,
     success: function(data) {
      //   fn(data+'w');
      //   document.write(parsedata);
         // fn(doo);
      
           parsedata(data, function(duck) {
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
}

});
